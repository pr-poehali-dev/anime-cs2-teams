import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trophy, Target } from "lucide-react";
import { Player } from "@/data/playersData";

/**
 * Компонент карточки игрока
 */
const PlayerCard = ({
  name,
  nickname,
  country,
  photo = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
  team,
  teamLogo,
  role = "Рифлер",
  achievements = [],
  rating = 1.15,
  age = 23
}: Player) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover-scale">
      <div className="bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader className="p-0">
          <div className="relative">
            <div className="aspect-[3/2] overflow-hidden bg-gradient-to-b from-muted to-card">
              <img 
                src={photo} 
                alt={nickname} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
              <div>
                <Badge variant="secondary" className="bg-primary/90 hover:bg-primary text-white">{role}</Badge>
                {rating >= 1.2 && (
                  <Badge variant="outline" className="ml-2 bg-amber-500/90 hover:bg-amber-500 text-white">
                    Звезда
                  </Badge>
                )}
              </div>
              {team && teamLogo && (
                <div className="bg-black/50 backdrop-blur-sm p-1 rounded-full">
                  <img 
                    src={teamLogo} 
                    alt={team} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <h3 className="text-xl font-bold">{nickname}</h3>
            <p className="text-sm text-muted-foreground">{name}</p>
          </div>
          
          <div className="flex flex-wrap gap-y-2 text-sm">
            <div className="flex items-center w-full">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{country}</span>
              {age && <span className="ml-auto">{age} лет</span>}
            </div>
            
            {team && (
              <div className="flex items-center w-full">
                <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{team}</span>
              </div>
            )}
            
            <div className="flex items-center w-full">
              <Trophy className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{achievements.length} достижений</span>
              <span className="ml-auto font-medium">Рейтинг: {rating.toFixed(2)}</span>
            </div>
          </div>
          
          {achievements.length > 0 && (
            <div className="mt-3">
              <div className="flex gap-1 flex-wrap">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <Badge key={index} variant="outline" className="text-xs font-normal">
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
      </div>
    </Card>
  );
};

export default PlayerCard;