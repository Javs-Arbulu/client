import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Sparkles,
  BookOpenCheck,
  Unlock,
  Compass,
  HeartHandshake,
} from "lucide-react";
import { IconBadge } from "../ui/iconBagde";
import { RotatingPhoto } from "../ui/rotatingPhoto";
import LedDivider from "../ui/ledDivider";
import { motion } from "framer-motion";

export default function NosotrosSection() {
  return (
    <>
      <LedDivider />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <section id="nosotros" className="py-20 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary-200/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Texto + tarjetas */}
              <div className="space-y-10">
                <div>
                  <IconBadge icon={<Heart className="w-5 h-5" />}>
                    Nuestra Historia
                  </IconBadge>
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-primary-adaptive mb-8 leading-tight">
                    Una iglesia que{" "}
                    <span className="text-brand">transforma vidas</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-base sm:text-lg md:text-xl text-secondary-adaptive font-medium leading-relaxed">
                      Desde 2015, hemos sido una comunidad comprometida con
                      llevar esperanza y amor a nuestra comunidad...
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-secondary-adaptive font-medium leading-relaxed">
                      Nuestro propósito es ser una iglesia relevante, auténtica
                      y llena de vida...
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="card-base group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <BookOpenCheck className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl font-black text-primary-adaptive mb-2">
                        Conocer a Dios
                      </div>
                      <div className="text-sm font-semibold text-secondary-adaptive">
                        Relación personal a través de Jesús
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-base group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Unlock className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl font-black text-primary-adaptive mb-2">
                        Encontrar Libertad
                      </div>
                      <div className="text-sm font-semibold text-secondary-adaptive">
                        Sanando heridas, viviendo en gracia
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-base group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl font-black text-primary-adaptive mb-2">
                        Descubrir Propósito
                      </div>
                      <div className="text-sm font-semibold text-secondary-adaptive">
                        Conoce tu llamado y destino
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-base group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <HeartHandshake className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl font-black text-primary-adaptive mb-2">
                        Hacer la Diferencia
                      </div>
                      <div className="text-sm font-semibold text-secondary-adaptive">
                        Impactando vidas sirviendo a otros
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Imagen rotatoria */}
              <div className="w-full max-w-full sm:max-w-[600px] mx-auto lg:mx-0">
                <RotatingPhoto
                  images={[
                    {
                      src: "/images/slide/image1.jpg",
                      alt: "Pastor predicando",
                    },
                    { src: "/images/slide/image2.jpg", alt: "Grupo pequeño" },
                    {
                      src: "/images/slide/image1.jpg",
                      alt: "Pastor predicando",
                    },
                    { src: "/images/slide/image2.jpg", alt: "Grupo pequeño" },
                    {
                      src: "/images/slide/image3.jpg",
                      alt: "Comunidad sirviendo",
                    },
                  ]}
                  badgeText="¡Somos familia!"
                  badgeIcon={<Sparkles className="w-5 h-5 inline mr-2" />}
                  badgePosition="top-right"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
