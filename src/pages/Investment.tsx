import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestmentComponent from "@/components/Investment";

const Investment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <InvestmentComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Investment;
