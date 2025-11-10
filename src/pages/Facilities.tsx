import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import DL1 from "@/assets/Facilities/Digital Labs/DL1.jpg";
import DL2 from "@/assets/Facilities/Digital Labs/DL2.jpg";
import DL3 from "@/assets/Facilities/Digital Labs/DL3.jpg";

import EC1 from "@/assets/Facilities/Equipment Checkout/EC1.jpg";
import EC2 from "@/assets/Facilities/Equipment Checkout/EC2.jpg";
import EC3 from "@/assets/Facilities/Equipment Checkout/EC3.jpg";

import IS1 from "@/assets/Facilities/Individual Studios/Is1.png";
import IS2 from "@/assets/Facilities/Individual Studios/Is2.png";
import IS3 from "@/assets/Facilities/Individual Studios/Is3.png";
import IS4 from "@/assets/Facilities/Individual Studios/Is4.png";

import PF1 from "@/assets/Facilities/Photography Facilities/PF1.jpg";
import PF2 from "@/assets/Facilities/Photography Facilities/PF2.jpg";
import PF3 from "@/assets/Facilities/Photography Facilities/PF3.jpg";
import PF4 from "@/assets/Facilities/Photography Facilities/PF4.jpg";
import PF5 from "@/assets/Facilities/Photography Facilities/PF5.jpg";
import PF6 from "@/assets/Facilities/Photography Facilities/PF6.jpg";

import PM1 from "@/assets/Facilities/Printmaking Workshop/PM1.jpg";
import PM2 from "@/assets/Facilities/Printmaking Workshop/PM2.jpg";
import PM3 from "@/assets/Facilities/Printmaking Workshop/PM3.jpg";
import PM4 from "@/assets/Facilities/Printmaking Workshop/PM4.jpg";
import PM5 from "@/assets/Facilities/Printmaking Workshop/PM5.jpg";

import SW1 from "@/assets/Facilities/Sculpture Workshops/SW1.jpg";
import SW2 from "@/assets/Facilities/Sculpture Workshops/SW2.jpg";
import SW3 from "@/assets/Facilities/Sculpture Workshops/SW3.jpg";
import SW4 from "@/assets/Facilities/Sculpture Workshops/SW4.jpg";
import SW5 from "@/assets/Facilities/Sculpture Workshops/SW5.jpg";
import SW6 from "@/assets/Facilities/Sculpture Workshops/SW6.jpg";

import SCR1 from "@/assets/Facilities/Seminar and Critique Rooms/SCR1.png";
import SCR2 from "@/assets/Facilities/Seminar and Critique Rooms/SCR2.png";
import SCR3 from "@/assets/Facilities/Seminar and Critique Rooms/SCR3.png";
import SCR4 from "@/assets/Facilities/Seminar and Critique Rooms/SCR4.png";

type FacilityType = "All" | "Studios" | "Workshops" | "Labs" | "Equipment";

const Facilities = () => {
  const [selectedType, setSelectedType] = useState<FacilityType>("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Facilities - Yale School of Art";
  }, []);

  const facilities = [
    {
      category: "Individual Studios",
      type: "Studios" as FacilityType,
      description: "Every MFA student receives their own individual studio space for the duration of their program. These dedicated workspaces range from 150-300 square feet and are equipped with 24/7 access, individual climate control, and ample natural light. Studios are located in our main building at 1156 Chapel Street, fostering a vibrant community of artists working across all disciplines.",
      highlights: [
        "24/7 secured access",
        "150-300 sq ft per student",
        "Natural light and climate control",
        "Individual electrical circuits",
        "Located in main building",
      ],
      images: [IS1, IS2, IS3, IS4],
    },
    {
      category: "Printmaking Workshop",
      type: "Workshops" as FacilityType,
      description: "Our 3,000 square foot printmaking facility houses professional-grade equipment for intaglio, lithography, relief printing, and silkscreen. The workshop features a Takach etching press, Charles Brand lithography press, and multiple stations for screen printing. Students have access to acid baths, plate preparation areas, and extensive paper storage. The facility is supervised by our master printer who provides technical instruction and support.",
      highlights: [
        "Takach etching press",
        "Charles Brand lithography press",
        "Screen printing stations",
        "Acid etching facilities",
        "Professional paper storage",
        "Master printer on staff",
      ],
      images: [PM1, PM2, PM3, PM4, PM5],
    },
    {
      category: "Photography Facilities",
      type: "Labs" as FacilityType,
      description: "The Photography program maintains state-of-the-art facilities including traditional darkrooms and digital imaging labs. Our three traditional darkrooms are equipped for both black-and-white and color processing, with enlargers ranging from 35mm to 8x10 large format. The digital labs feature calibrated monitors, high-end workstations with Adobe Creative Suite, and professional Epson large-format printers capable of prints up to 44 inches wide. Students also have access to a lighting studio with professional strobes and continuous lighting equipment.",
      highlights: [
        "Three traditional darkrooms",
        "Large format capabilities (up to 8x10)",
        "Color and B&W processing",
        "Calibrated digital workstations",
        "Epson large-format printers (44\" wide)",
        "Professional lighting studio",
      ],
      images: [PF1, PF2, PF3, PF4, PF5, PF6],
    },
    {
      category: "Sculpture Workshops",
      type: "Workshops" as FacilityType,
      description: "The Sculpture facilities include dedicated workshops for metalworking, woodworking, and fabrication. The metal shop features MIG, TIG, and arc welders, metal-cutting bandsaw, drill press, and metal-working hand tools. The wood shop is equipped with table saws, band saws, jointer, planer, and CNC router. A separate fabrication space houses 3D printers, laser cutters, and other digital fabrication tools. All workshops are supervised by experienced technicians who provide safety training and technical guidance.",
      highlights: [
        "Full metalworking shop with welding equipment",
        "Complete woodworking facility",
        "CNC router and digital fabrication",
        "3D printers and laser cutters",
        "Professional tool library",
        "Expert technical staff",
      ],
      images: [SW1, SW2, SW3, SW4, SW5, SW6],
    },
    {
      category: "Digital Labs",
      type: "Labs" as FacilityType,
      description: "Our digital facilities support work across all programs with specialized equipment and software. The main computer lab features 25 Mac workstations with dual monitors, Adobe Creative Suite, Rhino, Cinema 4D, and specialized design software. An adjacent lab focuses on interactive and web-based work with equipment for physical computing, projection mapping, and installation. High-speed networking and server space support collaborative projects and digital portfolios.",
      highlights: [
        "25 Mac workstations with dual monitors",
        "Adobe Creative Suite",
        "3D modeling software (Rhino, Cinema 4D)",
        "Physical computing equipment",
        "Projection mapping capabilities",
        "High-speed network and server storage",
      ],
      images: [DL1, DL2, DL3],
    },
    {
      category: "Equipment Checkout",
      type: "Equipment" as FacilityType,
      description: "Students have access to an extensive equipment library managed through our online reservation system. The collection includes professional digital cameras (Canon, Nikon, Phase One medium format), video cameras (Blackmagic, Sony), audio recording equipment, lighting kits, projectors, and specialized tools. Equipment can be checked out for up to one week, with extensions available for thesis work. Technical staff provide orientation sessions at the beginning of each semester.",
      highlights: [
        "Canon and Nikon DSLR cameras",
        "Phase One medium format digital backs",
        "Professional video cameras",
        "Audio recording equipment",
        "Lighting and projection equipment",
        "Online reservation system",
      ],
      images: [EC1, EC2, EC3],
    },
    {
      category: "Seminar & Critique Rooms",
      type: "Studios" as FacilityType,
      description: "Multiple seminar rooms and critique spaces are available for classes, crits, and presentations. These rooms feature professional projectors, sound systems, and flexible furniture arrangements. The main critique space can accommodate 40+ people and includes movable walls for larger exhibitions. Additional smaller seminar rooms provide intimate settings for discussion-based classes and individual meetings with faculty.",
      highlights: [
        "Main critique space for 40+ people",
        "Professional projection and sound",
        "Movable walls for exhibitions",
        "Flexible furniture arrangements",
        "Multiple seminar rooms",
        "Individual meeting spaces",
      ],
      images: [SCR1, SCR2, SCR3, SCR4],
    },
  ];

  const types: FacilityType[] = ["All", "Studios", "Workshops", "Labs", "Equipment"];

  const filteredFacilities = selectedType === "All"
    ? facilities
    : facilities.filter(facility => facility.type === selectedType);

  // Gallery component that displays actual images
  const FacilityGallery = ({ facilityIndex, images }: { facilityIndex: number; images: string[] }) => {
    const getImageIndex = (idx: number): number => facilityIndex * 100 + idx;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-smooth group"
            onClick={() => setSelectedImage(getImageIndex(idx))}
          >
            <img
              src={imgSrc}
              alt={`${facilities[facilityIndex].category} - Image ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Facilities & Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                World-class studios, workshops, and equipment supporting artistic excellence
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-12">
                Yale School of Art maintains exceptional facilities across our building at 1156 Chapel Street
                and adjacent spaces. Our studios, workshops, and labs provide students with professional-grade
                equipment and dedicated workspace to develop their practice. All facilities are accessible to
                currently enrolled MFA students with appropriate safety training and orientation.
              </p>
            </div>
          </div>
        </section>

        {/* Type Filters */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className="transition-smooth"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {filteredFacilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-serif font-bold mb-4">{facility.category}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {facility.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Gallery */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Gallery:</h3>
                      <FacilityGallery facilityIndex={index} images={facility.images} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hours & Access */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Hours & Access</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  The main building at 1156 Chapel Street provides 24/7 access to currently enrolled students
                  via key card. Individual studios are accessible at all times. Workshops and labs maintain
                  supervised hours during the academic year, typically Monday-Friday 9am-9pm and weekends
                  12pm-6pm. Specific hours are posted at each facility and may vary by semester.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  All students must complete safety orientation before using workshop facilities. These
                  orientations are scheduled at the beginning of each semester and are led by our technical staff.
                  Additional specialized training is required for certain equipment such as welders, CNC machines,
                  and large-format printers.
                </p>
                <p className="text-lg text-muted-foreground">
                  For equipment checkout, students can reserve items through our online system. The equipment
                  room is staffed Monday-Friday 10am-5pm. After-hours returns are available through our
                  secure drop-off system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 overflow-hidden">
          <div className="relative bg-black">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {selectedImage !== null && (() => {
              const facilityIdx = Math.floor(selectedImage / 100);
              const imageIdx = selectedImage % 100;
              const facility = facilities[facilityIdx];
              const imageSrc = facility?.images[imageIdx];
              
              return imageSrc ? (
                <>
                  <div className="flex items-center justify-center h-[85vh] bg-black">
                    <img
                      src={imageSrc}
                      alt={`${facility.category} - Image ${imageIdx + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-muted-foreground text-center">{facility.category} - Image {imageIdx + 1}</p>
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Facilities;
