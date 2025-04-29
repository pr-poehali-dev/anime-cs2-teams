import { Link } from "react-router-dom";
import { Newspaper, ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

const NewsSection = ({ newsItems }: NewsSectionProps) => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center">
            <Newspaper className="w-6 h-6 mr-2 text-primary" />
            Последние новости
          </h2>
          <Link to="/news" className="text-primary hover:text-primary/80 flex items-center text-sm font-medium group">
            Все новости
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden hover-scale">
              <CardContent className="p-5">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary/80 bg-primary/5 px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{news.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{news.excerpt}</p>
                <Link to="/news" className="text-sm text-primary flex items-center font-medium">
                  Читать далее <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
