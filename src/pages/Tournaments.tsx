import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Trophy, Calendar, Filter, ArrowRight, MapPin, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Временные данные о турнирах
const tournamentsData = [
  {
    id: 1,
    name: "IEM Katowice 2023",
    date: "21 февраля - 12 марта 2023",
    location: "Катовице, Польша",
    prizePool: "$1,000,000",
    status: "завершен",
    teams: 24,
    tier: "S-Tier",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "ESL Pro League Season 17",
    date: "22 марта - 16 апреля 2023",
    location: "Мальта",
    prizePool: "$850,000",
    status: "завершен",
    teams: 32,
    tier: "S-Tier",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "BLAST Premier Spring Final 2023",
    date: "7-11 июня 2023",
    location: "Вашингтон, США",
    prizePool: "$425,000",
    status: "завершен",
    teams: 8,
    tier: "A-Tier",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "CS2 Major Copenhagen 2024",
    date: "8-24 марта 2024",
    location: "Копенгаген, Дания",
    prizePool: "$1,250,000",
    status: "предстоящий",
    teams: 24,
    tier: "S-Tier",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "BLAST Premier World Final 2023",
    date: "13-17 декабря 2023",
    location: "Абу-Даби, ОАЭ",
    prizePool: "$1,000,000",
    status: "предстоящий",
    teams: 8,
    tier: "S-Tier",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "IEM Cologne 2023",
    date: "25 июля - 6 августа 2023",
    location: "Кёльн, Германия",
    prizePool: "$1,000,000",
    status: "завершен",
    teams: 24,
    tier: "S-Tier",
    image: "/placeholder.svg"
  }
];

const Tournaments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredTournaments = tournamentsData.filter(tournament => 
    tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tournament.location.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(tournament => {
    if (activeTab === "all") return true;
    if (activeTab === "upcoming") return tournament.status === "предстоящий";
    if (activeTab === "completed") return tournament.status === "завершен";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-background">
      <Header />
      
      <main className="flex-1">
        {/* Герой секция */}
        <section className="relative bg-gradient-to-br from-primary/20 via-background to-accent/10 py-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute w-full h-full bg-repeat opacity-5" 
                 style={{backgroundImage: "url(/placeholder.svg)", backgroundSize: "100px"}} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Турниры CS2
              </h1>
              <p className="text-lg mb-8 text-muted-foreground">
                Следите за главными событиями в мире CS2 с уникальной аниме-эстетикой
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Поиск турниров..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-primary/30 focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с турнирами */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-accent" />
                  Турниры CS2
                </h2>
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Все
                  </TabsTrigger>
                  <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Предстоящие
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Завершенные
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
                
                {filteredTournaments.length === 0 && (
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <p className="text-muted-foreground">По запросу "{searchTerm}" турниры не найдены</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
                
                {filteredTournaments.length === 0 && (
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <p className="text-muted-foreground">Предстоящих турниров не найдено</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
                
                {filteredTournaments.length === 0 && (
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <p className="text-muted-foreground">Завершенных турниров не найдено</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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

const TournamentCard = ({ tournament }: { tournament: any }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 border border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="h-40 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <img 
          src={tournament.image} 
          alt={tournament.name} 
          className="w-full h-full object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 z-20 ${
            tournament.status === 'предстоящий' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground'
          }`}
        >
          {tournament.status === 'предстоящий' ? 'Скоро' : 'Завершен'}
        </Badge>
        <Badge 
          className="absolute top-3 left-3 z-20 bg-accent text-accent-foreground"
        >
          {tournament.tier}
        </Badge>
      </div>
      
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="line-clamp-2 text-lg font-bold">
          {tournament.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2 space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{tournament.date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{tournament.location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{tournament.teams} команд</span>
        </div>
        <div className="font-semibold text-primary">
          Призовой фонд: {tournament.prizePool}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors border-primary/30">
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Tournaments;
