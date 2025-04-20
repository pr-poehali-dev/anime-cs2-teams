import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Star, Globe } from "lucide-react";

export interface TeamProps {
  id: number;
  name: string;
  logo: string;
  country: string;
  ranking: number;
  players: string[];
  achievements: string;
}

const TeamCard = ({ name, logo, country, ranking, players, achievements }: TeamProps) => {
  return (
    <Card className="team-card h-full border-2 border-muted bg-card/80 backdrop-blur-sm hover:border-primary transition-all">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 overflow-hidden rounded-full bg-muted flex items-center justify-center border-2 border-primary/30">
            <img 
              src={logo || "/placeholder.svg"} 
              alt={`${name} лого`}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-primary">{name}</CardTitle>
            <div className="flex items-center mt-1 text-muted-foreground text-sm">
              <Globe className="w-4 h-4 mr-1" />
              <span>{country}</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-accent/10 p-2 rounded-lg">
            <span className="text-xs text-muted-foreground">Рейтинг</span>
            <span className="font-bold text-accent text-xl">{ranking}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-1">
              <Users className="w-4 h-4 mr-2 text-secondary" />
              <span className="text-sm font-medium">Состав</span>
            </div>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm pl-6">
              {players.map((player, index) => (
                <li key={index} className="list-disc text-muted-foreground">{player}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <Trophy className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm font-medium">Достижения</span>
            </div>
            <p className="text-sm text-muted-foreground">{achievements}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="w-full flex justify-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            <Star className="w-4 h-4 mr-1 animate-pulse-soft" />
            Подробнее
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
