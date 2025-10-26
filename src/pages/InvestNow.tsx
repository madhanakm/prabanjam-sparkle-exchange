import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, Shield, Users, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const InvestNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    investmentType: 'shares'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post('http://localhost:5001/api/invest', formData, {
        headers: {
          'x-api-key': 'prabanjam_api_key_2024'
        }
      });
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: '',
        investmentType: 'shares'
      });
    } catch (error) {
      setError('Failed to submit investment inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Investment Inquiry Submitted!</h3>
                    <p className="text-muted-foreground mb-4">Thank you for your interest. Our investment team will contact you soon.</p>
                    <Button onClick={() => setSuccess(false)} variant="outline">
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Investment Amount</Label>
                      <Input 
                        id="amount" 
                        type="number" 
                        placeholder="10000" 
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investmentType">Investment Type</Label>
                      <select 
                        id="investmentType"
                        value={formData.investmentType}
                        onChange={(e) => setFormData({...formData, investmentType: e.target.value})}
                        className="w-full p-3 border border-border rounded-lg"
                        required
                      >
                        <option value="shares">Shares</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm">{error}</div>
                    )}

                    <Button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                      size="lg"
                    >
                      {loading ? 'Submitting...' : 'Submit Investment Inquiry'}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
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
