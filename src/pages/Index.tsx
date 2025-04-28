import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Trophy, Filter, ArrowRight, Users, BarChart2, Newspaper, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import { teamsData } from "@/data/teamsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Герой секция */}
        <section className="relative bg-hero-pattern py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Статистика и новости
                <span className="text-primary block"> мира CS2</span>
              </h1>
              <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
                Самая актуальная информация о командах, турнирах и игроках профессиональной сцены CS2.
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Поиск команд, игроков, турниров..."
                  className="pl-10 pr-4 py-2 w-full shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <CategoryButton icon={<Users className="w-4 h-4 mr-2" />} label="Команды" to="/teams" />
                <CategoryButton icon={<Trophy className="w-4 h-4 mr-2" />} label="Турниры" to="/tournaments" />
                <CategoryButton icon={<BarChart2 className="w-4 h-4 mr-2" />} label="Рейтинги" to="/rankings" />
                <CategoryButton icon={<Newspaper className="w-4 h-4 mr-2" />} label="Новости" to="/news" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с лучшими командами */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-primary" />
                Топ команды
              </h2>
              <Link to="/teams" className="text-primary hover:text-primary/80 flex items-center text-sm font-medium group">
                Все команды
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <SkeletonTeamCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTeams.map(team => (
                  <TeamCard key={team.id} {...team} />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Секция с последними новостями */}
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
              {newsHighlights.map((news) => (
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
        
        {/* Секция поиска */}
        {searchTerm && (
          <section className="py-10 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium flex items-center">
                  <Search className="w-5 h-5 mr-2 text-primary" />
                  Результаты поиска: "{searchTerm}"
                </h2>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center text-xs"
                  onClick={() => setSearchTerm("")}
                >
                  <Filter className="mr-1 h-3 w-3" />
                  Сбросить
                </Button>
              </div>
              
              {filteredTeams.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTeams.map(team => (
                    <TeamCard key={team.id} {...team} />
                  ))}
                </div>
              ) : (
                <div className="bg-muted rounded-lg p-6 text-center">
                  <p className="text-muted-foreground">По запросу "{searchTerm}" команды не найдены</p>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Информация о сайте */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">О нашем проекте</h2>
              <p className="text-muted-foreground mb-8">
                CS Stats — это информационный ресурс о киберспортивной дисциплине CS2.
                Мы предоставляем актуальную информацию о командах, игроках и турнирах.
              </p>
              <div className="bg-card border rounded-lg p-6 mb-6 shadow-sm">
                <p className="text-sm font-medium mb-2">
                  Работу выполнил: <span className="font-bold">Попов Максим</span>
                </p>
                <p className="text-xs text-muted-foreground">© 2025 CS Stats - Все права защищены</p>
              </div>
              <Separator className="my-8" />
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button>
                  <Trophy className="mr-2 h-4 w-4" />
                  Рейтинг команд
                </Button>
                <Button variant="outline">
                  Последние матчи
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Trophy className="w-5 h-5 text-primary mr-2" />
              <span className="font-bold">CS Stats © 2025</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Проект создан <span className="font-medium">Поповым Максимом</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Кнопка категории на главной странице
const CategoryButton = ({ icon, label, to }: { icon: React.ReactNode, label: string, to: string }) => (
  <Link to={to}>
    <Button variant="outline" className="bg-background hover:bg-background/90">
      {icon}
      {label}
    </Button>
  </Link>
);

// Скелетон для карточки команды
const SkeletonTeamCard = () => (
  <Card className="p-6 space-y-4">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 bg-muted-foreground/10 rounded-md animate-pulse"></div>
      <div className="space-y-2 flex-1">
        <div className="h-5 bg-muted-foreground/10 rounded w-1/2 animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded w-1/3 animate-pulse"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-muted-foreground/10 rounded w-1/4 animate-pulse"></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
      </div>
    </div>
  </Card>
);

export default Index;
