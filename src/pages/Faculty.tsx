import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import profJosefPavlicek from "@/assets/Teachers/Prof-Josef-Pavlicek.png";
import drSarahChen from "@/assets/Teachers/Dr-Sarah-Chen.png";
import profMichaelRodriguez from "@/assets/Teachers/Prof-Michael-Rodriguez.png";
import drEmilyThompson from "@/assets/Teachers/Dr-Emily-Thompson.png";
import profDavidKim from "@/assets/Teachers/Prof-David-Kim.png";
import drJenniferMartinez from "@/assets/Teachers/Dr-Jennifer-Martinez.png";
import profRobertJohnson from "@/assets/Teachers/Prof-Robert-Johnson.png";
import drLisaAnderson from "@/assets/Teachers/Dr-Lisa-Anderson.png";
import profJamesWilson from "@/assets/Teachers/Prof-James-Wilson.png";

type Department = "All" | "Graphic Design" | "Painting/Printmaking" | "Photography" | "Sculpture";

const Faculty = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>("All");

  useEffect(() => {
    document.title = "Faculty & Staff - Yale School of Art";
  }, []);

  const facultyMembers = [
    {
      name: "Prof. Josef Pavlicek",
      position: "Dean of Yale School of Art",
      department: "All" as Department,
      specialty: "Contemporary Art, Institutional Leadership",
      bio: "Prof. Pavlicek is an internationally acclaimed artist and educator who has served as Dean since 2018. A recipient of the MacArthur Fellowship, Guggenheim Fellowship, and National Medal of Arts, his work is held in permanent collections of MoMA, Tate Modern, and Centre Pompidou. He has shaped contemporary art education at leading institutions worldwide and continues to exhibit internationally while guiding the school's visionary direction.",
      email: "josef.pavlicek@yale.edu",
      image: profJosefPavlicek,
    },
    {
      name: "Dr. Sarah Chen",
      position: "Director of Graphic Design",
      department: "Graphic Design" as Department,
      specialty: "Typography, Digital Design",
      bio: "Dr. Chen brings 15 years of industry experience from leading design studios in New York and San Francisco. Her research focuses on the intersection of typography and emerging technologies, with work featured in major design publications worldwide.",
      email: "sarah.chen@yale.edu",
      image: drSarahChen,
    },
    {
      name: "Prof. Michael Rodriguez",
      position: "Chair of Painting/Printmaking",
      department: "Painting/Printmaking" as Department,
      specialty: "Contemporary Painting, Printmaking Techniques",
      bio: "Prof. Rodriguez is an internationally exhibited painter whose work explores themes of memory and identity. He has received numerous awards including a Guggenheim Fellowship and maintains an active studio practice alongside teaching.",
      email: "michael.rodriguez@yale.edu",
      image: profMichaelRodriguez,
    },
    {
      name: "Dr. Emily Thompson",
      position: "Photography Program Director",
      department: "Photography" as Department,
      specialty: "Documentary Photography, Visual Culture",
      bio: "Dr. Thompson's documentary work has been published in National Geographic and The New York Times. She specializes in long-form visual storytelling and has published three critically acclaimed photobooks exploring social justice themes.",
      email: "emily.thompson@yale.edu",
      image: drEmilyThompson,
    },
    {
      name: "Prof. David Kim",
      position: "Sculpture Department Chair",
      department: "Sculpture" as Department,
      specialty: "Installation Art, Public Sculpture",
      bio: "Prof. Kim creates large-scale installations that have been commissioned for public spaces across the United States and Asia. His work investigates the relationship between architecture, landscape, and community engagement.",
      email: "david.kim@yale.edu",
      image: profDavidKim,
    },
    {
      name: "Dr. Jennifer Martinez",
      position: "Associate Professor of Graphic Design",
      department: "Graphic Design" as Department,
      specialty: "Art History, Critical Theory",
      bio: "Dr. Martinez's scholarship examines the history of graphic design and its role in shaping visual culture. She has published extensively on modernist design movements and teaches courses bridging theory and practice.",
      email: "jennifer.martinez@yale.edu",
      image: drJenniferMartinez,
    },
    {
      name: "Prof. Robert Johnson",
      position: "Senior Lecturer in Painting",
      department: "Painting/Printmaking" as Department,
      specialty: "Digital Media, Interactive Art",
      bio: "Prof. Johnson explores the boundaries between traditional painting and new media. His hybrid works incorporate digital processes and interactive elements, challenging conventional definitions of painting in the contemporary era.",
      email: "robert.johnson@yale.edu",
      image: profRobertJohnson,
    },
    {
      name: "Dr. Lisa Anderson",
      position: "Assistant Professor of Photography",
      department: "Photography" as Department,
      specialty: "Contemporary Art, Curatorial Studies",
      bio: "Dr. Anderson is a curator and scholar specializing in contemporary photography. She has organized exhibitions at major museums and her critical writing appears in leading art journals, focusing on photography's evolving role in visual culture.",
      email: "lisa.anderson@yale.edu",
      image: drLisaAnderson,
    },
    {
      name: "Prof. James Wilson",
      position: "Visiting Professor of Sculpture",
      department: "Sculpture" as Department,
      specialty: "Experimental Film, Video Art",
      bio: "Prof. Wilson creates time-based sculptural works that merge video, performance, and installation. His experimental films have screened at international festivals and his work is held in museum collections including MoMA and the Tate Modern.",
      email: "james.wilson@yale.edu",
      image: profJamesWilson,
    },
  ];

  const departments: Department[] = ["All", "Graphic Design", "Painting/Printmaking", "Photography", "Sculpture"];

  const filteredFaculty = selectedDepartment === "All"
    ? facultyMembers
    : facultyMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Faculty & Staff
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn from distinguished artists, designers, and scholars
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-12">
                Our faculty consists of accomplished artists, designers, and scholars who are leaders in their 
                respective fields. They bring diverse perspectives and extensive professional experience to their 
                teaching, creating a dynamic and intellectually stimulating environment for graduate study.
              </p>
            </div>
          </div>
        </section>

        {/* Department Filters */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  className="transition-smooth"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
              {selectedDepartment === "All" ? "Our Faculty" : `${selectedDepartment} Faculty`}
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              {filteredFaculty.length} {filteredFaculty.length === 1 ? 'faculty member' : 'faculty members'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredFaculty.map((member, index) => (
                <Card key={index} className="transition-smooth hover:shadow-hover">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.specialty}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Teaching Philosophy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  At Yale School of Art, our faculty are committed to fostering an environment where students 
                  can develop their individual artistic voices while engaging with contemporary art discourse. 
                  We believe in the importance of rigorous critique, interdisciplinary exchange, and the 
                  integration of theory and practice.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Faculty members maintain active professional practices alongside their teaching, ensuring 
                  that students benefit from current perspectives on the art world. Regular critiques, 
                  one-on-one mentoring, and seminar discussions create multiple contexts for learning and 
                  artistic growth.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our low student-to-faculty ratio (approximately 1:4) ensures that each student receives 
                  individualized attention and mentorship throughout their graduate studies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;
