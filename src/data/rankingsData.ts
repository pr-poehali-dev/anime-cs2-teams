import { TeamRanking, PlayerRanking } from './types/rankings';
import { teamsRanking, teamsRankingSecondTier } from './rankings/teamsRanking';
import { topPlayersRanking, secondTierPlayersRanking } from './rankings/playersRanking';
import {
  getRankChange,
  filterTeamsBySearchTerm,
  filterPlayersBySearchTerm,
  sortTeamsByPoints,
  sortPlayersByRating
} from './utils/rankingsUtils';

/**
 * Полный список команд в рейтинге (топ-10)
 */
export const allTeamsRanking: TeamRanking[] = [
  ...teamsRanking,
  ...teamsRankingSecondTier
];

/**
 * Полный список игроков в рейтинге (топ-12)
 */
export const allPlayersRanking: PlayerRanking[] = [
  ...topPlayersRanking,
  ...secondTierPlayersRanking
];

// Реэкспорт типов
export type { TeamRanking, PlayerRanking };

// Реэкспорт вспомогательных функций
export {
  getRankChange,
  filterTeamsBySearchTerm,
  filterPlayersBySearchTerm,
  sortTeamsByPoints,
  sortPlayersByRating
};

// Обратная совместимость с исходным кодом
export { allTeamsRanking as teamsRanking };
export { allPlayersRanking as playersRanking };
