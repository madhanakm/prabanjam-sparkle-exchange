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
                About <span className="text-accent">Prabanjam Jewelry</span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
                A legacy of trust, quality, and excellence in precious metals and jewelry since our inception.
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
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.6s forwards'}}>
              <div className="text-4xl font-bold text-accent mb-2">₹50Cr+</div>
              <div className="text-muted-foreground">Assets Under Management</div>
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
                    src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                    alt="Jewelry craftsmanship"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="animate-fade-in opacity-0" style={{animation: 'slideInRight 1s ease-out 0.4s forwards'}}>
                <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">Our <span className="text-accent">Story</span></h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Prabanjam Jewelry Pvt Ltd has been at the forefront of the precious metals industry, 
                  providing exceptional quality silver, gold, and diamond jewelry to our valued customers.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With a commitment to transparency, ethical sourcing, and customer satisfaction, 
                  we have built a reputation as a trusted partner for both retail customers and investors.
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
                  To provide the finest quality precious metals and jewelry while maintaining the highest 
                  standards of integrity and customer service.
                </p>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-accent/5 border-accent/20 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 0.8s forwards'}}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-8">
                  <Eye className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the most trusted and preferred destination for precious metals trading and 
                  investment in the region.
                </p>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-accent/5 border-accent/20 animate-fade-in opacity-0" style={{animation: 'fadeInUp 1s ease-out 1s forwards'}}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 mb-8">
                  <Building2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Integrity, transparency, quality, and customer-centricity form the foundation 
                  of everything we do.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
