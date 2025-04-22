
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface TeamRanking {
  id: number;
  position: number;
  previousPosition: number;
  name: string;
  logo: string;
  country: string;
  points: number;
  change: number;
  recentResults: Array<"win" | "loss" | "draw">;
}

const teamRankings: TeamRanking[] = [
  {
    id: 1,
    position: 1,
    previousPosition: 1,
    name: "FaZe Clan",
    logo: "/placeholder.svg",
    country: "International",
    points: 1000,
    change: 0,
    recentResults: ["win", "win", "win", "win", "loss"]
  },
  {
    id: 2,
    position: 2,
    previousPosition: 3,
    name: "Vitality",
    logo: "/placeholder.svg",
    country: "France",
    points: 890,
    change: 1,
    recentResults: ["win", "win", "loss", "win", "win"]
  },
  {
    id: 3,
    position: 3,
    previousPosition: 2,
    name: "G2 Esports",
    logo: "/placeholder.svg",
    country: "International",
    points: 880,
    change: -1,
    recentResults: ["loss", "win", "win", "win", "win"]
  },
  {
    id: 4,
    position: 4,
    previousPosition: 4,
    name: "NAVI",
    logo: "/placeholder.svg",
    country: "Ukraine",
    points: 820,
    change: 0,
    recentResults: ["win", "win", "win", "loss", "loss"]
  },
  {
    id: 5,
    position: 5,
    previousPosition: 8,
    name: "Cloud9",
    logo: "/placeholder.svg",
    country: "Russia",
    points: 750,
    change: 3,
    recentResults: ["win", "win", "win", "win", "win"]
  },
  {
    id: 6,
    position: 6,
    previousPosition: 5,
    name: "MOUZ",
    logo: "/placeholder.svg",
    country: "International",
    points: 720,
    change: -1,
    recentResults: ["loss", "win", "loss", "win", "win"]
  },
  {
    id: 7,
    position: 7,
    previousPosition: 7,
    name: "Complexity",
    logo: "/placeholder.svg",
    country: "North America",
    points: 680,
    change: 0,
    recentResults: ["win", "loss", "win", "loss", "win"]
  },
  {
    id: 8,
    position: 8,
    previousPosition: 10,
    name: "ENCE",
    logo: "/placeholder.svg",
    country: "International",
    points: 650,
    change: 2,
    recentResults: ["win", "win", "loss", "win", "loss"]
  },
  {
    id: 9,
    position: 9,
    previousPosition: 6,
    name: "Astralis",
    logo: "/placeholder.svg",
    country: "Denmark",
    points: 630,
    change: -3,
    recentResults: ["loss", "loss", "win", "loss", "win"]
  },
  {
    id: 10,
    position: 10,
    previousPosition: 9,
    name: "FURIA",
    logo: "/placeholder.svg",
    country: "Brazil",
    points: 610,
    change: -1,
    recentResults: ["loss", "win", "loss", "win", "loss"]
  }
];

interface PlayerRanking {
  id: number;
  position: number;
  previousPosition: number;
  name: string;
  nickname: string;
  team: string;
  country: string;
  rating: number;
  change: number;
}

const playerRankings: PlayerRanking[] = [
  {
    id: 1,
    position: 1,
    previousPosition: 1,
    name: "Oleksandr Kostyliev",
    nickname: "s1mple",
    team: "NAVI",
    country: "Ukraine",
    rating: 1.32,
    change: 0
  },
  {
    id: 2,
    position: 2,
    previousPosition: 2,
    name: "Mathieu Herbaut",
    nickname: "ZywOo",
    team: "Vitality",
    country: "France",
    rating: 1.30,
    change: 0
  },
  {
    id: 3,
    position: 3,
    previousPosition: 5,
    name: "Nikola Kovač",
    nickname: "NiKo",
    team: "G2 Esports",
    country: "Bosnia and Herzegovina",
    rating: 1.28,
    change: 2
  },
  {
    id: 4,
    position: 4,
    previousPosition: 3,
    name: "Dmitry Sokolov",
    nickname: "sh1ro",
    team: "Cloud9",
    country: "Russia",
    rating: 1.27,
    change: -1
  },
  {
    id: 5,
    position: 5,
    previousPosition: 4,
    name: "Ilya Zalutskiy",
    nickname: "m0NESY",
    team: "G2 Esports",
    country: "Russia",
    rating: 1.26,
    change: -1
  },
  {
    id: 6,
    position: 6,
    previousPosition: 6,
    name: "Robin Kool",
    nickname: "ropz",
    team: "FaZe Clan",
    country: "Estonia",
    rating: 1.24,
    change: 0
  },
  {
    id: 7,
    position: 7,
    previousPosition: 8,
    name: "Russel Van Dulken",
    nickname: "Twistzz",
    team: "FaZe Clan",
    country: "Canada",
    rating: 1.22,
    change: 1
  },
  {
    id: 8,
    position: 8,
    previousPosition: 7,
    name: "Håvard Nygaard",
    nickname: "rain",
    team: "FaZe Clan",
    country: "Norway",
    rating: 1.20,
    change: -1
  },
  {
    id: 9,
    position: 9,
    previousPosition: 11,
    name: "Lotan Giladi",
    nickname: "Spinx",
    team: "Vitality",
    country: "Israel",
    rating: 1.19,
    change: 2
  },
  {
    id: 10,
    position: 10,
    previousPosition: 9,
    name: "David Čerňanský",
    nickname: "frozen",
    team: "MOUZ",
    country: "Slovakia",
    rating: 1.18,
    change: -1
  }
];

const Rankings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeRange, setTimeRange] = useState("3m");

  const filteredTeams = teamRankings.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPlayers = playerRankings.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4 mb-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Рейтинги киберспортсменов и команд CS2
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Официальный рейтинг команд и игроков CS2, основанный на результатах турниров, индивидуальной статистике и показателях производительности.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10 bg-card/50 border-primary/20 focus:border-primary"
                placeholder="Поиск по командам, игрокам, странам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="bg-card/50 border-primary/20">
                <SelectValue placeholder="Выберите период" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">Последний месяц</SelectItem>
                <SelectItem value="3m">Последние 3 месяца</SelectItem>
                <SelectItem value="6m">Последние 6 месяцев</SelectItem>
                <SelectItem value="1y">Последний год</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="teams" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="teams" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Команды</TabsTrigger>
            <TabsTrigger value="players" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Игроки</TabsTrigger>
          </TabsList>

          <TabsContent value="teams" className="space-y-4">
            <Card className="bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left">#</th>
                      <th className="p-4 text-left">Команда</th>
                      <th className="p-4 text-center">Страна</th>
                      <th className="p-4 text-center">Очки</th>
                      <th className="p-4 text-center">+/-</th>
                      <th className="p-4 text-center">Форма</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTeams.length > 0 ? (
                      filteredTeams.map((team) => (
                        <tr key={team.id} className="border-b border-border/50 hover:bg-card/90 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center">
                              <span className="font-bold">{team.position}</span>
                              <span className="ml-2 text-xs">
                                {team.change > 0 && <span className="text-green-500">▲{team.change}</span>}
                                {team.change < 0 && <span className="text-red-500">▼{Math.abs(team.change)}</span>}
                                {team.change === 0 && <span className="text-muted-foreground">■</span>}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="bg-card/80 p-1 rounded-full w-10 h-10 flex items-center justify-center">
                                <img src={team.logo} alt={team.name} className="w-8 h-8 rounded-full" />
                              </div>
                              <span className="font-semibold">{team.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">{team.country}</td>
                          <td className="p-4 text-center font-mono font-semibold">{team.points}</td>
                          <td className="p-4 text-center">
                            {team.change > 0 && <span className="text-green-500">+{team.change}</span>}
                            {team.change < 0 && <span className="text-red-500">{team.change}</span>}
                            {team.change === 0 && <span className="text-muted-foreground">0</span>}
                          </td>
                          <td className="p-4">
                            <div className="flex justify-center space-x-1">
                              {team.recentResults.map((result, index) => (
                                <span
                                  key={index}
                                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold
                                    ${result === 'win' ? 'bg-green-500 text-white' : 
                                      result === 'loss' ? 'bg-red-500 text-white' : 
                                      'bg-amber-500 text-white'}`}
                                >
                                  {result === 'win' ? 'W' : result === 'loss' ? 'L' : 'D'}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-muted-foreground">
                          Ничего не найдено...
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="space-y-4">
            <Card className="bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left">#</th>
                      <th className="p-4 text-left">Игрок</th>
                      <th className="p-4 text-center">Страна</th>
                      <th className="p-4 text-center">Команда</th>
                      <th className="p-4 text-center">Рейтинг</th>
                      <th className="p-4 text-center">+/-</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPlayers.length > 0 ? (
                      filteredPlayers.map((player) => (
                        <tr key={player.id} className="border-b border-border/50 hover:bg-card/90 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center">
                              <span className="font-bold">{player.position}</span>
                              <span className="ml-2 text-xs">
                                {player.change > 0 && <span className="text-green-500">▲{player.change}</span>}
                                {player.change < 0 && <span className="text-red-500">▼{Math.abs(player.change)}</span>}
                                {player.change === 0 && <span className="text-muted-foreground">■</span>}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex flex-col">
                              <span className="font-semibold text-primary">{player.nickname}</span>
                              <span className="text-xs text-muted-foreground">{player.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">{player.country}</td>
                          <td className="p-4 text-center">{player.team}</td>
                          <td className="p-4 text-center font-mono font-bold">{player.rating.toFixed(2)}</td>
                          <td className="p-4 text-center">
                            {player.change > 0 && <span className="text-green-500">+{player.change}</span>}
                            {player.change < 0 && <span className="text-red-500">{player.change}</span>}
                            {player.change === 0 && <span className="text-muted-foreground">0</span>}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-muted-foreground">
                          Ничего не найдено...
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-10 py-6 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2023 AniCS - Рейтинги обновляются еженедельно на основе результатов официальных матчей
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Rankings;
