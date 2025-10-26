import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Prabanjam Jewelry has been my trusted partner for gold investments. Their transparency and quality are unmatched.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Investor",
    content: "The public share offering was a game-changer. I'm proud to be a shareholder of such a prestigious company.",
    rating: 5,
  },
  {
    name: "Arun Patel",
    role: "Jewelry Enthusiast",
    content: "Exquisite craftsmanship and genuine precious metals. Every piece tells a story of luxury and trust.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-luxury-gold/50 transition-all duration-500 hover:scale-105 group">
                <Quote className="w-12 h-12 text-luxury-gold/20 absolute top-4 right-4 group-hover:rotate-12 transition-transform duration-500" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                <p className="text-foreground/90 mb-6 italic relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
