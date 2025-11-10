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
    overview?: string;
    facilities?: string;
    programStructure?: string;
    creditRequirements?: string;
    highlights: string[];
    typicalPlan?: Array<{
      year: string;
      semesters: Array<{
        term: string;
        courses: Array<{ code: string; name: string; credits: number }>;
        totalCredits: number;
      }>;
    }>;
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
      overview: "The graphic design program focuses on the development of a cohesive, investigative body of work, also known as the student's thesis. At Yale, the graphic design thesis is conceived as a loose framework within which each student's visual method is deployed across many diverse projects during the two-year course of study. While every thesis project is unique, there are several common features: a focus on methodology, the application of a visual method to studio work, and the organization of the work in a thoughtfully argued written document and \"Thesis Book.\"\n\nThe individual collection of graphic design work by each student is supported on several levels simultaneously: studio work led by faculty meeting weekly; small six-person thesis groups meeting biweekly; individual sessions with writing and editing tutors; and lectures, presentations, and workshops.",
      facilities: "The School of Art provides digital lab facilities however all graphic design students are expected to have their own personal computer. Each student has a designated work space in the design studio loft and has access to equipment including bookbinding materials, wide format printers, a RISO duplicator, Vandercook press, and work spaces in the School of Art buildings. More resources supporting interdisciplinary projects including motion capture and VR is available at the nearby Center for Collaborative Arts and Media. In addition, students draw on the extraordinary resources of Yale University courses, conferences, films, lectures, and museums, and especially the extensive research and rare book collections of Sterling, Haas, and Beinecke libraries. No metalcasting or ceramic facilities are available.",
      programStructure: "Each year, up to ten students are admitted into the two-year graphic design program, and up to eight students are admitted into the preliminary-year program. Two-year program students typically have a BFA in Graphic Design and are expected to have substantial and distinguished professional experience. Students applying to the preliminary-year program typically have relevant experience in a field of study outside design and demonstrate evidence of strong visual acuity. After successful completion of the preliminary year, these students automatically continue on in the two-year M.F.A. program.",
      creditRequirements: "60 credits total are required to graduate. 42 credits in your area of concentration (including Art 949a, Critical Practice), and 18 additional credits, including a minimum of 6 academic credits, which can be selected from throughout the University's rich offerings.",
      image: graphicDesignImg,
      highlights: [
        "Two-year MFA program with optional preliminary year",
        "Up to 10 students admitted into two-year program annually",
        "Individual studio space for all students",
        "Access to RISO duplicator, Vandercook press, and bookbinding facilities",
        "Weekly critiques and biweekly thesis groups",
        "Full tuition scholarship",
      ],
      typicalPlan: [
        {
          year: "Preliminary-Year Graphic Design",
          semesters: [
            {
              term: "Fall",
              courses: [
                { code: "ART 266", name: "Graphic Design Histories", credits: 3 },
                { code: "ART 710", name: "Preliminary Studio", credits: 6 },
                { code: "ART 712", name: "Prelim Typography", credits: 3 },
                { code: "ART 714", name: "All Design Considered", credits: 3 },
              ],
              totalCredits: 15,
            },
            {
              term: "Spring",
              courses: [
                { code: "ART 369", name: "Interactive Design and the Internet", credits: 3 },
                { code: "ART 468", name: "Advanced Graphic Design: Ad Hoc Series and Systems", credits: 3 },
                { code: "ART 711", name: "Preliminary Studio", credits: 6 },
                { code: "ART 715", name: "All Design Considered", credits: 3 },
              ],
              totalCredits: 15,
            },
          ],
        },
        {
          year: "First-Year Graphic Design",
          semesters: [
            {
              term: "Fall",
              courses: [
                { code: "ART 720", name: "1st-year Graduate Studio", credits: 6 },
                { code: "ART 949", name: "Critical and Professional Practices", credits: 3 },
                { code: "", name: "Graphic Design Elective", credits: 3 },
                { code: "", name: "Graphic Design, Studio, or Academic Elective", credits: 3 },
              ],
              totalCredits: 15,
            },
            {
              term: "Spring",
              courses: [
                { code: "ART 721", name: "1st-year Graduate Studio", credits: 6 },
                { code: "ART 723", name: "Writing as Visual Practice", credits: 3 },
                { code: "", name: "Graphic Design Elective", credits: 3 },
                { code: "", name: "Graphic Design, Studio, or Academic Elective", credits: 3 },
              ],
              totalCredits: 15,
            },
          ],
        },
        {
          year: "Second Year Graphic Design",
          semesters: [
            {
              term: "Fall",
              courses: [
                { code: "ART 730", name: "2nd-year Graduate Studio", credits: 3 },
                { code: "ART 738", name: "Degree Presentation", credits: 6 },
                { code: "", name: "Graphic Design Elective", credits: 3 },
                { code: "", name: "Graphic Design, Studio, or Academic Elective", credits: 3 },
              ],
              totalCredits: 15,
            },
            {
              term: "Spring",
              courses: [
                { code: "ART 731", name: "2nd-year Graduate Studio", credits: 3 },
                { code: "ART 739", name: "Degree Presentation", credits: 6 },
                { code: "", name: "Graphic Design Elective", credits: 3 },
                { code: "", name: "Graphic Design, Studio, or Academic Elective", credits: 3 },
              ],
              totalCredits: 15,
            },
          ],
        },
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
          category: "Core Studios & Critique",
          courses: [
            { name: "Round Trip: First-Year Crits", description: "Unpacking making and speaking practices, exploring form, content, authorship, and critique culture" },
            { name: "Pit Crit", description: "Weekly two-hour critiques with faculty and visiting critics, the core of the program" },
            { name: "Painting/Printmaking Thesis", description: "Development of thesis exhibition with programmatic, publication, and installation elements" },
            { name: "Individual Criticism", description: "One-on-one criticism of individual projects throughout the program" }
          ]
        },
        {
          category: "Painting & Color",
          courses: [
            { name: "Intermediate Painting", description: "Individuation of pictorial language through representational and abstract approaches" },
            { name: "Painting Time", description: "Exploring how painting holds time through on-site observational work" },
            { name: "Colorspace", description: "Experimenting with color systems, interaction, and expressive potential across media" }
          ]
        },
        {
          category: "Printmaking",
          courses: [
            { name: "Introduction to Intaglio Printmaking", description: "Drypoint, line-etch, and aquatint techniques with 500-year-old process" },
            { name: "Introduction to Lithography", description: "Stone, ball ground, and photographic plate lithographic printing" },
            { name: "Print Series", description: "Developing cohesive print series exploring printmaking's integral qualities" },
            { name: "Silkscreen Printing", description: "Hand-cut stencils to four-color separation photo-silkscreen techniques" },
            { name: "The Matrix: Textures and Densities of the Grid", description: "Grid systems in contemporary and ancient printmaking contexts" }
          ]
        },
        {
          category: "Materials & Experimental Practice",
          courses: [
            { name: "On the Surface", description: "Material-focused workshop for experimental approaches to building surfaces" },
            { name: "Fabric Lab", description: "Fiber-related praxis: weave structures, stitching, printing, and dyeing techniques" },
            { name: "Digital Drawing", description: "Digital techniques expanding traditional drawing and painting possibilities" },
            { name: "Adventures in Self-Publishing", description: "Artists' books, zines, and alternative publishing to bypass traditional gatekeepers" }
          ]
        },
        {
          category: "Theory & Context",
          courses: [
            { name: "Ventriloquism, Performance, and Contemporary Art", description: "Voice, embodiment, and performance in contemporary interdisciplinary practice" }
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
          category: "Core Studios & Critique",
          courses: [
            { name: "Critique Panel", description: "Weekly presentations for open review by rotating faculty panel of artists, curators, and critics" },
            { name: "Picture Show: Thesis in Photography", description: "Supporting thesis exhibition with logistics, documentation, and professional development" },
            { name: "This Means Something", description: "Guest artist lectures and discussions, student-curated schedule across disciplines" }
          ]
        },
        {
          category: "Technical Practice",
          courses: [
            { name: "Practice and Production", description: "Comprehensive digital workflow from capture to print, color management, and advanced Photoshop" },
            { name: "Black & White Photography", description: "35mm cameras, photograms, pinhole, fundamental printing, film exposure and development" },
            { name: "Digital Photography", description: "Digital color photography with emphasis on visual syntax and meaning in photo-saturated world" },
            { name: "Form For Content in Large Format", description: "Analog view cameras, advanced lighting and printing, scanning archival negatives" }
          ]
        },
        {
          category: "Conceptual & Narrative Approaches",
          courses: [
            { name: "Photographic Storytelling", description: "Elements of visual narratives, sequencing, photographic literacy, camera techniques" },
            { name: "Narrative Forms and Documentary Style", description: "Documentary to studio approaches converging on contemporary digital moment" },
            { name: "Picture Collection", description: "Using picture collections to critique culture and as resources for artistic practice" },
            { name: "Picturing at the Peabody", description: "Creating work from Peabody Museum collections, culminating in collaborative exhibition" }
          ]
        },
        {
          category: "Theory & Context",
          courses: [
            { name: "Core Curriculum II", description: "Exploring form and content relationships through close looking and visual thinking strategies" },
            { name: "Critical Perspectives in Photography", description: "Critical issues in contemporary photography taught at museums and institutions" },
            { name: "Eye and Ear", description: "Incorporating writing into practice, exploring description, narrative, and artist statements" }
          ]
        },
        {
          category: "Experimental & Interdisciplinary",
          courses: [
            { name: "Experimental Narratives", description: "Survey of narrative, documentary, and experimental film exploring visual art genres" },
            { name: "What Makes a Book Work?", description: "Contemporary photobook landscape with focus on producing a class book" }
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
          category: "Core Studios & Critique",
          courses: [
            { name: "Sculpture Studio Seminar", description: "Weekly critiques with full faculty and students, each student reviewed at least once per term" },
            { name: "X-Critique", description: "In-depth critique focusing on time-based and ungainly works" },
            { name: "Individual Criticism", description: "One-on-one criticism of individual sculpture projects" },
            { name: "Sculpture Thesis", description: "Thesis support through zine production, exhibition proposals, installation, and professional development" }
          ]
        },
        {
          category: "Material Techniques",
          courses: [
            { name: "Sculpture Basics", description: "Space, form, weight, mass concepts through construction techniques and material application" },
            { name: "Introduction to Sculpture: Wood", description: "Woodworking technology with hand tools and machines, object construction and spatial installation" },
            { name: "Introduction to Sculpture: Metal", description: "Metal fabrication through artistic and cultural frameworks, welding and construction techniques" },
            { name: "Sculpture as Object", description: "Documentation, preservation, conservation; wood carving, lamination, assemblage, metal processes" }
          ]
        },
        {
          category: "Time-based & Installation",
          courses: [
            { name: "Advanced Video Installation", description: "Video installations, performance, kinetic sculptures, creating complex spatial and temporal environments" }
          ]
        },
        {
          category: "Conceptual & Experimental",
          courses: [
            { name: "Sculpture and Questions of Definition", description: "Exploring what sculpture is, context, authorship, process, and vulnerability" },
            { name: "Doing", description: "Collective experiential learning through movement, objects, workshops, and field trips" },
            { name: "The Word is My Fourth Dimension", description: "Text-based practices across various substrates: browser, wall, body, sky, land" },
            { name: "Landscape Paradoxes", description: "Nature in contemporary art, wild and cultivated environments, elemental forces" }
          ]
        },
        {
          category: "Advanced Studio",
          courses: [
            { name: "Advanced Sculpture Studio Practice", description: "Self-directed work with group discussions, readings, slides, and videos of current art practices" }
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

        {/* Program Overview - if exists */}
        {program.overview && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Program Overview</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {program.overview}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Facilities - if exists */}
        {program.facilities && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Facilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {program.facilities}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Program Structure - if exists */}
        {program.programStructure && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Two-year and Preliminary-year Programs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {program.programStructure}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Credit Requirements - if exists */}
        {program.creditRequirements && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Credit Requirements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {program.creditRequirements}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Typical Plan of Study - if exists */}
        {program.typicalPlan && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Typical Plan of Study</h2>
                <div className="space-y-12">
                  {program.typicalPlan.map((yearPlan, yearIndex) => (
                    <div key={yearIndex}>
                      <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">{yearPlan.year}</h3>
                      <div className="space-y-6">
                        {yearPlan.semesters.map((semester, semIndex) => (
                          <Card key={semIndex}>
                            <CardContent className="p-6">
                              <h4 className="text-xl font-semibold mb-4">{semester.term}</h4>
                              <div className="space-y-3">
                                {semester.courses.map((course, courseIndex) => (
                                  <div key={courseIndex} className="flex justify-between items-start border-b border-border pb-2 last:border-0">
                                    <div className="flex-1">
                                      {course.code && (
                                        <span className="text-sm font-mono text-primary mr-2">{course.code}</span>
                                      )}
                                      <span className="text-sm">{course.name}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground ml-4">{course.credits} credits</span>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-border">
                                <div className="flex justify-between items-center font-semibold">
                                  <span>Total minimum credits for {semester.term.toLowerCase()} term:</span>
                                  <span className="text-primary">{semester.totalCredits} credits</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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

        {/* Course Bulletin PDF */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Complete Course Information</h2>
              <p className="text-muted-foreground mb-8">
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
