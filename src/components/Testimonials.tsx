import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = testimonials.length - 4; // Show 4 cards, so max is length - 4
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = testimonials.length - 4;
      return prev <= 0 ? maxSlides : prev - 1;
    });
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length, nextSlide]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/testimonials');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Fallback data
      setTestimonials([
        {
          name: "Rajesh Kumar",
          message: "Prabanjam Jewelry has been my trusted partner for gold investments. Their transparency and quality are unmatched.",
          rating: 5,
        },
        {
          name: "Priya Sharma", 
          message: "The public share offering was a game-changer. I'm proud to be a shareholder of such a prestigious company.",
          rating: 5,
        },
        {
          name: "Arun Patel",
          message: "Exquisite craftsmanship and genuine precious metals. Every piece tells a story of luxury and trust.",
          rating: 5,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-silver/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across the nation
          </p>
        </div>

        <div className="relative">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading testimonials...</p>
            </div>
          ) : (
            <>
              {/* Navigation Buttons - Outside */}
              <button 
                onClick={prevSlide}
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-accent/90 hover:bg-accent text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 z-20 flex items-center justify-center"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-accent/90 hover:bg-accent text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 z-20 flex items-center justify-center"
              >
                →
              </button>
              
              <div className="testimonial-slider overflow-hidden">
                <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                      <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-luxury-gold/50 transition-all duration-500 hover:scale-105 group h-full">
                        <Quote className="w-12 h-12 text-luxury-gold/20 absolute top-4 right-4 group-hover:rotate-12 transition-transform duration-500" />
                        
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                          ))}
                        </div>

                        <p className="text-foreground/90 mb-6 italic relative z-10">
                          "{testimonial.message}"
                        </p>

                        <div className="border-t border-border/50 pt-4">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: testimonials.length - 3 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-accent' : 'bg-accent/30'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
