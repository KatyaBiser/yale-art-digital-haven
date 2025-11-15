import { useState } from "react";
import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuickLink {
  name: string;
  path: string;
  description?: string;
}

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  quickLinks: QuickLink[];
}

const AudienceCard = ({ icon: Icon, title, description, quickLinks }: AudienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative bg-card rounded-xl p-6 shadow-elegant hover:shadow-xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/50"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          <div className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Resources
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
            </div>
            <DialogDescription>
              Quick links to help you find what you need
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 mt-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <div className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {link.name}
                      </div>
                      {link.description && (
                        <div className="text-sm text-muted-foreground mt-1">
                          {link.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AudienceCard;
