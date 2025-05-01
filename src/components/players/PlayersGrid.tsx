import { Player } from "@/data/playersData";
import PlayerCard from "@/components/PlayerCard";
import { Button } from "@/components/ui/button";

interface PlayersGridProps {
  players: Player[];
  onResetFilters: () => void;
}

const PlayersGrid = ({ players, onResetFilters }: PlayersGridProps) => {
  if (players.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium">Игроки не найдены</h3>
        <p className="text-muted-foreground mt-2">
          По вашему запросу не найдено игроков. Попробуйте изменить параметры поиска.
        </p>
        <Button 
          className="mt-6" 
          variant="outline"
          onClick={onResetFilters}
        >
          Сбросить фильтры
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {players.map(player => (
        <PlayerCard key={player.id} {...player} />
      ))}
    </div>
  );
};

export default PlayersGrid;