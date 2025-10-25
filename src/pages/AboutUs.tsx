import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Target, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-accent">Prabanjam Jewelry</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A legacy of trust, quality, and excellence in precious metals and jewelry since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                  alt="Jewelry craftsmanship"
                  className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
                />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Prabanjam Jewelry Pvt Ltd has been at the forefront of the precious metals industry, 
                  providing exceptional quality silver, gold, and diamond jewelry to our valued customers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a commitment to transparency, ethical sourcing, and customer satisfaction, 
                  we have built a reputation as a trusted partner for both retail customers and investors.
                </p>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 animate-scale-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide the finest quality precious metals and jewelry while maintaining the highest 
                  standards of integrity and customer service.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred destination for precious metals trading and 
                  investment in the region.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, transparency, quality, and customer-centricity form the foundation 
                  of everything we do.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
