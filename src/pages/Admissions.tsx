import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, Calendar, CheckCircle } from "lucide-react";

const Admissions = () => {
  const requirements = [
    "Bachelor's degree from an accredited institution",
    "Portfolio of recent work (20 images for most programs)",
    "Statement of purpose (500-1000 words)",
    "Three letters of recommendation",
    "Official transcripts",
    "GRE scores (optional for most programs)",
  ];

  const timeline = [
    {
      date: "December 1",
      event: "Application Opens",
      description: "Begin your application for Fall 2025 admission",
    },
    {
      date: "January 15",
      event: "Application Deadline",
      description: "All materials must be submitted by 11:59 PM EST",
    },
    {
      date: "February - March",
      event: "Review Process",
      description: "Faculty review applications and portfolios",
    },
    {
      date: "April 1",
      event: "Decisions Released",
      description: "Admission decisions sent to all applicants",
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
                Admissions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join the next generation of leading artists and designers
              </p>
              <Button size="lg">Start Your Application</Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Application Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Yale School of Art admits approximately 60 students each year across all four MFA programs. 
                  We seek students who demonstrate exceptional artistic talent, intellectual curiosity, and 
                  a commitment to developing their practice within a rigorous academic environment.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our holistic review process considers your portfolio, academic record, statement of purpose, 
                  and letters of recommendation. We look for evidence of artistic vision, technical skill, 
                  and the potential to contribute to our diverse creative community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Application Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Application Timeline</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3 md:w-48">
                          <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-semibold text-primary">{item.date}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{item.event}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Aid Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                <DollarSign className="inline h-8 w-8 mr-2" />
                Financial Aid & Scholarships
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Yale School of Art provides full tuition scholarships to all students in the MFA program. 
                  Additionally, various merit-based and need-based grants are available to help cover living 
                  expenses and materials costs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Tuition Coverage</h3>
                      <p className="text-muted-foreground">
                        All admitted students receive full tuition scholarships for the duration of their 
                        two-year MFA program.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Living Stipends</h3>
                      <p className="text-muted-foreground">
                        Additional stipends and grants are available based on financial need to help 
                        with living expenses.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-lg text-muted-foreground">
                  Students are also eligible to apply for teaching fellowships, research assistantships, 
                  and other funding opportunities throughout their time at Yale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* International Students Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">International Students</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Yale School of Art welcomes applications from international students. Applicants whose 
                  native language is not English must demonstrate English proficiency through TOEFL or 
                  IELTS scores.
                </p>
                <p className="text-lg text-muted-foreground">
                  International students receive the same financial support as domestic students, including 
                  full tuition scholarships. The Office of International Students and Scholars provides 
                  comprehensive support for visa processes and adjustment to life in the United States.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Take the first step toward your MFA at Yale School of Art
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Application
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Download Application Guide
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
