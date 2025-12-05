import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";

const milestones = [
  {
    icon: Building2,
    number: "2016",
    title: "Foundation & Early Achievements",
    description: "Early achievements and establishment of Prabanjam Group's core businesses",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: TrendingUp,
    number: "2018",
    title: "Business Expansion",
    description: "Expansion of Prabanjam Group activities and strengthening of finance and jewellery verticals",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    icon: Award,
    number: "2019",
    title: "Siruvani Complex Launch",
    description: "Launch and development of Siruvani Complex as a major group project",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Users,
    number: "2025",
    title: "Planned Growth Phase",
    description: "Growth of Prabanjam Group including Gold Covering and expanded jewellery operations",
    color: "from-orange-500/20 to-orange-600/20"
  }
];

const BusinessAchievements = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="achievements" className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key <span className="text-accent">Milestones</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Timeline highlights showcasing our journey and future vision
          </p>
        </div>

        {/* Milestones grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card 
                className="group text-center p-8 border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full bg-card/50 backdrop-blur-sm"
              >
                {/* Icon and Number */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <milestone.icon className="w-10 h-10 text-accent" />
                </div>
                
                <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {milestone.number}
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {milestone.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`} style={{ transitionDelay: "600ms" }}>
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Growing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              These numbers represent not just our success, but the trust our customers, 
              partners, and stakeholders have placed in us over the years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAchievements;
