import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Award, Shield, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { api } from "@/config/api";

const Shareholders = () => {
  const [shareholders, setShareholders] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentShareholder, setCurrentShareholder] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('shareholderToken');
    const shareholderData = localStorage.getItem('shareholderData');
    if (token && shareholderData) {
      setIsLoggedIn(true);
      setCurrentShareholder(JSON.parse(shareholderData));
      fetchShareholders(token);
    }
  }, []);

  const fetchShareholders = async (token) => {
    try {
      const response = await api.get('/shareholders');
      setShareholders(response.data);
    } catch (error) {
      console.error('Error fetching shareholders:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('shareholderToken');
        setIsLoggedIn(false);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/shareholder/login', loginForm);
      const token = response.data.token;
      const shareholderData = response.data.shareholder;
      
      localStorage.setItem('shareholderToken', token);
      localStorage.setItem('shareholderData', JSON.stringify(shareholderData));
      
      setIsLoggedIn(true);
      setCurrentShareholder(shareholderData);
      fetchShareholders(token);
    } catch (error) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('shareholderToken');
    localStorage.removeItem('shareholderData');
    setIsLoggedIn(false);
    setCurrentShareholder(null);
    setShareholders([]);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Potential",
      description: "Be part of our expanding business with strong market presence"
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Backed by tangible assets in precious metals and jewelry"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistent performance and transparent operations"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a community of investors who believe in our vision"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-accent/4 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-accent/2 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '25s'}}></div>
        
        {/* Floating Investment Icons */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-accent/15 rounded-full animate-bounce" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-accent/12 rounded-full animate-pulse" style={{animationDuration: '3s', animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/18 rounded-full animate-ping" style={{animationDuration: '2.5s'}}></div>
        
        {/* Moving Particles */}
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{animationDuration: '1.8s', animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-4 h-4 bg-accent/35 rounded-full animate-ping" style={{animationDuration: '2.2s', animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{animationDuration: '1.5s', animationDelay: '2s'}}></div>
        
        {/* Gradient Waves */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-xl animate-spin" style={{animationDuration: '18s'}}></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-2xl animate-spin" style={{animationDuration: '22s', animationDirection: 'reverse'}}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-luxury-cream via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out forwards'}}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="text-accent">Shareholders</span> Information
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join us in building a legacy of excellence in the precious metals industry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in opacity-0" style={{animation: 'slideInLeft 1s ease-out 0.3s forwards'}}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Public Share Offering
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Prabanjam Jewelry Pvt Ltd is offering public shares, providing investors with an 
                opportunity to become stakeholders in a thriving precious metals business.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-lg p-6 hover:bg-background/70 transition-all duration-300 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.5s forwards'}}>
                  <p className="text-sm text-muted-foreground mb-2">Share Type</p>
                  <p className="text-2xl font-bold text-foreground">Common Stock</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 hover:bg-background/70 transition-all duration-300 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.7s forwards'}}>
                  <p className="text-sm text-muted-foreground mb-2">Minimum Investment</p>
                  <p className="text-2xl font-bold text-foreground">Contact Us</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 hover:bg-background/70 transition-all duration-300 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.9s forwards'}}>
                  <p className="text-sm text-muted-foreground mb-2">Expected Returns</p>
                  <p className="text-2xl font-bold text-foreground">Competitive</p>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 1s forwards'}}>
                Shareholder Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={benefit.title}
                    className="p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-accent/5 border-accent/20 animate-fade-in opacity-0"
                    style={{ animation: `slideInUp 1s ease-out ${1.2 + index * 0.2}s forwards` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Shareholders List */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Current Shareholders
              </h2>
              
              {!isLoggedIn ? (
                <Card className="p-8 max-w-md mx-auto">
                  <div className="text-center mb-6">
                    <Lock className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Login Required</h3>
                    <p className="text-muted-foreground">Please login to view shareholders information</p>
                  </div>
                  
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border border-border rounded-lg"
                        value={loginForm.username}
                        onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-border rounded-lg"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                  </form>
                </Card>
              ) : (
                <div className="space-y-8">
                  <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Welcome, {currentShareholder?.name}</h3>
                        <p className="text-muted-foreground">Your Investment Portfolio</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        Logout
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-background/50 rounded-lg p-6">
                        <p className="text-sm text-muted-foreground mb-2">Your Shares</p>
                        <p className="text-3xl font-bold text-accent">{currentShareholder?.shares}</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-6">
                        <p className="text-sm text-muted-foreground mb-2">Investment Date</p>
                        <p className="text-lg font-semibold text-foreground">
                          {new Date(currentShareholder?.investment_date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-6">
                        <p className="text-sm text-muted-foreground mb-2">Username</p>
                        <p className="text-lg font-semibold text-foreground">{currentShareholder?.username}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">All Shareholders</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Shares</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Investment Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {shareholders.map((shareholder) => (
                            <tr 
                              key={shareholder.id} 
                              className={`border-b border-border/50 hover:bg-accent/5 ${
                                shareholder.id === currentShareholder?.id ? 'bg-accent/10' : ''
                              }`}
                            >
                              <td className="py-3 px-4 text-foreground">
                                {shareholder.name}
                                {shareholder.id === currentShareholder?.id && (
                                  <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                                    You
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-4 text-foreground">{shareholder.shares}</td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {new Date(shareholder.investment_date).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              )}
            </div>

            {/* Contact CTA */}
            <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 2.2s forwards'}}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Interested in Becoming a Shareholder?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Contact our investment team to learn more about share offerings and opportunities
              </p>
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-gold hover:scale-105 transition-all duration-300">
                Contact Investment Team
              </button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shareholders;
