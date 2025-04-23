import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Trophy, Filter, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import { teamsData } from "@/data/teamsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const featuredTeams = teamsData.slice(0, 3);
  
  // Отфильтрованные команды для поиска
  const filteredTeams = teamsData.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Герой секция */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                Киберспорт CS2
              </h1>
              <p className="text-lg mb-8 text-muted-foreground">
                Изучайте статистику команд, следите за матчами и погрузитесь в мир киберспорта CS2!
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Поиск команд..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с лучшими командами */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-primary" />
                Топ команды
              </h2>
              <Link to="/teams" className="text-primary hover:opacity-80 flex items-center text-sm font-medium">
                Все команды
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTeams.map(team => (
                <TeamCard key={team.id} {...team} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Секция поиска */}
        {searchTerm && (
          <section className="py-8">
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
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">О нашем проекте</h2>
              <p className="text-muted-foreground mb-6">
                CS Stats — это информационный ресурс о киберспортивной дисциплине CS2.
                Мы предоставляем актуальную информацию о командах, игроках и турнирах.
              </p>
              <div className="bg-card border rounded-lg p-4 mb-6 shadow-sm">
                <p className="text-sm font-medium">
                  Работу выполнил: <span className="font-bold">Попов Максим</span>
                </p>
              </div>
              <Separator className="my-6" />
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
      
      <footer className="bg-muted border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Trophy className="w-5 h-5 text-primary mr-2" />
              <span className="font-bold">CS Stats © 2023</span>
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

export default Index;
