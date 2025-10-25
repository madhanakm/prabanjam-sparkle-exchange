import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, Shield, Users, ArrowRight } from "lucide-react";

const InvestNow = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Investment Opportunity</span>
              </div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
                Invest in <span className="text-accent">Prabanjam Jewelry</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join us in our journey of growth and become a valued shareholder in our expanding jewelry enterprise.
              </p>
            </div>

            {/* Investment Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Growth Potential</h3>
                <p className="text-sm text-muted-foreground">
                  Join a thriving precious metals trading business with proven growth trajectory
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure Investment</h3>
                <p className="text-sm text-muted-foreground">
                  Backed by tangible assets and a robust business model in precious metals
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Become a Partner</h3>
                <p className="text-sm text-muted-foreground">
                  Own a part of our enterprise and participate in our success story
                </p>
              </Card>
            </div>

            {/* Investment Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Request Investment Information
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investmentAmount">Investment Interest (Approximate)</Label>
                    <Input id="investmentAmount" placeholder="e.g., $50,000 - $100,000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your investment goals and any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                    Submit Investment Inquiry
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  Our investment team will review your inquiry and contact you within 48 hours.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default InvestNow;
