import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-adaptive transition-colors duration-300">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
