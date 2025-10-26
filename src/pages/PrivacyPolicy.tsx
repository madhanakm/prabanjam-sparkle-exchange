import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-luxury-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                At Prabanjam Jewelry Pvt Ltd, we are committed to protecting your privacy and personal information.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (Name, email, phone number)</li>
                  <li>Transaction details and investment preferences</li>
                  <li>Communication records and correspondence</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and improve our services</li>
                  <li>To process transactions and investments</li>
                  <li>To communicate important updates and offers</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third Party Disclosure</h2>
                <p>
                  We do not sell, trade, or transfer your personal information to third parties without your consent, 
                  except as required by law or to trusted partners who assist us in operating our business.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at info@prabanjam.com
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

export default PrivacyPolicy;