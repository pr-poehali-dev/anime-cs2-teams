import { TeamData } from "../types/team";

/**
 * Преобразует строку достижений в массив 
 * @param achievements Строка или массив достижений
 * @returns Массив достижений команды
 */
export const parseAchievements = (achievements: string | string[] | undefined): string[] => {
  if (!achievements) {
    return [];
  }
  
  if (typeof achievements === 'string') {
    return achievements.split(', ');
  }
  
  return achievements;
};

/**
 * Получение команд по фильтру региона
 * @param teams Массив команд
 * @param region Код региона
 * @returns Отфильтрованный массив команд
 */
export const filterTeamsByRegion = (teams: TeamData[], region?: string): TeamData[] => {
  if (!region) {
    return teams;
  }
  
  return teams.filter(team => team.countryCode === region || 
    (region === 'eu' && ['eu', 'dk', 'fr'].includes(team.countryCode || '')));
};

/**
 * Сортировка команд по рейтингу
 * @param teams Массив команд
 * @param ascending Порядок сортировки (по возрастанию/убыванию)
 * @returns Отсортированный массив команд
 */
export const sortTeamsByRanking = (teams: TeamData[], ascending = false): TeamData[] => {
  return [...teams].sort((a, b) => {
    const rankA = a.ranking || 999;
    const rankB = b.ranking || 999;
    
    return ascending ? rankA - rankB : rankB - rankA;
  });
};
