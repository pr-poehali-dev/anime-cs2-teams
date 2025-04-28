import { Link } from "react-router-dom";
import { Users, MapPin, Trophy } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TeamCardProps {
  id: number;
  name: string;
  logo: string;
  country: string;
  countryCode: string;
  rank?: number;
  players: {
    id: number;
    name: string;
    nickname: string;
    country: string;
    photo?: string;
  }[];
  achievements?: string[];
}

const TeamCard = ({
  id,
  name,
  logo,
  country,
  countryCode,
  rank,
  players,
  achievements = [],
}: TeamCardProps) => {
  return (
    <Card className="team-card overflow-hidden bg-gradient-to-br from-card-gradient to-transparent animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 rounded-md overflow-hidden hover-scale">
            <img
              src={logo || "https://via.placeholder.com/80"}
              alt={`Логотип ${name}`}
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-heading font-bold text-xl">
                {name}
              </h3>
              {rank && (
                <Badge variant="outline" className="flex items-center gap-1 font-medium">
                  <Trophy className="h-3 w-3" />
                  #{rank}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span className="flex items-center">
                <img 
                  src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
                  alt={country}
                  className="w-4 h-3 mr-1.5"
                />
                {country}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium flex items-center mb-2">
            <Users className="h-3.5 w-3.5 mr-1.5 text-primary" />
            Состав
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {players.slice(0, 5).map((player) => (
              <li key={player.id} className="flex items-center">
                <span className="text-xs text-muted-foreground font-medium mr-1.5">•</span>
                <span className="font-medium">{player.nickname}</span>
              </li>
            ))}
          </ul>
        </div>

        {achievements.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium flex items-center">
                <Trophy className="h-3.5 w-3.5 mr-1.5 text-primary" />
                Достижения
              </h4>
            </div>
            <div className="flex flex-wrap gap-1">
              {achievements.slice(0, 2).map((achievement, i) => (
                <Badge key={i} variant="secondary" className="text-xs font-normal">
                  {achievement}
                </Badge>
              ))}
              {achievements.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{achievements.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Link to={`/teams/${id}`}>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
            Подробнее
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
