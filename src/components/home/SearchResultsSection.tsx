import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/TeamCard";

interface SearchResultsSectionProps {
  searchTerm: string;
  filteredTeams: any[];
  clearSearch: () => void;
}

const SearchResultsSection = ({ searchTerm, filteredTeams, clearSearch }: SearchResultsSectionProps) => {
  if (!searchTerm) return null;
  
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium flex items-center">
            <Search className="w-5 h-5 mr-2 text-primary" />
            Результаты поиска: "{searchTerm}"
          </h2>
          
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center text-xs"
            onClick={clearSearch}
          >
            <Filter className="mr-1 h-3 w-3" />
            Сбросить
          </Button>
        </div>
        
        {filteredTeams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map(team => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        ) : (
          <div className="bg-muted rounded-lg p-6 text-center">
            <p className="text-muted-foreground">По запросу "{searchTerm}" команды не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResultsSection;
