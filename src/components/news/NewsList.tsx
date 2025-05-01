import { NewsItem } from "@/data/newsData";
import NewsCard from "./NewsCard";
import { Separator } from "@/components/ui/separator";

interface NewsListProps {
  filteredNews: NewsItem[];
}

/**
 * Компонент для отображения списка новостей
 */
const NewsList = ({ filteredNews }: NewsListProps) => {
  if (filteredNews.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium">Новости не найдены</h3>
        <p className="text-muted-foreground mt-2">
          По вашему запросу не найдено новостей. Попробуйте изменить параметры поиска.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Основная новость */}
      <div className="mb-8">
        <NewsCard news={filteredNews[0]} expanded={true} />
      </div>
      
      <Separator className="my-8" />
      
      {/* Сетка новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.slice(1).map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
