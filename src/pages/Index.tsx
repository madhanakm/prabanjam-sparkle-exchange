import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Investment from "@/components/Investment";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Investment />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
