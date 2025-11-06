import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";


const BoardOfDirectors = () => {
  const directors = [
    {
      name: "K. Subramanian",
      position: "Managing Director",
      image: "/directors/subramanian.jpeg",
      bio: "Visionary leader with extensive experience in business development and strategic planning across multiple industry sectors.",
      linkedin: "#"
    },
    {
      name: "S. Shanthimani",
      position: "Director",
      image: "/directors/shanthimani.jpg",
      bio: "Accomplished professional with deep expertise in operations management and organizational development.",
      linkedin: "#"
    },
    {
      name: "V. Prabhakaran",
      position: "Director",
      image: "/directors/Prabhakaran.jpg",
      bio: "Experienced business leader specializing in financial management and corporate governance.",
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
              Meet the visionary leaders steering Prabanjam Group towards continued excellence
            </p>
          </div>
        </div>
      </section>

      {/* Directors Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {directors.map((director, index) => (
                <Card 
                  key={director.name}
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Passport size photo */}
                  <div className="text-center p-6">
                    <img 
                      src={director.image}
                      alt={director.name}
                      className="w-32 h-40 mx-auto object-cover rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {director.name}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{director.position}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {director.bio}
                    </p>
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
