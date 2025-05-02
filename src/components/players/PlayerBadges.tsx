import { Badge } from "@/components/ui/badge";

interface PlayerBadgesProps {
  role: string;
  rating: number;
}

/**
 * Компонент отображения бейджей игрока (роль, "звезда" при высоком рейтинге)
 */
const PlayerBadges = ({ role, rating }: PlayerBadgesProps) => {
  return (
    <div>
      <Badge variant="secondary" className="bg-primary/90 hover:bg-primary text-white">
        {role}
      </Badge>
      
      {rating >= 1.2 && (
        <Badge variant="outline" className="ml-2 bg-amber-500/90 hover:bg-amber-500 text-white">
          Звезда
        </Badge>
      )}
    </div>
  );
};

export default PlayerBadges;