import { TrendingUp, Users, Award, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Pure Gold Quality",
    color: "from-luxury-gold via-yellow-400 to-luxury-gold",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Satisfied Clients",
    color: "from-luxury-silver via-gray-300 to-luxury-silver",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Excellence",
    color: "from-luxury-gold via-yellow-400 to-luxury-gold",
  },
  {
    icon: DollarSign,
    value: "₹500Cr+",
    label: "Assets Under Management",
    color: "from-luxury-silver via-gray-300 to-luxury-silver",
  },
];

const Stats = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-luxury-silver/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-luxury-gold/50 transition-all duration-500 group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                    <stat.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
