import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, ShoppingBag, Factory, Gem } from "lucide-react";

const GroupOfCompanies = () => {
  const companies = [
    {
      icon: Gem,
      name: "Prabanjam Jewelry Pvt Ltd",
      type: "Parent Company",
      description: "Leading precious metals trading and jewelry retail company specializing in gold, silver, and diamond products.",
      services: ["Retail Jewelry", "Precious Metals Trading", "Gold Exchange", "Investment Advisory"]
    },
    {
      icon: Factory,
      name: "Prabanjam Manufacturing Unit",
      type: "Subsidiary",
      description: "State-of-the-art jewelry manufacturing facility producing high-quality gold and silver ornaments.",
      services: ["Custom Manufacturing", "Bulk Production", "Quality Assurance", "Design Services"]
    },
    {
      icon: ShoppingBag,
      name: "Prabanjam Retail Chain",
      type: "Subsidiary",
      description: "Network of premium jewelry showrooms across multiple cities, providing exceptional customer experience.",
      services: ["Multi-location Stores", "Premium Service", "Collection Showcase", "Customer Care"]
    },
    {
      icon: Building2,
      name: "Prabanjam Investments",
      type: "Subsidiary",
      description: "Investment arm focusing on precious metals portfolio management and wealth creation for clients.",
      services: ["Portfolio Management", "Wealth Advisory", "Market Analysis", "Investment Products"]
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
              Group of <span className="text-accent">Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A diversified portfolio of businesses united by excellence in the precious metals industry
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Business Portfolio
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Prabanjam Group encompasses a comprehensive ecosystem of companies spanning 
                retail, manufacturing, and investment services in the precious metals sector. 
                Our integrated approach ensures quality, reliability, and value across all touchpoints.
              </p>
            </Card>

            {/* Companies Grid */}
            <div className="space-y-8">
              {companies.map((company, index) => (
                <Card 
                  key={company.name}
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-accent/10 to-accent/5 p-8 flex items-center justify-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20">
                        <company.icon className="w-10 h-10 text-accent" />
                      </div>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {company.name}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                            {company.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {company.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {company.services.map((service) => (
                            <div 
                              key={service}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Synergy Section */}
            <Card className="mt-16 p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Strength in Integration
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our group structure creates powerful synergies, enabling us to control quality from 
                manufacturing to retail, provide competitive pricing, and deliver exceptional value 
                to our customers and stakeholders.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupOfCompanies;
