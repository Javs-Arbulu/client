import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, ArrowRight, Zap } from "lucide-react";

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="py-24 bg-surface-primary dark:bg-nc-accent-900 relative transition-colors duration-300"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-primary-to-secondary text-nc-accent-800 dark:text-nc-accent-900 hover:opacity-90 mb-6 px-6 py-3 text-lg font-bold">
            <Calendar className="w-5 h-5 mr-2" />
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-text-primary dark:text-text-primary mb-6">
            Únete a nosotros
            <span className="bg-gradient-to-r from-nc-primary-500 to-nc-secondary-500 dark:from-nc-primary-400 dark:to-nc-secondary-400 bg-clip-text text-transparent">
              {" "}
              cada semana
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto font-medium">
            Experimenta la presencia de Dios en un ambiente lleno de vida,
            música contemporánea y enseñanza relevante
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-xl hover:shadow-3xl dark:shadow-nc-accent-800/30 dark:hover:shadow-nc-accent-800/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-surface-secondary via-surface-primary to-surface-secondary/50 dark:from-nc-accent-800 dark:via-nc-accent-700 dark:to-nc-accent-800/50 group overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary-to-secondary"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-nc-primary-50/30 dark:to-nc-primary-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <CardContent className="p-12 text-center relative z-10">
              <div className="w-24 h-24 bg-gradient-to-r from-nc-accent-800 via-nc-accent-700 to-nc-accent-600 dark:from-nc-primary-600 dark:via-nc-primary-500 dark:to-nc-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-nc-accent-900/20 dark:shadow-nc-primary-500/20">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-primary dark:text-text-primary mb-3">
                Domingos
              </h3>
              <div className="text-nc-primary-600 dark:text-nc-primary-400 font-black text-xl mb-4">
                9:00 AM & 11:00 AM
              </div>
              <p className="text-text-secondary dark:text-text-secondary font-medium text-lg leading-relaxed">
                Servicio principal con adoración vibrante y mensaje inspirador
              </p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 font-semibold bg-transparent"
                >
                  Ver más detalles
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl hover:shadow-3xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-400 dark:to-slate-300"></div>
            <CardContent className="p-10 text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-slate-600 dark:to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Miércoles
              </h3>
              <div className="text-slate-800 dark:text-slate-200 font-black text-xl mb-4">
                7:00 PM
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium text-lg leading-relaxed">
                Células de crecimiento y estudio bíblico en grupos pequeños
              </p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 font-semibold bg-transparent"
                >
                  Encontrar célula
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl hover:shadow-3xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-300"></div>
            <CardContent className="p-10 text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-cyan-600 dark:to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Viernes
              </h3>
              <div className="text-cyan-600 dark:text-cyan-400 font-black text-xl mb-4">
                7:30 PM
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium text-lg leading-relaxed">
                Noche de jóvenes con música, juegos y enseñanza dinámica
              </p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 font-semibold bg-transparent"
                >
                  Únete a jóvenes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Clock className="w-6 h-6 mr-3" />
            Ver todos los horarios
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
