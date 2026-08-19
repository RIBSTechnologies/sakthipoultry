import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-forest">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you requested is not in the Sakthi Poultry site map.
      </p>
      <Button href="/" variant="gold" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
