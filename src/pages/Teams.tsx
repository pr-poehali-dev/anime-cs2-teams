import { useState } from "react";
import { Search, Filter, Globe, Users } from "lucide-react";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import { teamsData } from "@/data/teamsData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  
  const regions = Array.from(new Set(teamsData.map(team => team.country)));
  
  const filteredTeams = teamsData.filter(team => {
    const matchesSearch = 
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.country.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRegion = regionFilter === "all" || team.country === regionFilter;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Заголовок страницы */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Киберспортивные команды CS2
            </h1>
            <p className="text-muted-foreground mb-6">
              Полный список команд с их статистикой, составами и достижениями
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative col-span-1 md:col-span-2">
                <Input
                  type="text"
                  placeholder="Поиск команд..."
                  className="pl-10 w-full border-primary/30 focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="border-primary/30 focus:border-primary">
                  <Globe className="mr-2 h-4 w-4 text-primary" />
                  <SelectValue placeholder="Все регионы" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все регионы</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        
        {/* Список команд */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                {filteredTeams.length} {filteredTeams.length === 1 ? 'команда' : 
                  (filteredTeams.length >= 2 && filteredTeams.length <= 4) ? 'команды' : 'команд'}
              </h2>
              
              {(searchTerm || regionFilter !== "all") && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center text-xs"
                  onClick={() => {
                    setSearchTerm("");
                    setRegionFilter("all");
                  }}
                >
                  <Filter className="mr-1 h-3 w-3" />
                  Сбросить фильтры
                </Button>
              )}
            </div>
            
            {filteredTeams.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTeams.map(team => (
                  <TeamCard key={team.id} {...team} />
                ))}
              </div>
            ) : (
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <p className="text-muted-foreground">Команды не найдены</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Пояснение рейтингов */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Как формируется рейтинг команд?</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Наша система рейтинга учитывает множество факторов для определения силы команд
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-5 rounded-lg border border-primary/20 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Достижения</h3>
                <p className="text-sm text-muted-foreground">Результаты на турнирах и важных матчах</p>
              </div>
              
              <div className="bg-background p-5 rounded-lg border border-primary/20 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Состав</h3>
                <p className="text-sm text-muted-foreground">Стабильность и индивидуальные рейтинги игроков</p>
              </div>
              
              <div className="bg-background p-5 rounded-lg border border-primary/20 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Форма</h3>
                <p className="text-sm text-muted-foreground">Недавние результаты и показатели команды</p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Рейтинг обновляется еженедельно на основе последних результатов и изменений в составах команд
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted/30 border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Trophy className="w-5 h-5 text-primary mr-2" />
              <span className="font-bold">AniCS © 2023</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Проект создан с любовью к CS2 и аниме
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

import { Star, Trophy } from "lucide-react";
export default Teams;
