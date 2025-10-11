import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  link: string;
}

const NewsCard = ({ title, excerpt, date, category, image, link }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-hover">
      {image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </div>
        </div>
        <h3 className="text-lg font-serif font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={link} className="text-primary hover:underline font-medium text-sm">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
