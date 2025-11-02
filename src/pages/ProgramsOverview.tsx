import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import paintingImg from "@/assets/painting.jpg";
import photographyImg from "@/assets/photography.jpg";
import sculptureImg from "@/assets/sculpture.jpg";

const ProgramsOverview = () => {
  useEffect(() => {
    document.title = "MFA Programs - Yale School of Art";
  }, []);

  const programs = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      subtitle: "MFA in Graphic Design",
      description: "Master the art of visual communication and digital design. Our comprehensive MFA program emphasizes the development of a cohesive, intelligent, and inventive body of work.",
      image: graphicDesignImg,
      highlights: [
        "Two-year MFA program",
        "Individual studio space",
        "State-of-the-art facilities",
        "Full tuition scholarship",
      ],
    },
    {
      id: "painting",
      title: "Painting/Printmaking",
      subtitle: "MFA in Painting/Printmaking",
      description: "Pursue advanced work in painting and printmaking. The curriculum encourages an interdisciplinary approach while maintaining the centrality of studio practice.",
      image: paintingImg,
      highlights: [
        "Two-year MFA program",
        "Individual painting studios",
        "Professional printmaking facilities",
        "Full tuition scholarship",
      ],
    },
    {
      id: "photography",
      title: "Photography",
      subtitle: "MFA in Photography",
      description: "Explore the possibilities of lens-based image-making in contemporary art. The program emphasizes both technical expertise and conceptual development.",
      image: photographyImg,
      highlights: [
        "Two-year MFA program",
        "Digital and analog facilities",
        "Professional darkroom access",
        "Full tuition scholarship",
      ],
    },
    {
      id: "sculpture",
      title: "Sculpture",
      subtitle: "MFA in Sculpture",
      description: "Explore the expanded field of three-dimensional art-making. Students work with traditional materials while also engaging with installation, video, performance, and new media.",
      image: sculptureImg,
      highlights: [
        "Two-year MFA program",
        "Individual studio spaces",
        "Extensive workshop facilities",
        "Full tuition scholarship",
      ],
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
                Our MFA Programs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Four distinctive graduate programs designed to nurture artistic excellence and innovation.
                All students receive full tuition scholarships and individual studio spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {programs.map((program) => (
                <Card key={program.id} className="overflow-hidden transition-smooth hover:shadow-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                        {program.title}
                      </h2>
                      <p className="text-white/90 text-sm">{program.subtitle}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-2">Program Highlights:</p>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/programs/${program.id}`}>
                      <Button className="w-full">
                        Learn More About {program.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Apply?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Applications for Fall 2025 are now open. All admitted students receive full tuition scholarships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admissions">
                  <Button size="lg">
                    View Admissions Requirements
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/faculty">
                  <Button size="lg" variant="outline">
                    Meet Our Faculty
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsOverview;
