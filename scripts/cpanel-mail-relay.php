<?php
/**
 * Upload this file to your webhostbox/cPanel site (e.g. public_html/sp-mail-relay.php)
 * and point MAIL_RELAY_URL to it from Vercel if direct SMTP from Vercel is unreliable.
 *
 * Set $relaySecret below, then add the same value to Vercel as MAIL_RELAY_SECRET.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$relaySecret = getenv('MAIL_RELAY_SECRET') ?: 'change-this-secret';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if ($auth !== 'Bearer ' . $relaySecret) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$to = trim((string) ($data['to'] ?? ''));
$from = trim((string) ($data['from'] ?? ''));
$subject = trim((string) ($data['subject'] ?? ''));
$text = trim((string) ($data['text'] ?? ''));
$replyTo = trim((string) ($data['replyTo'] ?? ''));

if ($to === '' || $from === '' || $subject === '' || $text === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $from,
];

if ($replyTo !== '') {
    $headers[] = 'Reply-To: ' . $replyTo;
}

$sent = mail($to, $subject, $text, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(503);
    echo json_encode(['error' => 'Mail delivery failed']);
    exit;
}

echo json_encode(['ok' => true]);
