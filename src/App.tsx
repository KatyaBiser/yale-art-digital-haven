import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Programs from "./pages/Programs";
import ProgramsOverview from "./pages/ProgramsOverview";
import Faculty from "./pages/Faculty";
import Admissions from "./pages/Admissions";
import Works from "./pages/Works";
import News from "./pages/News";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/programs" element={<ProgramsOverview />} />
          <Route path="/programs/:programId" element={<Programs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/works" element={<Works />} />
          <Route path="/news" element={<News />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
