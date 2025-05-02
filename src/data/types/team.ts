/**
 * Интерфейс игрока в команде
 */
export interface PlayerInTeam {
  id: number;
  name: string;
  nickname: string;
  country: string;
  photo?: string;
}

/**
 * Интерфейс данных команды
 */
export interface TeamData {
  id: number;
  name: string;
  logo: string;
  country: string;
  countryCode?: string;
  ranking?: number;
  players: PlayerInTeam[] | string[];
  achievements?: string[] | string;
}
