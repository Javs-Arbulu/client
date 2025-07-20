import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg";
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  size = "base",
  children,
  className = "",
  ...props
}) => {
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };
  return (
    <p className={`${sizes[size]} text-gray-700 ${className}`} {...props}>
      {children}
    </p>
  );
};
