import { useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { newsData } from "@/data/newsData";
import NewsFilters from "@/components/news/NewsFilters";
import NewsList from "@/components/news/NewsList";

/**
 * Страница новостей
 */
const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Получаем уникальные категории
  const categories = ["all", ...new Set(newsData.map(news => news.category))];
  
  // Фильтруем новости по поисковому запросу и категории
  const filteredNews = newsData.filter(news => {
    const matchesSearch = 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || news.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          {/* Фильтры и поиск */}
          <NewsFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
          />
          
          {/* Список новостей */}
          <NewsList filteredNews={filteredNews} />
        </div>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default News;
