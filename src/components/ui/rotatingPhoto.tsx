import React, { useEffect, useState, type ReactNode } from "react";
import { IconBadge } from "./iconBagde";

interface RotatingPhotoProps {
  images: { src: string; alt: string }[];
  badgeText?: string;
  badgeIcon?: ReactNode;
  badgePosition?: "top-left" | "top-right";
  interval?: number;
}

export const RotatingPhoto: React.FC<RotatingPhotoProps> = ({
  images,
  badgeText = "",
  badgeIcon,
  badgePosition = "top-left",
  interval = 3000,
}) => {
  const [displayImages, setDisplayImages] = useState<
    { src: string; alt: string }[]
  >([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateImages = () => {
    const count = isMobile ? 3 : 5;
    if (images.length <= count) {
      setDisplayImages(images.slice(0, count));
    } else {
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      setDisplayImages(shuffled.slice(0, count));
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    updateImages();
    const timer = setInterval(updateImages, interval);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, interval, isMobile]);

  const badgeClass = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
  }[badgePosition];

  return (
    <div className="relative w-full aspect-square mx-auto max-w-[600px]">
      {/* Imagen central grande */}
      {displayImages[0] && (
        <img
          src={displayImages[0].src}
          alt={displayImages[0].alt}
          className="absolute z-30 w-80 h-96 rounded-xl object-cover border-4 border-adaptive shadow-xl transition-all duration-700 ease-in-out left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      {/* Solo renderiza si NO es móvil */}
      {!isMobile && (
        <>
          {/* Imagen arriba izquierda */}
          {displayImages[1] && (
            <img
              src={displayImages[1].src}
              alt={displayImages[1].alt}
              className="absolute z-10 w-36 h-44 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out left-8 top-10 rotate-[-10deg]"
            />
          )}

          {/* Imagen arriba derecha */}
          {displayImages[2] && (
            <img
              src={displayImages[2].src}
              alt={displayImages[2].alt}
              className="absolute z-10 w-36 h-44 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out right-8 top-16 rotate-[8deg]"
            />
          )}
        </>
      )}
      {/* Imagen abajo izquierda */}
      {displayImages[isMobile ? 1 : 3] && (
        <img
          src={displayImages[isMobile ? 1 : 3].src}
          alt={displayImages[isMobile ? 1 : 3].alt}
          className="absolute z-10 w-44 h-56 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out left-0 bottom-2 rotate-[10deg]"
        />
      )}
      {/* Imagen abajo derecha */}
      {displayImages[isMobile ? 2 : 4] && (
        <img
          src={displayImages[isMobile ? 2 : 4].src}
          alt={displayImages[isMobile ? 2 : 4].alt}
          className="absolute z-10 w-44 h-56 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out right-0 bottom-2 rotate-[-10deg]"
        />
      )}
      {/* Badge opcional */}
      {badgeText && (
        <div
          className={`absolute z-40 ${badgeClass} translate-x-1 -translate-y-6 font-black`}
        >
          <IconBadge icon={badgeIcon} textSize="text-md">
            {badgeText}
          </IconBadge>
        </div>
      )}
    </div>
  );
};
