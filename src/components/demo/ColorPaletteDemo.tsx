import React from "react";
import {
  Button,
  LiveStreamButton,
  PrayerButton,
  DonationButton,
} from "../ui/Button";

/**
 * Componente de ejemplo que muestra cómo usar la paleta de colores
 * Este archivo sirve como referencia visual y guía de implementación
 */
export const ColorPaletteDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-bg p-8">
      {/* Header */}
      <header className="bg-surface-primary shadow-custom-md rounded-lg p-6 mb-8">
        <h1 className="text-primary-text text-3xl font-bold mb-2">
          🎨 Paleta de Colores - Nueva Casa
        </h1>
        <p className="text-secondary-text">
          Demostración de todos los colores disponibles en el proyecto
        </p>
      </header>

      {/* Sección de Colores Primarios */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Colores Primarios (Azul)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2 mb-6">
          <div className="bg-primary-50 h-16 rounded flex items-center justify-center text-xs font-medium">
            50
          </div>
          <div className="bg-primary-100 h-16 rounded flex items-center justify-center text-xs font-medium">
            100
          </div>
          <div className="bg-primary-200 h-16 rounded flex items-center justify-center text-xs font-medium">
            200
          </div>
          <div className="bg-primary-300 h-16 rounded flex items-center justify-center text-xs font-medium">
            300
          </div>
          <div className="bg-primary-400 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            400
          </div>
          <div className="bg-primary-500 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            500
          </div>
          <div className="bg-primary-600 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            600
          </div>
          <div className="bg-primary-700 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            700
          </div>
          <div className="bg-primary-800 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            800
          </div>
          <div className="bg-primary-900 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            900
          </div>
          <div className="bg-primary-950 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            950
          </div>
        </div>
        <p className="text-secondary-text text-sm">
          Uso: Navegación, enlaces principales, elementos de marca
        </p>
      </section>

      {/* Sección de Colores Secundarios */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Colores Secundarios (Rojo)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2 mb-6">
          <div className="bg-secondary-50 h-16 rounded flex items-center justify-center text-xs font-medium">
            50
          </div>
          <div className="bg-secondary-100 h-16 rounded flex items-center justify-center text-xs font-medium">
            100
          </div>
          <div className="bg-secondary-200 h-16 rounded flex items-center justify-center text-xs font-medium">
            200
          </div>
          <div className="bg-secondary-300 h-16 rounded flex items-center justify-center text-xs font-medium">
            300
          </div>
          <div className="bg-secondary-400 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            400
          </div>
          <div className="bg-secondary-500 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            500
          </div>
          <div className="bg-secondary-600 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            600
          </div>
          <div className="bg-secondary-700 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            700
          </div>
          <div className="bg-secondary-800 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            800
          </div>
          <div className="bg-secondary-900 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            900
          </div>
          <div className="bg-secondary-950 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            950
          </div>
        </div>
        <p className="text-secondary-text text-sm">
          Uso: Llamadas a la acción importantes, botones de "Ver en vivo"
        </p>
      </section>

      {/* Sección de Colores de Acento */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Colores de Acento (Verde)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2 mb-6">
          <div className="bg-accent-50 h-16 rounded flex items-center justify-center text-xs font-medium">
            50
          </div>
          <div className="bg-accent-100 h-16 rounded flex items-center justify-center text-xs font-medium">
            100
          </div>
          <div className="bg-accent-200 h-16 rounded flex items-center justify-center text-xs font-medium">
            200
          </div>
          <div className="bg-accent-300 h-16 rounded flex items-center justify-center text-xs font-medium">
            300
          </div>
          <div className="bg-accent-400 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            400
          </div>
          <div className="bg-accent-500 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            500
          </div>
          <div className="bg-accent-600 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            600
          </div>
          <div className="bg-accent-700 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            700
          </div>
          <div className="bg-accent-800 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            800
          </div>
          <div className="bg-accent-900 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            900
          </div>
          <div className="bg-accent-950 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
            950
          </div>
        </div>
        <p className="text-secondary-text text-sm">
          Uso: Confirmaciones, elementos positivos, éxito
        </p>
      </section>

      {/* Sección de Colores Especiales de la Iglesia */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Colores Especiales de la Iglesia
        </h2>

        <div className="mb-6">
          <h3 className="text-primary-text text-lg font-semibold mb-3">
            Oro Divino
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-4">
            <div className="bg-divine-gold-50 h-16 rounded flex items-center justify-center text-xs font-medium">
              50
            </div>
            <div className="bg-divine-gold-100 h-16 rounded flex items-center justify-center text-xs font-medium">
              100
            </div>
            <div className="bg-divine-gold-200 h-16 rounded flex items-center justify-center text-xs font-medium">
              200
            </div>
            <div className="bg-divine-gold-300 h-16 rounded flex items-center justify-center text-xs font-medium">
              300
            </div>
            <div className="bg-divine-gold-400 h-16 rounded flex items-center justify-center text-xs font-medium">
              400
            </div>
            <div className="bg-divine-gold-500 h-16 rounded flex items-center justify-center text-xs font-medium">
              500
            </div>
            <div className="bg-divine-gold-600 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              600
            </div>
            <div className="bg-divine-gold-700 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              700
            </div>
            <div className="bg-divine-gold-800 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              800
            </div>
            <div className="bg-divine-gold-900 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              900
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-primary-text text-lg font-semibold mb-3">
            Púrpura Sagrado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-4">
            <div className="bg-sacred-purple-50 h-16 rounded flex items-center justify-center text-xs font-medium">
              50
            </div>
            <div className="bg-sacred-purple-100 h-16 rounded flex items-center justify-center text-xs font-medium">
              100
            </div>
            <div className="bg-sacred-purple-200 h-16 rounded flex items-center justify-center text-xs font-medium">
              200
            </div>
            <div className="bg-sacred-purple-300 h-16 rounded flex items-center justify-center text-xs font-medium">
              300
            </div>
            <div className="bg-sacred-purple-400 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              400
            </div>
            <div className="bg-sacred-purple-500 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              500
            </div>
            <div className="bg-sacred-purple-600 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              600
            </div>
            <div className="bg-sacred-purple-700 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              700
            </div>
            <div className="bg-sacred-purple-800 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              800
            </div>
            <div className="bg-sacred-purple-900 h-16 rounded flex items-center justify-center text-xs font-medium text-white">
              900
            </div>
          </div>
        </div>

        <p className="text-secondary-text text-sm">
          Uso: Elementos especiales de la iglesia, ceremonias, eventos sagrados
        </p>
      </section>

      {/* Sección de Botones */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Componentes de Botón
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Botones básicos */}
          <div>
            <h3 className="text-primary-text text-lg font-semibold mb-3">
              Botones Básicos
            </h3>
            <div className="space-y-3">
              <Button variant="primary">Botón Primario</Button>
              <Button variant="secondary">Botón Secundario</Button>
              <Button variant="accent">Botón Acento</Button>
              <Button variant="outline">Botón Outline</Button>
              <Button variant="ghost">Botón Ghost</Button>
            </div>
          </div>

          {/* Botones de la iglesia */}
          <div>
            <h3 className="text-primary-text text-lg font-semibold mb-3">
              Botones de la Iglesia
            </h3>
            <div className="space-y-3">
              <LiveStreamButton href="https://youtube.com/live" />
              <PrayerButton onClick={() => alert("Oración iniciada")} />
              <DonationButton href="https://donaciones.com" />
            </div>
          </div>

          {/* Tamaños de botón */}
          <div>
            <h3 className="text-primary-text text-lg font-semibold mb-3">
              Tamaños
            </h3>
            <div className="space-y-3">
              <Button size="sm">Pequeño</Button>
              <Button size="md">Mediano</Button>
              <Button size="lg">Grande</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Texto */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Jerarquía de Texto
        </h2>

        <div className="space-y-4">
          <h1 className="text-primary-text text-4xl font-bold">
            Título Principal (H1)
          </h1>
          <h2 className="text-primary-text text-3xl font-bold">
            Título Secundario (H2)
          </h2>
          <h3 className="text-primary-text text-2xl font-bold">
            Título Terciario (H3)
          </h3>
          <p className="text-primary-text text-lg">
            Texto principal - Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="text-secondary-text text-base">
            Texto secundario - Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="text-tertiary-text text-sm">
            Texto terciario - Lorem ipsum dolor sit amet consectetur.
          </p>
          <a
            href="#"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            Enlace con colores de la paleta
          </a>
        </div>
      </section>

      {/* Sección de Cards */}
      <section className="bg-surface-primary rounded-lg shadow-custom-md p-6 mb-8">
        <h2 className="text-primary-text text-2xl font-bold mb-4">
          Ejemplos de Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card básico */}
          <div className="bg-surface-secondary border border-light rounded-lg p-6 shadow-custom-sm">
            <h3 className="text-primary-text text-xl font-bold mb-2">
              Card Básico
            </h3>
            <p className="text-secondary-text mb-4">
              Esta es una descripción de ejemplo para mostrar cómo se ve el
              texto en un card.
            </p>
            <Button variant="primary" size="sm">
              Leer más
            </Button>
          </div>

          {/* Card con acento */}
          <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 shadow-custom-sm">
            <h3 className="text-accent-800 text-xl font-bold mb-2">
              Card de Éxito
            </h3>
            <p className="text-accent-700 mb-4">
              Card con colores de acento para mostrar elementos positivos o
              confirmaciones.
            </p>
            <Button variant="accent" size="sm">
              Continuar
            </Button>
          </div>

          {/* Card especial */}
          <div className="bg-divine-gold-50 border border-divine-gold-200 rounded-lg p-6 shadow-custom-sm">
            <h3 className="text-divine-gold-800 text-xl font-bold mb-2">
              Card Especial
            </h3>
            <p className="text-divine-gold-700 mb-4">
              Card con colores especiales de la iglesia para contenido
              importante.
            </p>
            <Button
              className="bg-divine-gold-600 hover:bg-divine-gold-700 text-white"
              size="sm"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-secondary-text text-sm">
        <p>
          Para modificar estos colores, edita el archivo{" "}
          <code className="bg-neutral-200 px-1 rounded text-primary-text">
            src/styles/colors.css
          </code>
        </p>
      </footer>
    </div>
  );
};
