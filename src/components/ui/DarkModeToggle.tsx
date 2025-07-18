import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

/**
 * Componente de botón para cambiar entre modo claro y oscuro
 */
interface DarkModeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  className = "",
  size = "md",
  showLabel = false,
}) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        ${sizeClasses[size]}
        bg-surface-secondary hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600
        text-primary-text dark:text-neutral-200
        border border-light dark:border-neutral-600
        rounded-lg transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        flex items-center gap-2
        ${className}
      `}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Sun size={iconSizes[size]} className="text-secondary-500" />
      ) : (
        <Moon size={iconSizes[size]} className="text-primary-600" />
      )}

      {showLabel && (
        <span className="text-sm font-medium">
          {isDark ? "Claro" : "Oscuro"}
        </span>
      )}
    </button>
  );
};

/**
 * Componente compacto para espacios pequeños (como navbar móvil)
 */
export const DarkModeToggleCompact: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        p-1
        text-primary-600 dark:text-neutral-300
        hover:text-primary-700 dark:hover:text-neutral-100
        transition-colors duration-200
        ${className}
      `}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
