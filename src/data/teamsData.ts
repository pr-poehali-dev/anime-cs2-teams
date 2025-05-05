import { TeamData } from "./types/team";
import { tier1Teams } from "./teams/tier1Teams";
import { tier2Teams } from "./teams/tier2Teams";
import { tier3Teams } from "./teams/tier3Teams";

/**
 * Полный набор данных о командах
 */
export const teamsData: TeamData[] = [
  ...tier1Teams,
  ...tier2Teams,
  ...tier3Teams
];

// Реэкспорт типов для обратной совместимости
export type { TeamData as TeamProps } from "./types/team";
export type { PlayerInTeam } from "./types/team";

// Экспорт вспомогательных функций
export { parseAchievements, filterTeamsByRegion, sortTeamsByRanking } from "./utils/teamsUtils";