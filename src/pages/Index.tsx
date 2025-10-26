import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Investment from "@/components/Investment";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Investment />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
