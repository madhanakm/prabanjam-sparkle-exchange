import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-luxury">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Now Offering Public Shares</span>
          </div>

          {/* Main heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Prabanjam Jewelry
            <span className="block text-accent mt-2">Pvt Ltd</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your Trusted Partner in Premium Silver & Gold Trading
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Experience excellence in silver selling, exchange services, and old gold reselling. 
            Now offering exclusive investment opportunities through public shares.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-gold/70 transition-all duration-300 hover:scale-105">
              Explore Investment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/20 bg-card/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
