/**
 * Script para evitar el parpadeo del modo oscuro (FOUC - Flash of Unstyled Content)
 * Este script debe ejecutarse antes que React para aplicar la clase 'dark' inmediatamente
 */

(function () {
  // Función para obtener la preferencia guardada o del sistema
  function getInitialTheme() {
    // Verificar localStorage primero
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    // Si no hay preferencia guardada, usar la del sistema
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  }

  // Aplicar el tema inmediatamente
  const theme = getInitialTheme();
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Añadir una transición suave después de que la página cargue
  window.addEventListener("load", function () {
    root.style.transition =
      "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
  });
})();
