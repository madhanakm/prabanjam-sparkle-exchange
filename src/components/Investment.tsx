import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield, ArrowRight, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Investment = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Start Your Financial Journey With Just <span className="text-accent">₹100</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the Prabanjam Dream Life Plan, where every unit starts at just ₹100. Begin small, grow steadily, and build long-term value for your future.
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
              <h3 className="font-playfair text-3xl font-bold mb-6">Dream Life Plan - ₹100 Starting Unit</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Minimum Entry:</span> Just ₹100 per unit - anyone can start without financial pressure
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Flexible Scaling:</span> Add more units anytime as your income grows
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Long-Term Compounding:</span> Your money increases year-by-year with guaranteed annual benefits
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

        {/* Who Can Join */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Who Can <span className="text-accent">Join</span></h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-bold text-accent mb-2">Students</div>
              <div className="text-xs text-muted-foreground">College & School</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-bold text-accent mb-2">Homemakers</div>
              <div className="text-xs text-muted-foreground">Family Savings</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-bold text-accent mb-2">Employees</div>
              <div className="text-xs text-muted-foreground">Salaried</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-bold text-accent mb-2">Business</div>
              <div className="text-xs text-muted-foreground">Small & Large</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-bold text-accent mb-2">Self-Employed</div>
              <div className="text-xs text-muted-foreground">Professionals</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-bold text-accent mb-2">Senior Citizens</div>
              <div className="text-xs text-muted-foreground">Retirement Planning</div>
            </Card>
          </div>
        </div>



        {/* Why ₹100 Starting Price Is Powerful */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Why ₹100 Starting Price Is <span className="text-accent">Powerful</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Low Risk Entry</h4>
              <p className="text-muted-foreground">Anyone can start without financial pressure - just ₹100 to begin your journey.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Flexible Scaling</h4>
              <p className="text-muted-foreground">Add more units anytime as your income grows - no restrictions or penalties.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Long-Term Compounding</h4>
              <p className="text-muted-foreground">Your money increases year-by-year with guaranteed annual benefits and returns.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Discipline & Consistency</h4>
              <p className="text-muted-foreground">Encourages smart financial habits and systematic wealth building over time.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Family Wealth Planning</h4>
              <p className="text-muted-foreground">Gift units to children or loved ones - perfect for family financial planning.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Transparency</h4>
              <p className="text-muted-foreground">Clear plan structure with year-wise benefit charts showing growth automatically.</p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Frequently Asked <span className="text-accent">Questions</span></h3>
          <div className="max-w-4xl mx-auto space-y-3">
            {[
              {
                q: "Is ₹100 enough to start?",
                a: "Yes. Even one unit = ₹100 is a valid starting point. You can add more units anytime."
              },
              {
                q: "Can I increase my investment later?",
                a: "Absolutely. You can purchase additional units at any time to increase your future maturity value."
              },
              {
                q: "How long should I stay in the plan?",
                a: "Longer duration gives higher maturity and maximum returns."
              },
              {
                q: "Is there a maturity chart?",
                a: "Yes, every member receives a year-wise benefit chart, showing how investment value grows automatically."
              },
              {
                q: "Is this safe?",
                a: "Prabanjam Dream Life Plan is backed by Prabanjam Jewellery Limited, part of the Prabanjam Group of Companies, ensuring stability and reliability."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-border/50 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-all duration-300 ${
                    openFaq === index ? 'bg-accent/10 border-b border-accent/20' : 'hover:bg-accent/5'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-foreground pr-4">{faq.q}</h4>
                  <div className={`w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transition-all duration-300 ${
                    openFaq === index ? 'bg-accent text-white' : ''
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
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
            Whether you are a student, professional, or small business owner – anyone can start and watch their money multiply.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-semibold">
              Start With ₹100 Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => window.open('/brochures/brochure.pdf', '_blank')}
              variant="outline" 
              size="lg" 
              className="border-2 border-accent/30 hover:bg-accent/10 font-semibold"
            >
              Download Plan Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
