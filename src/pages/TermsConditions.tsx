import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms & <span className="text-accent">Conditions</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                Please read these Terms and Conditions carefully before using our services.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Silver selling and exchange services</li>
                  <li>Old gold reselling services</li>
                  <li>Investment advisory services</li>
                  <li>Secure storage solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Investment Risks</h2>
                <p>
                  All investments carry risk. Past performance does not guarantee future results. 
                  Please consult with our advisors and consider your financial situation before making investment decisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Pricing and Payments</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are subject to market fluctuations</li>
                  <li>Payments must be made as per agreed terms</li>
                  <li>Additional charges may apply for certain services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  Prabanjam Jewelry Pvt Ltd shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India, 
                  and any disputes shall be subject to the jurisdiction of courts in Coimbatore, Tamil Nadu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p>
                  For any questions regarding these terms, please contact us at info@prabanjam.com
                </p>
              </div>

              <p className="text-sm text-muted-foreground/80 mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;