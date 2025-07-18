import React from "react";
import { DarkModeToggle } from "../ui/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";

/**
 * Componente de prueba para verificar que el modo oscuro funciona
 */
export const DarkModeTest: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-surface-primary dark:bg-neutral-800 transition-colors duration-300 p-8">
      {/* Header de prueba */}
      <div className="bg-surface-primary dark:bg-neutral-700 border border-light dark:border-neutral-600 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-primary-text dark:text-neutral-100 text-2xl font-bold">
            🧪 Test Modo Oscuro
          </h1>
          <DarkModeToggle showLabel />
        </div>

        <div className="space-y-2">
          <p className="text-primary-text dark:text-neutral-100">
            Estado actual:{" "}
            <strong>{isDark ? "Modo Oscuro" : "Modo Claro"}</strong>
          </p>
          <p className="text-secondary-text dark:text-neutral-300">
            Los colores deben cambiar automáticamente
          </p>
        </div>
      </div>

      {/* Test de colores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Primaria */}
        <div className="bg-primary-600 text-white p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Color Primario</h3>
          <p className="text-primary-100">
            Azul moderno - debe verse igual en ambos modos
          </p>
        </div>

        {/* Card Secundaria */}
        <div className="bg-secondary-600 text-neutral-900 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Color Secundario</h3>
          <p className="text-secondary-800">
            Amarillo energético - debe verse igual en ambos modos
          </p>
        </div>

        {/* Card Acento */}
        <div className="bg-accent-600 text-white p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Color Acento</h3>
          <p className="text-accent-100">
            Coral/Fucsia - debe verse igual en ambos modos
          </p>
        </div>

        {/* Card Adaptativa */}
        <div className="bg-surface-primary dark:bg-surface-primary border border-light dark:border-neutral-600 p-6 rounded-lg col-span-1 md:col-span-3">
          <h3 className="text-primary-text dark:text-text-primary text-lg font-bold mb-2">
            Card Adaptativa
          </h3>
          <p className="text-secondary-text dark:text-text-secondary mb-4">
            Esta card cambia automáticamente de colores según el modo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded transition-colors">
              Primario
            </button>
            <button className="bg-secondary-600 hover:bg-secondary-700 text-neutral-900 px-4 py-2 rounded transition-colors">
              Secundario
            </button>
            <button className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded transition-colors">
              Acento
            </button>
            <button className="bg-neutral-200 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-500 text-primary-text dark:text-neutral-100 px-4 py-2 rounded transition-colors">
              Neutro
            </button>
          </div>
        </div>
      </div>

      {/* Información de debug */}
      <div className="mt-8 bg-surface-secondary dark:bg-surface-secondary border border-light dark:border-neutral-600 rounded-lg p-4">
        <h4 className="text-primary-text dark:text-text-primary font-bold mb-2">
          🔍 Debug Info
        </h4>
        <div className="text-sm text-secondary-text dark:text-text-secondary space-y-1">
          <p>Modo actual: {isDark ? "Oscuro" : "Claro"}</p>
          <p>
            Clase HTML:{" "}
            {typeof document !== "undefined"
              ? document.documentElement.classList.contains("dark")
                ? "dark"
                : "light"
              : "N/A"}
          </p>
          <p>
            localStorage:{" "}
            {typeof localStorage !== "undefined"
              ? localStorage.getItem("theme") || "no guardado"
              : "N/A"}
          </p>
          <p>
            Preferencia del sistema:{" "}
            {typeof window !== "undefined" && window.matchMedia
              ? window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "oscuro"
                : "claro"
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};
