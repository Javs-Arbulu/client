import {
  Heart,
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
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black">Nueva Casa</span>
                <div className="text-xs text-cyan-300 font-semibold">
                  IGLESIA CRISTIANA
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-8 font-medium leading-relaxed">
              Una iglesia joven y vibrante comprometida con transformar vidas y
              comunidades a través del amor de Cristo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-14 h-14 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
              >
                <Facebook className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
              >
                <Instagram className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
              >
                <Youtube className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black mb-6 text-xl">Servicios</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Domingos 9:00 AM</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Domingos 11:00 AM</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Miércoles 7:00 PM</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Viernes 7:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-6 text-xl">Enlaces</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-300 transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Sobre nosotros</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-300 transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Ministerios</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-300 transition-colors font-medium flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Eventos</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-300 transition-colors font-medium flex items-center space-x-2"
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
              <div className="flex items-start space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="font-medium">
                  Av. Principal 123, Ciudad, Estado 12345
                </span>
              </div>
              <div className="flex items-center space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-cyan-300 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span className="font-medium">info@vidanueva.org</span>
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
