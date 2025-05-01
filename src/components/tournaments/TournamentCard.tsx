
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tournament } from "@/data/tournamentsData";
import { Calendar, MapPin, Trophy, Users, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TournamentCardProps {
  tournament: Tournament;
}

/**
 * Компонент карточки турнира
 */
const TournamentCard = ({ tournament }: TournamentCardProps) => {
  /**
   * Возвращает бейдж статуса турнира
   */
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

  // Форматирование даты
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
            <img src={tournament.logo} alt={tournament.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold line-clamp-1">{tournament.name}</h3>
              {getStatusBadge(tournament.status)}
            </div>
            <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {formatDate(tournament.startDate)}
              {tournament.status !== "completed" && <> - {formatDate(tournament.endDate)}</>}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-4">
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
      
      <CardFooter className="pt-0 pb-4 px-6">
        <Button variant="ghost" className="ml-auto gap-1 text-primary" asChild>
          <Link to={`/tournaments/${tournament.id}`}>
            Подробнее <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;
