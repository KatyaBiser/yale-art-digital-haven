import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
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

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with latest news, events, and exhibitions.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="h-10"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-primary transition-smooth">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-muted-foreground hover:text-primary transition-smooth">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-muted-foreground hover:text-primary transition-smooth">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-muted-foreground hover:text-primary transition-smooth">
                  Student Works
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-smooth">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1156+Chapel+Street,New+Haven,CT+06511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-smooth group"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                <span>
                  Yale School of Art<br />
                  1156 Chapel Street<br />
                  New Haven, CT 06511
                </span>
              </a>
              <a
                href="tel:+12034322600"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(203) 432-2600</span>
              </a>
              <a
                href="mailto:art.school@yale.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>art.school@yale.edu</span>
              </a>
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
