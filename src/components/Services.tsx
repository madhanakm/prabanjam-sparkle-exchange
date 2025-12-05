import { Card } from "@/components/ui/card";
import { Coins, Building2, Gem, MapPin, TrendingUp, Users, Award, Shield, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Gem,
    title: "Prabanjam Jewellery Limited",
    description: "Premium gold, silver, and diamond jewelry with traditional craftsmanship and contemporary designs. Established jewelry manufacturing and retail operations.",
    color: "from-accent/20 to-accent/5",
    features: ["Traditional Craftsmanship", "Contemporary Designs", "Quality Certification", "Retail & Wholesale"]
  },
  {
    icon: Coins,
    title: "Sri Cashway Gold Finance",
    description: "Secured gold loans with competitive interest rates, quick processing, and flexible repayment options. Trusted financial services for immediate cash needs.",
    color: "from-yellow-500/20 to-yellow-500/5",
    features: ["Quick Loan Processing", "Competitive Rates", "Flexible Repayment", "Secure Transactions"]
  },
  {
    icon: Building2,
    title: "Siruvani Complex",
    description: "Premium commercial real estate with modern office spaces, retail outlets, and business facilities in prime Coimbatore locations.",
    color: "from-blue-500/20 to-blue-500/5",
    features: ["Prime Location", "Modern Amenities", "Business Facilities", "Flexible Spaces"]
  },
  {
    icon: Gem,
    title: "Gold Covering Works",
    description: "Professional gold plating and covering services for jewelry, decorative items, and industrial applications with premium quality finishes.",
    color: "from-orange-500/20 to-orange-500/5",
    features: ["Industrial Coating", "Jewelry Plating", "Custom Finishes", "Quality Assurance"]
  },
  {
    icon: MapPin,
    title: "Ooty Hospitality",
    description: "Luxury accommodation and hospitality services in the scenic Nilgiri hills with premium facilities and personalized guest experiences.",
    color: "from-green-500/20 to-green-500/5",
    features: ["Hill Station Resort", "Premium Facilities", "Event Hosting", "Tourism Services"]
  },
  {
    icon: TrendingUp,
    title: "Dream Life Plan",
    description: "Accessible investment opportunity starting at ₹100 per unit, designed for long-term wealth creation and financial security for all income groups.",
    color: "from-purple-500/20 to-purple-500/5",
    features: ["₹100 Starting Unit", "Long-term Growth", "Flexible Investment", "Wealth Creation"]
  }
];

const features = [
  {
    icon: Award,
    title: "Established Legacy",
    description: "8+ years of proven success across multiple business sectors"
  },
  {
    icon: Shield,
    title: "Trusted Operations",
    description: "Transparent business practices with reliable service delivery"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "5000+ satisfied customers across all business verticals"
  },
  {
    icon: TrendingUp,
    title: "Growth Vision",
    description: "Expanding portfolio with 6 upcoming ventures by 2025-27"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Free consultation to understand your business needs"
  },
  {
    step: "02",
    title: "Assessment",
    description: "Professional evaluation of requirements and solutions"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Seamless execution with transparent processes"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing support and relationship management"
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
            Diversified business group with 6 established companies and 6 upcoming ventures across multiple sectors in Coimbatore
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
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
                className="p-8 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card backdrop-blur-sm group h-full text-center"
              >
                {/* Icon container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">Active Companies</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">Upcoming Ventures</div>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose <span className="text-accent">Prabanjam Groups</span></h3>
            <p className="text-muted-foreground">What makes us the preferred choice across multiple business sectors</p>
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
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Approach</h3>
            <p className="text-muted-foreground">Systematic and professional approach across all business verticals</p>
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
            Join the Prabanjam Groups family and explore opportunities across our diversified business portfolio
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
