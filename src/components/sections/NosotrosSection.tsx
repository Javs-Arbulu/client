import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Zap, Sparkles } from "lucide-react";

export default function NosotrosSection() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-300/10 dark:bg-cyan-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <Badge className="bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 text-slate-800 dark:text-slate-900 hover:from-cyan-400 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 mb-6 px-6 py-3 text-lg font-bold">
                <Heart className="w-5 h-5 mr-2" />
                Nuestra Historia
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 mb-8 leading-tight">
                Una iglesia que
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  transforma vidas
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  Desde 2015, hemos sido una comunidad comprometida con llevar
                  esperanza y amor a nuestra ciudad. Creemos que cada persona
                  tiene un propósito único y estamos aquí para ayudarte a
                  descubrirlo.
                </p>
                <p className="text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  Nuestra visión es ser una iglesia relevante, auténtica y llena
                  de vida, donde las personas puedan encontrar sanidad,
                  propósito y una familia espiritual genuina.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-1 bg-white dark:bg-slate-700 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2">
                    Auténticos
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Relaciones genuinas
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-1 bg-white dark:bg-slate-700 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-600 dark:to-slate-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2">
                    Relevantes
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Mensaje actual
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-1 bg-white dark:bg-slate-700 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2">
                    Inclusivos
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Todos bienvenidos
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-1 bg-white dark:bg-slate-700 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-600 dark:to-slate-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2">
                    Dinámicos
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Siempre creciendo
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="/images/slide/image1.jpg"
                  alt="Pastor predicando"
                  width={280}
                  height={350}
                  className="rounded-2xl shadow-xl object-cover border-4 border-white dark:border-slate-600 hover:scale-105 transition-transform"
                />
                <img
                  src="/images/slide/image2.jpg"
                  alt="Grupo pequeño"
                  width={280}
                  height={200}
                  className="rounded-2xl shadow-xl object-cover border-4 border-white dark:border-slate-600 hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-6 mt-12">
                <img
                  src="/images/slide/image3.jpg"
                  alt="Comunidad sirviendo"
                  width={280}
                  height={200}
                  className="rounded-2xl shadow-xl object-cover border-4 border-white dark:border-slate-600 hover:scale-105 transition-transform"
                />
                <img
                  src="/images/forntPage.jpg"
                  alt="Equipo de adoración"
                  width={280}
                  height={350}
                  className="rounded-2xl shadow-xl object-cover border-4 border-white dark:border-slate-600 hover:scale-105 transition-transform"
                />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 text-slate-800 dark:text-slate-900 px-6 py-3 rounded-full font-black text-lg shadow-xl dark:shadow-cyan-500/30">
              <Sparkles className="w-5 h-5 inline mr-2" />
              ¡Somos familia!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
