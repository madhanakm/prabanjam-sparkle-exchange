import { Shield, TrendingUp, Clock, Award, HeartHandshake, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Certified Quality",
    description: "All products are hallmarked and certified for authenticity and purity.",
    gradient: "from-luxury-gold/20 to-yellow-500/20",
  },
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Competitive returns on investments with transparent pricing and minimal charges.",
    gradient: "from-luxury-silver/20 to-gray-400/20",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service to address all your queries and concerns.",
    gradient: "from-luxury-gold/20 to-yellow-500/20",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Over 25 years of excellence and trust in precious metals and jewelry.",
    gradient: "from-luxury-silver/20 to-gray-400/20",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Your satisfaction is our priority with personalized service and care.",
    gradient: "from-luxury-gold/20 to-yellow-500/20",
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    description: "Bank-grade security for all your investments and purchases.",
    gradient: "from-luxury-silver/20 to-gray-400/20",
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold bg-clip-text text-transparent">
            Why Choose Prabanjam
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience excellence in every aspect of precious metal investments and luxury jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-luxury-gold/50 transition-all duration-500 group h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-luxury-gold to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-background" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-luxury-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
