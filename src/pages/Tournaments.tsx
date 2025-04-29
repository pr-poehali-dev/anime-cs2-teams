import { useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, MapPin, Users, Clock, ChevronRight } from "lucide-react";

// Временные данные о турнирах
const tournamentData = [
  {
    id: 1,
    name: "PGL Major Copenhagen 2025",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-05-15",
    endDate: "2025-05-30",
    location: "Копенгаген, Дания",
    prize: "$2,000,000",
    teams: 24,
    status: "upcoming",
    format: "GSL + Single Elimination",
    organizer: "PGL",
    description: "Крупнейший турнир по CS2 первой половины 2025 года. 24 команды со всего мира будут бороться за звание чемпиона мира."
  },
  {
    id: 2,
    name: "ESL Pro League Season 27",
    logo: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-06-10",
    endDate: "2025-07-05",
    location: "Мальта",
    prize: "$835,000",
    teams: 24,
    status: "upcoming",
    format: "Group Stage + Playoffs",
    organizer: "ESL",
    description: "27-й сезон профессиональной лиги ESL Pro League с участием 24 команд из всех регионов мира."
  },
  {
    id: 3,
    name: "BLAST Premier Spring Finals 2025",
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-05-02",
    endDate: "2025-05-09",
    location: "Лондон, Великобритания",
    prize: "$425,000",
    teams: 8,
    status: "upcoming",
    format: "Double Elimination",
    organizer: "BLAST",
    description: "Весенний финал BLAST Premier 2025 года, где 8 лучших команд сразятся за солидный призовой фонд и рейтинговые очки."
  },
  {
    id: 4,
    name: "IEM Katowice 2025",
    logo: "https://images.unsplash.com/photo-1643903127224-5a3de439bd6d?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-04-18",
    endDate: "2025-04-30",
    location: "Катовице, Польша",
    prize: "$1,000,000",
    teams: 16,
    status: "ongoing",
    format: "GSL Groups + Single Elimination",
    organizer: "ESL",
    description: "Престижный турнир Intel Extreme Masters в Катовице с участием лучших команд мира в легендарном Сподеке."
  },
  {
    id: 5,
    name: "DreamHack Masters Melbourne 2025",
    logo: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-03-10",
    endDate: "2025-03-15",
    location: "Мельбурн, Австралия",
    prize: "$250,000",
    teams: 8,
    status: "completed",
    format: "Double Elimination",
    organizer: "DreamHack",
    description: "Международный турнир в Австралии, открывающий серию DreamHack Masters 2025 года."
  },
  {
    id: 6,
    name: "BLAST World Championship 2024",
    logo: "https://images.unsplash.com/photo-1556641420-cf49d9a60c15?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2024-12-12",
    endDate: "2024-12-18",
    location: "Абу-Даби, ОАЭ",
    prize: "$1,250,000",
    teams: 8,
    status: "completed",
    format: "Double Elimination",
    organizer: "BLAST",
    description: "Заключительный турнир 2024 года от BLAST, собравший 8 лучших команд мира в Абу-Даби."
  }
];

// Форматирование даты
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
};

// Компонент карточки турнира
const TournamentCard = ({ tournament }: { tournament: typeof tournamentData[0] }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Скоро</Badge>;
      case "ongoing":
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Идет сейчас</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-muted text-muted-foreground">Завершен</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden hover-scale">
      <CardHeader className="pb-2 flex flex-row items-center gap-4">
        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
          <img src={tournament.logo} alt={tournament.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl line-clamp-1">{tournament.name}</CardTitle>
            {getStatusBadge(tournament.status)}
          </div>
          <div className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {formatDate(tournament.startDate)}
            {tournament.status !== "completed" && <> - {formatDate(tournament.endDate)}</>}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-2">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.location}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.prize}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.teams} команд</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.format}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
          {tournament.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="ghost" className="ml-auto gap-1 text-primary">
          Подробнее <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Tournaments = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredTournaments = tournamentData.filter(tournament => {
    if (filter === "all") return true;
    return tournament.status === filter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Турниры по CS2</h1>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>Все турниры</TabsTrigger>
              <TabsTrigger value="upcoming" onClick={() => setFilter("upcoming")}>Предстоящие</TabsTrigger>
              <TabsTrigger value="ongoing" onClick={() => setFilter("ongoing")}>Текущие</TabsTrigger>
              <TabsTrigger value="completed" onClick={() => setFilter("completed")}>Завершенные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTournaments.map(tournament => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTournaments.map(tournament => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ongoing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTournaments.map(tournament => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTournaments.map(tournament => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {filteredTournaments.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">Турниры не найдены</h3>
              <p className="text-muted-foreground mt-2">
                В данной категории нет турниров. Пожалуйста, выберите другую категорию.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default Tournaments;
