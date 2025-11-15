import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '@/config/api';

interface Slider {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text: string;
  button_link: string;
  is_active: boolean;
  sort_order: number;
}

const HeroSlider = () => {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSliders();
  }, []);

  useEffect(() => {
    if (sliders.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliders.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [sliders.length]);

  const fetchSliders = async () => {
    try {
      const response = await api.get('/sliders');
      setSliders(response.data);
    } catch (error) {
      console.error('Error fetching sliders:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliders.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
  };

  if (loading) {
    return (
      <section className="relative h-screen bg-gradient-to-br from-luxury-cream to-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </section>
    );
  }

  if (sliders.length === 0) {
    return (
      <section className="relative h-screen bg-gradient-to-br from-luxury-cream to-background flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Welcome to <span className="text-accent">Prabanjam</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Excellence in diversified business solutions
          </p>
        </div>
      </section>
    );
  }

  const currentSlider = sliders[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {sliders.map((slider, index) => (
        <div 
          key={slider.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          style={{ backgroundImage: `url(${slider.image_url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-200 animate-slide-up">
              {currentSlider.title}
            </h1>
            {currentSlider.subtitle && (
              <h2 className="text-2xl md:text-3xl text-accent mb-6 font-semibold transform transition-all duration-1000 delay-300 animate-slide-up">
                {currentSlider.subtitle}
              </h2>
            )}
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-400 animate-slide-up">
              {currentSlider.description}
            </p>
            {currentSlider.button_text && currentSlider.button_link && (
              <div className="transform transition-all duration-1000 delay-500 animate-slide-up">
                <Link to={currentSlider.button_link}>
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {currentSlider.button_text}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {sliders.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {sliders.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {sliders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlider;