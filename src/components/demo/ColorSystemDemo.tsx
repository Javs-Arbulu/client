import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import {
  Palette,
  Eye,
  Moon,
  Sun,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";

/**
 * Componente de demostración del nuevo sistema de colores Nueva Casa
 * Muestra la paleta cyan/azul y el modo oscuro funcionando
 */
export const ColorSystemDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-primary dark:bg-background-primary transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-nc-primary-300 to-nc-secondary-400 text-nc-accent-800 font-bold px-6 py-3 mb-6">
            <Palette className="w-5 h-5 mr-2" />
            Sistema de Colores Nueva Casa
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-nc-primary-400 via-nc-primary-500 to-nc-secondary-500 bg-clip-text text-transparent">
              Paleta Renovada
            </span>
          </h1>

          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Descubre la nueva identidad visual de Nueva Casa con colores cyan y
            azul vibrantes, diseñados para transmitir modernidad, confianza y
            espiritualidad.
          </p>

          <div className="flex justify-center mt-8">
            <DarkModeToggle size="lg" showLabel />
          </div>
        </div>

        {/* Paleta de Colores */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Colores Primarios - Cyan */}
          <Card className="p-6 bg-surface-primary dark:bg-surface-primary border border-border-light dark:border-border-light">
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary mb-4 flex items-center">
              <div className="w-8 h-8 bg-nc-primary-400 rounded-lg mr-3"></div>
              Primarios (Cyan)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-primary-300 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    300
                  </span>
                </div>
                <code className="text-sm text-nc-primary-500">#67e8f9</code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-primary-400 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    400
                  </span>
                </div>
                <code className="text-sm text-nc-primary-500">#22d3ee</code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-primary-500 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    500
                  </span>
                </div>
                <code className="text-sm text-nc-primary-500">#06b6d4</code>
              </div>
            </div>
          </Card>

          {/* Colores Secundarios - Blue */}
          <Card className="p-6 bg-surface-primary dark:bg-surface-primary border border-border-light dark:border-border-light">
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary mb-4 flex items-center">
              <div className="w-8 h-8 bg-nc-secondary-400 rounded-lg mr-3"></div>
              Secundarios (Azul)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-secondary-300 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    300
                  </span>
                </div>
                <code className="text-sm text-nc-secondary-500">#93c5fd</code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-secondary-400 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    400
                  </span>
                </div>
                <code className="text-sm text-nc-secondary-500">#60a5fa</code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-secondary-500 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    500
                  </span>
                </div>
                <code className="text-sm text-nc-secondary-500">#3b82f6</code>
              </div>
            </div>
          </Card>

          {/* Colores de Acento - Slate */}
          <Card className="p-6 bg-surface-primary dark:bg-surface-primary border border-border-light dark:border-border-light">
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary mb-4 flex items-center">
              <div className="w-8 h-8 bg-nc-accent-800 rounded-lg mr-3"></div>
              Acento (Slate)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-accent-700 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    700
                  </span>
                </div>
                <code className="text-sm text-nc-accent-600">#334155</code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-accent-800 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    800
                  </span>
                </div>
                <code className="text-sm text-nc-accent-600">#1e293b</code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-nc-accent-900 rounded mr-3"></div>
                  <span className="text-text-secondary dark:text-text-secondary">
                    900
                  </span>
                </div>
                <code className="text-sm text-nc-accent-600">#0f172a</code>
              </div>
            </div>
          </Card>
        </div>

        {/* Demostración de Componentes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Botones */}
          <Card className="p-8 bg-surface-primary dark:bg-surface-primary border border-border-light dark:border-border-light">
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary mb-6">
              Botones
            </h3>
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-nc-primary-400 to-nc-secondary-500 hover:from-nc-primary-500 hover:to-nc-secondary-600 text-white font-bold">
                <Heart className="w-4 h-4 mr-2" />
                Botón con Gradiente
              </Button>

              <Button className="w-full bg-nc-primary-500 hover:bg-nc-primary-600 text-white font-bold">
                <Sparkles className="w-4 h-4 mr-2" />
                Botón Primario (Cyan)
              </Button>

              <Button className="w-full bg-nc-secondary-500 hover:bg-nc-secondary-600 text-white font-bold">
                <Eye className="w-4 h-4 mr-2" />
                Botón Secundario (Azul)
              </Button>

              <Button
                variant="outline"
                className="w-full border-nc-primary-500 text-nc-primary-500 hover:bg-nc-primary-500 hover:text-white font-bold"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Botón Outline
              </Button>
            </div>
          </Card>

          {/* Modo Oscuro */}
          <Card className="p-8 bg-surface-primary dark:bg-surface-primary border border-border-light dark:border-border-light">
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary mb-6">
              Modo Oscuro
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background-secondary dark:bg-background-secondary rounded-lg">
                <p className="text-text-primary dark:text-text-primary font-semibold mb-2">
                  Fondo Secundario
                </p>
                <p className="text-text-secondary dark:text-text-secondary text-sm">
                  Este texto se adapta automáticamente al modo claro/oscuro
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-background-tertiary dark:bg-background-tertiary rounded-lg">
                <div className="flex items-center space-x-3">
                  <Sun className="w-5 h-5 text-nc-primary-500 dark:hidden" />
                  <Moon className="w-5 h-5 text-nc-primary-400 hidden dark:block" />
                  <span className="text-text-primary dark:text-text-primary font-medium">
                    Cambio Automático
                  </span>
                </div>
                <Badge className="bg-nc-primary-100 dark:bg-nc-accent-800 text-nc-primary-700 dark:text-nc-primary-300">
                  Activo
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer de Demo */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-nc-primary-400/10 to-nc-secondary-500/10 dark:from-nc-primary-400/20 dark:to-nc-secondary-500/20 rounded-full border border-nc-primary-300/30 dark:border-nc-primary-400/30">
            <Palette className="w-5 h-5 text-nc-primary-500 dark:text-nc-primary-400" />
            <span className="text-text-secondary dark:text-text-secondary font-medium">
              Sistema de colores actualizado con éxito
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSystemDemo;
