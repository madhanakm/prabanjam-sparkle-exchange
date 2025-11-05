import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Factory, Shirt, Car, Truck } from "lucide-react";

const Upcoming = () => {
  const upcomingCompanies = [
    {
      name: "Prabanjam Constructions",
      icon: Building2,
      description: "Premium residential and commercial construction projects with modern architecture and sustainable building practices.",
      features: ["Luxury Apartments", "Commercial Complexes", "Villa Projects", "Infrastructure Development"],
      launchYear: "2025"
    },
    {
      name: "Prabanjam Silver Factory",
      icon: Factory,
      description: "State-of-the-art silver manufacturing facility producing high-quality silver products and jewelry.",
      features: ["Silver Jewelry Manufacturing", "Bullion Production", "Custom Silver Items", "Export Quality Products"],
      launchYear: "2025"
    },
    {
      name: "Prabanjam Textiles",
      icon: Shirt,
      description: "Premium textile manufacturing and retail chain offering quality fabrics and garments.",
      features: ["Premium Fabrics", "Ready-made Garments", "Custom Tailoring", "Wholesale & Retail"],
      launchYear: "2026"
    },
    {
      name: "Prabanjam Travels",
      icon: Car,
      description: "Comprehensive travel services including tour packages, hotel bookings, and travel consultancy.",
      features: ["Tour Packages", "Hotel Bookings", "Flight Reservations", "Travel Insurance"],
      launchYear: "2026"
    },
    {
      name: "Prabanjam Transports",
      icon: Truck,
      description: "Reliable logistics and transportation services for goods and passenger transport.",
      features: ["Goods Transportation", "Passenger Services", "Logistics Solutions", "Interstate Services"],
      launchYear: "2027"
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
              Future <span className="text-accent">Ventures</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expanding horizons with innovative business ventures and strategic growth plans
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Companies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming Business Ventures
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our strategic expansion plans include diverse business sectors to serve our community better
              </p>
            </div>

            <div className="grid gap-8">
              {upcomingCompanies.map((company, index) => (
                <Card 
                  key={company.name}
                  className="p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-6">
                        <company.icon className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{company.name}</h3>
                      <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        Expected Launch: {company.launchYear}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {company.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {company.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Investment Opportunity */}
            <Card className="p-8 md:p-12 mt-16 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Investment Opportunities
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of our growth story. Investment opportunities available for our upcoming ventures.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-gold hover:scale-105 transition-all duration-300">
                Learn More About Investment
              </button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Upcoming;