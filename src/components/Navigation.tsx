import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import yaleLogo from "@/assets/yale-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;
  const isProgramsActive = () => location.pathname.startsWith('/programs');
  const isAboutActive = () => location.pathname === '/about' || location.pathname === '/facilities';

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      // Esc to close search
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const programs = [
    { name: "Graphic Design", path: "/programs/graphic-design" },
    { name: "Painting/Printmaking", path: "/programs/painting" },
    { name: "Photography", path: "/programs/photography" },
    { name: "Sculpture", path: "/programs/sculpture" },
  ];

  const aboutLinks = [
    { name: "About", path: "/about", description: "Our mission and history" },
    { name: "Facilities", path: "/facilities", description: "Studios, workshops & equipment" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={yaleLogo}
              alt="Yale School of Art"
              className="h-10 w-auto"
            />
            <span className="text-xl font-serif font-bold text-primary">Yale School of Art</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => navigate('/about')}
                  className={`cursor-pointer hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary data-[state=open]:bg-muted data-[state=open]:text-primary ${
                    isAboutActive()
                      ? "!bg-muted text-primary"
                      : "!bg-transparent"
                  }`}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {aboutLinks.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path}>
                          <NavigationMenuLink
                            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary ${
                              isActive(link.path) ? "bg-muted" : ""
                            }`}
                          >
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => navigate('/programs')}
                  className={`cursor-pointer hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary data-[state=open]:bg-muted data-[state=open]:text-primary ${
                    isProgramsActive()
                      ? "!bg-muted text-primary"
                      : "!bg-transparent"
                  }`}
                >
                  Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {programs.map((program) => (
                      <li key={program.path}>
                        <Link to={program.path}>
                          <NavigationMenuLink
                            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary ${
                              isActive(program.path) ? "bg-muted" : ""
                            }`}
                          >
                            <div className="text-sm font-medium leading-none">{program.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              MFA Program
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/faculty">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none ${
                      isActive("/faculty") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    Faculty
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/admissions">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none ${
                      isActive("/admissions") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    Admissions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/works">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none ${
                      isActive("/works") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    Student Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/news">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none ${
                      isActive("/news") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/calendar">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none ${
                      isActive("/calendar") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    Calendar
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none ${
                      isActive("/contact") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden lg:flex"
              title="Search (Ctrl+K)"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <Link
                  to="/"
                  className="flex items-center gap-3 pb-6 border-b"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={yaleLogo}
                    alt="Yale School of Art"
                    className="h-8 w-auto"
                  />
                  <span className="text-lg font-serif font-bold text-primary">Yale School of Art</span>
                </Link>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/search"
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    <Search className="h-5 w-5" />
                    Search
                  </Link>
                  <div>
                    <p className="text-lg font-medium mb-2">About</p>
                    <div className="flex flex-col gap-2 ml-4">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="text-sm hover:text-primary transition-smooth"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">Programs</p>
                    <div className="flex flex-col gap-2 ml-4">
                      {programs.map((program) => (
                        <Link
                          key={program.path}
                          to={program.path}
                          className="text-sm hover:text-primary transition-smooth"
                          onClick={() => setIsOpen(false)}
                        >
                          {program.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/faculty"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    Faculty
                  </Link>
                  <Link
                    to="/admissions"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    Admissions
                  </Link>
                  <Link
                    to="/works"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Works
                  </Link>
                  <Link
                    to="/news"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    News
                  </Link>
                  <Link
                    to="/calendar"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    Calendar
                  </Link>
                  <Link
                    to="/contact"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4 animate-in slide-in-from-top-2">
            <form onSubmit={handleSearch}>
              <Input
                type="search"
                placeholder="Search for programs, faculty, news..."
                className="max-w-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
