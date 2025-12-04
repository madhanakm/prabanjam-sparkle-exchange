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
                  <li>Financial services including gold loans and lending</li>
                  <li>Gold covering and plating services</li>
                  <li>Commercial real estate and office spaces</li>
                  <li>Jewelry manufacturing and retail</li>
                  <li>Hospitality and resort services</li>
                  <li>Investment advisory and share offerings</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Investment & Financial Services</h2>
                <p>
                  All investments and financial services carry inherent risks. Past performance does not guarantee future results. 
                  Interest rates and terms are subject to change. Please consult with our advisors and consider your financial 
                  situation before making investment or loan decisions across any of our business verticals.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Pricing and Payments</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prices for gold, jewelry, and services are subject to market fluctuations</li>
                  <li>Real estate rental rates are as per agreed lease terms</li>
                  <li>Loan interest rates are determined based on current market conditions</li>
                  <li>Resort and hospitality charges are as per published rates</li>
                  <li>Payments must be made as per agreed terms across all services</li>
                  <li>Additional charges may apply for specialized services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  Prabanjam Groups and its subsidiary companies shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services across any business vertical.
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
                  For any questions regarding these terms, please contact us at prabanjamgroupcbe@gmail.com or call +91 98422 44014
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