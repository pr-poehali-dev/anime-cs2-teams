import { useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { playersData } from "@/data/playersData";
import PlayersTabs from "@/components/players/PlayersTabs";
import PlayersFilters from "@/components/players/PlayersFilters";
import PlayersGrid from "@/components/players/PlayersGrid";
import { filterPlayers, sortPlayers } from "@/utils/playerUtils";

/**
 * Страница игроков CS2
 */
const Players = () => {
  // Состояние фильтров и сортировки
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [sortOption, setSortOption] = useState("rating-desc");
  const [activeTab, setActiveTab] = useState("all");

  // Функции-обработчики
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedRole("all");
    setActiveTab("all");
  };

  // Применение фильтров и сортировки
  const filteredPlayers = filterPlayers(playersData, searchQuery, selectedRole, activeTab);
  const sortedPlayers = sortPlayers(filteredPlayers, sortOption);
  
  // Состояние отображения кнопки сброса
  const showResetButton = filteredPlayers.length !== playersData.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Игроки CS2</h1>
          
          {/* Вкладки категорий игроков */}
          <PlayersTabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
          />
          
          {/* Фильтры и сортировка */}
          <PlayersFilters 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedRole={selectedRole}
            onRoleChange={setSelectedRole}
            sortOption={sortOption}
            onSortChange={setSortOption}
            onReset={handleResetFilters}
            showResetButton={showResetButton}
            filteredCount={filteredPlayers.length}
            totalCount={playersData.length}
          />
          
          {/* Сетка с игроками */}
          <PlayersGrid 
            players={sortedPlayers} 
            onResetFilters={handleResetFilters}
          />
        </div>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default Players;