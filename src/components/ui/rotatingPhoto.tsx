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
  interval = 5000,
}) => {
  const [displayImages, setDisplayImages] = useState(images.slice(0, 5));

  useEffect(() => {
    const updateImages = () => {
      if (images.length <= 5) {
        setDisplayImages(images);
      } else {
        const shuffled = [...images].sort(() => 0.5 - Math.random());
        setDisplayImages(shuffled.slice(0, 5));
      }
    };

    updateImages();
    const timer = setInterval(updateImages, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const badgeClass = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
  }[badgePosition];

  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      {/* Imagen central grande */}
      <img
        src={displayImages[0]?.src}
        alt={displayImages[0]?.alt}
        className="absolute z-30 w-80 h-96 rounded-xl object-cover border-4 border-adaptive shadow-xl transition-all duration-700 ease-in-out left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Imagen arriba izquierda pequeña */}
      <img
        src={displayImages[1]?.src}
        alt={displayImages[1]?.alt}
        className="absolute z-10 w-36 h-44 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out left-8 top-10 rotate-[-10deg]"
      />

      {/* Imagen arriba derecha pequeña */}
      <img
        src={displayImages[2]?.src}
        alt={displayImages[2]?.alt}
        className="absolute z-10 w-36 h-44 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out right-8 top-16 rotate-[8deg]"
      />

      {/* Imagen abajo izquierda mediana */}
      <img
        src={displayImages[3]?.src}
        alt={displayImages[3]?.alt}
        className="absolute z-10 w-44 h-56 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out left-10 bottom-6 rotate-[4deg]"
      />

      {/* Imagen abajo derecha mediana */}
      <img
        src={displayImages[4]?.src}
        alt={displayImages[4]?.alt}
        className="absolute z-10 w-44 h-56 rounded-xl object-cover border-4 border-adaptive shadow-md transition-all duration-700 ease-in-out right-10 bottom-10 rotate-[-6deg]"
      />

      {/* Badge opcional */}
      {badgeText && (
        <div
          className={`absolute ${badgeClass} translate-x-4 -translate-y-6 font-black`}
        >
          <IconBadge icon={badgeIcon} textSize="text-md">
            {badgeText}
          </IconBadge>
        </div>
      )}
    </div>
  );
};
