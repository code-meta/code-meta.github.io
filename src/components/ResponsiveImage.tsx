interface ResponsiveImageProps {
  large: string;
  medium: string;
}

const ResponsiveImage = ({ large, medium }: ResponsiveImageProps) => {
  return (
    <div className={"max-w-7xl mx-auto flex justify-center"}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={`/images/${large}`} />
        <img
          src={`/images/${medium}`}
          alt="Project feature image"
          className="w-auto h-auto max-w-full"
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;
