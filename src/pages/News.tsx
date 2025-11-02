import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const News = () => {
  useEffect(() => {
    document.title = "News & Events - Yale School of Art";
  }, []);

  const newsItems = [
    {
      title: "Fall 2024 Exhibition Opens at Yale University Art Gallery",
      excerpt: "Our MFA students present their latest works in a comprehensive exhibition showcasing diverse artistic approaches and innovative techniques.",
      date: "October 15, 2024",
      category: "Exhibitions",
      link: "/news/fall-exhibition",
    },
    {
      title: "Distinguished Artist Lecture Series Continues",
      excerpt: "Renowned contemporary artist Marina Abramović to speak about their practice and the role of performance art in social change.",
      date: "October 8, 2024",
      category: "Events",
      link: "/news/artist-lecture",
    },
    {
      title: "New Scholarship Program Announced for 2025",
      excerpt: "Yale School of Art launches expanded scholarship opportunities for incoming MFA students with focus on underrepresented communities.",
      date: "September 30, 2024",
      category: "Announcements",
      link: "/news/scholarship",
    },
    {
      title: "Students Win International Design Awards",
      excerpt: "Three graphic design students receive recognition at the prestigious Red Dot Design Awards for their innovative projects.",
      date: "September 15, 2024",
      category: "Achievements",
      link: "/news/awards",
    },
    {
      title: "New Photography Studio Opens",
      excerpt: "State-of-the-art photography facilities now available to students, featuring cutting-edge equipment and expanded darkroom space.",
      date: "September 1, 2024",
      category: "Facilities",
      link: "/news/photography-studio",
    },
    {
      title: "Alumni Exhibition in New York",
      excerpt: "Recent Yale School of Art graduates featured in group exhibition at prominent Chelsea gallery showcasing emerging talent.",
      date: "August 20, 2024",
      category: "Alumni",
      link: "/news/alumni-exhibition",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay informed about the latest happenings at Yale School of Art
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto flex gap-2">
                <Input
                  type="search"
                  placeholder="Search news..."
                  className="flex-1"
                />
                <Button size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get the latest news, events, and updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
