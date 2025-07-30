import { AnimatedButton } from "@/components/ui/animatedButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, ArrowRight, Zap } from "lucide-react";
import LedDivider from "../ui/ledDivider";

export default function ServiciosSection() {
  return (
    <>
      <LedDivider />
      <section
        id="servicios"
        className="py-24 bg-adaptive dark:bg-adaptive relative transition-colors duration-300"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <Badge className="bg-brand text-text-inverse hover:opacity-90 mb-6 px-6 py-3 text-lg font-bold">
              <Calendar className="w-5 h-5 mr-2" />
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-primary-adaptive mb-6">
              Únete a nosotros
              <span className="text-brand"> cada semana</span>
            </h2>
            <p className="text-xl lg:text-2xl text-secondary-adaptive max-w-3xl mx-auto font-medium">
              Experimenta la presencia de Dios en un ambiente lleno de vida,
              música contemporánea y enseñanza relevante
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Tarjeta 1 - Domingos */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-primary/10 dark:bg-primary-700/20 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <CardContent className="p-12 text-center relative z-10">
                <div className="w-24 h-24 bg-primary-600 dark:bg-primary-400 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-black text-primary-adaptive mb-3">
                  Domingos
                </h3>
                <div className="text-primary-600 dark:text-primary-300 font-black text-xl mb-4">
                  9:00 AM & 11:00 AM
                </div>
                <p className="text-secondary-adaptive font-medium text-lg leading-relaxed">
                  Servicio principal con adoración vibrante y mensaje inspirador
                </p>
                <div className="mt-6">
                  <AnimatedButton variant="outline" className="btn-outline">
                    Ver más detalles
                  </AnimatedButton>
                </div>
              </CardContent>
            </Card>

            {/* Tarjeta 2 - Miércoles */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 bg-secondary/10 dark:bg-secondary-700/20 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
              <CardContent className="p-12 text-center relative z-10">
                <div className="w-20 h-20 bg-secondary-600 dark:bg-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-primary-adaptive mb-3">
                  Miércoles
                </h3>
                <div className="text-secondary-600 dark:text-secondary-300 font-black text-xl mb-4">
                  7:00 PM
                </div>
                <p className="text-secondary-adaptive font-medium text-lg leading-relaxed">
                  Células de crecimiento y estudio bíblico en grupos pequeños
                </p>
                <div className="mt-6">
                  <AnimatedButton variant="outline" className="btn-outline">
                    Encontrar célula
                  </AnimatedButton>
                </div>
              </CardContent>
            </Card>

            {/* Tarjeta 3 - Viernes */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 bg-gradient-to-br from-primary-50 via-secondary-100 to-primary-100 dark:from-neutral-800 dark:to-neutral-700 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-brand"></div>
              <CardContent className="p-12 text-center relative z-10">
                <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-primary-adaptive mb-3">
                  Viernes
                </h3>
                <div className="text-primary-500 dark:text-primary-300 font-black text-xl mb-4">
                  7:30 PM
                </div>
                <p className="text-secondary-adaptive font-medium text-lg leading-relaxed">
                  Noche de jóvenes con música, juegos y enseñanza dinámica
                </p>
                <div className="mt-6">
                  <AnimatedButton variant="outline" className="btn-outline">
                    Únete a jóvenes
                  </AnimatedButton>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Botón final */}
          <div className="text-center">
            <AnimatedButton
              size="lg"
              className="bg-brand text-white px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Clock className="w-6 h-6 mr-3" />
              Ver todos los horarios
              <ArrowRight className="w-5 h-5 ml-2" />
            </AnimatedButton>
          </div>
        </div>
      </section>
    </>
  );
}
