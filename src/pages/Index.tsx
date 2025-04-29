import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { teamsData } from "@/data/teamsData";
import HeroSection from "@/components/home/HeroSection";
import TeamsSection from "@/components/home/TeamsSection";
import NewsSection from "@/components/home/NewsSection";
import SearchResultsSection from "@/components/home/SearchResultsSection";
import AboutSection from "@/components/home/AboutSection";
import SimpleFooter from "@/components/home/SimpleFooter";
import FooterComponent from "@/components/FooterComponent";

const newsHighlights = [
  { 
    id: 1, 
    title: "Изменения в составе Team Vitality", 
    excerpt: "Команда объявила о замене двух игроков перед началом нового сезона",
    category: "Трансферы"
  },
  { 
    id: 2, 
    title: "Анонс нового турнира в Азии", 
    excerpt: "Организаторы анонсировали турнир с призовым фондом $500,000",
    category: "Турниры"
  },
  { 
    id: 3, 
    title: "Обновление CS2 - новые карты", 
    excerpt: "Valve добавила новые карты и внесла изменения в механики игры",
    category: "Обновления"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const featuredTeams = teamsData.slice(0, 3);
  
  // Имитация загрузки данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // Отфильтрованные команды для поиска
  const filteredTeams = teamsData.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.players.some(player => 
      player.nickname.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Очистить поиск
  const clearSearch = () => setSearchTerm("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Герой секция */}
        <HeroSection 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        {/* Секция с лучшими командами */}
        <TeamsSection 
          isLoading={isLoading} 
          teams={featuredTeams} 
        />
        
        {/* Секция с последними новостями */}
        <NewsSection newsItems={newsHighlights} />
        
        {/* Секция поиска */}
        <SearchResultsSection 
          searchTerm={searchTerm} 
          filteredTeams={filteredTeams} 
          clearSearch={clearSearch} 
        />
        
        {/* Информация о сайте */}
        <AboutSection />
      </main>
      
      {/* Используем полный футер вместо простого */}
      <FooterComponent />
    </div>
  );
};

export default Index;
