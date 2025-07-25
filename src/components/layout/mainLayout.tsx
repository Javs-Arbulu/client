import { type ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
