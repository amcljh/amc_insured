import { PhotoProps } from "./type";

const Photo = ({ src, alt, className, style, loading = "lazy", fetchPriority = "auto", ...props }: PhotoProps) => {
  return (
    <picture className={className} style={style} {...props}>
      <source srcSet={src} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <img src={src} alt={alt}
        className="w-full h-full object-cover"
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  )
}

export default Photo;