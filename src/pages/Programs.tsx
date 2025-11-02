import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import paintingImg from "@/assets/painting.jpg";
import photographyImg from "@/assets/photography.jpg";
import sculptureImg from "@/assets/sculpture.jpg";

const Programs = () => {
  const { programId } = useParams();

  const programsData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    highlights: string[];
    curriculum: string[];
    faculty: string[];
  }> = {
    "graphic-design": {
      title: "Graphic Design",
      subtitle: "MFA in Graphic Design",
      description: "The Graphic Design program at Yale School of Art emphasizes the development of a cohesive, intelligent, and inventive body of work, the acquisition of a variety of technical skills, and an understanding of design's implications in a global society. Students are challenged to expand their design capabilities and to evolve an independent voice while gaining fluency across media.",
      image: graphicDesignImg,
      highlights: [
        "Two-year MFA program",
        "Individual studio space for all students",
        "Access to state-of-the-art facilities",
        "Weekly critiques and seminars",
        "Visiting designer lecture series",
        "Full tuition scholarship",
      ],
      curriculum: [
        "Typography and Systems",
        "Interactive Design",
        "Motion Graphics",
        "Publication Design",
        "Brand Identity",
        "Thesis Project",
      ],
      faculty: [
        "Distinguished faculty with active professional practices",
        "Regular visiting critics and designers",
        "Individual mentorship and guidance",
      ],
    },
    "painting": {
      title: "Painting/Printmaking",
      subtitle: "MFA in Painting/Printmaking",
      description: "The Painting/Printmaking program provides students with an opportunity to pursue advanced work in painting and printmaking. The curriculum encourages an interdisciplinary approach while maintaining the centrality of studio practice. Students develop their artistic voices through intensive studio work, critiques, and engagement with contemporary art discourse.",
      image: paintingImg,
      highlights: [
        "Two-year MFA program",
        "Individual painting studios",
        "Professional printmaking facilities",
        "Weekly studio visits and critiques",
        "Access to extensive art library",
        "Full tuition scholarship",
      ],
      curriculum: [
        "Advanced Painting Techniques",
        "Printmaking Methods",
        "Color Theory and Practice",
        "Contemporary Art Seminar",
        "Art History and Criticism",
        "Thesis Exhibition",
      ],
      faculty: [
        "Accomplished painters and printmakers",
        "Visiting artists program",
        "Individual studio consultations",
      ],
    },
    "photography": {
      title: "Photography",
      subtitle: "MFA in Photography",
      description: "The Photography program at Yale School of Art provides an opportunity for students to explore the possibilities of lens-based image-making in the context of contemporary art. The program emphasizes both technical expertise and conceptual development, encouraging students to develop a sophisticated understanding of photography's evolving role in visual culture.",
      image: photographyImg,
      highlights: [
        "Two-year MFA program",
        "State-of-the-art digital and analog facilities",
        "Professional darkroom access",
        "Digital imaging labs",
        "Weekly critiques and seminars",
        "Full tuition scholarship",
      ],
      curriculum: [
        "Advanced Photography",
        "Digital Imaging",
        "Alternative Processes",
        "Documentary Practice",
        "Contemporary Photography Seminar",
        "Thesis Project",
      ],
      faculty: [
        "Renowned photographers and visual artists",
        "Regular visiting artist lectures",
        "One-on-one mentorship",
      ],
    },
    "sculpture": {
      title: "Sculpture",
      subtitle: "MFA in Sculpture",
      description: "The Sculpture program encourages students to explore the expanded field of three-dimensional art-making. Students work with traditional materials and processes while also engaging with installation, video, performance, and new media. The program emphasizes conceptual rigor and technical skill in equal measure.",
      image: sculptureImg,
      highlights: [
        "Two-year MFA program",
        "Individual studio spaces",
        "Extensive workshop facilities",
        "Metalworking, woodworking, and fabrication shops",
        "Digital fabrication lab",
        "Full tuition scholarship",
      ],
      curriculum: [
        "Sculpture Fundamentals",
        "Installation Art",
        "Digital Fabrication",
        "Public Art Practice",
        "Contemporary Sculpture Seminar",
        "Thesis Exhibition",
      ],
      faculty: [
        "Internationally recognized sculptors",
        "Visiting artist program",
        "Technical workshops and support",
      ],
    },
  };

  if (!programId || !programsData[programId]) {
    return <Navigate to="/programs/graphic-design" replace />;
  }

  const program = programsData[programId];

  useEffect(() => {
    document.title = `${program.title} MFA - Yale School of Art`;
  }, [program.title]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                {program.title}
              </h1>
              <p className="text-2xl text-white/95">{program.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Program Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Curriculum</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.curriculum.map((course, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <p className="font-medium">{course}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Faculty & Mentorship</h2>
              <div className="space-y-4">
                {program.faculty.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the next step in your artistic journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Admissions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
