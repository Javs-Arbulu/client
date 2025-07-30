import { AnimatedButton } from "@/components/ui/animatedButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, Music, BookOpen, Coffee, ArrowRight } from "lucide-react";

export default function ConectaSection() {
  return (
    <section
      id="conecta"
      className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-cyan-600 dark:to-blue-600 text-white hover:from-slate-900 hover:to-slate-700 dark:hover:from-cyan-700 dark:hover:to-blue-700 mb-6 px-6 py-3 text-lg font-bold">
            <Users className="w-5 h-5 mr-2" />
            Conecta con nosotros
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 mb-6">
            Encuentra tu lugar en la
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {" "}
              familia
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
            Hay muchas formas de conectarte y crecer con nosotros. Encuentra el
            grupo perfecto para ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="border-0 shadow-xl hover:shadow-2xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-2 bg-gradient-to-br from-rose-50 to-white dark:from-slate-800 dark:to-slate-700 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 to-rose-400 dark:from-cyan-400 dark:to-cyan-300"></div>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-300 to-rose-400 dark:from-cyan-500 dark:to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-xl">
                Jóvenes
              </h3>
              <p className="text-rose-500 dark:text-cyan-400 font-bold mb-4">
                18-30 años
              </p>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-6">
                Eventos, retiros y crecimiento espiritual
              </p>
              <AnimatedButton
                size="sm"
                className="bg-rose-300 hover:bg-rose-400 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold"
              >
                Únete ahora
              </AnimatedButton>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-400 dark:to-blue-300"></div>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-500 dark:to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-xl">
                Familias
              </h3>
              <p className="text-blue-500 dark:text-blue-400 font-bold mb-4">
                Todas las edades
              </p>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-6">
                Actividades para toda la familia
              </p>
              <AnimatedButton
                size="sm"
                className="bg-blue-300 hover:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold"
              >
                Participar
              </AnimatedButton>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-800 dark:to-slate-700 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-300 to-emerald-400 dark:from-cyan-500 dark:to-blue-500"></div>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-300 to-emerald-400 dark:from-cyan-500 dark:to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-xl">
                Ministerios
              </h3>
              <p className="text-emerald-500 dark:text-cyan-400 font-bold mb-4">
                Servicio
              </p>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-6">
                Música, medios, hospitalidad y más
              </p>
              <AnimatedButton
                size="sm"
                className="bg-emerald-300 hover:bg-emerald-400 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold"
              >
                Servir
              </AnimatedButton>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl dark:shadow-slate-800/30 dark:hover:shadow-slate-800/50 transition-all hover:-translate-y-2 bg-gradient-to-br from-violet-50 to-white dark:from-slate-800 dark:to-slate-700 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-300 to-violet-400 dark:from-blue-500 dark:to-cyan-500"></div>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-300 to-violet-400 dark:from-blue-500 dark:to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-xl">
                Células
              </h3>
              <p className="text-violet-500 dark:text-blue-400 font-bold mb-4">
                Grupos pequeños
              </p>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-6">
                Crecimiento en comunidad íntima
              </p>
              <AnimatedButton
                size="sm"
                className="bg-violet-300 hover:bg-violet-400 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold"
              >
                Conectar
              </AnimatedButton>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <AnimatedButton
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 text-lg font-black shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Coffee className="w-6 h-6 mr-3" />
            Conoce todos los grupos
            <ArrowRight className="w-5 h-5 ml-2" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
