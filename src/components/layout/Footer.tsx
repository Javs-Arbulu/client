import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-white py-20 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div>
                <span className="text-2xl font-black">Nueva Casa</span>
                <div className="text-xs text-primary-adaptive font-semibold">
                  IGLESIA
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-8 font-medium leading-relaxed">
              Una iglesia joven y vibrante comprometida con transformar vidas a
              través del amor de Cristo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/IglesiaNuevaCasa"
                className="w-14 h-14 bg-slate-800 hover:bg-gradient-primary-to-secondary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
              >
                <Facebook className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/iglesianuevacasa"
                className="w-14 h-14 bg-slate-800 hover:bg-gradient-primary-to-secondary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
              >
                <Instagram className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@iglesianuevacasa"
                className="w-14 h-14 bg-slate-800 hover:bg-gradient-primary-to-secondary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
              >
                <Youtube className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black mb-6 text-xl">Servicios</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3 hover-text-primary transition-colors cursor-pointer">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Domingos 11:30 AM</span>
              </li>
              <li className="flex items-center space-x-3 hover-text-primary transition-colors cursor-pointer">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Sabados 5:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-6 text-xl">Enlaces</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover-text-primary transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Sobre nosotros</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover-text-primary transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Ministerios</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover-text-primary transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Eventos</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover-text-primary transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Recursos</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-6 text-xl">Contacto</h3>
            <div className="space-y-4 text-slate-400">
              <a
                href="https://maps.app.goo.gl/r11c3FmRnvpTz4mr7"
                className="flex items-start space-x-3 hover-text-primary transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="font-medium">
                  Juan Luis Hague 3545, S.M.P, Lima, Perú
                </span>
              </a>
              <div className="flex items-center space-x-3 hover-text-primary transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span className="font-medium">iglesianuevacasa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Iglesia Nueva Casa. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
