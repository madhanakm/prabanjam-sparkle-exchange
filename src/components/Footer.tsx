import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-luxury text-primary-foreground py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div>
            <img 
              src="/logo.png" 
              alt="Prabanjam Groups" 
              className="h-[100px] w-[250px] object-contain rounded-lg"
            />
            <p className="text-primary-foreground/80 mb-4">
              Prabanjam Group of Companies is a Coimbatore-based business group with interests in gold finance, jewellery retail, real estate, hospitality, textiles, and industrial ventures. 
              Now offering the Prabanjam Dream Life Plan.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/group-of-companies" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Group of Companies
                </Link>
              </li>
              <li>
                <Link to="/board-of-directors" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Investment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="text-primary-foreground/90">prabanjamgroupcbe@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <p className="text-primary-foreground/90">+91 98422 44014</p>
                  <p className="text-primary-foreground/90">+91 96299 66662</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Address</p>
                  <p className="text-primary-foreground/90">No.1, Brindhavan Garden, Bharathiyar Road, Maniyakaranpalayam, Ganapathi, Coimbatore -641006</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Prabanjam Groups. All rights reserved | Developed By <a href="https://thinkaside.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">ThinkAside</a>
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
