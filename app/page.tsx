import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Process from "../components/Process";
import Materials from "../components/Materials";
import Testimonials from "../components/Testimonials";
import Booking from "../components/Booking";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Services />
      <Process />
      <Materials />
      <Testimonials />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  );
}
