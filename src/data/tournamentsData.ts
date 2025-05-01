
export interface Tournament {
  id: number;
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  location: string;
  prize: string;
  teams: number;
  status: "upcoming" | "ongoing" | "completed";
  format: string;
  organizer: string;
  description: string;
}

// Данные о турнирах
export const tournamentsData: Tournament[] = [
  {
    id: 1,
    name: "PGL Major Copenhagen 2025",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-05-15",
    endDate: "2025-05-30",
    location: "Копенгаген, Дания",
    prize: "$2,000,000",
    teams: 24,
    status: "upcoming",
    format: "GSL + Single Elimination",
    organizer: "PGL",
    description: "Крупнейший турнир по CS2 первой половины 2025 года. 24 команды со всего мира будут бороться за звание чемпиона мира."
  },
  {
    id: 2,
    name: "ESL Pro League Season 27",
    logo: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-06-10",
    endDate: "2025-07-05",
    location: "Мальта",
    prize: "$835,000",
    teams: 24,
    status: "upcoming",
    format: "Group Stage + Playoffs",
    organizer: "ESL",
    description: "27-й сезон профессиональной лиги ESL Pro League с участием 24 команд из всех регионов мира."
  },
  {
    id: 3,
    name: "BLAST Premier Spring Finals 2025",
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-05-02",
    endDate: "2025-05-09",
    location: "Лондон, Великобритания",
    prize: "$425,000",
    teams: 8,
    status: "upcoming",
    format: "Double Elimination",
    organizer: "BLAST",
    description: "Весенний финал BLAST Premier 2025 года, где 8 лучших команд сразятся за солидный призовой фонд и рейтинговые очки."
  },
  {
    id: 4,
    name: "IEM Katowice 2025",
    logo: "https://images.unsplash.com/photo-1643903127224-5a3de439bd6d?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-04-18",
    endDate: "2025-04-30",
    location: "Катовице, Польша",
    prize: "$1,000,000",
    teams: 16,
    status: "ongoing",
    format: "GSL Groups + Single Elimination",
    organizer: "ESL",
    description: "Престижный турнир Intel Extreme Masters в Катовице с участием лучших команд мира в легендарном Сподеке."
  },
  {
    id: 5,
    name: "DreamHack Masters Melbourne 2025",
    logo: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2025-03-10",
    endDate: "2025-03-15",
    location: "Мельбурн, Австралия",
    prize: "$250,000",
    teams: 8,
    status: "completed",
    format: "Double Elimination",
    organizer: "DreamHack",
    description: "Международный турнир в Австралии, открывающий серию DreamHack Masters 2025 года."
  },
  {
    id: 6,
    name: "BLAST World Championship 2024",
    logo: "https://images.unsplash.com/photo-1556641420-cf49d9a60c15?q=80&w=200&h=200&auto=format&fit=crop",
    startDate: "2024-12-12",
    endDate: "2024-12-18",
    location: "Абу-Даби, ОАЭ",
    prize: "$1,250,000",
    teams: 8,
    status: "completed",
    format: "Double Elimination",
    organizer: "BLAST",
    description: "Заключительный турнир 2024 года от BLAST, собравший 8 лучших команд мира в Абу-Даби."
  }
];
