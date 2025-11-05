import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gem, MapPin, Download, Eye, Target, Building } from "lucide-react";

const PrabanjamJewelleryDetail = () => {
  const branches = [
    { name: "Flagship Store", address: "Main Bazaar, Coimbatore", phone: "+91 98765 43230" },
    { name: "Manufacturing Unit", address: "Industrial Estate, Coimbatore", phone: "+91 98765 43231" },
    { name: "Wholesale Division", address: "Commercial Complex, Chennai", phone: "+91 98765 43232" }
  ];

  const galleryImages = [
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
              <Gem className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Prabanjam <span className="text-accent">Jewellery Limited</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Flagship jewelry company specializing in traditional and contemporary designs
            </p>
            <Button 
              onClick={() => window.open('/brochures/prabanjam-jewellery-brochure.pdf', '_blank')}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">About Prabanjam Jewellery Limited</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Established in 2015, Prabanjam Jewellery Limited has been at the forefront of the jewelry 
                industry, combining traditional craftsmanship with contemporary designs. Our in-house 
                manufacturing facility ensures the highest quality standards in gold, silver, and diamond jewelry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intricate traditional South Indian jewelry to modern contemporary pieces, we cater to 
                diverse tastes and preferences. Our commitment to purity, craftsmanship, and customer 
                satisfaction has established us as a trusted name in the jewelry industry across Tamil Nadu.
              </p>
            </Card>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted jewelry brand in South India, preserving traditional artistry 
                  while embracing modern design innovations, and creating timeless pieces that celebrate 
                  life's precious moments.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To craft exquisite jewelry pieces using the finest materials and traditional techniques, 
                  while providing exceptional customer service and maintaining the highest standards of 
                  purity, quality, and ethical business practices.
                </p>
              </Card>
            </div>

            {/* Branches */}
            <Card className="p-8 md:p-12 mb-16">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-3xl font-bold text-foreground">Our Locations</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {branches.map((branch, index) => (
                  <Card key={index} className="p-6 border-accent/20">
                    <h4 className="text-xl font-semibold text-foreground mb-3">{branch.name}</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">📞 {branch.phone}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Gallery */}
            <Card className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">Gallery</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrabanjamJewelleryDetail;