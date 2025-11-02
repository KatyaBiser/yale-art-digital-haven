import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import drSarahChen from "@/assets/Teachers/Dr-Sarah-Chen.png";
import profMichaelRodriguez from "@/assets/Teachers/Prof-Michael-Rodriguez.png";
import drEmilyThompson from "@/assets/Teachers/Dr-Emily-Thompson.png";
import profDavidKim from "@/assets/Teachers/Prof-David-Kim.png";
import drJenniferMartinez from "@/assets/Teachers/Dr-Jennifer-Martinez.png";
import profRobertJohnson from "@/assets/Teachers/Prof-Robert-Johnson.png";
import drLisaAnderson from "@/assets/Teachers/Dr-Lisa-Anderson.png";
import profJamesWilson from "@/assets/Teachers/Prof-James-Wilson.png";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Chen",
      position: "Director of Graphic Design",
      specialty: "Typography, Digital Design",
      email: "sarah.chen@yale.edu",
      image: drSarahChen,
    },
    {
      name: "Prof. Michael Rodriguez",
      position: "Chair of Painting/Printmaking",
      specialty: "Contemporary Painting, Printmaking Techniques",
      email: "michael.rodriguez@yale.edu",
      image: profMichaelRodriguez,
    },
    {
      name: "Dr. Emily Thompson",
      position: "Photography Program Director",
      specialty: "Documentary Photography, Visual Culture",
      email: "emily.thompson@yale.edu",
      image: drEmilyThompson,
    },
    {
      name: "Prof. David Kim",
      position: "Sculpture Department Chair",
      specialty: "Installation Art, Public Sculpture",
      email: "david.kim@yale.edu",
      image: profDavidKim,
    },
    {
      name: "Dr. Jennifer Martinez",
      position: "Associate Professor",
      specialty: "Art History, Critical Theory",
      email: "jennifer.martinez@yale.edu",
      image: drJenniferMartinez,
    },
    {
      name: "Prof. Robert Johnson",
      position: "Senior Lecturer",
      specialty: "Digital Media, Interactive Art",
      email: "robert.johnson@yale.edu",
      image: profRobertJohnson,
    },
    {
      name: "Dr. Lisa Anderson",
      position: "Assistant Professor",
      specialty: "Contemporary Art, Curatorial Studies",
      email: "lisa.anderson@yale.edu",
      image: drLisaAnderson,
    },
    {
      name: "Prof. James Wilson",
      position: "Visiting Professor",
      specialty: "Experimental Film, Video Art",
      email: "james.wilson@yale.edu",
      image: profJamesWilson,
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

        {/* Faculty Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Our Faculty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {facultyMembers.map((member, index) => (
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
                    <p className="text-sm text-muted-foreground mb-4">{member.specialty}</p>
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
