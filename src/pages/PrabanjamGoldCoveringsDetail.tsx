import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Shield, Award, Users, ArrowRight, CheckCircle, MapPin, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "@/config/api";

const PrabanjamGoldCoveringsDetail = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await api.get('/company-gallery/prabanjam-gold-covering');
      setGalleryImages(response.data);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setCurrentImage(galleryImages[prevIndex]);
  };
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
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                <Factory className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Prabanjam <span className="text-accent">Gold Coverings</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Premium gold plating and covering services with precision, quality, and excellence in every finish.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Location */}
            <Card className="p-8 md:p-12 mb-16">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-3xl font-bold text-foreground">Our Location</h3>
              </div>
              <div className="max-w-md mx-auto">
                <Card className="p-6 border-accent/20">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Main Office</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">No.133, Bharathiar Road, Maniyakarampalayam, Ganapathy, Coimbatore -641006</p>
                    </div>
                    <p className="text-sm text-muted-foreground">📞 +91 98422 44014</p>
                  </div>
                </Card>
              </div>
            </Card>

            {/* About */}
            <Card className="p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">About Prabanjam Gold Coverings</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Prabanjam Gold Coverings specializes in premium gold plating and covering services, 
                serving both individual customers and industrial clients. Our state-of-the-art facility 
                and experienced technicians ensure superior quality finishes for all applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From jewelry restoration to industrial component coating, we provide comprehensive 
                gold covering solutions with precision, reliability, and exceptional customer service.
              </p>
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

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our <span className="text-accent">Photos</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See our gold covering work and facility in action
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="aspect-square rounded-lg overflow-hidden animate-fade-in bg-gray-100 cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }} onClick={() => openLightbox(image, index)}>
                    <img 
                      src={image.image_url} 
                      alt={image.title || 'Gallery image'}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      title={image.description || image.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500"><span>Image not available</span></div>`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.image_url}
              alt={currentImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-1">{currentImage.title}</h3>
              {currentImage.description && (
                <p className="text-sm opacity-90">{currentImage.description}</p>
              )}
              <p className="text-xs opacity-70 mt-2">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PrabanjamGoldCoveringsDetail;