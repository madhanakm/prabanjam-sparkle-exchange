import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Investment = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="investment" className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Investment Opportunity</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Invest in <span className="text-accent">Prabanjam Group</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of our diversified growth story across multiple business sectors.
          </p>
        </div>

        {/* Investment highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Main investment card */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="p-8 bg-gradient-luxury border-accent/20 text-primary-foreground shadow-gold hover:shadow-gold/70 transition-all duration-500 h-full">
              <h3 className="font-playfair text-3xl font-bold mb-6">Group Investment Opportunity</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Diversified Portfolio:</span> Multiple revenue streams across finance, real estate, jewelry & hospitality
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Expansion Plans:</span> 5 new companies launching in the next 3 years
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Proven Success:</span> 8+ years of excellence across multiple business sectors
                  </p>
                </div>
              </div>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                View Prospectus
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>

          {/* Benefits cards */}
          <div
            className={`space-y-6 transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Become a Stakeholder</h4>
                  <p className="text-sm text-muted-foreground">
                    Own a part of a diversified business group and participate in multi-sector growth
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Secure Investment</h4>
                  <p className="text-sm text-muted-foreground">
                    Backed by diversified assets across real estate, finance, and established businesses
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Long-term Returns</h4>
                  <p className="text-sm text-muted-foreground">
                    Multiple revenue streams ensure stable returns and growth potential
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-muted-foreground mb-4">
            Interested in learning more about our investment opportunity?
          </p>
          <Button variant="outline" size="lg" className="border-2 border-accent/30 hover:bg-accent/10 font-semibold">
            Contact Investment Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
