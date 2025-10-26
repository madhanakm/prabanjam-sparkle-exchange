import { Card } from "@/components/ui/card";
import { Coins, ArrowLeftRight, Gem, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Coins,
    title: "Silver Selling",
    description: "Premium quality silver products with certified purity. Best market rates guaranteed for all your silver purchases.",
    color: "from-accent/20 to-accent/5"
  },
  {
    icon: ArrowLeftRight,
    title: "Silver Exchange",
    description: "Seamless exchange services for your silver holdings. Quick, transparent, and hassle-free transactions.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Gem,
    title: "Old Gold Reselling",
    description: "Get the best value for your old gold jewelry. Fair pricing, instant evaluation, and immediate payment.",
    color: "from-accent/20 to-accent/5"
  }
];

const HomeServices = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions for all your precious metal trading needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card 
                className="p-8 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card backdrop-blur-sm group h-full"
              >
                {/* Icon container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* See All Services Button */}
        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            See All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;