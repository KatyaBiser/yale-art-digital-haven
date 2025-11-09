import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Download } from "lucide-react";
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
    curriculum: Array<{
      category: string;
      courses: Array<{ name: string; description: string }>;
    }>;
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
        {
          category: "Core Studios",
          courses: [
            {
              name: "First-Year Graduate Studio",
              description: "Intense workshops exploring text, space, and object relationships with resident and visiting faculty"
            },
            {
              name: "Second-Year Graduate Studio",
              description: "Independent thesis project development with individual meetings and editorial support"
            }
          ]
        },
        {
          category: "Typography",
          courses: [
            {
              name: "Typography!",
              description: "Fundamentals of typography, book design, handwork and digital technology"
            },
            {
              name: "Advanced Typeface Design",
              description: "Original typeface design responding to custom briefs using RoboFont"
            },
            {
              name: "T for Typographies",
              description: "Contemporary typography with emphasis on craft, expression, and compositional skills"
            }
          ]
        },
        {
          category: "Digital & Interactive",
          courses: [
            {
              name: "Interactive Design and the Internet",
              description: "Creating unique graphic forms for the web using HTML, CSS, and JavaScript"
            },
            {
              name: "Code and Interfaces",
              description: "Custom digital tools using p5.js, Processing, and unconventional methodologies"
            },
            {
              name: "Localhosts",
              description: "Creating web servers and situated web-based works using single-board computers"
            }
          ]
        },
        {
          category: "Time-based Media",
          courses: [
            {
              name: "Motion Design",
              description: "Time-based communication with motion and sound, choreography of visual and aural images"
            },
            {
              name: "Text, Speech, and Moving Image",
              description: "Exploring language as visual text and spoken word within video art"
            }
          ]
        },
        {
          category: "Theory & Practice",
          courses: [
            {
              name: "Graphic Design Histories",
              description: "Alternative media and social movements in U.S. graphic design history"
            },
            {
              name: "Writing as Visual Practice",
              description: "Developing interconnected relationship between writing, research, and design practice"
            },
            {
              name: "Exhibition Design",
              description: "Creative strategies bridging physical and digital spaces for audience engagement"
            }
          ]
        }
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
        {
          category: "Core Practice",
          courses: [
            { name: "Advanced Painting Techniques", description: "Intensive studio practice developing individual artistic voice" },
            { name: "Printmaking Methods", description: "Professional printmaking techniques and processes" },
            { name: "Thesis Exhibition", description: "Culminating independent body of work" }
          ]
        },
        {
          category: "Theory & Context",
          courses: [
            { name: "Color Theory and Practice", description: "Exploration of color relationships and application" },
            { name: "Contemporary Art Seminar", description: "Engagement with current art discourse and practices" },
            { name: "Art History and Criticism", description: "Historical context and critical analysis" }
          ]
        }
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
        {
          category: "Technical Practice",
          courses: [
            { name: "Advanced Photography", description: "Advanced lens-based image-making techniques and conceptual development" },
            { name: "Digital Imaging", description: "Digital photography workflows and post-production" },
            { name: "Alternative Processes", description: "Experimental and historical photographic processes" }
          ]
        },
        {
          category: "Context & Theory",
          courses: [
            { name: "Documentary Practice", description: "Documentary photography and visual storytelling" },
            { name: "Contemporary Photography Seminar", description: "Photography's evolving role in contemporary visual culture" },
            { name: "Thesis Project", description: "Independent body of photographic work" }
          ]
        }
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
        {
          category: "Material Practice",
          courses: [
            { name: "Sculpture Fundamentals", description: "Traditional and contemporary three-dimensional art-making techniques" },
            { name: "Digital Fabrication", description: "CAD, 3D printing, and digital manufacturing processes" },
            { name: "Installation Art", description: "Site-specific and immersive sculptural environments" }
          ]
        },
        {
          category: "Expanded Field",
          courses: [
            { name: "Public Art Practice", description: "Creating work for public spaces and community engagement" },
            { name: "Contemporary Sculpture Seminar", description: "Critical discourse in contemporary three-dimensional art" },
            { name: "Thesis Exhibition", description: "Culminating exhibition of independent work" }
          ]
        }
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
              <div className="space-y-8">
                {program.curriculum.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {category.courses.map((course, courseIndex) => (
                        <Card key={courseIndex} className="transition-smooth hover:shadow-md">
                          <CardContent className="p-4">
                            <p className="font-medium mb-2">{course.name}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* PDF View Button */}
              <div className="mt-10 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  For complete course descriptions and academic regulations
                </p>
                <a href="/yale-art-digital-haven/School%20of%20Art%202025-2026.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    View Full Course Bulletin (PDF)
                  </Button>
                </a>
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
