import Image from "next/image";

type SvgWrapperProps = {
  className?: string;
  src: string;
  fill?: boolean;
  alt?: string;
  imageClassName?: string;
};

const index: React.FC<SvgWrapperProps> = ({
  className,
  src,
  fill = true,
  alt,
  imageClassName,
}) => {
  const splittedSrc = src && src.split("/");
  const generatedAlt = splittedSrc[splittedSrc.length - 1].split(".")[0];
  return (
    <div className={className}>
      <Image
        src={src}
        className={imageClassName}
        fill={fill}
        alt={alt ? alt : generatedAlt}
      />
    </div>
  );
};

export default index;
