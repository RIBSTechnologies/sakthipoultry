import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";

export function SectionBackdrop({
  src,
  overlay = "from-forest-deep/85 via-forest-deep/75 to-forest-deep/80",
  opacity = "opacity-100",
}: {
  src: string;
  overlay?: string;
  opacity?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", opacity)} aria-hidden>
      <MediaImage src={src} alt="" fill className="object-cover" sizes="100vw" />
      <div className={cn("absolute inset-0 bg-gradient-to-r", overlay)} />
    </div>
  );
}
