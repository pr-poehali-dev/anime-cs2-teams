
export interface TeamRanking {
  id: number;
  position: number;
  previousPosition: number;
  name: string;
  logo: string;
  country: string;
  points: number;
  change: number;
  recentResults: Array<"win" | "loss" | "draw">;
}

export interface PlayerRanking {
  id: number;
  position: number;
  previousPosition: number;
  name: string;
  nickname: string;
  team: string;
  country: string;
  rating: number;
  change: number;
}

export const teamRankings: TeamRanking[] = [
  {
    id: 1,
    position: 1,
    previousPosition: 1,
    name: "FaZe Clan",
    logo: "/placeholder.svg",
    country: "International",
    points: 1000,
    change: 0,
    recentResults: ["win", "win", "win", "win", "loss"]
  },
  {
    id: 2,
    position: 2,
    previousPosition: 3,
    name: "Vitality",
    logo: "/placeholder.svg",
    country: "France",
    points: 890,
    change: 1,
    recentResults: ["win", "win", "loss", "win", "win"]
  },
  {
    id: 3,
    position: 3,
    previousPosition: 2,
    name: "G2 Esports",
    logo: "/placeholder.svg",
    country: "International",
    points: 880,
    change: -1,
    recentResults: ["loss", "win", "win", "win", "win"]
  },
  {
    id: 4,
    position: 4,
    previousPosition: 4,
    name: "NAVI",
    logo: "/placeholder.svg",
    country: "Ukraine",
    points: 820,
    change: 0,
    recentResults: ["win", "win", "win", "loss", "loss"]
  },
  {
    id: 5,
    position: 5,
    previousPosition: 8,
    name: "Cloud9",
    logo: "/placeholder.svg",
    country: "Russia",
    points: 750,
    change: 3,
    recentResults: ["win", "win", "win", "win", "win"]
  },
  {
    id: 6,
    position: 6,
    previousPosition: 5,
    name: "MOUZ",
    logo: "/placeholder.svg",
    country: "International",
    points: 720,
    change: -1,
    recentResults: ["loss", "win", "loss", "win", "win"]
  },
  {
    id: 7,
    position: 7,
    previousPosition: 7,
    name: "Complexity",
    logo: "/placeholder.svg",
    country: "North America",
    points: 680,
    change: 0,
    recentResults: ["win", "loss", "win", "loss", "win"]
  },
  {
    id: 8,
    position: 8,
    previousPosition: 10,
    name: "ENCE",
    logo: "/placeholder.svg",
    country: "International",
    points: 650,
    change: 2,
    recentResults: ["win", "win", "loss", "win", "loss"]
  },
  {
    id: 9,
    position: 9,
    previousPosition: 6,
    name: "Astralis",
    logo: "/placeholder.svg",
    country: "Denmark",
    points: 630,
    change: -3,
    recentResults: ["loss", "loss", "win", "loss", "win"]
  },
  {
    id: 10,
    position: 10,
    previousPosition: 9,
    name: "FURIA",
    logo: "/placeholder.svg",
    country: "Brazil",
    points: 610,
    change: -1,
    recentResults: ["loss", "win", "loss", "win", "loss"]
  }
];

export const playerRankings: PlayerRanking[] = [
  {
    id: 1,
    position: 1,
    previousPosition: 1,
    name: "Oleksandr Kostyliev",
    nickname: "s1mple",
    team: "NAVI",
    country: "Ukraine",
    rating: 1.32,
    change: 0
  },
  {
    id: 2,
    position: 2,
    previousPosition: 2,
    name: "Mathieu Herbaut",
    nickname: "ZywOo",
    team: "Vitality",
    country: "France",
    rating: 1.30,
    change: 0
  },
  {
    id: 3,
    position: 3,
    previousPosition: 5,
    name: "Nikola Kovač",
    nickname: "NiKo",
    team: "G2 Esports",
    country: "Bosnia and Herzegovina",
    rating: 1.28,
    change: 2
  },
  {
    id: 4,
    position: 4,
    previousPosition: 3,
    name: "Dmitry Sokolov",
    nickname: "sh1ro",
    team: "Cloud9",
    country: "Russia",
    rating: 1.27,
    change: -1
  },
  {
    id: 5,
    position: 5,
    previousPosition: 4,
    name: "Ilya Zalutskiy",
    nickname: "m0NESY",
    team: "G2 Esports",
    country: "Russia",
    rating: 1.26,
    change: -1
  },
  {
    id: 6,
    position: 6,
    previousPosition: 6,
    name: "Robin Kool",
    nickname: "ropz",
    team: "FaZe Clan",
    country: "Estonia",
    rating: 1.24,
    change: 0
  },
  {
    id: 7,
    position: 7,
    previousPosition: 8,
    name: "Russel Van Dulken",
    nickname: "Twistzz",
    team: "FaZe Clan",
    country: "Canada",
    rating: 1.22,
    change: 1
  },
  {
    id: 8,
    position: 8,
    previousPosition: 7,
    name: "Håvard Nygaard",
    nickname: "rain",
    team: "FaZe Clan",
    country: "Norway",
    rating: 1.20,
    change: -1
  },
  {
    id: 9,
    position: 9,
    previousPosition: 11,
    name: "Lotan Giladi",
    nickname: "Spinx",
    team: "Vitality",
    country: "Israel",
    rating: 1.19,
    change: 2
  },
  {
    id: 10,
    position: 10,
    previousPosition: 9,
    name: "David Čerňanský",
    nickname: "frozen",
    team: "MOUZ",
    country: "Slovakia",
    rating: 1.18,
    change: -1
  }
];
