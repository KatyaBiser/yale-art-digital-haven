import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Calendar = () => {
  const events = [
    {
      title: "Visiting Artist Lecture: Marina Abramović",
      date: "October 25, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Hastings Hall",
      category: "Lecture",
      description: "Renowned performance artist discusses her groundbreaking work and its impact on contemporary art.",
    },
    {
      title: "MFA Open Studios",
      date: "November 5, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Green Hall Studios",
      category: "Exhibition",
      description: "Visit student studios and view works in progress across all four MFA programs.",
    },
    {
      title: "Graduate Critique: Graphic Design",
      date: "November 12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Design Studio, Room 301",
      category: "Critique",
      description: "Mid-semester critiques for graphic design MFA candidates.",
    },
    {
      title: "Photography Portfolio Review",
      date: "November 18, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Photography Studio",
      category: "Workshop",
      description: "Professional portfolio review with visiting curators and gallery directors.",
    },
    {
      title: "Annual Thesis Exhibition Opening",
      date: "December 1, 2024",
      time: "5:00 PM - 9:00 PM",
      location: "Yale University Art Gallery",
      category: "Exhibition",
      description: "Opening reception for the annual thesis exhibition featuring graduating MFA students.",
    },
    {
      title: "Winter Break Begins",
      date: "December 20, 2024",
      time: "All Day",
      location: "Campus-wide",
      category: "Academic",
      description: "Winter recess begins. Studios remain accessible to current students.",
    },
  ];

  const upcomingEvents = events.slice(0, 3);
  const allEvents = events;

  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <Card className="transition-smooth hover:shadow-hover">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {new Date(event.date).getDate()}
              </span>
              <span className="text-xs text-primary">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
              </span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="mb-2">
              <Badge variant="secondary">{event.category}</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.description}</p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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
                Events Calendar
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover lectures, exhibitions, critiques, and special events
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="all">All Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </TabsContent>
              
              <TabsContent value="all" className="space-y-6">
                {allEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <CalendarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-4">Never Miss an Event</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Subscribe to our calendar to receive notifications about upcoming events and deadlines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-smooth">
                  Subscribe to Calendar
                </button>
                <button className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-smooth">
                  Download iCal
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
