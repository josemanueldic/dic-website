import Image from "next/image";

type Ratio = "16/9" | "21/9" | "4/3" | "3/2" | "1/1" | "3/4";

type Props = {
  /** Photo path (e.g. "/images/x.jpg") or URL. Leave empty to show a placeholder. */
  src?: string;
  /** Describes the photo. Used as alt text, and as the label on the placeholder. */
  alt: string;
  ratio?: Ratio;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function Photo({
  src,
  alt,
  ratio = "4/3",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority,
  className = "",
}: Props) {
  const style = { aspectRatio: ratio.replace("/", " / ") };

  if (src) {
    return (
      <div className={`relative overflow-hidden bg-concrete ${className}`} style={style}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${alt}`}
      className={`photo-ph flex items-end ${className}`}
      style={style}
    >
      <span className="m-2 max-w-[90%] bg-paper/90 px-2 py-1 text-xs font-medium leading-snug text-muted">
        Photo: {alt}
      </span>
    </div>
  );
}
