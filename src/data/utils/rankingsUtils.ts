import { TeamRanking, PlayerRanking } from "../types/rankings";

/**
 * Получение изменения позиции в рейтинге
 * @param currentRank Текущая позиция в рейтинге
 * @param previousRank Предыдущая позиция в рейтинге
 * @returns Изменение позиции (положительное - повышение, отрицательное - понижение)
 */
export const getRankChange = (currentRank: number, previousRank: number): number => {
  return previousRank - currentRank;
};

/**
 * Фильтрация команд по поисковому запросу
 * @param teams Массив команд
 * @param searchTerm Поисковый запрос
 * @returns Отфильтрованный массив команд
 */
export const filterTeamsBySearchTerm = (teams: TeamRanking[], searchTerm: string): TeamRanking[] => {
  const term = searchTerm.toLowerCase();
  return teams.filter(team => 
    team.name.toLowerCase().includes(term) || 
    team.country.toLowerCase().includes(term)
  );
};

/**
 * Фильтрация игроков по поисковому запросу
 * @param players Массив игроков
 * @param searchTerm Поисковый запрос
 * @returns Отфильтрованный массив игроков
 */
export const filterPlayersBySearchTerm = (players: PlayerRanking[], searchTerm: string): PlayerRanking[] => {
  const term = searchTerm.toLowerCase();
  return players.filter(player => 
    player.name.toLowerCase().includes(term) || 
    player.nickname.toLowerCase().includes(term) || 
    player.team.toLowerCase().includes(term) || 
    player.country.toLowerCase().includes(term)
  );
};

/**
 * Сортировка команд по количеству очков
 * @param teams Массив команд
 * @param ascending Порядок сортировки (true - по возрастанию, false - по убыванию)
 * @returns Отсортированный массив команд
 */
export const sortTeamsByPoints = (teams: TeamRanking[], ascending = false): TeamRanking[] => {
  return [...teams].sort((a, b) => {
    return ascending ? a.points - b.points : b.points - a.points;
  });
};

/**
 * Сортировка игроков по рейтингу
 * @param players Массив игроков
 * @param ascending Порядок сортировки (true - по возрастанию, false - по убыванию)
 * @returns Отсортированный массив игроков
 */
export const sortPlayersByRating = (players: PlayerRanking[], ascending = false): PlayerRanking[] => {
  return [...players].sort((a, b) => {
    return ascending ? a.rating - b.rating : b.rating - a.rating;
  });
};
