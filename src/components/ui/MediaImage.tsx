import Image, { type ImageProps } from "next/image";
import { blurData } from "@/lib/blur-data";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

export function MediaImage({ src, alt, ...props }: Props) {
  const file = src.split("/").pop() ?? "";
  const blur = blurData[file];

  return (
    <Image
      src={src}
      alt={alt}
      placeholder={blur ? "blur" : "empty"}
      blurDataURL={blur}
      {...props}
    />
  );
}
