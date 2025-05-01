
import { useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { tournamentsData } from "@/data/tournamentsData";
import TournamentFilters, { TournamentFilterValue } from "@/components/tournaments/TournamentFilters";
import TournamentsList from "@/components/tournaments/TournamentsList";
import { Tabs, TabsContent } from "@/components/ui/tabs";

/**
 * Страница турниров
 */
const Tournaments = () => {
  const [filter, setFilter] = useState<TournamentFilterValue>("all");
  
  // Фильтрация турниров по выбранной категории
  const filteredTournaments = tournamentsData.filter(tournament => {
    if (filter === "all") return true;
    return tournament.status === filter;
  });

  // Обработчик изменения фильтра
  const handleFilterChange = (newFilter: TournamentFilterValue) => {
    setFilter(newFilter);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Турниры по CS2</h1>
          
          {/* Фильтры турниров */}
          <TournamentFilters 
            activeFilter={filter} 
            onFilterChange={handleFilterChange} 
          />
          
          {/* Содержимое вкладок */}
          <Tabs value={filter}>
            <TabsContent value="all" className="mt-6">
              <TournamentsList tournaments={filteredTournaments} />
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-6">
              <TournamentsList tournaments={filteredTournaments} />
            </TabsContent>
            
            <TabsContent value="ongoing" className="mt-6">
              <TournamentsList tournaments={filteredTournaments} />
            </TabsContent>
            
            <TabsContent value="completed" className="mt-6">
              <TournamentsList tournaments={filteredTournaments} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default Tournaments;


export default Tournaments;
