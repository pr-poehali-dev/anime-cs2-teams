import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PlayerPhoto from "@/components/players/PlayerPhoto";
import PlayerBadges from "@/components/players/PlayerBadges";
import PlayerInfo from "@/components/players/PlayerInfo";

interface PlayerCardProps {
  id: number;
  name: string;
  nickname: string;
  country: string;
  photo?: string;
  team?: string;
  teamLogo?: string;
  role?: string;
  achievements?: string[];
  rating?: number;
  age?: number;
}

/**
 * Компонент карточки игрока
 */
const PlayerCard = ({
  id,
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
}: PlayerCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover-scale">
      <div className="bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader className="p-0">
          <PlayerPhoto
            photo={photo}
            nickname={nickname}
            team={team}
            teamLogo={teamLogo}
          >
            <PlayerBadges role={role} rating={rating} />
          </PlayerPhoto>
        </CardHeader>
        
        <CardContent className="p-4">
          <PlayerInfo
            nickname={nickname}
            name={name}
            country={country}
            team={team}
            age={age}
            rating={rating}
            achievements={achievements}
          />
        </CardContent>
      </div>
    </Card>
  );
};

export default PlayerCard;