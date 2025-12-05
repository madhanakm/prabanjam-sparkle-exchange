import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Target, Eye, Award, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/2 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-accent/10 rounded-full animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-accent/5 to-accent/2 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-accent/8 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-tl from-accent/3 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1.5s'}}></div>
        
        {/* Moving Particles */}
        <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-accent/20 rounded-full animate-ping" style={{animationDuration: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-accent/15 rounded-full animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent/12 rounded-full animate-pulse" style={{animationDuration: '3.5s', animationDelay: '2s'}}></div>
        
        {/* Gradient Waves */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/8 via-accent/4 to-transparent rounded-full blur-xl animate-spin" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-accent/6 via-accent/3 to-transparent rounded-full blur-2xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDuration: '1s', animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/80 rounded-full animate-pulse" style={{animationDuration: '2s', animationDelay: '1.2s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDuration: '0.8s', animationDelay: '2.5s'}}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-luxury-cream via-background to-accent/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out forwards'}}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                About <span className="text-accent">Prabanjam Groups</span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
                A diversified business conglomerate with excellence across multiple sectors and industries.
              </p>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.2s forwards'}}>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.4s forwards'}}>
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">Business Verticals</div>
            </div>
            <div className="text-center animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.6s forwards'}}>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="animate-fade-in opacity-0" style={{animation: 'slideInLeft 1s ease-out 0.2s forwards'}}>
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Business excellence"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="animate-fade-in opacity-0" style={{animation: 'slideInRight 1s ease-out 0.4s forwards'}}>
                <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">Our <span className="text-accent">Story</span></h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Prabanjam Group of Companies is a Coimbatore-based business group with interests in gold finance, 
                  jewellery retail and gold covering, real estate and construction, resorts & hospitality, textiles, travels and transports, and industrial ventures and investment plans.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With a vision to create long-term value and financial security for families, Prabanjam Group has launched the 
                  Prabanjam Dream Life Plan – a structured savings and benefits program designed to support your future dreams.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">Certified Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Trusted by Thousands</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-accent/5 border-accent/20 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.6s forwards'}}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To deliver exceptional value and service across all our business verticals while maintaining 
                  the highest standards of integrity and excellence.
                </p>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-accent/5 border-accent/20 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.8s forwards'}}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-8">
                  <Eye className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the most trusted and diversified business group, creating sustainable value 
                  across multiple industries and sectors.
                </p>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-accent/5 border-accent/20 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 1s forwards'}}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-8">
                  <Building2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Integrity, innovation, excellence, and customer-centricity form the foundation 
                  of our diversified business operations.
                </p>
              </Card>
            </div>

            {/* Business Sectors */}
            <section className="mt-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our <span className="text-accent">Business Sectors</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Diversified portfolio spanning multiple industries with expertise and excellence
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Financial Services</h3>
                  <p className="text-muted-foreground">Gold finance and lending solutions with competitive rates and flexible terms.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Manufacturing</h3>
                  <p className="text-muted-foreground">Jewelry manufacturing and gold covering services with premium quality finishes.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Real Estate</h3>
                  <p className="text-muted-foreground">Commercial complexes and business facilities in prime locations.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Hospitality</h3>
                  <p className="text-muted-foreground">Luxury resort destinations offering premium accommodation and services.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Retail</h3>
                  <p className="text-muted-foreground">Traditional and contemporary jewelry collections with custom design services.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Dream Life Plan</h3>
                  <p className="text-muted-foreground">Structured savings program starting at ₹100 per unit for long-term wealth creation and family financial security.</p>
                </Card>
              </div>
            </section>

            {/* Leadership */}
            <section className="mt-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our <span className="text-accent">Leadership</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experienced leadership driving innovation and growth across all business verticals
                </p>
              </div>
              <Card className="p-8 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Visionary Leadership</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our leadership team brings decades of combined experience across various industries, 
                      driving strategic growth and operational excellence.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With a focus on innovation, sustainability, and stakeholder value creation, 
                      we continue to expand our business horizons while maintaining our core values.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/20 mb-4">
                      <Users className="w-16 h-16 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">Experienced Team</p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Key Milestones */}
            <section className="mt-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Key <span className="text-accent">Milestones</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Timeline highlights showcasing our journey and future vision
                </p>
              </div>
              <div className="space-y-8 max-w-4xl mx-auto">
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2016
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Foundation & Early Achievements</h3>
                      <p className="text-muted-foreground">Early achievements and establishment of Prabanjam Group's core businesses.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2018
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Business Expansion</h3>
                      <p className="text-muted-foreground">Expansion of Prabanjam Group activities and strengthening of finance and jewellery verticals.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2019
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Siruvani Complex Launch</h3>
                      <p className="text-muted-foreground">Launch and development of Siruvani Complex as a major group project.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-accent/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2025
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Planned Growth Phase</h3>
                      <p className="text-muted-foreground">Growth of Prabanjam Group of Companies, including Prabanjam Gold Covering and expanded jewellery operations.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-accent/30">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-16 bg-gradient-to-r from-accent to-accent/80 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2026-27
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Dream Life Plan Vision</h3>
                      <p className="text-muted-foreground">Further development of Prabanjam Resort, Construction, Textiles, Travels, Transports and Silver Factory as part of the Dream Life Plan vision.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
