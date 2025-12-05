import { Card } from "@/components/ui/card";
import { Coins, Building2, Gem, MapPin, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const companies = [
  {
    icon: Coins,
    title: "Sri Cashway Gold Finance",
    description: "Short-term and long-term gold finance solutions with competitive rates and flexible terms.",
    color: "from-accent/20 to-accent/5",
    link: "/sri-cashway-detail"
  },
  {
    icon: Gem,
    title: "Prabanjam Jewellery Limited",
    description: "Jewellery showroom and Dream Life Plan operations offering traditional jewelry and structured savings programs.",
    color: "from-accent/20 to-accent/5",
    link: "/prabanjam-jewellery-detail"
  },
  {
    icon: Gem,
    title: "Prabanjam Gold Covering",
    description: "Fashion and covering jewellery services with premium quality finishes and custom designs.",
    color: "from-yellow-500/20 to-yellow-500/5",
    link: "/prabanjam-gold-coverings-detail"
  },
  {
    icon: Building2,
    title: "Siruvani Complex",
    description: "Commercial complex developed and operated by the group offering modern business facilities.",
    color: "from-primary/20 to-primary/5",
    link: "/siruvani-complex-detail"
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
            Our <span className="text-accent">Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Existing businesses across financial services, jewelry, real estate and hospitality sectors
          </p>
        </div>

        {/* Companies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {companies.map((company, index) => (
            <div
              key={company.title}
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <company.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {company.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {company.description}
                </p>
                <Link 
                  to={company.link}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </div>
          ))}
        </div>

        {/* See All Companies Button */}
        <div className="text-center">
          <Link to="/group-of-companies" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            View All Companies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;