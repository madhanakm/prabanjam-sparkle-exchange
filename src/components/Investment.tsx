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

        {/* Investment Statistics */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">₹50Cr+</div>
            <div className="text-sm text-muted-foreground">Total Assets</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">25%</div>
            <div className="text-sm text-muted-foreground">Annual Growth</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">5</div>
            <div className="text-sm text-muted-foreground">Business Sectors</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </Card>
        </div>

        {/* Investment Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Investment <span className="text-accent">Plans</span></h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
              <h4 className="text-xl font-bold text-foreground mb-4">Starter Plan</h4>
              <div className="text-3xl font-bold text-accent mb-4">₹1 Lakh</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Minimum investment amount
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Quarterly dividend payments
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Annual reports access
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">Get Started</Button>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-accent/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Growth Plan</h4>
              <div className="text-3xl font-bold text-accent mb-4">₹5 Lakh</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Higher dividend rates
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Priority investment updates
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Exclusive investor events
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">Invest Now</Button>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
              <h4 className="text-xl font-bold text-foreground mb-4">Premium Plan</h4>
              <div className="text-3xl font-bold text-accent mb-4">₹10 Lakh+</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Maximum dividend benefits
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Board meeting invitations
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Strategic decision participation
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">Contact Us</Button>
            </Card>
          </div>
        </div>

        {/* Why Invest */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Why Invest in <span className="text-accent">Prabanjam Groups</span></h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Diversified Revenue Streams</h4>
              <p className="text-muted-foreground">Multiple business verticals reduce risk and ensure stable returns across different market conditions.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Proven Track Record</h4>
              <p className="text-muted-foreground">Over a decade of successful operations with consistent growth and profitability.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Expansion Opportunities</h4>
              <p className="text-muted-foreground">Strategic expansion plans across new markets and business sectors for future growth.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Transparent Operations</h4>
              <p className="text-muted-foreground">Regular financial reporting and transparent communication with all stakeholders.</p>
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
            Ready to be part of our growth story?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-semibold">
              Start Investing Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-accent/30 hover:bg-accent/10 font-semibold">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
