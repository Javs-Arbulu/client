import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
  liveText?: string;
  livePosition?: "top" | "middle" | "bottom";
}

export function ImageCarousel({
  images,
  liveText,
  livePosition = "top",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const getLivePositionClasses = () => {
    switch (livePosition) {
      case "top":
        return "top-4";
      case "middle":
        return "top-1/2 -translate-y-1/2";
      case "bottom":
        return "bottom-4";
      default:
        return "top-4";
    }
  };

  return (
    <div className="relative lg:pl-8 h-[500px] lg:h-[600px] w-full">
      {/* Carrusel */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
        {/* Overlays decorativos */}
        <div className="absolute inset-0 image-overlay-1 transform rotate-2 blur-sm z-0 rounded-2xl" />
        <div className="absolute inset-0 image-overlay-2 transform -rotate-1 z-0 rounded-2xl" />

        {/* Imágenes con efecto tipo carta */}
        {images.map((img, index) => {
          let className = "opacity-0 scale-90 translate-x-0 z-0";
          if (index === current) {
            className = "opacity-100 scale-100 translate-x-0 z-20";
          } else if (index === (current + 1) % total) {
            className = "opacity-60 scale-95 translate-x-10 z-10";
          } else if (index === (current - 1 + total) % total) {
            className = "opacity-60 scale-95 -translate-x-10 z-10";
          }

          return (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              width={500}
              height={600}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-all duration-700 ease-in-out ${className}`}
            />
          );
        })}
      </div>

      {/* Indicadores tipo puntos */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${
                index === current
                  ? "bg-primary-500 scale-110 shadow-md"
                  : "bg-neutral-300 hover:bg-primary-200"
              }`}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Badge flotante opcional */}
      {liveText && (
        <div
          className={`absolute right-4 ${getLivePositionClasses()} text-muted live-badge px-4 py-2 rounded-xl font-bold text-sm shadow-lg z-30 bg-white/90 backdrop-blur-md animate-bounce`}
        >
          <Zap className="w-4 h-4 inline mr-1" />
          {liveText}
        </div>
      )}
    </div>
  );
}
