import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Building2, Users, Image as ImageIcon, Wrench } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Yale School of Art",
        "1156 Chapel Street",
        "New Haven, CT 06511",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main Office: (203) 432-2600",
        "Admissions: (203) 432-2680",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "General: art.school@yale.edu",
        "Admissions: artadmissions@yale.edu",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Closed on weekends and holidays",
      ],
    },
  ];

  const departmentContacts = [
    {
      icon: Building2,
      title: "Graphic Design",
      phone: "(203) 432-2610",
      email: "graphicdesign@yale.edu",
      contact: "Dr. Sarah Chen, Director",
    },
    {
      icon: Building2,
      title: "Painting/Printmaking",
      phone: "(203) 432-2615",
      email: "painting@yale.edu",
      contact: "Prof. Michael Rodriguez, Chair",
    },
    {
      icon: Building2,
      title: "Photography",
      phone: "(203) 432-2620",
      email: "photography@yale.edu",
      contact: "Dr. Emily Thompson, Director",
    },
    {
      icon: Building2,
      title: "Sculpture",
      phone: "(203) 432-2625",
      email: "sculpture@yale.edu",
      contact: "Prof. David Kim, Chair",
    },
    {
      icon: ImageIcon,
      title: "Gallery & Exhibitions",
      phone: "(203) 432-2630",
      email: "gallery@yale.edu",
      contact: "Exhibitions Coordinator",
    },
    {
      icon: Users,
      title: "Student Services",
      phone: "(203) 432-2635",
      email: "studentservices@yale.edu",
      contact: "Student Affairs Office",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      phone: "(203) 432-2640",
      email: "techsupport@yale.edu",
      contact: "Facilities & Technical Services",
    },
    {
      icon: Building2,
      title: "Academic Advising",
      phone: "(203) 432-2645",
      email: "advising@yale.edu",
      contact: "Academic Affairs",
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
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with Yale School of Art
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <info.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Department Contacts */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Department Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentContacts.map((dept, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <dept.icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="text-lg font-semibold mb-3">{dept.title}</h3>
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">{dept.contact}</p>
                        <a
                          href={`tel:${dept.phone}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                        >
                          <Phone className="h-3 w-3" />
                          {dept.phone}
                        </a>
                        <a
                          href={`mailto:${dept.email}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth break-all"
                        >
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          {dept.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Visit Our Campus</h2>
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.9234567890123!2d-72.9279!3d41.3083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b1e5f5f5f5%3A0x1234567890abcdef!2s1156%20Chapel%20St%2C%20New%20Haven%2C%20CT%2006511!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yale School of Art Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1156+Chapel+Street,New+Haven,CT+06511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Visit */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Schedule a Campus Visit</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in visiting Yale School of Art? We offer guided tours for prospective students. 
                Tours include visits to studios, facilities, and conversations with current students and faculty.
              </p>
              <Button size="lg">Request a Campus Tour</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
