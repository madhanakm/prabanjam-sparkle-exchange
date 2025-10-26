import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HomeServices from "@/components/HomeServices";
import Investment from "@/components/Investment";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
        <Hero />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 0.2s forwards' }}>
        <Stats />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInLeft 1s ease-out 0.4s forwards' }}>
        <Features />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInRight 1s ease-out 0.6s forwards' }}>
        <HomeServices />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 0.8s forwards' }}>
        <Investment />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInLeft 1s ease-out 1s forwards' }}>
        <Products />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInRight 1s ease-out 1.2s forwards' }}>
        <Testimonials />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 1.4s forwards' }}>
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
