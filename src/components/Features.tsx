import { Shield, TrendingUp, Users, Award, HeartHandshake, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Building2,
    title: "Diversified Portfolio",
    description: "Multiple business verticals across finance, real estate, jewelry, and hospitality sectors.",
    gradient: "from-luxury-gold/20 to-yellow-500/20",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth",
    description: "Consistent business expansion and sustainable growth across all group companies.",
    gradient: "from-luxury-silver/20 to-gray-400/20",
  },
  {
    icon: Shield,
    title: "Trusted Brand",
    description: "Established reputation built on transparency, reliability, and ethical business practices.",
    gradient: "from-luxury-gold/20 to-yellow-500/20",
  },
  {
    icon: Award,
    title: "Industry Excellence",
    description: "Leading market position with over 8 years of excellence across multiple sectors.",
    gradient: "from-luxury-silver/20 to-gray-400/20",
  },
  {
    icon: HeartHandshake,
    title: "Customer Centric",
    description: "Dedicated to delivering exceptional value and service across all business operations.",
    gradient: "from-luxury-gold/20 to-yellow-500/20",
  },
  {
    icon: Users,
    title: "Strong Network",
    description: "Extensive network of satisfied customers, partners, and stakeholders across regions.",
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
            Why Choose Prabanjam Group
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience excellence across diverse business sectors with our commitment to quality and innovation
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
