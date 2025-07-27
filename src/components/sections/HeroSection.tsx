import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Play,
  MapPin,
  ArrowRight,
  Zap,
  Users,
  Gift,
  Music,
  Target,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/3 to-slate-800/8 dark:from-slate-100/5 dark:to-slate-300/10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 dark:from-cyan-300/40 dark:to-blue-400/40 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-blue-300/25 to-cyan-400/25 dark:from-blue-300/35 dark:to-cyan-400/35 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-400/80 dark:bg-cyan-300/90 rounded-full animate-ping"></div>
      <div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/80 dark:bg-blue-300/90 rounded-full animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="flex items-center space-x-3">
              <Badge className="bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 text-slate-800 dark:text-slate-900 hover:from-cyan-400 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 font-bold px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-1" />
                ¡Bienvenido a casa!
              </Badge>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-300 dark:bg-cyan-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-blue-300 dark:bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-cyan-300 dark:bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                  Encuentra tu
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 dark:from-cyan-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  propósito
                </span>
                <br />
                <span className="text-slate-800 dark:text-slate-200">
                  en comunidad
                </span>
              </h1>

              <div className="relative">
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-lg font-medium leading-relaxed">
                  Somos una iglesia joven y vibrante donde puedes crecer
                  espiritualmente, hacer amigos genuinos y descubrir el plan
                  increíble que Dios tiene para tu vida.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 dark:from-cyan-600 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-700 dark:hover:via-cyan-600 dark:hover:to-cyan-700 text-white px-10 py-5 text-lg font-bold shadow-2xl shadow-slate-900/25 dark:shadow-cyan-500/25 hover:shadow-3xl hover:shadow-slate-900/40 dark:hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-slate-600/20 dark:border-cyan-400/20"
              >
                <Play className="w-6 h-6 mr-3" />
                Ver servicios online
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <MapPin className="w-6 h-6 mr-3" />
                Cómo llegar
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-10 pt-12">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 dark:from-cyan-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-lg">
                  40+
                </div>
                <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mt-2 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                  Miembros activos
                </div>
                <div className="w-full h-1.5 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 dark:from-cyan-400 dark:via-cyan-300 dark:to-blue-300 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  10
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  Años de ministerio
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  Servicios semanales
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-300 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/25 to-blue-400/25 dark:from-cyan-300/35 dark:to-blue-400/35 rounded-3xl transform rotate-3 blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-slate-600 dark:via-slate-500 dark:to-slate-400 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-all duration-500"></div>
            <img
              src="/images/forntPage.jpg"
              alt="Jóvenes adorando en la iglesia"
              width={500}
              height={600}
              className="relative rounded-3xl shadow-2xl object-cover border-4 border-white group-hover:scale-[1.02] transition-all duration-500"
            />
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-xl animate-bounce">
              <Zap className="w-4 h-4 inline mr-2" />
              ¡En vivo!
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 text-white relative overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,255,255,0.05) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-cyan-300 dark:text-cyan-200 mb-2">
                2.5K+
              </div>
              <div className="text-slate-300 dark:text-slate-200 font-semibold">
                Vidas transformadas
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-400 dark:to-slate-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-white dark:text-slate-800" />
              </div>
              <div className="text-3xl font-black text-white mb-2">50+</div>
              <div className="text-slate-300 dark:text-slate-200 font-semibold">
                Ministerios activos
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-cyan-300 dark:text-cyan-200 mb-2">
                100+
              </div>
              <div className="text-slate-300 dark:text-slate-200 font-semibold">
                Músicos y artistas
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-400 dark:to-slate-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white dark:text-slate-800" />
              </div>
              <div className="text-3xl font-black text-white mb-2">25</div>
              <div className="text-slate-300 dark:text-slate-200 font-semibold">
                Células de crecimiento
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
