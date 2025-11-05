import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Coins, Factory, MapPin, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-luxury-cream via-background to-accent/5 pt-20">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 to-transparent rounded-full blur-3xl animate-spin" style={{ animationDuration: "20s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-bounce" style={{ animationDuration: "2s", animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-accent/25 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "1.5s" }}></div>
        <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-accent/35 rounded-full animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "2s" }}></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full px-4 py-2">
              <Building2 className="w-4 h-4 text-luxury-gold" />
              <span className="text-sm font-medium text-luxury-navy">Diversified Business Group</span>
            </div>

            {/* Main heading with enhanced animations */}
            <div className="animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 0.3s forwards' }}>
              <p className="text-muted-foreground text-lg mb-4 font-medium animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 0.5s forwards' }}>Welcome to</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 0.7s forwards' }}>
                PRABANJAM
                <span className="block bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 0.9s forwards' }}>GROUP</span>
              </h1>
            </div>

            {/* Description with animation */}
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed animate-fade-in opacity-0" style={{ animation: 'fadeInUp 1s ease-out 1.1s forwards' }}>
              A diversified business conglomerate with expertise in financial services, real estate, 
              jewelry retail & manufacturing, and hospitality. Building trust through excellence across all sectors.
            </p>

            {/* CTA Buttons with staggered animation */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 1.3s forwards' }}>
              <Link to="/invest-now">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Invest Now
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-foreground hover:bg-accent/10 font-semibold group border border-accent/20 hover:border-accent/40"
                >
                  Explore More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats Cards with enhanced animations */}
            <div className="flex flex-wrap gap-4 pt-8">
              <div className="bg-accent/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-all duration-300 hover:scale-105 animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 1.5s forwards' }}>
                <div className="flex items-center gap-2 text-foreground font-bold text-2xl mb-1">
                  <Building2 className="w-6 h-6 text-accent" />
                  4+
                </div>
                <p className="text-muted-foreground text-sm">Companies</p>
              </div>
              <div className="bg-accent/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-all duration-300 hover:scale-105 animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 1.7s forwards' }}>
                <div className="flex items-center gap-2 text-foreground font-bold text-2xl mb-1">
                  <Users className="w-6 h-6 text-accent" />
                  5000+
                </div>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div className="bg-accent/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-all duration-300 hover:scale-105 animate-fade-in opacity-0" style={{ animation: 'slideInUp 1s ease-out 1.9s forwards' }}>
                <div className="flex items-center gap-2 text-foreground font-bold text-2xl mb-1">
                  <Award className="w-6 h-6 text-accent" />
                  8+
                </div>
                <p className="text-muted-foreground text-sm">Years Trust</p>
              </div>
            </div>
          </div>

          {/* Right Content - Full Width Organic Shape with Jewelry */}
          <div className="relative lg:h-[700px] h-[500px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Large organic curved shape */}
            <div className="absolute inset-0 overflow-visible">
              <div 
                className="absolute -right-40 lg:-right-60 top-1/2 -translate-y-1/2 w-[900px] lg:w-[1200px] h-[900px] lg:h-[1200px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-luxury-gold/40 via-luxury-gold/50 to-luxury-gold/60 animate-float shadow-2xl"
                style={{ 
                  animationDuration: "10s",
                }}
              ></div>
              {/* Secondary organic shape */}
              <div 
                className="absolute -right-20 lg:-right-40 top-1/2 -translate-y-1/2 w-[700px] lg:w-[1000px] h-[700px] lg:h-[1000px] rounded-[50%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-tr from-luxury-gold/30 to-luxury-gold/40 animate-float"
                style={{ 
                  animationDuration: "12s",
                  animationDelay: "2s"
                }}
              ></div>
            </div>

            {/* Floating business elements with enhanced animations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Coins 
                  className="absolute top-[10%] right-[15%] lg:right-[25%] w-16 h-16 lg:w-24 lg:h-24 text-luxury-gold drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "0s", animationDuration: "5s" }} 
                />
                <Building2 
                  className="absolute top-[35%] right-[30%] lg:right-[40%] w-24 h-24 lg:w-40 lg:h-40 text-luxury-gold drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "1s", animationDuration: "6s" }} 
                />
                <Factory 
                  className="absolute top-[65%] right-[10%] lg:right-[20%] w-20 h-20 lg:w-28 lg:h-28 text-luxury-gold drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "2s", animationDuration: "7s" }} 
                />
                <MapPin 
                  className="absolute top-[20%] right-[40%] lg:right-[50%] w-12 h-12 lg:w-20 lg:h-20 text-luxury-gold/70 drop-shadow-xl animate-float" 
                  style={{ animationDelay: "1.5s", animationDuration: "5.5s" }} 
                />
                <Coins 
                  className="absolute top-[50%] right-[5%] lg:right-[15%] w-14 h-14 lg:w-20 lg:h-20 text-luxury-gold/80 drop-shadow-2xl animate-float" 
                  style={{ animationDelay: "3s", animationDuration: "6s" }} 
                />
                <Building2 
                  className="absolute top-[75%] right-[35%] lg:right-[45%] w-10 h-10 lg:w-16 lg:h-16 text-luxury-gold/60 drop-shadow-xl animate-float" 
                  style={{ animationDelay: "2.5s", animationDuration: "5s" }} 
                />
              </div>
            </div>

            {/* Animated glow effect */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-[20%] lg:right-[30%] w-48 h-48 lg:w-72 lg:h-72 bg-luxury-gold/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Social media icons */}
            <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-luxury-gold"></div>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-luxury-gold"></div>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-luxury-gold"></div>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-navy/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-luxury-navy transition-all hover:scale-110 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-luxury-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
