export interface TeamRanking {
  rank: number;
  previousRank: number;
  name: string;
  logo: string;
  country: string;
  points: number;
  form: string[];
  recentMatches: {
    opponent: string;
    result: 'W' | 'L' | 'D';
    score: string;
  }[];
}

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
  },
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

export const playersRanking: PlayerRanking[] = [
  {
    rank: 1,
    previousRank: 1,
    name: "Александр Костылев",
    nickname: "s1mple",
    photo: "/placeholder.svg",
    country: "Украина",
    team: "Natus Vincere",
    rating: 1.32,
    kd: 1.43,
    kpr: 0.86,
    impact: 1.41
  },
  {
    rank: 2,
    previousRank: 2,
    name: "Матье Эрбо",
    nickname: "ZywOo",
    photo: "/placeholder.svg",
    country: "Франция",
    team: "Team Vitality",
    rating: 1.31,
    kd: 1.41,
    kpr: 0.85,
    impact: 1.39
  },
  {
    rank: 3,
    previousRank: 5,
    name: "Илья Маливаненко",
    nickname: "m0NESY",
    photo: "/placeholder.svg",
    country: "Россия",
    team: "G2 Esports",
    rating: 1.28,
    kd: 1.33,
    kpr: 0.82,
    impact: 1.35
  },
  {
    rank: 4,
    previousRank: 3,
    name: "Робин Копперанс",
    nickname: "ropz",
    photo: "/placeholder.svg",
    country: "Эстония",
    team: "FaZe Clan",
    rating: 1.26,
    kd: 1.29,
    kpr: 0.78,
    impact: 1.31
  },
  {
    rank: 5,
    previousRank: 4,
    name: "Дмитрий Соколов",
    nickname: "sh1ro",
    photo: "/placeholder.svg",
    country: "Россия",
    team: "Cloud9",
    rating: 1.24,
    kd: 1.31,
    kpr: 0.76,
    impact: 1.28
  },
  {
    rank: 6,
    previousRank: 7,
    name: "Валерий Ваховский",
    nickname: "b1t",
    photo: "/placeholder.svg",
    country: "Украина",
    team: "Natus Vincere",
    rating: 1.23,
    kd: 1.28,
    kpr: 0.74,
    impact: 1.27
  },
  {
    rank: 7,
    previousRank: 6,
    name: "Рассел Ван Дулкен",
    nickname: "Twistzz",
    photo: "/placeholder.svg",
    country: "Канада",
    team: "FaZe Clan",
    rating: 1.21,
    kd: 1.24,
    kpr: 0.73,
    impact: 1.25
  },
  {
    rank: 8,
    previousRank: 11,
    name: "Лукас Росенхольм",
    nickname: "misutaaa",
    photo: "/placeholder.svg",
    country: "Франция",
    team: "Team Vitality",
    rating: 1.19,
    kd: 1.22,
    kpr: 0.71,
    impact: 1.23
  },
  {
    rank: 9,
    previousRank: 10,
    name: "Давид Чернобай",
    nickname: "frozen",
    photo: "/placeholder.svg",
    country: "Словакия",
    team: "FaZe Clan",
    rating: 1.18,
    kd: 1.21,
    kpr: 0.72,
    impact: 1.20
  },
  {
    rank: 10,
    previousRank: 9,
    name: "Сергей Рыхторов",
    nickname: "Ax1Le",
    photo: "/placeholder.svg",
    country: "Россия",
    team: "Cloud9",
    rating: 1.17,
    kd: 1.19,
    kpr: 0.69,
    impact: 1.22
  },
  {
    rank: 11,
    previousRank: 8,
    name: "Никола Ковач",
    nickname: "NiKo",
    photo: "/placeholder.svg",
    country: "Босния и Герцеговина",
    team: "G2 Esports",
    rating: 1.16,
    kd: 1.18,
    kpr: 0.71,
    impact: 1.21
  },
  {
    rank: 12,
    previousRank: 17,
    name: "Илья Залуцкий",
    nickname: "w0nderful",
    photo: "/placeholder.svg",
    country: "Украина",
    team: "Natus Vincere",
    rating: 1.15,
    kd: 1.17,
    kpr: 0.70,
    impact: 1.19
  }
];
