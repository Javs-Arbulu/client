/**
 * Debug para verificar el modo oscuro
 * Ejecutar en la consola del navegador
 */

console.log("🌙 Debug Modo Oscuro - Nueva Casa");

// Verificar si la clase dark está presente
const hasDarkClass = document.documentElement.classList.contains("dark");
console.log('✅ Clase "dark" en <html>:', hasDarkClass);

// Verificar variables CSS
const computedStyle = getComputedStyle(document.documentElement);

const cssVars = [
  "--bg-primary",
  "--bg-secondary",
  "--bg-accent",
  "--text-primary",
  "--text-secondary",
  "--text-muted",
  "--primary-500",
  "--secondary-500",
  "--neutral-900",
];

console.log("🎨 Variables CSS:");
cssVars.forEach((varName) => {
  const value = computedStyle.getPropertyValue(varName);
  console.log(`  ${varName}: ${value}`);
});

// Verificar localStorage
const savedTheme = localStorage.getItem("theme");
console.log("💾 Tema guardado:", savedTheme);

// Verificar preferencia del sistema
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
console.log("🖥️ Sistema prefiere oscuro:", systemPrefersDark);

// Test de toggle
console.log("🔄 Para probar el toggle:");
console.log('document.documentElement.classList.toggle("dark")');
