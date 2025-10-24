import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gem, Diamond, Crown, TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-luxury-cream pt-20">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-sm font-medium text-luxury-navy">Now Offering Public Shares</span>
            </div>

            {/* Main heading */}
            <div>
              <p className="text-luxury-navy/70 text-lg mb-2 font-medium">Indulge in Our</p>
              <h1 className="font-rubik text-5xl md:text-6xl lg:text-7xl font-bold text-luxury-navy leading-tight">
                EXQUISITE
                <span className="block bg-gradient-gold bg-clip-text text-transparent">JEWELRY</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-luxury-navy/60 text-lg max-w-xl leading-relaxed">
              Experience excellence in premium silver & gold trading. We offer silver selling, 
              exchange services, and old gold reselling with unmatched quality and trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-luxury-navy hover:bg-luxury-navy/90 text-white font-semibold px-8 shadow-elegant hover:scale-105 transition-all"
              >
                Order Now
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-luxury-navy hover:bg-luxury-navy/5 font-semibold group"
              >
                Explore More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 pt-8">
              <div className="bg-luxury-gold/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-luxury-gold/30">
                <div className="flex items-center gap-2 text-luxury-navy font-bold text-2xl mb-1">
                  <TrendingUp className="w-6 h-6 text-luxury-gold" />
                  100%
                </div>
                <p className="text-luxury-navy/60 text-sm">Pure Gold</p>
              </div>
              <div className="bg-luxury-gold/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-luxury-gold/30">
                <div className="flex items-center gap-2 text-luxury-navy font-bold text-2xl mb-1">
                  <Users className="w-6 h-6 text-luxury-gold" />
                  500+
                </div>
                <p className="text-luxury-navy/60 text-sm">Happy Clients</p>
              </div>
              <div className="bg-luxury-gold/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-luxury-gold/30">
                <div className="flex items-center gap-2 text-luxury-navy font-bold text-2xl mb-1">
                  <Award className="w-6 h-6 text-luxury-gold" />
                  15+
                </div>
                <p className="text-luxury-navy/60 text-sm">Years Trust</p>
              </div>
            </div>
          </div>

          {/* Right Content - Organic Shape with Jewelry */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Organic curved shape */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute -right-20 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-luxury-gold/40 to-luxury-gold/60 animate-float"
                style={{ 
                  animationDuration: "8s",
                }}
              ></div>
            </div>

            {/* Floating jewelry elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Diamond 
                  className="absolute top-[15%] right-[20%] w-20 h-20 text-luxury-gold drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "0s", animationDuration: "4s" }} 
                />
                <Gem 
                  className="absolute top-[40%] right-[35%] w-32 h-32 text-luxury-gold drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "1s", animationDuration: "5s" }} 
                />
                <Crown 
                  className="absolute top-[60%] right-[15%] w-24 h-24 text-luxury-gold drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "2s", animationDuration: "6s" }} 
                />
                <Sparkles 
                  className="absolute top-[25%] right-[45%] w-16 h-16 text-luxury-gold/70 drop-shadow-xl animate-float" 
                  style={{ animationDelay: "1.5s", animationDuration: "4.5s" }} 
                />
              </div>
            </div>

            {/* Social media icons */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
              <div className="w-10 h-10 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-luxury-gold"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-luxury-gold"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-luxury-gold"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-luxury-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
