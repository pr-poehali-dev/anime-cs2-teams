
import { Tournament } from "@/data/tournamentsData";
import TournamentCard from "./TournamentCard";

interface TournamentsListProps {
  tournaments: Tournament[];
}

/**
 * Компонент для отображения списка турниров
 */
const TournamentsList = ({ tournaments }: TournamentsListProps) => {
  if (tournaments.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">Турниры не найдены</h3>
        <p className="text-muted-foreground mt-2">
          В данной категории нет турниров. Пожалуйста, выберите другую категорию.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
};

export default TournamentsList;
