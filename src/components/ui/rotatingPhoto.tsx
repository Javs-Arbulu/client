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
  const [currentSet, setCurrentSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Función para detectar si estamos en móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Función para obtener las imágenes que se muestran actualmente
  const getDisplayImages = () => {
    if (images.length === 0) return [];

    const count = isMobile ? 3 : 5; // En móvil 3, en desktop 5

    // Siempre rotar las imágenes basándose en currentSet
    const displayImages = [];

    for (let i = 0; i < Math.min(count, images.length); i++) {
      const index = (currentSet + i) % images.length;
      displayImages.push(images[index]);
    }

    return displayImages;
  };

  const displayImages = getDisplayImages();

  // Auto-rotación
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const badgeClass = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
  }[badgePosition];

  if (images.length === 0) return null;

  return (
    <div className="relative w-full aspect-square mx-auto max-w-[350px] md:max-w-[650px]">
      {/* Contenedor principal con las tarjetas distribuidas */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Imagen central principal - Centrado perfecto para móvil y desktop */}
        {displayImages[0] && (
          <div className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out">
            <img
              src={displayImages[0].src}
              alt={displayImages[0].alt}
              className="w-[320px] h-[400px] md:w-[480px] md:h-[520px] rounded-2xl object-cover border-4 border-white shadow-2xl"
            />
          </div>
        )}

        {/* Solo en desktop: Imágenes pequeñas asomándose por los bordes */}
        {!isMobile && (
          <>
            {/* Imagen superior izquierda - Solo un pico visible */}
            {displayImages[1] && (
              <div className="absolute z-10 left-2 top-2 transition-all duration-700 ease-out opacity-60 scale-85 rotate-[-15deg]">
                <img
                  src={displayImages[1].src}
                  alt={displayImages[1].alt}
                  className="w-28 h-36 rounded-lg object-cover border-2 border-white shadow-lg hover:rotate-[-10deg] hover:scale-90 hover:opacity-75 transition-all duration-300"
                />
              </div>
            )}

            {/* Imagen superior derecha - Solo un pico visible */}
            {displayImages[2] && (
              <div className="absolute z-10 right-2 top-2 transition-all duration-700 ease-out delay-150 opacity-60 scale-85 rotate-[12deg]">
                <img
                  src={displayImages[2].src}
                  alt={displayImages[2].alt}
                  className="w-28 h-36 rounded-lg object-cover border-2 border-white shadow-lg hover:rotate-[8deg] hover:scale-90 hover:opacity-75 transition-all duration-300"
                />
              </div>
            )}

            {/* Imagen inferior izquierda - Pequeño pico */}
            {displayImages[3] && (
              <div className="absolute z-15 left-2 bottom-2 transition-all duration-700 ease-out delay-225 opacity-65 scale-90 rotate-[8deg]">
                <img
                  src={displayImages[3].src}
                  alt={displayImages[3].alt}
                  className="w-32 h-40 rounded-lg object-cover border-2 border-white shadow-lg hover:rotate-[5deg] hover:scale-95 hover:opacity-80 transition-all duration-300"
                />
              </div>
            )}

            {/* Imagen inferior derecha - Pequeño pico */}
            {displayImages[4] && (
              <div className="absolute z-15 right-2 bottom-2 transition-all duration-700 ease-out delay-300 opacity-65 scale-90 rotate-[-12deg]">
                <img
                  src={displayImages[4].src}
                  alt={displayImages[4].alt}
                  className="w-32 h-40 rounded-lg object-cover border-2 border-white shadow-lg hover:rotate-[-8deg] hover:scale-95 hover:opacity-80 transition-all duration-300"
                />
              </div>
            )}
          </>
        )}

        {/* En móvil: Solo 2 imágenes pequeñas estratégicamente posicionadas detrás */}
        {isMobile && (
          <>
            {/* Imagen izquierda en móvil - Detrás y ligeramente visible */}
            {displayImages[1] && (
              <div className="absolute z-5 left-3 bottom-8 transition-all duration-700 ease-out delay-100 opacity-60 scale-75 rotate-[12deg]">
                <img
                  src={displayImages[1].src}
                  alt={displayImages[1].alt}
                  className="w-28 h-36 rounded-lg object-cover border-2 border-white shadow-lg"
                />
              </div>
            )}

            {/* Imagen derecha en móvil - Detrás y ligeramente visible */}
            {displayImages[2] && (
              <div className="absolute z-5 right-3 bottom-8 transition-all duration-700 ease-out delay-150 opacity-60 scale-75 rotate-[-12deg]">
                <img
                  src={displayImages[2].src}
                  alt={displayImages[2].alt}
                  className="w-28 h-36 rounded-lg object-cover border-2 border-white shadow-lg"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Badge opcional */}
      {badgeText && (
        <div className={`absolute z-40 ${badgeClass} m-2`}>
          <IconBadge icon={badgeIcon} textSize="text-md">
            {badgeText}
          </IconBadge>
        </div>
      )}
    </div>
  );
};
