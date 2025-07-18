import React from "react";
import { DarkModeToggle } from "../ui/DarkModeToggle";
import { Button } from "../ui/Button";

/**
 * Componente de demostración del modo oscuro
 * Muestra cómo se ven los componentes en ambos modos
 */
export const DarkModeDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-bg dark:bg-background-primary transition-colors duration-300">
      {/* Header con toggle de modo oscuro */}
      <header className="bg-surface-primary dark:bg-surface-primary border-b border-light dark:border-neutral-700 p-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-primary-text dark:text-text-primary text-2xl font-bold">
            🌗 Demo Modo Oscuro
          </h1>
          <DarkModeToggle showLabel />
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Sección de Cards */}
        <section>
          <h2 className="text-primary-text dark:text-text-primary text-xl font-bold mb-4">
            Cards y Superficies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card básico */}
            <div className="bg-surface-primary dark:bg-surface-primary border border-light dark:border-neutral-700 rounded-lg p-6 shadow-custom-sm">
              <h3 className="text-primary-text dark:text-text-primary text-lg font-bold mb-2">
                Card Principal
              </h3>
              <p className="text-secondary-text dark:text-text-secondary mb-4">
                Este es un ejemplo de cómo se ve una card en modo claro y
                oscuro.
              </p>
              <Button variant="primary" size="sm">
                Leer más
              </Button>
            </div>

            {/* Card secundario */}
            <div className="bg-surface-secondary dark:bg-surface-secondary border border-light dark:border-neutral-700 rounded-lg p-6 shadow-custom-sm">
              <h3 className="text-primary-text dark:text-text-primary text-lg font-bold mb-2">
                Card Secundario
              </h3>
              <p className="text-secondary-text dark:text-text-secondary mb-4">
                Card con fondo secundario que se adapta automáticamente.
              </p>
              <Button variant="secondary" size="sm">
                Ver detalles
              </Button>
            </div>

            {/* Card de acento */}
            <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-700 rounded-lg p-6 shadow-custom-sm">
              <h3 className="text-accent-800 dark:text-accent-300 text-lg font-bold mb-2">
                Card de Éxito
              </h3>
              <p className="text-accent-700 dark:text-accent-400 mb-4">
                Card con colores de acento que mantiene buena legibilidad.
              </p>
              <Button variant="accent" size="sm">
                Continuar
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de Botones */}
        <section>
          <h2 className="text-primary-text dark:text-text-primary text-xl font-bold mb-4">
            Botones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button variant="primary">Primario</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="accent">Acento</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        {/* Sección de Texto */}
        <section className="bg-surface-primary dark:bg-surface-primary border border-light dark:border-neutral-700 rounded-lg p-6">
          <h2 className="text-primary-text dark:text-text-primary text-xl font-bold mb-4">
            Jerarquía de Texto
          </h2>
          <div className="space-y-3">
            <h1 className="text-primary-text dark:text-text-primary text-3xl font-bold">
              Título Principal (H1)
            </h1>
            <h2 className="text-primary-text dark:text-text-primary text-2xl font-bold">
              Título Secundario (H2)
            </h2>
            <h3 className="text-primary-text dark:text-text-primary text-xl font-bold">
              Título Terciario (H3)
            </h3>
            <p className="text-primary-text dark:text-text-primary text-lg">
              Texto principal - Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p className="text-secondary-text dark:text-text-secondary text-base">
              Texto secundario - Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p className="text-tertiary-text dark:text-text-tertiary text-sm">
              Texto terciario - Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <a
              href="#"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline"
            >
              Enlace que cambia con el modo oscuro
            </a>
          </div>
        </section>

        {/* Sección de Colores */}
        <section>
          <h2 className="text-primary-text dark:text-text-primary text-xl font-bold mb-4">
            Paleta de Colores en Modo Oscuro
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {/* Primarios */}
            <div className="space-y-2">
              <div className="bg-primary-500 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Primary 500
              </div>
              <div className="bg-primary-600 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Primary 600
              </div>
              <div className="bg-primary-700 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Primary 700
              </div>
            </div>

            {/* Secundarios */}
            <div className="space-y-2">
              <div className="bg-secondary-500 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Secondary 500
              </div>
              <div className="bg-secondary-600 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Secondary 600
              </div>
              <div className="bg-secondary-700 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Secondary 700
              </div>
            </div>

            {/* Acento */}
            <div className="space-y-2">
              <div className="bg-accent-500 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Accent 500
              </div>
              <div className="bg-accent-600 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Accent 600
              </div>
              <div className="bg-accent-700 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Accent 700
              </div>
            </div>

            {/* Neutros */}
            <div className="space-y-2">
              <div className="bg-neutral-100 dark:bg-neutral-800 border border-light dark:border-neutral-600 h-16 rounded flex items-center justify-center text-primary-text dark:text-text-primary text-xs font-bold">
                Neutral Light
              </div>
              <div className="bg-neutral-200 dark:bg-neutral-700 border border-light dark:border-neutral-600 h-16 rounded flex items-center justify-center text-primary-text dark:text-text-primary text-xs font-bold">
                Neutral Medium
              </div>
              <div className="bg-neutral-300 dark:bg-neutral-600 border border-light dark:border-neutral-600 h-16 rounded flex items-center justify-center text-primary-text dark:text-text-primary text-xs font-bold">
                Neutral Dark
              </div>
            </div>

            {/* Oro Divino */}
            <div className="space-y-2">
              <div className="bg-divine-gold-500 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Gold 500
              </div>
              <div className="bg-divine-gold-600 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Gold 600
              </div>
              <div className="bg-divine-gold-700 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Gold 700
              </div>
            </div>

            {/* Púrpura Sagrado */}
            <div className="space-y-2">
              <div className="bg-sacred-purple-500 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Purple 500
              </div>
              <div className="bg-sacred-purple-600 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Purple 600
              </div>
              <div className="bg-sacred-purple-700 h-16 rounded flex items-center justify-center text-white text-xs font-bold">
                Purple 700
              </div>
            </div>
          </div>
        </section>

        {/* Instrucciones */}
        <section className="bg-surface-secondary dark:bg-surface-secondary border border-light dark:border-neutral-700 rounded-lg p-6">
          <h2 className="text-primary-text dark:text-text-primary text-xl font-bold mb-4">
            💡 Cómo Usar el Modo Oscuro
          </h2>
          <div className="space-y-3 text-secondary-text dark:text-text-secondary">
            <p>
              <strong>🎯 Automático:</strong> El modo oscuro se activa
              automáticamente si el usuario tiene configurado el modo oscuro en
              su sistema.
            </p>
            <p>
              <strong>🔘 Manual:</strong> Usa el botón de toggle para cambiar
              manualmente entre modo claro y oscuro.
            </p>
            <p>
              <strong>💾 Persistencia:</strong> La preferencia se guarda en
              localStorage y se mantiene entre sesiones.
            </p>
            <p>
              <strong>🎨 Colores:</strong> Todos los colores se adaptan
              automáticamente usando las variables CSS definidas.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
