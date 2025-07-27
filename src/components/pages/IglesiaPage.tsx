import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServiciosSection from "@/components/sections/ServiciosSection";
import NosotrosSection from "@/components/sections/NosotrosSection";
import ConectaSection from "@/components/sections/ConectaSection";
import CTASection from "@/components/sections/CTASection";

export default function IglesiaPage() {
  return (
    <Layout>
      <HeroSection />
      <ServiciosSection />
      <NosotrosSection />
      <ConectaSection />
      <CTASection />
    </Layout>
  );
}
