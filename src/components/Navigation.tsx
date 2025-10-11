import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const programs = [
    { name: "Graphic Design", path: "/programs/graphic-design" },
    { name: "Painting/Printmaking", path: "/programs/painting" },
    { name: "Photography", path: "/programs/photography" },
    { name: "Sculpture", path: "/programs/sculpture" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-serif font-bold text-primary">Yale School of Art</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/about") ? "bg-muted text-primary" : ""
                    }`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
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
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/about"
                    className="text-lg font-medium hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
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
            <Input
              type="search"
              placeholder="Search..."
              className="max-w-md"
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
