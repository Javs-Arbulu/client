import { Star, Play, MapPin, ArrowRight } from "lucide-react";
import { ImageCarousel } from "../ui/imagecarousel";
import { AnimatedButton } from "../ui/animatedButton";
import { IconBadge } from "../ui/iconBagde";

export default function HeroSection() {
  return (
    <>
      <section
        id="inicio"
        className="relative py-10 lg:py-18 section-bg overflow-hidden"
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
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
                <IconBadge
                  icon={<Star className="w-4 h-4 mr-2" />}
                  textSize="text-lg"
                >
                  ¡Bienvenido a casa!
                </IconBadge>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-center lg:text-left">
                  <span className="text-primary-adaptive">Encuentra tu</span>
                  <br />
                  <span className="text-brand">propósito</span>
                  <br />
                  <span className="text-primary-adaptive">en comunidad</span>
                </h1>

                <div className="relative pl-0 lg:pl-6 text-center lg:text-left">
                  <p className="text-lg lg:text-xl text-secondary-adaptive max-w-lg font-medium leading-relaxed mx-auto lg:mx-0">
                    Somos una iglesia joven y vibrante donde puedes crecer
                    espiritualmente, hacer amigos genuinos y descubrir el plan
                    increíble que Dios tiene para tu vida.
                  </p>
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-full hidden lg:block"></div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  iconBefore={<Play className="w-5 h-5" />}
                  iconAfter={<ArrowRight className="w-4 h-4" />}
                >
                  Ver servicios online
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="default"
                  iconBefore={<MapPin className="w-5 h-5 mr-2" />}
                >
                  Cómo llegar
                </AnimatedButton>
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
            <ImageCarousel
              images={[
                { src: "/images/slide/image1.jpg", alt: "Adoración 1" },
                { src: "/images/slide/image2.jpg", alt: "Adoración 2" },
                { src: "/images/slide/image3.jpg", alt: "Adoración 3" },
              ]}
              liveText="¡Conectados!"
              livePosition="top" // También puedes usar "middle" o "bottom"
            />
          </div>
        </div>
      </section>
    </>
  );
}
