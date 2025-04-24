
import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamsRanking, playersRanking } from "@/data/rankingsData";
import RankingsFilter from "@/components/rankings/RankingsFilter";
import TeamsTable from "@/components/rankings/TeamsTable";
import PlayersTable from "@/components/rankings/PlayersTable";
import RankingsHeader from "@/components/rankings/RankingsHeader";

const Rankings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeRange, setTimeRange] = useState("3m");

  // Фильтрация команд по поисковому запросу
  const filteredTeams = teamsRanking.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фильтрация игроков по поисковому запросу
  const filteredPlayers = playersRanking.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Заголовок и описание */}
        <RankingsHeader />

        {/* Фильтры рейтингов */}
        <RankingsFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />

        {/* Табы с рейтингами команд и игроков */}
        <Tabs defaultValue="teams" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger 
              value="teams" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Команды
            </TabsTrigger>
            <TabsTrigger 
              value="players" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Игроки
            </TabsTrigger>
          </TabsList>

          {/* Таблица рейтинга команд */}
          <TabsContent value="teams" className="space-y-4">
            <TeamsTable teams={filteredTeams} />
          </TabsContent>

          {/* Таблица рейтинга игроков */}
          <TabsContent value="players" className="space-y-4">
            <PlayersTable players={filteredPlayers} />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-10 py-6 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 CSStats - Рейтинги обновляются еженедельно на основе результатов официальных матчей. 
            Работу выполнил Попов Максим
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Rankings;
