import Layout from "@/components/layout/Layout";
import { AnimatedButton } from "@/components/ui/animatedButton";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactoPage() {
  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-800 hover:from-cyan-400 hover:to-blue-500 mb-6 px-6 py-3 text-lg font-bold">
              <Mail className="w-5 h-5 mr-2" />
              Contacto
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Conecta con
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {" "}
                nosotros
              </span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Estamos aquí para escucharte y acompañarte en tu caminar
              espiritual.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Información de contacto */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-6">
                    Información de Contacto
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">
                          Dirección
                        </h3>
                        <p className="text-slate-600">
                          Av. Principal 123, Ciudad, Estado 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">
                          Teléfono
                        </h3>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600">info@vidanueva.org</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black mb-6">
                    Horarios de Servicios
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-300" />
                      <span className="font-medium">Domingos 9:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-300" />
                      <span className="font-medium">Domingos 11:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-300" />
                      <span className="font-medium">Miércoles 7:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-300" />
                      <span className="font-medium">Viernes 7:30 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulario de contacto */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-black text-slate-900 mb-6">
                  Envíanos un mensaje
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nombre
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        className="bg-white border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Apellido
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu apellido"
                        className="bg-white border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      placeholder="Tu número de teléfono"
                      className="bg-white border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={6}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white"
                    />
                  </div>

                  <AnimatedButton
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </AnimatedButton>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
