
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type TournamentFilterValue = "all" | "upcoming" | "ongoing" | "completed";

interface TournamentFiltersProps {
  activeFilter: TournamentFilterValue;
  onFilterChange: (filter: TournamentFilterValue) => void;
}

/**
 * Компонент с фильтрами для турниров
 */
const TournamentFilters = ({ activeFilter, onFilterChange }: TournamentFiltersProps) => {
  return (
    <Tabs defaultValue={activeFilter} className="mb-8">
      <TabsList>
        <TabsTrigger 
          value="all" 
          onClick={() => onFilterChange("all")}
        >
          Все турниры
        </TabsTrigger>
        <TabsTrigger 
          value="upcoming" 
          onClick={() => onFilterChange("upcoming")}
        >
          Предстоящие
        </TabsTrigger>
        <TabsTrigger 
          value="ongoing" 
          onClick={() => onFilterChange("ongoing")}
        >
          Текущие
        </TabsTrigger>
        <TabsTrigger 
          value="completed" 
          onClick={() => onFilterChange("completed")}
        >
          Завершенные
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TournamentFilters;
