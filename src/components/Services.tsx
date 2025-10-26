import { Card } from "@/components/ui/card";
import { Coins, ArrowLeftRight, Gem, Shield, TrendingUp, Users, Award, Calculator, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance on precious metal investments. Strategic advice to maximize your portfolio returns.",
    color: "from-green-500/20 to-green-500/5"
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Safe and insured storage solutions for your precious metals. State-of-the-art security systems.",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Calculator,
    title: "Price Evaluation",
    description: "Accurate and transparent pricing for all precious metals. Real-time market rate calculations.",
    color: "from-purple-500/20 to-purple-500/5"
  }
];

const features = [
  {
    icon: Award,
    title: "Certified Quality",
    description: "All products come with authenticity certificates"
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Fast and efficient service delivery"
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Satisfaction",
    description: "100% customer satisfaction guarantee"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals at your service"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Free consultation to understand your needs"
  },
  {
    step: "02",
    title: "Evaluation",
    description: "Professional assessment of your precious metals"
  },
  {
    step: "03",
    title: "Transaction",
    description: "Secure and transparent transaction process"
  },
  {
    step: "04",
    title: "Completion",
    description: "Immediate payment and documentation"
  }
];

const Services = () => {
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
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
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

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h3>
            <p className="text-muted-foreground">What makes us the preferred choice for precious metal services</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Process</h3>
            <p className="text-muted-foreground">Simple and transparent process for all our services</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -translate-x-8"></div>
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today for a free consultation and discover the best solutions for your precious metal needs
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-gold transition-all duration-300">
            Get Free Consultation
          </button>
        </Card>
      </div>
    </section>
  );
};

export default Services;
