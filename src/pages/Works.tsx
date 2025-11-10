import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import images from Students Work folder
import urbanTypographyImg from "@/assets/Students Work/Graphic Design/Urban Typography/Typography-Exhibition.jpg";

import abstractExpressions1 from "@/assets/Students Work/Painting/Abstract Expressions/Marie-Paterova-2048x-1.jpg";
import abstractExpressions2 from "@/assets/Students Work/Painting/Abstract Expressions/Marie-Paterova-2048x-2.jpg";
import abstractExpressions3 from "@/assets/Students Work/Painting/Abstract Expressions/Marie-Paterova-2048x-3.jpg";
import abstractExpressions4 from "@/assets/Students Work/Painting/Abstract Expressions/Marie-Paterova-2048x-4.jpg";

import streetNarratives1 from "@/assets/Students Work/Photography/Street Narratives/Photography-Festival-Exhibition-1.jpg";
import streetNarratives2 from "@/assets/Students Work/Photography/Street Narratives/Photography-Festival-Exhibition-2.jpg";

import spatialForms1 from "@/assets/Students Work/Sculpture/Spatial Forms/Mikulas-Juracek-2025-1.jpg";
import spatialForms2 from "@/assets/Students Work/Sculpture/Spatial Forms/Mikulas-Juracek-2025-2.jpg";
import spatialForms3 from "@/assets/Students Work/Sculpture/Spatial Forms/Mikulas-Juracek-2025-3.jpg";
import spatialForms4 from "@/assets/Students Work/Sculpture/Spatial Forms/Mikulas-Juracek-2025-4.jpg";

import digitalIdentities1 from "@/assets/Students Work/Graphic Design/Digital Identities/Facebook-Image-1.jpg";
import digitalIdentities2 from "@/assets/Students Work/Graphic Design/Digital Identities/Facebook-Image-2.jpg";

import colorStudies1 from "@/assets/Students Work/Painting/Color Studies/Anezka-Abrtova-Instalace-1.jpg";
import colorStudies2 from "@/assets/Students Work/Painting/Color Studies/Anezka-Abrtova-Instalace-2.jpg";
import colorStudies3 from "@/assets/Students Work/Painting/Color Studies/Anezka-Abrtova-Instalace-3.jpg";
import colorStudies4 from "@/assets/Students Work/Painting/Color Studies/Anezka-Abrtova-Instalace-4.jpg";

type Work = {
  title: string;
  artist: string;
  program: string;
  year: string;
  images: string[];
};

const Works = () => {
  useEffect(() => {
    document.title = "Student Works - Yale School of Art";
  }, []);

  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentWorks, setCurrentWorks] = useState<Work[]>([]);
  const allWorks: Work[] = [
    {
      title: "Urban Typography",
      artist: "Maria Chen",
      program: "Graphic Design",
      year: "2024",
      images: [urbanTypographyImg],
    },
    {
      title: "Abstract Expressions",
      artist: "James Rodriguez",
      program: "Painting",
      year: "2024",
      images: [abstractExpressions1, abstractExpressions2, abstractExpressions3, abstractExpressions4],
    },
    {
      title: "Street Narratives",
      artist: "Sarah Thompson",
      program: "Photography",
      year: "2024",
      images: [streetNarratives1, streetNarratives2],
    },
    {
      title: "Spatial Forms",
      artist: "David Kim",
      program: "Sculpture",
      year: "2024",
      images: [spatialForms1, spatialForms2, spatialForms3, spatialForms4],
    },
    {
      title: "Digital Identities",
      artist: "Alex Martinez",
      program: "Graphic Design",
      year: "2023",
      images: [digitalIdentities1, digitalIdentities2],
    },
    {
      title: "Color Studies",
      artist: "Emily Johnson",
      program: "Painting",
      year: "2023",
      images: [colorStudies3, colorStudies2, colorStudies1, colorStudies4],
    },
  ];

  const filterWorks = (program: string) => {
    if (program === "All") return allWorks;
    return allWorks.filter(work => work.program === program);
  };

  const handleWorkClick = (works: Work[], index: number) => {
    setCurrentWorks(works);
    setSelectedWorkIndex(index);
    setCurrentImageIndex(0); // Reset to first image when selecting a work
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedWorkIndex !== null && currentWorks[selectedWorkIndex]) {
      const currentWork = currentWorks[selectedWorkIndex];
      if (currentImageIndex < currentWork.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  const WorksGrid = ({ works }: { works: Work[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work, index) => (
        <div
          key={index}
          className="group cursor-pointer"
          onClick={() => handleWorkClick(works, index)}
        >
          <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
            <img
              src={work.images[0]}
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
                Upcoming Exhibitions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-semibold mb-2">MFA Thesis Exhibition 2025</h3>
                  <p className="text-muted-foreground mb-2">December 20 - December 30, 2025
                  </p>
                  <p className="text-muted-foreground">
                    Annual exhibition showcasing thesis projects from graduating MFA students across all programs.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-semibold mb-2">First Year Review Exhibition</h3>
                  <p className="text-muted-foreground mb-2">January 10 - January 30, 2026</p>
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

              {/* Navigation buttons - only show if work has multiple images */}
              {currentWorks[selectedWorkIndex].images.length > 1 && (
                <>
                  {currentImageIndex > 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                      onClick={handlePrevious}
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                  )}
                  {currentImageIndex < currentWorks[selectedWorkIndex].images.length - 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                      onClick={handleNext}
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  )}
                </>
              )}

              {/* Image */}
              <div className="flex items-center justify-center h-[85vh] bg-black">
                <img
                  src={currentWorks[selectedWorkIndex].images[currentImageIndex]}
                  alt={`${currentWorks[selectedWorkIndex].title} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Image counter indicator */}
              {currentWorks[selectedWorkIndex].images.length > 1 && (
                <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                  {currentImageIndex + 1} / {currentWorks[selectedWorkIndex].images.length}
                </div>
              )}

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
