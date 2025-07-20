import React, { useEffect, useRef, useState } from "react";

interface Slide {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

interface ImageSliderProps {
  slides?: Slide[];
  autoSlideInterval?: number;
}

const defaultSlides: Slide[] = [
  {
    imageUrl: "../../src/assets/slide/image1.jpg",
    title: "Bienvenido a Nueva Casa",
    subtitle: "Una iglesia que ama a Dios y a las personas",
  },
  {
    imageUrl: "../../src/assets/slide/image2.jpg",
    title: "Adora con nosotros",
    subtitle: "Domingos 11:00 AM - Auditorio Principal",
  },
  {
    imageUrl: "../../src/assets/slide/image3.jpg",
    title: "Únete a un Grupo",
    subtitle: "Conectados en fe y comunidad",
  },
];

export const ImageSlider: React.FC<ImageSliderProps> = ({
  slides = defaultSlides,
  autoSlideInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoSlideInterval, slides.length]);

  // Función para pausar temporalmente el autoplay al hacer clic
  const pauseAutoplay = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000); // pausa por 3 segundos
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    pauseAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    pauseAutoplay();
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[600px] overflow-hidden shadow-lg">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-white text-sm sm:text-lg mt-2 drop-shadow-md">
                {slide.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-400 bg-opacity-40 hover:bg-opacity-60 text-black px-3 py-1 rounded-full text-2xl z-20"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-400 bg-opacity-40 hover:bg-opacity-60 text-black px-3 py-1 rounded-full text-2xl z-20"
      >
        ›
      </button>
    </div>
  );
};
