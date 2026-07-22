import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="features">
        <Features />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="how-it-works">
  <CTA />
</section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}