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
                At Prabanjam Groups, we are committed to protecting your privacy and personal information across all our business verticals.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (Name, email, phone number, address)</li>
                  <li>Financial information for investment and loan services</li>
                  <li>Transaction details across all business verticals</li>
                  <li>Communication records and correspondence</li>
                  <li>Business information for commercial real estate services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide services across financial, real estate, jewelry, and hospitality sectors</li>
                  <li>To process transactions, investments, and loan applications</li>
                  <li>To manage commercial real estate bookings and reservations</li>
                  <li>To communicate important updates, offers, and business opportunities</li>
                  <li>To comply with legal, regulatory, and industry requirements</li>
                  <li>To improve our diversified business operations and customer experience</li>
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
                  If you have any questions about this Privacy Policy, please contact us at prabanjamgroupcbe@gmail.com or call +91 98422 44014
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