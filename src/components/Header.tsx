import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Shareholders", href: "/shareholders" },
    { name: "Board of Directors", href: "/board-of-directors" },
    { name: "Group of Companies", href: "/group-of-companies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-white/80 backdrop-blur-lg border-b border-border/50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            Prabanjam <span className="text-accent">Jewelry</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/80 hover:text-accent font-medium bg-transparent">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {aboutLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                            >
                              <div className="text-sm font-medium leading-none">{link.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="/#services"
              className="text-foreground/80 hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
            >
              Services
            </a>
            <a
              href="/#investment"
              className="text-foreground/80 hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
            >
              Investment
            </a>
            <a
              href="/#products"
              className="text-foreground/80 hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
            >
              Products
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-gold transition-all duration-300">
              Invest Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center justify-between w-full text-foreground/80 hover:text-accent font-medium transition-colors py-2"
                >
                  About Us
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsAboutOpen(false);
                        }}
                        className="block text-foreground/80 hover:text-accent transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
              >
                Services
              </a>
              <a
                href="/#investment"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
              >
                Investment
              </a>
              <a
                href="/#products"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
              >
                Products
              </a>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-2">
                Invest Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
