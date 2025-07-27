import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Target, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-50 min-h-screen">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-800 hover:from-cyan-400 hover:to-blue-500 mb-6 px-6 py-3 text-lg font-bold">
              <Heart className="w-5 h-5 mr-2" />
              Nuestra Historia
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Conoce más sobre
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Nueva Casa
              </span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Desde 2015, hemos sido una comunidad comprometida con llevar
              esperanza y amor a nuestra ciudad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                Nuestra Misión
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Ser una iglesia que transforma vidas a través del amor de
                Cristo, formando discípulos comprometidos que impacten sus
                comunidades con esperanza, fe y amor genuino.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Creemos en el poder transformador del evangelio y trabajamos
                incansablemente para crear un ambiente donde cada persona pueda
                encontrar su propósito divino y crecer espiritualmente.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/slide/image1.jpg"
                alt="Nuestra comunidad"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Auténticos
              </h3>
              <p className="text-slate-600">
                Creemos en relaciones genuinas y transparentes
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Relevantes
              </h3>
              <p className="text-slate-600">
                Mensaje actual que transforma vidas hoy
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Inclusivos
              </h3>
              <p className="text-slate-600">
                Todos son bienvenidos sin excepción
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Dinámicos
              </h3>
              <p className="text-slate-600">Siempre creciendo y adaptándonos</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
