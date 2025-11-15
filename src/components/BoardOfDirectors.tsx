import { Card } from "@/components/ui/card";

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "K. Subramanian",
      position: "Managing Director",
      image: "/directors/subramanian.jpeg",
      bio: "Visionary leader with extensive experience in business development and strategic planning across multiple industry sectors."
    },
    {
      name: "S. Shanthimani",
      position: "Director",
      image: "/directors/shanthimani.jpg",
      bio: "Accomplished professional with deep expertise in operations management and organizational development."
    },
    {
      name: "V. Prabhakaran",
      position: "Director",
      image: "/directors/Prabhakaran.jpg",
      bio: "Experienced business leader specializing in financial management and corporate governance."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-luxury-cream to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Board of <span className="text-accent">Directors</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionary leaders steering Prabanjam Group towards excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {directors.map((director, index) => (
              <Card 
                key={director.name}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 text-center p-6"
              >
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;