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
        <button className="text-gray-900 dark:text-white text-sm lg:text-base xl:text-lg font-semibold flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap">
          {label}
          <span className="text-xs">▼</span>
        </button>

        {isOpen && (
          <div className="absolute z-50 bg-white dark:bg-gray-800 top-full left-0 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 w-44 lg:w-48 overflow-hidden transition-all duration-200">
            {children.map((sub) => (
              <Link
                key={sub.href}
                to={sub.href}
                className="block px-4 py-3 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-primary-400 transition-colors border-b border-gray-200 dark:border-gray-600 last:border-b-0"
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
        className="text-gray-900 dark:text-white text-sm lg:text-base xl:text-lg font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={href || "/"}
      className="text-gray-900 dark:text-white text-sm lg:text-base xl:text-lg font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
    >
      {label}
    </Link>
  );
};
