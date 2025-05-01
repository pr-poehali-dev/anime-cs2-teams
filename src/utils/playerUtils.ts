import { Player } from "@/data/playersData";

/**
 * Фильтрует игроков по заданным критериям
 */
export const filterPlayers = (
  players: Player[],
  searchQuery: string,
  role: string,
  tab: string
): Player[] => {
  return players.filter(player => {
    // Поиск по никнейму или имени
    const matchesSearch = 
      player.nickname.toLowerCase().includes(searchQuery.toLowerCase()) || 
      player.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Фильтр по роли
    const matchesRole = role === "all" || player.role === role;
    
    // Фильтр по вкладке (по рейтингу)
    let matchesTab = true;
    if (tab === "top") {
      matchesTab = player.rating >= 1.25;
    } else if (tab === "rising") {
      matchesTab = player.rating >= 1.15 && player.rating < 1.25 && player.age <= 23;
    }
    
    return matchesSearch && matchesRole && matchesTab;
  });
};

/**
 * Сортирует игроков согласно выбранной опции
 */
export const sortPlayers = (players: Player[], sortOption: string): Player[] => {
  return [...players].sort((a, b) => {
    switch (sortOption) {
      case "rating-desc":
        return b.rating - a.rating;
      case "rating-asc":
        return a.rating - b.rating;
      case "age-desc":
        return b.age - a.age;
      case "age-asc":
        return a.age - b.age;
      case "name":
        return a.nickname.localeCompare(b.nickname);
      default:
        return b.rating - a.rating;
    }
  });
};