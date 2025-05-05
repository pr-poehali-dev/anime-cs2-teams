import { TeamRanking } from "../types/rankings";

/**
 * Топ-10 команд мирового рейтинга
 */
export const teamsRanking: TeamRanking[] = [
  {
    rank: 1,
    previousRank: 1,
    name: "Natus Vincere",
    logo: "/placeholder.svg",
    country: "Украина",
    points: 1027,
    form: ["W", "W", "W", "L", "W"],
    recentMatches: [
      { opponent: "G2 Esports", result: "W", score: "2-0" },
      { opponent: "Team Vitality", result: "W", score: "2-1" },
      { opponent: "FaZe Clan", result: "W", score: "2-0" },
      { opponent: "Team Vitality", result: "L", score: "1-3" },
      { opponent: "Cloud9", result: "W", score: "2-0" }
    ]
  },
  {
    rank: 2,
    previousRank: 3,
    name: "Team Vitality",
    logo: "/placeholder.svg",
    country: "Франция",
    points: 978,
    form: ["W", "L", "W", "W", "W"],
    recentMatches: [
      { opponent: "Astralis", result: "W", score: "2-0" },
      { opponent: "Natus Vincere", result: "L", score: "1-2" },
      { opponent: "FaZe Clan", result: "W", score: "2-1" },
      { opponent: "Natus Vincere", result: "W", score: "3-1" },
      { opponent: "G2 Esports", result: "W", score: "2-1" }
    ]
  },
  {
    rank: 3,
    previousRank: 2,
    name: "FaZe Clan",
    logo: "/placeholder.svg",
    country: "Интернациональная",
    points: 962,
    form: ["L", "W", "L", "W", "W"],
    recentMatches: [
      { opponent: "Cloud9", result: "L", score: "1-2" },
      { opponent: "MOUZ", result: "W", score: "2-0" },
      { opponent: "Team Vitality", result: "L", score: "1-2" },
      { opponent: "G2 Esports", result: "W", score: "2-1" },
      { opponent: "Virtus.pro", result: "W", score: "2-0" }
    ]
  },
  {
    rank: 4,
    previousRank: 4,
    name: "G2 Esports",
    logo: "/placeholder.svg",
    country: "Интернациональная",
    points: 884,
    form: ["L", "W", "L", "L", "L"],
    recentMatches: [
      { opponent: "Natus Vincere", result: "L", score: "0-2" },
      { opponent: "Cloud9", result: "W", score: "2-1" },
      { opponent: "FaZe Clan", result: "L", score: "1-2" },
      { opponent: "Astralis", result: "L", score: "0-2" },
      { opponent: "Team Vitality", result: "L", score: "1-2" }
    ]
  },
  {
    rank: 5,
    previousRank: 7,
    name: "Cloud9",
    logo: "/placeholder.svg",
    country: "Интернациональная",
    points: 825,
    form: ["W", "L", "W", "W", "L"],
    recentMatches: [
      { opponent: "FaZe Clan", result: "W", score: "2-1" },
      { opponent: "G2 Esports", result: "L", score: "1-2" },
      { opponent: "MOUZ", result: "W", score: "2-0" },
      { opponent: "Virtus.pro", result: "W", score: "2-0" },
      { opponent: "Natus Vincere", result: "L", score: "0-2" }
    ]
  }
];

/**
 * Команды из второй половины топ-10
 */
export const teamsRankingSecondTier: TeamRanking[] = [
  {
    rank: 6,
    previousRank: 5,
    name: "Team Liquid",
    logo: "/placeholder.svg",
    country: "США",
    points: 782,
    form: ["W", "L", "L", "W", "W"],
    recentMatches: [
      { opponent: "FURIA Esports", result: "W", score: "2-1" },
      { opponent: "MOUZ", result: "L", score: "1-2" },
      { opponent: "Astralis", result: "L", score: "1-2" },
      { opponent: "FURIA Esports", result: "W", score: "2-0" },
      { opponent: "Evil Geniuses", result: "W", score: "2-0" }
    ]
  },
  {
    rank: 7,
    previousRank: 6,
    name: "Virtus.pro",
    logo: "/placeholder.svg",
    country: "Россия",
    points: 743,
    form: ["W", "L", "L", "L", "W"],
    recentMatches: [
      { opponent: "Astralis", result: "W", score: "2-1" },
      { opponent: "MOUZ", result: "L", score: "0-2" },
      { opponent: "Cloud9", result: "L", score: "0-2" },
      { opponent: "FaZe Clan", result: "L", score: "0-2" },
      { opponent: "Team Spirit", result: "W", score: "2-0" }
    ]
  },
  {
    rank: 8,
    previousRank: 10,
    name: "MOUZ",
    logo: "/placeholder.svg",
    country: "Европа",
    points: 710,
    form: ["W", "L", "W", "L", "W"],
    recentMatches: [
      { opponent: "Virtus.pro", result: "W", score: "2-0" },
      { opponent: "FaZe Clan", result: "L", score: "0-2" },
      { opponent: "Team Liquid", result: "W", score: "2-1" },
      { opponent: "Cloud9", result: "L", score: "0-2" },
      { opponent: "FURIA Esports", result: "W", score: "2-0" }
    ]
  },
  {
    rank: 9,
    previousRank: 8,
    name: "Astralis",
    logo: "/placeholder.svg",
    country: "Дания",
    points: 685,
    form: ["L", "W", "W", "W", "L"],
    recentMatches: [
      { opponent: "Team Vitality", result: "L", score: "0-2" },
      { opponent: "Virtus.pro", result: "W", score: "2-1" },
      { opponent: "Team Liquid", result: "W", score: "2-1" },
      { opponent: "G2 Esports", result: "W", score: "2-0" },
      { opponent: "Team Liquid", result: "L", score: "0-2" }
    ]
  },
  {
    rank: 10,
    previousRank: 9,
    name: "FURIA Esports",
    logo: "/placeholder.svg",
    country: "Бразилия",
    points: 637,
    form: ["L", "W", "L", "L", "L"],
    recentMatches: [
      { opponent: "Team Liquid", result: "L", score: "1-2" },
      { opponent: "Evil Geniuses", result: "W", score: "2-0" },
      { opponent: "Team Liquid", result: "L", score: "0-2" },
      { opponent: "MOUZ", result: "L", score: "0-2" },
      { opponent: "Complexity", result: "L", score: "1-2" }
    ]
  }
];
