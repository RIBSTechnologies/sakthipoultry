import { socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 16.02 2 15 2c-2.9 0-5 1.72-5 5v2.5H7v4h3V22h4z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const;

export function SocialLinks({
  className,
  iconClassName,
  tone = "dark",
}: {
  className?: string;
  iconClassName?: string;
  tone?: "dark" | "light";
}) {
  if (socialLinks.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((item) => {
        const Icon = icons[item.id as keyof typeof icons];
        if (!Icon) return null;
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border transition",
              tone === "dark"
                ? "border-white/20 text-white hover:border-gold hover:text-gold"
                : "border-line text-forest hover:border-gold hover:text-gold",
              iconClassName,
            )}
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
