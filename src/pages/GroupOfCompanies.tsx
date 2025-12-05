import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Coins, Factory, Gem, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GroupOfCompanies = () => {
  const existingCompanies = [
    {
      icon: Coins,
      name: "Sri Cashway Gold Finance",
      type: "Financial Services",
      description: "Secured gold loans with competitive interest rates, quick processing, and flexible repayment options across multiple branches.",
      services: ["Gold Loans", "Quick Processing", "Competitive Rates", "Flexible Repayment"],
      established: "2018",
      location: "Coimbatore - 3 Branches",
      detailLink: "/sri-cashway-detail"
    },
    {
      icon: Gem,
      name: "Prabanjam Jewellery Limited",
      type: "Retail & Dream Life Plan",
      description: "Jewellery showroom and Dream Life Plan operations offering traditional jewelry and structured savings programs.",
      services: ["Jewellery Showroom", "Dream Life Plan", "Gold Collections", "Investment Plans"],
      established: "2015",
      location: "Tamil Nadu",
      detailLink: "/prabanjam-jewellery-detail"
    },
    {
      icon: Factory,
      name: "Prabanjam Gold Covering",
      type: "Fashion & Manufacturing",
      description: "Fashion and covering jewellery services with premium quality finishes and custom designs.",
      services: ["Fashion Jewellery", "Gold Covering", "Custom Design", "Quality Finishes"],
      established: "2019",
      location: "Tamil Nadu",
      detailLink: "/prabanjam-gold-coverings-detail"
    },
    {
      icon: Building2,
      name: "Siruvani Complex (Prabanjam Group)",
      type: "Real Estate",
      description: "Commercial complex developed and operated by the group offering modern business facilities.",
      services: ["Commercial Spaces", "Business Facilities", "Property Development", "Complex Management"],
      established: "2020",
      location: "Coimbatore",
      detailLink: "/siruvani-complex-detail"
    },
    {
      icon: MapPin,
      name: "Prabanjam Resort (Ooty)",
      type: "Hospitality",
      description: "Resort & cottage facilities in Ooty providing luxury accommodation and hospitality services.",
      services: ["Resort Facilities", "Cottage Accommodation", "Tourism Services", "Event Hosting"],
      established: "2022",
      location: "Ooty, Tamil Nadu",
      detailLink: "/prabanjam-resorts-detail"
    }
  ];

  const upcomingVentures = [
    { name: "Prabanjam Construction", sector: "Real Estate" },
    { name: "Prabanjam Silver Factory", sector: "Manufacturing" },
    { name: "Prabanjam Textiles", sector: "Consumer Services" },
    { name: "Prabanjam Travels", sector: "Logistics" },
    { name: "Prabanjam Transports", sector: "Logistics" },
    { name: "Prabanjam Industrial Projects", sector: "Manufacturing" }
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
                Prabanjam Group of Companies is a diversified business conglomerate with interests 
                spanning financial services, real estate, jewelry retail & manufacturing, and hospitality. 
                Our commitment to excellence and customer satisfaction drives growth across all sectors.
              </p>
            </Card>

            {/* Existing Companies Grid */}
            <div className="space-y-8 mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">Existing <span className="text-accent">Businesses</span></h3>
              {existingCompanies.map((company, index) => (
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
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                              {company.type}
                            </span>
                            <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                              Est. {company.established}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            📍 {company.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {company.description}
                      </p>
                      <div className="mb-6">
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
                      <Link to={company.detailLink}>
                        <Button className="bg-accent hover:bg-accent/90 text-white">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Upcoming Ventures */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">Upcoming <span className="text-accent">Ventures</span></h3>
              <Card className="p-8 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
                <p className="text-muted-foreground mb-6">
                  Prabanjam Group is expanding into multiple sectors to strengthen the group's presence in real estate, manufacturing, logistics and consumer services:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingVentures.map((venture, index) => (
                    <div key={venture.name} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-accent/10">
                      <div>
                        <h4 className="font-semibold text-foreground">{venture.name}</h4>
                        <p className="text-sm text-muted-foreground">{venture.sector}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Synergy Section */}
            <Card className="mt-16 p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Strength in Integration
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diversified business portfolio creates synergies across sectors, enabling us to 
                provide comprehensive solutions, maintain high quality standards, and deliver 
                exceptional value to our customers and stakeholders across all business verticals.
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
