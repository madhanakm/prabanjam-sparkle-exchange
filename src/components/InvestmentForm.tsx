import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const InvestmentForm = () => {
  console.log('InvestmentForm component rendered');
  
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

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    console.log('Investment form submitted with data:', formData);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.amount || !formData.investmentType) {
      console.log('Validation failed - missing fields');
      setError('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Sending request to API...');
      const response = await axios.post('http://localhost:5001/api/invest', formData, {
        headers: {
          'x-api-key': 'prabanjam_api_key_2024'
        }
      });
      console.log('API response:', response.data);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: '',
        investmentType: ''
      });
    } catch (error) {
      console.error('Investment form error:', error);
      console.error('Error response:', error.response?.data);
      setError('Failed to submit investment inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Investment Inquiry</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Investment Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our investment team will contact you within 24 hours.
            </p>
          </div>

          <Card className="p-8">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Investment Inquiry Submitted!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for your interest. Our investment team will contact you soon.
                </p>
                <Button onClick={() => setSuccess(false)} variant="outline">
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
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
                  <Label htmlFor="email">Email Address</Label>
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
                  <Label htmlFor="amount">Investment Amount (USD)</Label>
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
                  <Label htmlFor="investmentType">Investment Type *</Label>
                  <select 
                    value={formData.investmentType} 
                    onChange={(e) => setFormData({...formData, investmentType: e.target.value})}
                    required
                    className="w-full p-3 border border-border rounded-lg"
                  >
                    <option value="">Select investment type</option>
                    <option value="shares">Company Shares</option>
                    <option value="gold">Gold Investment</option>
                    <option value="silver">Silver Investment</option>
                    <option value="mixed">Mixed Portfolio</option>
                  </select>
                </div>

                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}

                <Button 
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                  size="lg"
                >
                  {loading ? 'Submitting...' : 'Submit Investment Inquiry'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  type="button"
                  onClick={() => {
                    console.log('Test button clicked');
                    console.log('Current form data:', formData);
                  }}
                  variant="outline"
                  className="w-full mt-2"
                >
                  Debug: Log Form Data
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentForm;