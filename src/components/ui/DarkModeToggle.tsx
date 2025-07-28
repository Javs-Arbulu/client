import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

/**
 * Componente de botón para cambiar entre modo claro y oscuro
 * Ahora usa los nuevos colores cyan y blue de Nueva Casa
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
        bg-surface-secondary hover:bg-surface-tertiary 
        dark:bg-surface-secondary dark:hover:bg-surface-tertiary
        text-text-primary dark:text-text-primary
        border border-border-light dark:border-border-light
        rounded-lg transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-nc-primary-400 focus:ring-offset-2
        flex items-center gap-2
        shadow-md hover:shadow-lg dark:shadow-nc-accent-900/20
        ${className}
      `}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Sun
          size={iconSizes[size]}
          className="text-nc-primary-400 transition-colors"
        />
      ) : (
        <Moon
          size={iconSizes[size]}
          className="text-nc-secondary-500 transition-colors"
        />
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
 * Actualizado con los nuevos colores
 */
export const DarkModeToggleCompact: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        p-2
        text-text-primary dark:text-text-primary
        hover:text-nc-primary-500 dark:hover:text-nc-primary-400
        hover:bg-surface-secondary dark:hover:bg-surface-secondary
        transition-all duration-200 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-nc-primary-400 focus:ring-offset-2
        ${className}
      `}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Sun size={20} className="text-nc-primary-400" />
      ) : (
        <Moon size={20} className="text-nc-secondary-500" />
      )}
    </button>
  );
};
