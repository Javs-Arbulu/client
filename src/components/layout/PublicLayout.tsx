import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="pt-24">{children}</main> <Footer />
    </div>
  );
}
