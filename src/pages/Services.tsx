import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesComponent from "@/components/Services";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServicesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
