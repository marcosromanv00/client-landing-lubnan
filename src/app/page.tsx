import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Products from "@/components/sections/Products";
import Chefs from "@/components/sections/Chefs";
import Ambiance from "@/components/sections/Ambiance";
import Testimonials from "@/components/sections/Testimonials";
import Events from "@/components/sections/Events";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div id="menu">
        <Menu />
      </div>
      <div id="productos">
        <Products />
      </div>
      <div id="chefs">
        <Chefs />
      </div>
      <Ambiance />
      <div id="testimonios">
        <Testimonials />
      </div>
      <div id="eventos">
        <Events />
      </div>
      <div id="reservar">
        <Booking />
      </div>
      <footer id="contacto">
        <Footer />
      </footer>
    </main>
  );
}
