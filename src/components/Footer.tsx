import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import yaleLogo from "@/assets/yale-logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img
              src={yaleLogo}
              alt="Yale School of Art"
              className="h-8 w-auto mb-4"
            />
            <h3 className="text-lg font-serif font-semibold mb-4">Yale School of Art</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leading graduate school offering MFA degrees in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-muted-foreground hover:text-primary transition-smooth">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-muted-foreground hover:text-primary transition-smooth">
                  Student Works
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-muted-foreground hover:text-primary transition-smooth">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-muted-foreground hover:text-primary transition-smooth">
                  Faculty & Staff
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs/graphic-design" className="text-muted-foreground hover:text-primary transition-smooth">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/programs/painting" className="text-muted-foreground hover:text-primary transition-smooth">
                  Painting/Printmaking
                </Link>
              </li>
              <li>
                <Link to="/programs/photography" className="text-muted-foreground hover:text-primary transition-smooth">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/programs/sculpture" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sculpture
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with latest news and events.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yale School of Art. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-primary transition-smooth">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">Terms of Use</Link>
            <Link to="/accessibility" className="hover:text-primary transition-smooth">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
