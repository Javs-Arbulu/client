import { useState } from "react";
import { Link } from "react-router-dom";

type LinkType = {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
  external?: boolean;
};

export const NavItem = ({
  href,
  label,
  children,
  external = false,
}: LinkType) => {
  const [isOpen, setIsOpen] = useState(false);

  if (children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="text-gray-800 text-lg font-semibold flex items-center gap-1">
          {label}
        </button>

        {isOpen && (
          <div className="absolute z-50 bg-white top-full rounded-lg shadow-lg w-48 overflow-hidden animate-fade-in">
            {children.map((sub) => (
              <Link
                key={sub.href}
                to={sub.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition-colors"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={href || "/"}
      className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition-colors"
    >
      {label}
    </Link>
  );
};
