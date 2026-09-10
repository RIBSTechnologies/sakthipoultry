import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";

/** Neutral dark wash — keeps photos natural without a green cast. */
export const sectionBackdropOverlay =
  "from-ink/70 via-ink/35 to-ink/55";

export function SectionBackdrop({
  src,
  overlay = sectionBackdropOverlay,
  opacity = "opacity-100",
}: {
  src: string;
  overlay?: string;
  opacity?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", opacity)} aria-hidden>
      <MediaImage src={src} alt="" fill className="object-cover" sizes="100vw" />
      <div className={cn("absolute inset-0 bg-gradient-to-t", overlay)} />
    </div>
  );
}
