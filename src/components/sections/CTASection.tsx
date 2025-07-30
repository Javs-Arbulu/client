import { AnimatedButton } from "@/components/ui/animatedButton";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, Phone, ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 dark:opacity-60">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,255,255,0.08) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-brand rounded-full blur-3xl animate-pulse opacity-20"></div>
      <div
        className="absolute bottom-10 right-10 w-52 h-52 bg-brand rounded-full blur-3xl animate-pulse opacity-20"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-brand text-neutral-800 hover:opacity-90 mb-8 px-6 py-3 text-lg font-bold shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Tu momento es ahora
          </Badge>

          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-white">
            ¿Listo para dar el
            <span className="text-brand"> siguiente paso?</span>
          </h2>

          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90 font-medium leading-relaxed text-neutral-200">
            Te invitamos a ser parte de nuestra familia. Ven como eres, crece
            con nosotros y descubre el increíble plan que Dios tiene para tu
            vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <AnimatedButton
              size="lg"
              className="bg-brand hover:opacity-90 text-neutral-800 px-10 py-4 text-lg font-black shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Planifica tu visita
              <ArrowRight className="w-5 h-5 ml-2" />
            </AnimatedButton>
            <AnimatedButton
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-10 py-4 text-lg font-black bg-transparent shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" />
              Contáctanos
            </AnimatedButton>
          </div>

          <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <p className="text-lg mb-6 opacity-90 font-semibold text-white">
              Recibe nuestras actualizaciones semanales
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-medium focus:border-primary-300"
              />
              <AnimatedButton className="bg-brand hover:opacity-90 text-neutral-800 font-bold px-6 shadow-lg">
                <Mail className="w-4 h-4 mr-2" />
                Suscribirse
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
