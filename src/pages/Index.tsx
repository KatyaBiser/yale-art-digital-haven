import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import paintingImg from "@/assets/painting.jpg";
import photographyImg from "@/assets/photography.jpg";
import sculptureImg from "@/assets/sculpture.jpg";

const Index = () => {
  const programs = [
    {
      title: "Graphic Design",
      description: "Master the art of visual communication and digital design with our comprehensive MFA program.",
      image: graphicDesignImg,
      link: "/programs/graphic-design",
    },
    {
      title: "Painting/Printmaking",
      description: "Explore traditional and contemporary approaches to painting and printmaking techniques.",
      image: paintingImg,
      link: "/programs/painting",
    },
    {
      title: "Photography",
      description: "Develop your photographic vision through technical mastery and conceptual exploration.",
      image: photographyImg,
      link: "/programs/photography",
    },
    {
      title: "Sculpture",
      description: "Push the boundaries of three-dimensional art in our state-of-the-art facilities.",
      image: sculptureImg,
      link: "/programs/sculpture",
    },
  ];

  const news = [
    {
      title: "Fall 2024 Exhibition Opens at Yale University Art Gallery",
      excerpt: "Our MFA students present their latest works in a comprehensive exhibition showcasing diverse artistic approaches.",
      date: "October 15, 2024",
      category: "Exhibitions",
      link: "/news/fall-exhibition",
    },
    {
      title: "Distinguished Artist Lecture Series Continues",
      excerpt: "Renowned contemporary artist to speak about their practice and the role of art in social change.",
      date: "October 8, 2024",
      category: "Events",
      link: "/news/artist-lecture",
    },
    {
      title: "New Scholarship Program Announced for 2025",
      excerpt: "Yale School of Art launches expanded scholarship opportunities for incoming MFA students.",
      date: "September 30, 2024",
      category: "Announcements",
      link: "/news/scholarship",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Yale School of Art Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to Yale School of Art
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Leading MFA programs in Graphic Design, Painting/Printmaking, Photography, and Sculpture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our MFA Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four distinctive graduate programs designed to nurture artistic excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Excellence in Art Education Since 1869
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Yale School of Art is a graduate professional school that confers MFAs in Graphic Design, 
                Painting/Printmaking, Photography, and Sculpture. We also offer art courses to Yale College 
                undergraduates and students in other graduate and professional schools of the university.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is to provide students with an intellectually informed, interdisciplinary 
                education in the visual arts, rooted in critical thinking and the development of individual 
                artistic practice.
              </p>
              <Link to="/about">
                <Button size="lg">
                  More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">MFA Programs</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Tuition Coverage</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <div className="text-4xl font-bold text-primary mb-2">1:4</div>
                <div className="text-muted-foreground">Faculty Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Latest News & Events</h2>
            <Link to="/news">
              <Button variant="outline">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Applications for Fall 2025 are now open. Start your journey towards becoming a 
            part of Yale School of Art's distinguished tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Apply for Fall 2025
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
