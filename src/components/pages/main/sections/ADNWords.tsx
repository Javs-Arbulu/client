import { useEffect, useState, useRef } from "react";
import { useDarkMode } from "../../../../hooks/useDarkMode";

const phrases = [
  "Pasión por Servir",
  "Humildad",
  "Gracia Audaz",
  "Generosidad",
  "Alegría de vivir",
  "Relevancia",
  "Autenticidad",
];

interface FloatingWord {
  text: string;
  angle: number;
}

export default function ADNWords() {
  const [words, setWords] = useState<FloatingWord[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useDarkMode();
  const [forceRender, setForceRender] = useState(0);

  useEffect(() => {
    setForceRender((prev) => prev + 1);
  }, [isDark]);

  // Configuración responsiva
  const getResponsiveConfig = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640)
        return {
          radiusX: 150,
          radiusY: 80,
          fontSize: "text-sm",
          adnFontSize: "15vw",
          zDepth: 50,
          containerHeight: "350px",
        }; // mobile
      if (width < 768)
        return {
          radiusX: 200,
          radiusY: 100,
          fontSize: "text-base",
          adnFontSize: "18vw",
          zDepth: 60,
          containerHeight: "400px",
        }; // sm
      if (width < 1024)
        return {
          radiusX: 250,
          radiusY: 120,
          fontSize: "text-lg",
          adnFontSize: "20vw",
          zDepth: 75,
          containerHeight: "450px",
        }; // md
      if (width < 1280)
        return {
          radiusX: 300,
          radiusY: 150,
          fontSize: "text-xl",
          adnFontSize: "22vw",
          zDepth: 90,
          containerHeight: "500px",
        }; // lg
      return {
        radiusX: 320,
        radiusY: 160,
        fontSize: "text-xl",
        adnFontSize: "20vw",
        zDepth: 100,
        containerHeight: "550px",
      }; // xl+
    }
    return {
      radiusX: 320,
      radiusY: 160,
      fontSize: "text-xl",
      adnFontSize: "20vw",
      zDepth: 100,
      containerHeight: "550px",
    };
  };

  const [config, setConfig] = useState(getResponsiveConfig());

  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const initialWords = phrases.map((text, index) => ({
      text,
      angle: (index / phrases.length) * Math.PI * 2,
    }));
    setWords(initialWords);

    const interval = setInterval(() => {
      setWords((prev) =>
        prev.map((word) => ({
          ...word,
          angle: word.angle + 0.0025,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={forceRender}
      className="relative w-full flex items-center justify-center overflow-hidden transition-colors duration-300 bg-white dark:bg-gray-900 py-8"
      style={{
        height: config.containerHeight,
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center font-bold select-none pointer-events-none transition-colors duration-300 text-gray-300/30 dark:text-gray-700/20"
        style={{ fontSize: config.adnFontSize }}
      >
        ADN
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{ perspective: "1200px" }}
      >
        {words.map((word, idx) => {
          const x = Math.cos(word.angle) * config.radiusX;
          const y = Math.sin(word.angle) * config.radiusY;
          const z = Math.sin(word.angle * 2) * config.zDepth;

          const scale = 1 + z / 500;
          const baseOpacity = 0.7 + z / 400;

          return (
            <div
              key={idx}
              className={`absolute font-semibold transition-all duration-100 ease-linear pointer-events-none hover:scale-110 ${config.fontSize} text-gray-800 dark:text-gray-200 drop-shadow-lg`}
              style={{
                left: window.innerWidth < 640 ? "40%" : "45%",
                top: "50%",
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                opacity: baseOpacity,
                fontWeight: "600",
              }}
            >
              {word.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
