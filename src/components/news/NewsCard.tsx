import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsItem } from "@/data/newsData";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  news: NewsItem;
  expanded?: boolean;
}

/**
 * Компонент карточки новости
 */
const NewsCard = ({ news, expanded = false }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className={`relative ${expanded ? 'aspect-[3/1] md:aspect-[5/1]' : 'aspect-square md:aspect-video'} overflow-hidden`}>
        <img 
          src={news.thumbnail} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-primary/90 hover:bg-primary text-white">{news.category}</Badge>
      </div>
      
      <CardHeader className={expanded ? "pb-2" : "pb-2 px-4 pt-4"}>
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {new Date(news.date).toLocaleDateString("ru-RU", { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })}
        </div>
        <CardTitle className={`mt-1 ${expanded ? 'text-2xl' : 'text-lg'} line-clamp-2`}>
          {news.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className={expanded ? "pb-4" : "px-4 py-2"}>
        <p className={`text-muted-foreground ${expanded ? '' : 'line-clamp-2'} text-sm`}>
          {news.excerpt}
        </p>
        
        {expanded && (
          <div className="mt-4 space-y-4">
            {news.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </CardContent>
      
      {!expanded && (
        <CardFooter className="px-4 pb-4 pt-0">
          <Link to={`/news/${news.id}`}>
            <Button variant="ghost" className="text-primary pl-0 hover:pl-2 transition-all">
              Читать полностью <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default NewsCard;
