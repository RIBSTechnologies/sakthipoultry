import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p className={cn("chapter mb-3", light && "text-gold")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[2.7rem] font-medium tracking-tight leading-tight",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
