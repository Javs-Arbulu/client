// Script de diagnóstico para modo oscuro
console.log('=== DIAGNÓSTICO MODO OSCURO ===');

// Verificar si la clase dark está en el documento
console.log('1. Clase dark en document:', document.documentElement.classList.contains('dark'));

// Verificar variables CSS
const computedStyles = getComputedStyle(document.documentElement);
console.log('2. Variables CSS principales:');
console.log('   --primary-600:', computedStyles.getPropertyValue('--primary-600'));
console.log('   --surface-primary:', computedStyles.getPropertyValue('--surface-primary'));

// Forzar modo oscuro
console.log('3. Forzando modo oscuro...');
document.documentElement.classList.add('dark');

// Verificar variables CSS después del cambio
setTimeout(() => {
  const newStyles = getComputedStyle(document.documentElement);
  console.log('4. Variables CSS después de agregar .dark:');
  console.log('   --surface-primary:', newStyles.getPropertyValue('--surface-primary'));
  console.log('   --text-primary:', newStyles.getPropertyValue('--text-primary'));
}, 100);

// Verificar localStorage
console.log('5. localStorage theme:', localStorage.getItem('theme'));

export {};
