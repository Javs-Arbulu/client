import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, MapPin, ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-16 lg:py-24 section-bg overflow-hidden"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 hero-bg-decoration"></div>

      {/* Elementos decorativos más controlados */}
      <div className="absolute top-32 left-20 w-12 h-12 hero-decoration-1 rounded-full blur-lg animate-pulse"></div>
      <div
        className="absolute top-48 right-24 w-8 h-8 hero-decoration-2 rounded-full blur-md animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white font-bold px-6 py-3 text-base border-0">
                <Star className="w-4 h-4 mr-2" />
                ¡Bienvenido a casa!
              </Badge>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="text-primary-adaptive">Encuentra tu</span>
                <br />
                <span className="text-brand">propósito</span>
                <br />
                <span className="text-primary-adaptive">en comunidad</span>
              </h1>

              <div className="relative pl-6">
                <p className="text-lg lg:text-xl text-secondary-adaptive max-w-lg font-medium leading-relaxed">
                  Somos una iglesia joven y vibrante donde puedes crecer
                  espiritualmente, hacer amigos genuinos y descubrir el plan
                  increíble que Dios tiene para tu vida.
                </p>
                <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-primary px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver servicios online
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                className="btn-outline px-8 py-4 text-base font-bold transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Cómo llegar
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-black stats-primary group-hover:scale-110 transition-all duration-300">
                  40+
                </div>
                <div className="text-sm font-semibold text-secondary-adaptive mt-2">
                  Miembros activos
                </div>
                <div className="w-full h-1 stats-line mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-black text-primary-adaptive group-hover:scale-110 transition-transform">
                  10
                </div>
                <div className="text-sm font-semibold text-secondary-adaptive mt-2">
                  Años de ministerio
                </div>
                <div className="w-full h-1 bg-neutral-400 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-black stats-primary group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="text-sm font-semibold text-secondary-adaptive mt-2">
                  Servicios semanales
                </div>
                <div className="w-full h-1 stats-line mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative group">
              <div className="absolute inset-0 image-overlay-1 rounded-2xl transform rotate-2 blur-sm"></div>
              <div className="absolute inset-0 image-overlay-2 rounded-2xl transform -rotate-1"></div>
              <img
                src="/images/forntPage.jpg"
                alt="Jóvenes adorando en la iglesia"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-xl object-cover w-full h-[500px] lg:h-[600px] group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute -top-4 -right-4 live-badge px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-bounce">
                <Zap className="w-4 h-4 inline mr-1" />
                ¡En vivo!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
