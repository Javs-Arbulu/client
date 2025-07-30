import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Zap, Sparkles } from "lucide-react";
import { IconBadge } from "../ui/iconBagde";
import { RotatingPhoto } from "../ui/rotatingPhoto";
import LedDivider from "../ui/ledDivider";

export default function NosotrosSection() {
  return (
    <>
      <LedDivider />
      <section
        id="nosotros"
        className="py-24 section-bg relative overflow-hidden"
      >
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-secondary-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <IconBadge icon={<Heart className="w-5 h-5" />}>
                  Nuestra Historia
                </IconBadge>
                <h2 className="text-4xl lg:text-6xl font-black text-primary-adaptive mb-8 leading-tight">
                  Una iglesia que
                  <span className="text-brand"> transforma vidas</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-secondary-adaptive font-medium leading-relaxed">
                    Desde 2015, hemos sido una comunidad comprometida con llevar
                    esperanza y amor a nuestra ciudad. Creemos que cada persona
                    tiene un propósito único y estamos aquí para ayudarte a
                    descubrirlo.
                  </p>
                  <p className="text-xl text-secondary-adaptive font-medium leading-relaxed">
                    Nuestra visión es ser una iglesia relevante, auténtica y
                    llena de vida, donde las personas puedan encontrar sanidad,
                    propósito y una familia espiritual genuina.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="card-base group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-black text-primary-adaptive mb-2">
                      Auténticos
                    </div>
                    <div className="text-sm font-semibold text-secondary-adaptive">
                      Relaciones genuinas
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-base group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-black text-primary-adaptive mb-2">
                      Relevantes
                    </div>
                    <div className="text-sm font-semibold text-secondary-adaptive">
                      Mensaje actual
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-base group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-black text-primary-adaptive mb-2">
                      Inclusivos
                    </div>
                    <div className="text-sm font-semibold text-secondary-adaptive">
                      Todos bienvenidos
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-base group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-black text-primary-adaptive mb-2">
                      Dinámicos
                    </div>
                    <div className="text-sm font-semibold text-secondary-adaptive">
                      Siempre creciendo
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <RotatingPhoto
              images={[
                { src: "/images/slide/image1.jpg", alt: "Pastor predicando" },
                { src: "/images/slide/image2.jpg", alt: "Grupo pequeño" },
                { src: "/images/slide/image3.jpg", alt: "Comunidad sirviendo" },
                { src: "/images/slide/image1.jpg", alt: "Grupo pequeño" },
                { src: "/images/slide/image2.jpg", alt: "Grupo pequeño" },
                { src: "/images/slide/image3.jpg", alt: "Comunidad sirviendo" },
                { src: "/images/slide/image1.jpg", alt: "Grupo pequeño" },
                { src: "/images/slide/image2.jpg", alt: "Grupo pequeño" },
                { src: "/images/slide/image3.jpg", alt: "Comunidad sirviendo" },
                { src: "/images/slide/image3.jpg", alt: "Comunidad sirviendo" },
              ]}
              badgeText="¡Somos familia!"
              badgeIcon={<Sparkles className="w-5 h-5 inline mr-2" />}
              badgePosition="top-right"
              interval={1000}
            />
            {/* <div className="relative">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <img
            src="/images/slide/image1.jpg"
            alt="Pastor predicando"
            width={280}
            height={350}
            className="rounded-2xl shadow-xl object-cover border-4 border-adaptive hover:scale-105 transition-transform"
          />
          <img
            src="/images/slide/image2.jpg"
            alt="Grupo pequeño"
            width={280}
            height={200}
            className="rounded-2xl shadow-xl object-cover border-4 border-adaptive hover:scale-105 transition-transform"
          />
        </div>
        <div className="space-y-6 mt-12">
          <img
            src="/images/slide/image3.jpg"
            alt="Comunidad sirviendo"
            width={280}
            height={200}
            className="rounded-2xl shadow-xl object-cover border-4 border-adaptive hover:scale-105 transition-transform"
          />
          <img
            src="/images/slide/image1.jpg"
            alt="Equipo de adoración"
            width={280}
            height={350}
            className="rounded-2xl shadow-xl object-cover border-4 border-adaptive hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <div className="absolute -top-6 -left-6 rounded-full font-black shadow-xl">
        <IconBadge
          icon={<Sparkles className="w-5 h-5 inline mr-2" />}
          textSize="text-md"
        >
          ¡Somos familia!
        </IconBadge>
      </div>
    </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
