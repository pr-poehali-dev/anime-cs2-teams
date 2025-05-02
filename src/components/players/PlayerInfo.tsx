import { MapPin, Trophy, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlayerInfoProps {
  nickname: string;
  name: string;
  country: string;
  team?: string;
  age?: number;
  rating: number;
  achievements: string[];
}

/**
 * Компонент с детальной информацией об игроке
 */
const PlayerInfo = ({
  nickname,
  name,
  country,
  team,
  age,
  rating,
  achievements
}: PlayerInfoProps) => {
  return (
    <>
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
    </>
  );
};

export default PlayerInfo;