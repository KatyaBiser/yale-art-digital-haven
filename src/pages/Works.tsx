import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import paintingImg from "@/assets/painting.jpg";
import photographyImg from "@/assets/photography.jpg";
import sculptureImg from "@/assets/sculpture.jpg";

const Works = () => {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);
  const [currentWorks, setCurrentWorks] = useState<typeof allWorks>([]);
  const allWorks = [
    {
      title: "Urban Typography",
      artist: "Maria Chen",
      program: "Graphic Design",
      year: "2024",
      image: graphicDesignImg,
    },
    {
      title: "Abstract Expressions",
      artist: "James Rodriguez",
      program: "Painting",
      year: "2024",
      image: paintingImg,
    },
    {
      title: "Street Narratives",
      artist: "Sarah Thompson",
      program: "Photography",
      year: "2024",
      image: photographyImg,
    },
    {
      title: "Spatial Forms",
      artist: "David Kim",
      program: "Sculpture",
      year: "2024",
      image: sculptureImg,
    },
    {
      title: "Digital Identities",
      artist: "Alex Martinez",
      program: "Graphic Design",
      year: "2023",
      image: graphicDesignImg,
    },
    {
      title: "Color Studies",
      artist: "Emily Johnson",
      program: "Painting",
      year: "2023",
      image: paintingImg,
    },
  ];

  const filterWorks = (program: string) => {
    if (program === "All") return allWorks;
    return allWorks.filter(work => work.program === program);
  };

  const handleWorkClick = (works: typeof allWorks, index: number) => {
    setCurrentWorks(works);
    setSelectedWorkIndex(index);
  };

  const handlePrevious = () => {
    if (selectedWorkIndex !== null && selectedWorkIndex > 0) {
      setSelectedWorkIndex(selectedWorkIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedWorkIndex !== null && selectedWorkIndex < currentWorks.length - 1) {
      setSelectedWorkIndex(selectedWorkIndex + 1);
    }
  };

  const WorksGrid = ({ works }: { works: typeof allWorks }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work, index) => (
        <div
          key={index}
          className="group cursor-pointer"
          onClick={() => handleWorkClick(works, index)}
        >
          <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1">{work.title}</h3>
          <p className="text-sm text-muted-foreground">{work.artist}</p>
          <p className="text-sm text-muted-foreground">{work.program} • {work.year}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Student Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore the creative achievements of our MFA students
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="graphic-design">Graphic Design</TabsTrigger>
                <TabsTrigger value="painting">Painting</TabsTrigger>
                <TabsTrigger value="photography">Photography</TabsTrigger>
                <TabsTrigger value="sculpture">Sculpture</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <WorksGrid works={allWorks} />
              </TabsContent>
              
              <TabsContent value="graphic-design">
                <WorksGrid works={filterWorks("Graphic Design")} />
              </TabsContent>
              
              <TabsContent value="painting">
                <WorksGrid works={filterWorks("Painting")} />
              </TabsContent>
              
              <TabsContent value="photography">
                <WorksGrid works={filterWorks("Photography")} />
              </TabsContent>
              
              <TabsContent value="sculpture">
                <WorksGrid works={filterWorks("Sculpture")} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Exhibitions Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
                Current & Upcoming Exhibitions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-semibold mb-2">MFA Thesis Exhibition 2024</h3>
                  <p className="text-muted-foreground mb-2">May 1 - May 31, 2024</p>
                  <p className="text-muted-foreground">
                    Annual exhibition showcasing thesis projects from graduating MFA students across all programs.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-semibold mb-2">First Year Review Exhibition</h3>
                  <p className="text-muted-foreground mb-2">December 5 - December 20, 2024</p>
                  <p className="text-muted-foreground">
                    First-year MFA students present works from their initial year of study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Lightbox Modal */}
      <Dialog open={selectedWorkIndex !== null} onOpenChange={() => setSelectedWorkIndex(null)}>
        <DialogContent className="max-w-7xl w-full p-0 overflow-hidden">
          {selectedWorkIndex !== null && currentWorks[selectedWorkIndex] && (
            <div className="relative bg-black">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedWorkIndex(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation buttons */}
              {selectedWorkIndex > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}
              {selectedWorkIndex < currentWorks.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}

              {/* Image */}
              <div className="flex items-center justify-center h-[85vh] bg-black">
                <img
                  src={currentWorks[selectedWorkIndex].image}
                  alt={currentWorks[selectedWorkIndex].title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Metadata */}
              <div className="bg-white p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {currentWorks[selectedWorkIndex].title}
                </h3>
                <p className="text-lg text-muted-foreground mb-1">
                  {currentWorks[selectedWorkIndex].artist}
                </p>
                <p className="text-muted-foreground">
                  {currentWorks[selectedWorkIndex].program} • {currentWorks[selectedWorkIndex].year}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Works;
