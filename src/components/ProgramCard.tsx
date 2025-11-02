import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProgramCard = ({ title, description, image, link }: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-hover group">
      <Link to={link}>
        <div className="aspect-[4/3] overflow-hidden cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={link} className="w-full">
          <Button variant="outline" className="w-full group/btn">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
