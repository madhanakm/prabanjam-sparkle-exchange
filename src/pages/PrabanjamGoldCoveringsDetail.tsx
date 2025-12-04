import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Shield, Award, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrabanjamGoldCoveringsDetail = () => {
  const services = [
    {
      title: "Gold Plating Services",
      description: "Professional gold plating for jewelry, decorative items, and industrial components with various thickness options.",
      features: ["Multiple thickness options", "Uniform coating", "Durable finish", "Quick turnaround"]
    },
    {
      title: "Jewelry Covering",
      description: "Specialized gold covering services for jewelry restoration, enhancement, and custom finishing.",
      features: ["Restoration services", "Enhancement coating", "Custom finishes", "Quality assurance"]
    },
    {
      title: "Industrial Coating",
      description: "Industrial-grade gold coating solutions for electronic components, connectors, and precision instruments.",
      features: ["Electronic components", "Precision coating", "Industrial standards", "Bulk processing"]
    },
    {
      title: "Custom Finishes",
      description: "Bespoke gold finishing solutions tailored to specific requirements and applications.",
      features: ["Custom solutions", "Design consultation", "Prototype development", "Quality testing"]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure consistent, high-quality gold coverings that meet industry standards."
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Skilled technicians with years of experience in gold plating and covering techniques."
    },
    {
      icon: Factory,
      title: "Modern Equipment",
      description: "State-of-the-art plating equipment and technology for precise and efficient gold covering services."
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated customer service team providing consultation and support throughout the process."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Factory className="w-4 h-4" />
                  Manufacturing & Services
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Prabanjam <span className="text-accent">Gold Coverings</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Premium gold plating and covering services with precision, quality, and excellence in every finish.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                      Get Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/group-of-companies">
                    <Button size="lg" variant="outline">
                      View All Companies
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Industrial Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">99%</div>
                      <div className="text-sm text-muted-foreground">Quality Rate</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Prabanjam Gold Coverings
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Prabanjam Gold Coverings specializes in premium gold plating and covering services, 
                    serving both individual customers and industrial clients. Our state-of-the-art facility 
                    and experienced technicians ensure superior quality finishes for all applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From jewelry restoration to industrial component coating, we provide comprehensive 
                    gold covering solutions with precision, reliability, and exceptional customer service.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">ISO certified quality processes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced plating technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Experienced technical team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Custom solution development</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive gold covering solutions for diverse applications and industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-accent">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Excellence in gold covering services backed by quality, expertise, and innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a consultation and quote for your gold covering needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Get Quote Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/group-of-companies">
                <Button size="lg" variant="outline">
                  Explore Other Companies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrabanjamGoldCoveringsDetail;