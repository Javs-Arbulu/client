import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNegro from "../../assets/logo-negro-navbar.png";
import { NavItem } from "./navItem";
import { ROUTES, EXTERNAL_LINKS } from "../../routes/routes.constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: ROUTES.ABOUT, label: "Acerca de Nueva Casa" },
    {
      label: "Ministerios",
      children: [
        { href: ROUTES.JOVENES, label: "Jóvenes" },
        { href: ROUTES.NINOS, label: "Niños" },
        { href: ROUTES.MATRIMONIOS, label: "Matrimonios" },
      ],
    },
    { href: ROUTES.EVENTOS, label: "Eventos" },
    { href: ROUTES.CONTACTO, label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2">
          <img src={logoNegro} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>

        {/* Live */}
        <div className="hidden md:block">
          <a
            href={EXTERNAL_LINKS.LIVE_STREAM}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition hover:scale-105 active:scale-100"
          >
            Ver en vivo
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-700 md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-6 space-y-2 animate-fade-in">
          {links.map((link) =>
            link.children ? (
              <details key={link.label} className="group">
                <summary className="cursor-pointer py-2 text-gray-800 font-semibold">
                  {link.label}
                </summary>
                <div className="pl-4 mt-2 space-y-1">
                  {link.children.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className="block text-gray-600 py-1 hover:text-blue-600"
                      onClick={() => setOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={link.href}
                to={link.href || "/"}
                className="block py-2 text-gray-800 font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={EXTERNAL_LINKS.LIVE_STREAM}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Ver en vivo
          </a>
        </div>
      )}
    </header>
  );
}
