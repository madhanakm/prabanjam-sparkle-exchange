import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "Rajesh Kumar",
      position: "Chairman & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "With over 25 years of experience in the precious metals industry, Rajesh leads our strategic vision and growth initiatives.",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "A seasoned finance professional with expertise in investment management and corporate strategy.",
      linkedin: "#"
    },
    {
      name: "Amit Patel",
      position: "Director of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Brings extensive operational excellence and process optimization experience to drive efficiency.",
      linkedin: "#"
    },
    {
      name: "Sunita Reddy",
      position: "Independent Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "An accomplished business leader with a strong background in corporate governance and compliance.",
      linkedin: "#"
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
              Board of <span className="text-accent">Directors</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the visionary leaders steering Prabanjam Jewelry towards continued excellence
            </p>
          </div>
        </div>
      </section>

      {/* Directors Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {directors.map((director, index) => (
                <Card 
                  key={director.name}
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={director.image}
                        alt={director.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {director.name}
                      </h3>
                      <p className="text-accent font-semibold mb-4">{director.position}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {director.bio}
                      </p>
                      <div className="flex gap-3">
                        <a 
                          href={director.linkedin}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label="LinkedIn profile"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href={`mailto:${director.name.toLowerCase().replace(' ', '.')}@prabanjam.com`}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Governance Section */}
            <Card className="mt-16 p-8 md:p-12 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Corporate Governance
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Board of Directors is committed to maintaining the highest standards of corporate 
                governance, ensuring transparency, accountability, and ethical conduct in all our operations.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-2">Transparency</h4>
                  <p className="text-sm text-muted-foreground">Clear communication with all stakeholders</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-2">Accountability</h4>
                  <p className="text-sm text-muted-foreground">Responsible decision-making and reporting</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-2">Ethics</h4>
                  <p className="text-sm text-muted-foreground">Unwavering commitment to ethical practices</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoardOfDirectors;
