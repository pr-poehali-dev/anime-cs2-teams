/**
 * Интерфейс результата матча команды
 */
export interface TeamMatch {
  opponent: string;
  result: 'W' | 'L' | 'D';
  score: string;
}

/**
 * Интерфейс данных о рейтинге команды
 */
export interface TeamRanking {
  rank: number;
  previousRank: number;
  name: string;
  logo: string;
  country: string;
  points: number;
  form: string[];
  recentMatches: TeamMatch[];
}

/**
 * Интерфейс данных о рейтинге игрока
 */
export interface PlayerRanking {
  rank: number;
  previousRank: number;
  name: string;
  nickname: string;
  photo: string;
  country: string;
  team: string;
  rating: number;
  kd: number;
  kpr: number;
  impact: number;
}
