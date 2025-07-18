import { useState, useEffect } from 'react';

/**
 * Hook para manejar el modo oscuro
 * Guarda la preferencia en localStorage y aplica la clase 'dark' al documento
 */
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Verificar si estamos en el navegador
    if (typeof window === 'undefined') return false;
    
    // Verificar localStorage primero
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Si no hay preferencia guardada, usar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Escuchar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      // Solo actualizar si no hay preferencia guardada
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setIsDark(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  const setDarkMode = (dark: boolean) => {
    setIsDark(dark);
  };

  return { isDark, toggleDarkMode, setDarkMode };
};
