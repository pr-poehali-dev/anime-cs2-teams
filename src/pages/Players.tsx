import { useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Target, SortAsc, SortDesc } from "lucide-react";
import PlayerCard from "@/components/PlayerCard";

// Временные данные для страницы игроков
const playersData = [
  {
    id: 1,
    name: "Александр Костылев",
    nickname: "s1mple",
    country: "Украина",
    team: "Natus Vincere",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
    rating: 1.35,
    age: 27,
    achievements: ["PGL Major Stockholm 2025", "ESL Pro League S24", "BLAST Premier: World Final 2024"]
  },
  {
    id: 2,
    name: "Матье Эрбо",
    nickname: "ZywOo",
    country: "Франция",
    team: "Team Vitality",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=300&auto=format&fit=crop",
    rating: 1.32,
    age: 24,
    achievements: ["IEM Katowice 2025", "BLAST Premier: Spring Finals 2025", "ESL Pro League S23"]
  },
  {
    id: 3,
    name: "Робин Коль",
    nickname: "ropz",
    country: "Эстония",
    team: "FaZe Clan",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 1.27,
    age: 25,
    achievements: ["BLAST Premier: Fall Finals 2024", "ESL Pro League S25", "IEM Rio 2024"]
  },
  {
    id: 4,
    name: "Никола Ковач",
    nickname: "NiKo",
    country: "Босния и Герцеговина",
    team: "G2 Esports",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop",
    rating: 1.29,
    age: 28,
    achievements: ["IEM Cologne 2025", "PGL Major Berlin 2025", "BLAST World Championship 2024"]
  },
  {
    id: 5,
    name: "Дмитрий Соколов",
    nickname: "sh1ro",
    country: "Россия",
    team: "Cloud9",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    rating: 1.25,
    age: 24,
    achievements: ["IEM Dallas 2025", "ESL Impact League S6"]
  },
  {
    id: 6,
    name: "Кит Маркович",
    nickname: "NAF",
    country: "Канада",
    team: "Team Liquid",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 1.22,
    age: 27,
    achievements: ["BLAST Premier: Americas Fall Showdown 2024", "ESL Pro League S26: North America"]
  },
  {
    id: 7,
    name: "Тимур Тулепов",
    nickname: "Jame",
    country: "Казахстан",
    team: "Virtus.pro",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    rating: 1.21,
    age: 26,
    achievements: ["PGL Major Asia 2025", "IEM Beijing 2024", "ESL Pro League CIS 2025"]
  },
  {
    id: 8,
    name: "Илья Осипов",
    nickname: "m0NESY",
    country: "Россия",
    team: "G2 Esports",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1548449112-96a38a643324?q=80&w=300&auto=format&fit=crop",
    rating: 1.28,
    age: 20,
    achievements: ["IEM Cologne 2025", "PGL Major Berlin 2025", "BLAST World Championship 2024"]
  },
  {
    id: 9,
    name: "Финн Андерсен",
    nickname: "karrigan",
    country: "Дания",
    team: "FaZe Clan",
    teamLogo: "https://via.placeholder.com/50",
    role: "IGL",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop",
    rating: 1.05,
    age: 35,
    achievements: ["BLAST Premier: Fall Finals 2024", "ESL Pro League S25", "IEM Rio 2024"]
  },
  {
    id: 10,
    name: "Денис Шарипов",
    nickname: "electronic",
    country: "Россия",
    team: "Natus Vincere",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300&auto=format&fit=crop",
    rating: 1.24,
    age: 27,
    achievements: ["PGL Major Stockholm 2025", "ESL Pro League S24", "BLAST Premier: World Final 2024"]
  },
  {
    id: 11,
    name: "Адам Торжаи",
    nickname: "torzsi",
    country: "Венгрия",
    team: "MOUZ",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
    rating: 1.18,
    age: 22,
    achievements: ["ESL Pro League S22", "DreamHack Masters Melbourne 2025"]
  },
  {
    id: 12,
    name: "Карио Керубини",
    nickname: "KSCERATO",
    country: "Бразилия",
    team: "FURIA Esports",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=300&auto=format&fit=crop",
    rating: 1.19,
    age: 25,
    achievements: ["ESL Pro League Brazil 2025", "IEM Rio 2025", "BLAST Premier: American Finals 2024"]
  },
];

const roleOptions = [
  { value: "all", label: "Все роли" },
  { value: "AWP", label: "AWP" },
  { value: "Рифлер", label: "Рифлер" },
  { value: "IGL", label: "IGL" },
  { value: "Саппорт", label: "Саппорт" },
];

const sortOptions = [
  { value: "rating-desc", label: "Рейтинг (высший)" },
  { value: "rating-asc", label: "Рейтинг (низший)" },
  { value: "age-desc", label: "Возраст (старше)" },
  { value: "age-asc", label: "Возраст (моложе)" },
  { value: "name", label: "Имя (А-Я)" },
];

const Players = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [sortOption, setSortOption] = useState("rating-desc");
  const [activeTab, setActiveTab] = useState("all");

  // Фильтрация игроков
  let filteredPlayers = playersData.filter(player => {
    // Поиск по никнейму или имени
    const matchesSearch = 
      player.nickname.toLowerCase().includes(searchQuery.toLowerCase()) || 
      player.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Фильтр по роли
    const matchesRole = selectedRole === "all" || player.role === selectedRole;
    
    // Фильтр по вкладке (по рейтингу)
    let matchesTab = true;
    if (activeTab === "top") {
      matchesTab = player.rating >= 1.25;
    } else if (activeTab === "rising") {
      matchesTab = player.rating >= 1.15 && player.rating < 1.25 && player.age <= 23;
    }
    
    return matchesSearch && matchesRole && matchesTab;
  });

  // Сортировка игроков
  filteredPlayers.sort((a, b) => {
    switch (sortOption) {
      case "rating-desc":
        return b.rating - a.rating;
      case "rating-asc":
        return a.rating - b.rating;
      case "age-desc":
        return b.age - a.age;
      case "age-asc":
        return a.age - b.age;
      case "name":
        return a.nickname.localeCompare(b.nickname);
      default:
        return b.rating - a.rating;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Игроки CS2</h1>
          
          <Tabs defaultValue="all" className="mb-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">Все игроки</TabsTrigger>
              <TabsTrigger value="top">Топ игроки</TabsTrigger>
              <TabsTrigger value="rising">Восходящие звезды</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Фильтры */}
          <Card className="mb-8">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Поиск игроков..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите роль" />
                    </SelectTrigger>
                    <SelectContent>
                      {roleOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  {sortOption.includes('-desc') ? (
                    <SortDesc className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <SortAsc className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {filteredPlayers.length !== playersData.length && (
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Показано {filteredPlayers.length} из {playersData.length} игроков
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedRole("all");
                      setActiveTab("all");
                    }}
                    className="flex items-center gap-1"
                  >
                    <Filter className="h-3.5 w-3.5" />
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Сетка игроков */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map(player => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
          
          {filteredPlayers.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium">Игроки не найдены</h3>
              <p className="text-muted-foreground mt-2">
                По вашему запросу не найдено игроков. Попробуйте изменить параметры поиска.
              </p>
              <Button 
                className="mt-6" 
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRole("all");
                  setActiveTab("all");
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default Players;
