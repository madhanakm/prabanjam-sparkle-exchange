import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin as Resort, MapPin, Download, Eye, Target, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "@/config/api";

const PrabanjamResortsDetail = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await api.get('/company-gallery/prabanjam-resorts');
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

  const branches = [
    { name: "Main Resort", address: "Ooty Hills, Nilgiris District", phone: "+91 98422 44014" },
    { name: "Conference Center", address: "Ooty Hills, Nilgiris District", phone: "+91 96299 66662" }
  ];



  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
              <Resort className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Prabanjam <span className="text-accent">Resorts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Luxury resort destination in the scenic hills of Ooty
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => window.open('/brochures/brochure.pdf', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
              <Link to="/group-of-companies">
                <Button variant="outline">
                  View All Companies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">About Prabanjam Resorts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Established in 2026, Prabanjam Resorts offers a luxurious retreat in the breathtaking 
                hills of Ooty. Nestled amidst the pristine beauty of the Nilgiris, our resort provides 
                an perfect blend of modern amenities and natural serenity for discerning travelers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're planning a romantic getaway, family vacation, corporate retreat, or 
                special celebration, our resort offers world-class accommodation, dining, and 
                recreational facilities. Our commitment to hospitality excellence ensures every 
                guest experiences the magic of the hills in ultimate comfort and style.
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
                  To be the premier luxury resort destination in the Nilgiris, offering guests an 
                  unforgettable experience that combines natural beauty, exceptional service, and 
                  world-class amenities in perfect harmony.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional hospitality services in a sustainable manner, creating 
                  memorable experiences for our guests while preserving the natural beauty of 
                  the Nilgiris for future generations.
                </p>
              </Card>
            </div>

            {/* Facilities */}
            <Card className="p-8 md:p-12 mb-16">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-3xl font-bold text-foreground">Our Facilities</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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
            {galleryImages.length > 0 && (
              <Card className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-foreground mb-6">Photos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={image.id} className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer" onClick={() => openLightbox(image, index)}>
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
              </Card>
            )}
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

export default PrabanjamResortsDetail;