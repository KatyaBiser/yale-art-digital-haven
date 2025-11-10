import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, BookOpen, Globe, ExternalLink, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Yale School of Art";
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in art education and practice.",
    },
    {
      icon: Users,
      title: "Community",
      description: "A collaborative environment where artists support and challenge each other.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Pushing boundaries and exploring new forms of artistic expression.",
    },
    {
      icon: Globe,
      title: "Diversity",
      description: "Embracing diverse perspectives and backgrounds in art making.",
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
                About Yale School of Art
              </h1>
              <p className="text-xl text-muted-foreground">
                A legacy of excellence in graduate art education since 1869
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Our Mission</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Yale School of Art is a graduate professional school that confers Master of Fine Arts degrees 
                  in Graphic Design, Painting/Printmaking, Photography, and Sculpture. Additionally, we provide 
                  art courses to Yale College undergraduates and students in other graduate and professional 
                  schools of the university.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mission is to provide students with an intellectually informed, interdisciplinary education 
                  in the visual arts. We are committed to fostering critical thinking and the development of 
                  individual artistic practice within a supportive yet challenging environment.
                </p>
                <p className="text-lg text-muted-foreground">
                  The School's facilities include individual studios for all graduate students, seminar rooms, 
                  digital labs, and extensive technical workshops in various media. Our location in New Haven 
                  provides close proximity to the Yale University Art Gallery and the Yale Center for British Art, 
                  two world-class museums that serve as invaluable resources for our students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-elegant text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Our History</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 1869, Yale School of Art is one of the oldest and most distinguished art schools 
                  in the United States. Over its 150+ year history, the School has been home to numerous 
                  influential artists, designers, and educators who have shaped the discourse of contemporary art.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The School has evolved continuously to meet the changing landscape of contemporary art practice 
                  while maintaining its commitment to rigorous education and individual artistic development. 
                  Throughout its history, Yale School of Art has been a leader in innovative approaches to 
                  art education.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we continue this tradition of excellence, preparing artists for successful careers 
                  while encouraging them to push the boundaries of their chosen media and to engage critically 
                  with contemporary culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wiki Platform Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Digital Platform</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Yale School of Art operates an experimental platform for digital publishing as a wiki-format 
                  website. This unique approach allows our community to contribute and edit content, creating 
                  a dynamic, evolving representation of our school's activities and ideas.
                </p>
                <p className="text-lg text-muted-foreground">
                  This collaborative approach to digital publishing reflects our commitment to community 
                  engagement and the democratization of information within the art education context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visiting Artists Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Visiting Artists Program</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Our Visiting Artists program brings distinguished artists, designers, and critics to campus
                  for lectures, critiques, and conversations with students and faculty. This program provides
                  students with direct access to leading figures in contemporary art and design.
                </p>
                <p className="text-lg text-muted-foreground">
                  Recent visiting artists have included internationally recognized practitioners across all
                  disciplines, offering diverse perspectives on contemporary art practice and its role in society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Success Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">Alumni Success</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our graduates have gone on to establish remarkable careers as artists, educators, designers,
                  and cultural leaders around the world.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Alumni Card 1 */}
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Mariya Batan</h3>
                    <p className="text-sm text-primary mb-3">MFA Graphic Design</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Award-winning graphic designer whose work has been featured in the Whitney Biennial and
                      Aperture Magazine. Currently teaches at Columbia University and exhibits internationally.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="riyablin.github.io/mariya-batan-portfolio" target="_blank" rel="noopener noreferrer">
                        View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Alumni Card 2 */}
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Marcus Williams</h3>
                    <p className="text-sm text-primary mb-3">MFA Sculpture</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Creates large-scale public installations exploring themes of memory and place.
                      Recent commissions include works for the High Line in NYC and SFMOMA.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://marcuswilliams.studio" target="_blank" rel="noopener noreferrer">
                        View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Alumni Card 3 */}
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Elena Rodriguez</h3>
                    <p className="text-sm text-primary mb-3">MFA Graphic Design</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Creative Director at Pentagram, working with clients like Apple and Nike.
                      Her typeface designs have won multiple AIGA awards and are used worldwide.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://elenarodriguez.design" target="_blank" rel="noopener noreferrer">
                        View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Alumni Card 4 */}
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">David Park</h3>
                    <p className="text-sm text-primary mb-3">MFA Painting/Printmaking</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Contemporary painter whose work is held in major museum collections including MoMA and
                      the Guggenheim. Represented by Gagosian Gallery in New York and London.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://davidpark.art" target="_blank" rel="noopener noreferrer">
                        View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Alumni Card 5 */}
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Aisha Osman</h3>
                    <p className="text-sm text-primary mb-3">MFA Photography</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Documentary photographer and MacArthur Fellow whose projects focus on migration and
                      identity. Work published in National Geographic and exhibited at Tate Modern.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://aishaosman.photo" target="_blank" rel="noopener noreferrer">
                        View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Alumni Card 6 */}
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">James Thompson</h3>
                    <p className="text-sm text-primary mb-3">MFA Sculpture</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Installation artist and educator exploring technology and environment.
                      Currently Associate Professor at CalArts and curator at the Hammer Museum.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://jamesthompson.studio" target="_blank" rel="noopener noreferrer">
                        View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-6">
                  These are just a few examples of the incredible achievements of our alumni community.
                </p>
                <Button size="lg" variant="outline">
                  Explore More Alumni Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
