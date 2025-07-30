import * as React from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  children: ReactNode;
  textSize?: string; // Ejemplo: "text-sm", "text-lg"
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  children,
  textSize = "text-lg", // valor por defecto
  className,
  ...props
}) => {
  return (
    <Badge
      className={cn(
        "bg-primary text-muted hover:bg-primary-600 mb-6 px-6 py-3 font-bold border-0 inline-flex items-center",
        textSize,
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Badge>
  );
};
