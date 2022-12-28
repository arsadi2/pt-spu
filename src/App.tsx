import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Keunggulan from "./components/Keunggulan";
import Navbar from "./components/Navbar";
import Produk from "./components/Produk";
import Tentang from "./components/Tentang";
import VisiMisi from "./components/VisiMisi";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen w-full bg-my-black text-white relative">
      <div className="w-full h-full absolute bg-body ">asd</div>
      <Navbar />
      <Hero />
      <Keunggulan />
      <Produk />
      <VisiMisi />
      <Tentang />
      <Footer />
    </div>
  );
};

export default App;
