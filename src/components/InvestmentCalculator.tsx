import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp } from 'lucide-react';

const InvestmentCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const [years, setYears] = useState(5);

  const calculateReturns = (amount: number, year: number) => {
    const maturityPer10k = [11268, 12722, 14554, 16870, 20053, 23573, 27234, 31484, 36416, 42142];
    return Math.round((amount / 10000) * maturityPer10k[year - 1]);
  };

  const totalInvestment = monthlyAmount * 12 * years;
  const maturityAmount = calculateReturns(monthlyAmount, years);
  const totalReturns = maturityAmount - totalInvestment;
  const returnPercentage = ((totalReturns / totalInvestment) * 100).toFixed(2);

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Investment Calculator</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Calculate Your <span className="text-accent">Returns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how your monthly investment grows over time with our Dream Life Plan
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Calculator Input */}
            <Card className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Enter Your Details</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="amount" className="text-base font-semibold mb-2 block">
                    Monthly Investment Amount
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                    <Input
                      id="amount"
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                      className="pl-8 text-lg h-12"
                      min="100"
                      step="1000"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Minimum: ₹100</p>
                </div>

                <div>
                  <Label htmlFor="years" className="text-base font-semibold mb-2 block">
                    Investment Period (Years)
                  </Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="text-lg h-12"
                    min="1"
                    max="10"
                  />
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 Year</span>
                    <span>10 Years</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Results */}
            <Card className="p-6 md:p-8 bg-gradient-luxury text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Your Returns</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-3 md:p-4">
                  <p className="text-xs md:text-sm text-primary-foreground/80 mb-1">Total Investment</p>
                  <p className="text-2xl md:text-3xl font-bold">₹{totalInvestment.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 rounded-lg p-3 md:p-4">
                  <p className="text-xs md:text-sm text-primary-foreground/80 mb-1">Maturity Amount</p>
                  <p className="text-2xl md:text-3xl font-bold text-accent">₹{maturityAmount.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 rounded-lg p-3 md:p-4">
                  <p className="text-xs md:text-sm text-primary-foreground/80 mb-1">Total Returns</p>
                  <p className="text-2xl md:text-3xl font-bold text-green-400">₹{totalReturns.toLocaleString('en-IN')}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-semibold">{returnPercentage}% Growth</span>
                  </div>
                </div>
              </div>

              <Link to="/investment#returns-table">
                <Button 
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  size="lg"
                >
                  View Full Investment Chart
                </Button>
              </Link>
            </Card>
          </div>

          {/* Quick Comparison */}
          <Card className="mt-8 p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Comparison</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 3, 5, 7, 10].map((year) => {
                const amount = calculateReturns(monthlyAmount, year);
                return (
                  <div key={year} className="text-center p-2 md:p-3 bg-accent/5 rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">{year} Year{year > 1 ? 's' : ''}</p>
                    <p className="text-base md:text-lg font-bold text-accent">₹{amount.toLocaleString('en-IN')}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
