export interface SearchableItem {
  title: string;
  content: string;
  category: string;
  path: string;
  tags?: string[];
}

export const searchableContent: SearchableItem[] = [
  // Programs
  {
    title: "Graphic Design MFA Program",
    content: "Master the art of visual communication and digital design with our comprehensive MFA program. Our Graphic Design program emphasizes typography, branding, digital media, and visual communication.",
    category: "Programs",
    path: "/programs/graphic-design",
    tags: ["MFA", "Design", "Typography", "Digital Design", "Visual Communication"],
  },
  {
    title: "Painting/Printmaking MFA Program",
    content: "Explore traditional and contemporary approaches to painting and printmaking techniques. Students develop their artistic voice through critique, studio practice, and theoretical exploration.",
    category: "Programs",
    path: "/programs/painting",
    tags: ["MFA", "Painting", "Printmaking", "Fine Arts", "Contemporary Art"],
  },
  {
    title: "Photography MFA Program",
    content: "Develop your photographic vision through technical mastery and conceptual exploration. Our program covers documentary photography, fine art photography, and contemporary practices.",
    category: "Programs",
    path: "/programs/photography",
    tags: ["MFA", "Photography", "Documentary", "Visual Arts", "Fine Art Photography"],
  },
  {
    title: "Sculpture MFA Program",
    content: "Push the boundaries of three-dimensional art in our state-of-the-art facilities. The Sculpture program encompasses installation art, public sculpture, and experimental approaches to spatial practice.",
    category: "Programs",
    path: "/programs/sculpture",
    tags: ["MFA", "Sculpture", "Installation Art", "Public Art", "3D Art"],
  },

  // Faculty
  {
    title: "Dr. Sarah Chen - Director of Graphic Design",
    content: "Dr. Sarah Chen specializes in Typography and Digital Design. Director of the Graphic Design program with extensive experience in visual communication and branding.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Graphic Design", "Typography", "Director"],
  },
  {
    title: "Prof. Michael Rodriguez - Chair of Painting/Printmaking",
    content: "Prof. Michael Rodriguez is the Chair of Painting/Printmaking, specializing in Contemporary Painting and Printmaking Techniques.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Painting", "Printmaking", "Department Chair"],
  },
  {
    title: "Dr. Emily Thompson - Photography Program Director",
    content: "Dr. Emily Thompson directs the Photography program, with expertise in Documentary Photography and Visual Culture.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Photography", "Documentary", "Visual Culture"],
  },
  {
    title: "Prof. David Kim - Sculpture Department Chair",
    content: "Prof. David Kim chairs the Sculpture department, specializing in Installation Art and Public Sculpture.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Sculpture", "Installation Art", "Public Art"],
  },
  {
    title: "Dr. Jennifer Martinez - Associate Professor",
    content: "Dr. Jennifer Martinez is an Associate Professor specializing in Art History and Critical Theory.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Art History", "Critical Theory"],
  },
  {
    title: "Prof. Robert Johnson - Senior Lecturer",
    content: "Prof. Robert Johnson is a Senior Lecturer specializing in Digital Media and Interactive Art.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Digital Media", "Interactive Art"],
  },
  {
    title: "Dr. Lisa Anderson - Assistant Professor",
    content: "Dr. Lisa Anderson is an Assistant Professor specializing in Contemporary Art and Curatorial Studies.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Contemporary Art", "Curatorial Studies"],
  },
  {
    title: "Prof. James Wilson - Visiting Professor",
    content: "Prof. James Wilson is a Visiting Professor specializing in Experimental Film and Video Art.",
    category: "Faculty",
    path: "/faculty",
    tags: ["Faculty", "Film", "Video Art", "Experimental"],
  },

  // Admissions
  {
    title: "Admissions Requirements",
    content: "Bachelor's degree from an accredited institution, Portfolio of recent work (20 images for most programs), Statement of purpose (500-1000 words), Three letters of recommendation, Official transcripts. Application deadline: January 10th.",
    category: "Admissions",
    path: "/admissions",
    tags: ["Apply", "Requirements", "Application", "Deadline", "Portfolio"],
  },
  {
    title: "Financial Aid & Scholarships",
    content: "100% Tuition Coverage for all admitted MFA students. Yale School of Art provides full tuition scholarships for the entire two-year program. Additional merit-based grants and need-based stipends available.",
    category: "Admissions",
    path: "/admissions",
    tags: ["Financial Aid", "Scholarship", "Tuition", "Funding", "Support"],
  },
  {
    title: "Portfolio Guidelines",
    content: "Submit 20 images of recent work created within the last 3 years. File format: JPEG or PNG. Dimensions: 1920px minimum on longest side. File size: Maximum 5MB per image. Sequential labeling required.",
    category: "Admissions",
    path: "/admissions",
    tags: ["Portfolio", "Application", "Requirements", "Guidelines"],
  },
  {
    title: "International Students",
    content: "Yale School of Art welcomes international students. TOEFL minimum score of 100 (iBT) or IELTS minimum overall band score of 7.0 required. Full visa and immigration support provided through OISS.",
    category: "Admissions",
    path: "/admissions",
    tags: ["International", "TOEFL", "IELTS", "Visa", "Immigration"],
  },

  // About
  {
    title: "About Yale School of Art",
    content: "Excellence in Art Education Since 1869. Yale School of Art is a graduate professional school that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture. 1:4 faculty-to-student ratio ensures personalized attention.",
    category: "About",
    path: "/about",
    tags: ["History", "Mission", "About Us", "Graduate School"],
  },

  // News & Events
  {
    title: "Fall 2024 Exhibition Opens at Yale University Art Gallery",
    content: "Our MFA students present their latest works in a comprehensive exhibition showcasing diverse artistic approaches.",
    category: "News",
    path: "/news",
    tags: ["Exhibition", "Fall 2024", "Art Gallery", "Student Work"],
  },
  {
    title: "Distinguished Artist Lecture Series Continues",
    content: "Renowned contemporary artist to speak about their practice and the role of art in social change.",
    category: "News",
    path: "/news",
    tags: ["Lecture", "Artist Talk", "Events", "Contemporary Art"],
  },
  {
    title: "New Scholarship Program Announced for 2025",
    content: "Yale School of Art launches expanded scholarship opportunities for incoming MFA students.",
    category: "News",
    path: "/news",
    tags: ["Scholarship", "2025", "Announcement", "Financial Aid"],
  },

  // Student Works
  {
    title: "Student Works Gallery",
    content: "Explore the creative achievements of our MFA students across all programs. View works in Graphic Design, Painting/Printmaking, Photography, and Sculpture.",
    category: "Student Works",
    path: "/works",
    tags: ["Gallery", "Student Art", "MFA Work", "Portfolio"],
  },

  // Calendar & Events
  {
    title: "Events Calendar",
    content: "Stay up to date with exhibitions, lectures, critiques, and other events at Yale School of Art. View our comprehensive calendar of academic and artistic events.",
    category: "Events",
    path: "/calendar",
    tags: ["Calendar", "Events", "Exhibitions", "Lectures"],
  },

  // Contact
  {
    title: "Contact Yale School of Art",
    content: "Get in touch with Yale School of Art. Visit us at 1156 Chapel Street, New Haven, CT 06511. Phone: (203) 432-2600. Email inquiries welcome.",
    category: "Contact",
    path: "/contact",
    tags: ["Contact", "Address", "Phone", "Email", "Location"],
  },
];
