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
import SectionWrapper from "@/components/SectionWrapper";

const SECTIONS = [
  { id: "hero", component: Hero, bgColor: "bg-deep-obsidian" },
  { id: "menu", component: Menu, bgColor: "bg-limestone" },
  { id: "productos", component: Products, bgColor: "bg-limestone" },
  { id: "chefs", component: Chefs, bgColor: "bg-limestone" },
  { id: "ambiance", component: Ambiance, bgColor: "bg-obsidian" },
  { id: "testimonios", component: Testimonials, bgColor: "bg-limestone" },
  { id: "eventos", component: Events, bgColor: "bg-obsidian" },
  { id: "reservar", component: Booking, bgColor: "bg-deep-obsidian" },
];

export default function Home() {
  return (
    <main className="relative bg-deep-obsidian">
      <Navbar />
      
      {SECTIONS.map((section, idx) => (
        <SectionWrapper 
          key={section.id} 
          index={idx} 
          total={SECTIONS.length}
          backgroundColor={section.bgColor}
        >
          <div id={section.id}>
            <section.component />
          </div>
        </SectionWrapper>
      ))}

      <footer id="contacto" className="relative z-[100] bg-deep-obsidian">
        <Footer />
      </footer>
    </main>
  );
}
