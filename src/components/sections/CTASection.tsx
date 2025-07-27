import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, Phone, ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 dark:opacity-60">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,255,255,0.08) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 dark:from-cyan-400/50 dark:to-blue-500/50 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-52 h-52 bg-gradient-to-r from-blue-300/25 to-cyan-400/25 dark:from-blue-400/45 dark:to-cyan-500/45 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 text-slate-800 dark:text-slate-900 hover:from-cyan-400 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 mb-8 px-6 py-3 text-lg font-bold shadow-lg dark:shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 mr-2" />
            Tu momento es ahora
          </Badge>

          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-white dark:text-slate-100">
            ¿Listo para dar el
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-200 dark:to-blue-300 bg-clip-text text-transparent">
              {" "}
              siguiente paso?
            </span>
          </h2>

          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90 font-medium leading-relaxed text-slate-200 dark:text-slate-300">
            Te invitamos a ser parte de nuestra familia. Ven como eres, crece
            con nosotros y descubre el increíble plan que Dios tiene para tu
            vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-300 to-blue-400 hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 text-slate-800 dark:text-slate-900 px-10 py-4 text-lg font-black shadow-xl hover:shadow-2xl dark:shadow-cyan-500/30 dark:hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Planifica tu visita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white dark:border-slate-200 text-white dark:text-slate-100 hover:bg-white hover:text-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900 px-10 py-4 text-lg font-black bg-transparent shadow-xl hover:shadow-2xl dark:shadow-slate-500/30 dark:hover:shadow-slate-500/50 transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" />
              Contáctanos
            </Button>
          </div>

          <div className="max-w-lg mx-auto bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-600/40 shadow-lg dark:shadow-slate-900/50">
            <p className="text-lg mb-6 opacity-90 font-semibold text-white dark:text-slate-200">
              Recibe nuestras actualizaciones semanales
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/20 dark:bg-slate-700/40 border-white/30 dark:border-slate-500/40 text-white dark:text-slate-100 placeholder:text-white/70 dark:placeholder:text-slate-400 font-medium focus:border-cyan-300 dark:focus:border-cyan-400"
              />
              <Button className="bg-gradient-to-r from-cyan-300 to-blue-400 hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 text-slate-800 dark:text-slate-900 font-bold px-6 shadow-lg dark:shadow-cyan-500/30">
                <Mail className="w-4 h-4 mr-2" />
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
