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
      established: "2016",
      location: "Coimbatore - 3 Branches",
      detailLink: "/sri-cashway-detail"
    },
    {
      icon: Gem,
      name: "Prabanjam Jewellery Limited",
      type: "Retail & Dream Life Plan",
      description: "Jewellery showroom and Dream Life Plan operations offering traditional jewelry and structured savings programs.",
      services: ["Jewellery Showroom", "Dream Life Plan", "Gold Collections", "Investment Plans"],
      established: "2025",
      location: "Tamil Nadu",
      detailLink: "/prabanjam-jewellery-detail"
    },
    {
      icon: Factory,
      name: "Prabanjam Gold Covering",
      type: "Fashion & Manufacturing",
      description: "Fashion and covering jewellery services with premium quality finishes and custom designs.",
      services: ["Fashion Jewellery", "Gold Covering", "Custom Design", "Quality Finishes"],
      established: "2025",
      location: "Tamil Nadu",
      detailLink: "/prabanjam-gold-coverings-detail"
    },
    {
      icon: Building2,
      name: "Siruvani Complex (Prabanjam Group)",
      type: "Real Estate",
      description: "Commercial complex developed and operated by the group offering modern business facilities.",
      services: ["Commercial Spaces", "Business Facilities", "Property Development", "Complex Management"],
      established: "2019",
      location: "Coimbatore",
      detailLink: "/siruvani-complex-detail"
    },
    {
      icon: MapPin,
      name: "Prabanjam Resort (Ooty)",
      type: "Hospitality",
      description: "Resort & cottage facilities in Ooty providing luxury accommodation and hospitality services.",
      services: ["Resort Facilities", "Cottage Accommodation", "Tourism Services", "Event Hosting"],
      established: "2026",
      location: "Ooty, Tamil Nadu",
      detailLink: "/prabanjam-resorts-detail"
    }
  ];

  const upcomingVentures = [
    { 
      name: "Prabanjam Construction", 
      sector: "Real Estate", 
      year: "2026-27",
      description: "Residential building construction, including land purchasing and home-building services, headquartered in Coimbatore."
    },
    { 
      name: "Prabanjam Silver Factory", 
      sector: "Manufacturing", 
      year: "2026",
      description: "Manufacturing unit dedicated to high-quality silver ornaments production to meet rising market demands."
    },
    { 
      name: "Prabanjam Industrial", 
      sector: "Manufacturing", 
      year: "2027",
      description: "Industrial operations expanding the group's manufacturing capabilities across multiple sectors."
    },
    { 
      name: "Prabanjam Textiles", 
      sector: "Consumer Services", 
      year: "2027",
      description: "Textile manufacturing and retail operations to diversify the group's consumer product portfolio."
    },
    { 
      name: "Prabanjam Travels", 
      sector: "Logistics", 
      year: "2027",
      description: "Travel and tourism services complementing the hospitality division with comprehensive travel solutions."
    },
    { 
      name: "Prabanjam Transports", 
      sector: "Logistics", 
      year: "2027",
      description: "Transportation and logistics services supporting the group's expanding business operations."
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
                              Established Year: {company.established}
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
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20 mb-6">
                  <p className="text-muted-foreground mb-2">
                    Prabanjam Group is expanding into multiple sectors to strengthen the group's presence in real estate, manufacturing, logistics and consumer services.
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Total Group Asset Value: ₹17+ Crores (as of 2025)
                  </p>
                </Card>
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingVentures.map((venture, index) => (
                    <Card key={venture.name} className="p-6 hover:shadow-lg transition-all duration-300 border-accent/10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{venture.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                              {venture.sector}
                            </span>
                            <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                              Launch: {venture.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {venture.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Synergy Section */}
            <Card className="mt-16 p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Strength in Integration
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diversified business portfolio creates synergies across sectors, enabling us to 
                provide comprehensive solutions, maintain high quality standards, and deliver 
                exceptional value to our customers and stakeholders. With ₹17+ Crores in total assets 
                and ambitious expansion plans through 2027, we're building a strong foundation for long-term growth.
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
