import { TeamRanking, PlayerRanking } from './types/rankings';
import { teamsRanking, teamsRankingSecondTier } from './rankings/teamsRanking';
import { topPlayersRanking, secondTierPlayersRanking } from './rankings/playersRanking';
import { risingStarsRanking } from './rankings/risingStarsRanking';
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
 * Полный список игроков в рейтинге (топ-20)
 */
export const allPlayersRanking: PlayerRanking[] = [
  ...topPlayersRanking,
  ...secondTierPlayersRanking,
  ...risingStarsRanking.slice(0, 3) // Добавляем только топ-3 восходящих звезд
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