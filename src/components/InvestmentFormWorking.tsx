import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    investmentType: ''
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
        investmentType: ''
      });
    } catch (error) {
      setError('Failed to submit investment inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Investment Inquiry
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
                  <Input 
                    id="investmentType" 
                    placeholder="e.g. Gold, Silver, Shares" 
                    value={formData.investmentType}
                    onChange={(e) => setFormData({...formData, investmentType: e.target.value})}
                    required
                  />
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
  );
};

export default InvestmentForm;