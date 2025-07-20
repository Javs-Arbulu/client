import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNegro from "../../../assets/logo-negro-navbar.png";
import logoClaro from "../../../assets/logo-claro-navbar.png";
import { NavItem } from "./sections/navItem";
import { ROUTES, EXTERNAL_LINKS } from "../../../routes/routes.constants";
import { DarkModeToggleCompact } from "../../ui/DarkModeToggle";

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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 backdrop-blur shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* logo */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <img
            src={logoNegro}
            alt="logo"
            className="h-8 sm:h-10 w-auto dark:hidden"
          />
          <img
            src={logoClaro}
            alt="logo"
            className="h-8 sm:h-10 w-auto hidden dark:block"
          />
          <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Nueva Casa
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center flex-1 justify-center">
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>

        {/* Live button and Dark Mode Toggle - hidden on small screens, shown on medium+ */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <DarkModeToggleCompact />
          <a
            href={EXTERNAL_LINKS.LIVE_STREAM}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border dark:bg-slate-800 border-white text-white font-semibold px-3 xl:px-4 py-2 rounded-lg hover:bg-slate-800 transition hover:scale-105 active:scale-100 text-sm xl:text-base whitespace-nowrap"
          >
            Ver en vivo
          </a>
        </div>

        {/* tablet nav for medium screens */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <DarkModeToggleCompact />
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-950 dark:text-white p-1"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile toggle and dark mode */}
        <div className="flex md:hidden items-center gap-2">
          <DarkModeToggleCompact />
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-600 dark:text-gray-300 p-1 flex-shrink-0"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile and tablet menu */}
      <div
        className={`
        lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-md border-t border-gray-200 dark:border-gray-600
        ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="px-4 py-4 space-y-3">
          {/* Show all links on mobile */}
          <div className="md:hidden space-y-3">
            {links.map((link) =>
              link.children ? (
                <details key={link.label} className="group">
                  <summary className="cursor-pointer py-3 text-gray-900 dark:text-white font-semibold text-base border-b border-gray-200 dark:border-gray-600 list-none">
                    <div className="flex items-center justify-between">
                      {link.label}
                      <span className="transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </div>
                  </summary>
                  <div className="pl-4 mt-3 space-y-2 pb-2">
                    {link.children.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block text-gray-600 dark:text-gray-300 py-2 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
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
                  className="block py-3 text-gray-900 dark:text-white font-semibold text-base border-b border-gray-200 dark:border-gray-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Show remaining links on tablet (md to lg) */}
          <div className="hidden md:block lg:hidden space-y-3">
            {links.map((link) =>
              link.children ? (
                <details key={link.label} className="group">
                  <summary className="cursor-pointer py-3 text-gray-900 dark:text-white font-semibold text-base border-b border-gray-200 dark:border-gray-600 list-none">
                    <div className="flex items-center justify-between">
                      {link.label}
                      <span className="transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </div>
                  </summary>
                  <div className="pl-4 mt-3 space-y-2 pb-2">
                    {link.children.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block text-gray-600 dark:text-gray-300 py-2 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
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
                  className="block py-3 text-gray-900 dark:text-white font-semibold text-base border-b border-gray-200 dark:border-gray-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Show live button when not shown in header */}
          <div className="pt-4 lg:hidden">
            <a
              href={EXTERNAL_LINKS.LIVE_STREAM}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-slate-950 border dark:bg-slate-800 border-white text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              Ver en vivo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
