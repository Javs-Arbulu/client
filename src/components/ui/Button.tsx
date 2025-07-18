import React from "react";

// ===== TIPOS =====
interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

interface ButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  type?: "button" | "submit" | "reset";
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
  target?: string;
  rel?: string;
}

// ===== ESTILOS BASE =====
const baseButtonClasses =
  "font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses = {
  primary:
    "bg-primary-600 text-inverse-text hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 hover:scale-105 active:scale-100",
  secondary:
    "bg-secondary-600 text-inverse-text hover:bg-secondary-700 focus:ring-secondary-500 active:bg-secondary-800 hover:scale-105 active:scale-100",
  accent:
    "bg-accent-600 text-inverse-text hover:bg-accent-700 focus:ring-accent-500 active:bg-accent-800 hover:scale-105 active:scale-100",
  outline:
    "bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-600 hover:text-inverse-text focus:ring-primary-500",
  ghost:
    "bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
};

// ===== COMPONENTE BUTTON =====
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) => {
  const classes = `
    ${baseButtonClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// ===== COMPONENTE LINK BUTTON =====
export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  external = false,
  target,
  rel,
  size = "md",
  className = "",
  ...props
}) => {
  const classes = `
    ${baseButtonClasses}
    ${sizeClasses[size]}
    ${variantClasses.primary}
    inline-block text-center no-underline
    ${className}
  `.trim();

  if (external) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};

// ===== BOTONES ESPECÍFICOS PARA LA IGLESIA =====
export const LiveStreamButton: React.FC<{
  href: string;
  className?: string;
}> = ({ href, className = "" }) => {
  return (
    <LinkButton
      href={href}
      external
      size="md"
      className={`bg-secondary-600 hover:bg-secondary-700 ${className}`}
    >
      🔴 Ver en vivo
    </LinkButton>
  );
};

export const PrayerButton: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ onClick, className = "" }) => {
  return (
    <Button
      onClick={onClick}
      variant="accent"
      size="md"
      className={`bg-divine-gold-600 hover:bg-divine-gold-700 ${className}`}
    >
      🙏 Oración
    </Button>
  );
};

export const DonationButton: React.FC<{ href: string; className?: string }> = ({
  href,
  className = "",
}) => {
  return (
    <LinkButton
      href={href}
      external
      size="lg"
      className={`bg-sacred-purple-600 hover:bg-sacred-purple-700 ${className}`}
    >
      💝 Donar
    </LinkButton>
  );
};

// ===== BOTONES DE ESTADO =====
export const SuccessButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}) => (
  <Button {...props} className="bg-success-500 hover:bg-success-600 text-white">
    {children}
  </Button>
);

export const WarningButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}) => (
  <Button {...props} className="bg-warning-500 hover:bg-warning-600 text-white">
    {children}
  </Button>
);

export const ErrorButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}) => (
  <Button {...props} className="bg-error-500 hover:bg-error-600 text-white">
    {children}
  </Button>
);

export const InfoButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}) => (
  <Button {...props} className="bg-info-500 hover:bg-info-600 text-white">
    {children}
  </Button>
);
