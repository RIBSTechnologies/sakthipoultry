export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function asset(file: string) {
  return `/assets/images/${file}`;
}

export function birdFaceAsset() {
  return asset("sakthi-poultry-bird-face.jpg");
}

/** Keeps the full bird face visible in cropped image containers. */
export const birdFaceImageClass = "object-contain bg-cream-2 object-center";

export function videoAsset(file: string) {
  return `/assets/videos/${file}`;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
