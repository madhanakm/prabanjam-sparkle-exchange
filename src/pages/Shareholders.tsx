import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Award, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Shareholders = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Potential",
      description: "Be part of our expanding business with strong market presence"
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Backed by tangible assets in precious metals and jewelry"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistent performance and transparent operations"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a community of investors who believe in our vision"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-accent">Shareholders</span> Information
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us in building a legacy of excellence in the precious metals industry
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Public Share Offering
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Prabanjam Jewelry Pvt Ltd is offering public shares, providing investors with an 
                opportunity to become stakeholders in a thriving precious metals business.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-2">Share Type</p>
                  <p className="text-2xl font-bold text-foreground">Common Stock</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-2">Minimum Investment</p>
                  <p className="text-2xl font-bold text-foreground">Contact Us</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-2">Expected Returns</p>
                  <p className="text-2xl font-bold text-foreground">Competitive</p>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Shareholder Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={benefit.title}
                    className="p-6 hover:shadow-elegant transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Interested in Becoming a Shareholder?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Contact our investment team to learn more about share offerings and opportunities
              </p>
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-gold transition-all duration-300">
                Contact Investment Team
              </button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shareholders;
