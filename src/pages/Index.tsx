import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import Features from "@/components/Features";
import HomeServices from "@/components/HomeServices";
import BusinessAchievements from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import WelcomeModal from "@/components/WelcomeModal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <div className="animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 0.2s forwards' }}>
        <BoardOfDirectors />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInRight 1s ease-out 0.4s forwards' }}>
        <HomeServices />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInLeft 1s ease-out 0.6s forwards' }}>
        <Features />
      </div>

      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInLeft 1s ease-out 1s forwards' }}>
        <BusinessAchievements />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'slideInRight 1s ease-out 1.2s forwards' }}>
        <Testimonials />
      </div>
      <div className="animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 1.4s forwards' }}>
        <CTA />
      </div>
      <Footer />
      <FloatingButtons />
      <WelcomeModal />
    </div>
  );
};

export default Index;
