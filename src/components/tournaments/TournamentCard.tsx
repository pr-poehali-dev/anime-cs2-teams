import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tournament } from "@/data/tournamentsData";
import { formatDate } from "@/utils/dateUtils";
import { Calendar, MapPin, Trophy, Users, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TournamentCardProps {
  tournament: Tournament;
}

/**
 * Компонент карточки турнира
 */
export const TournamentCard = ({ tournament }: TournamentCardProps) => {
  /**
   * Возвращает бейдж статуса турнира
   */
  const getStatusBadge = (status: Tournament["status"]) => {
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
