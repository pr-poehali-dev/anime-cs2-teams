export interface Player {
  id: number;
  name: string;
  nickname: string;
  country: string;
  team: string;
  teamLogo: string;
  role: string;
  photo: string;
  rating: number;
  age: number;
  achievements: string[];
}

// Опции для фильтрации по ролям
export const roleOptions = [
  { value: "all", label: "Все роли" },
  { value: "AWP", label: "AWP" },
  { value: "Рифлер", label: "Рифлер" },
  { value: "IGL", label: "IGL" },
  { value: "Саппорт", label: "Саппорт" },
];

// Опции для сортировки игроков
export const sortOptions = [
  { value: "rating-desc", label: "Рейтинг (высший)" },
  { value: "rating-asc", label: "Рейтинг (низший)" },
  { value: "age-desc", label: "Возраст (старше)" },
  { value: "age-asc", label: "Возраст (моложе)" },
  { value: "name", label: "Имя (А-Я)" },
];

// Данные о игроках
export const playersData: Player[] = [
  {
    id: 1,
    name: "Александр Костылев",
    nickname: "s1mple",
    country: "Украина",
    team: "Natus Vincere",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
    rating: 1.35,
    age: 27,
    achievements: ["PGL Major Stockholm 2025", "ESL Pro League S24", "BLAST Premier: World Final 2024"]
  },
  {
    id: 2,
    name: "Матье Эрбо",
    nickname: "ZywOo",
    country: "Франция",
    team: "Team Vitality",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=300&auto=format&fit=crop",
    rating: 1.32,
    age: 24,
    achievements: ["IEM Katowice 2025", "BLAST Premier: Spring Finals 2025", "ESL Pro League S23"]
  },
  {
    id: 3,
    name: "Робин Коль",
    nickname: "ropz",
    country: "Эстония",
    team: "FaZe Clan",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 1.27,
    age: 25,
    achievements: ["BLAST Premier: Fall Finals 2024", "ESL Pro League S25", "IEM Rio 2024"]
  },
  {
    id: 4,
    name: "Никола Ковач",
    nickname: "NiKo",
    country: "Босния и Герцеговина",
    team: "G2 Esports",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop",
    rating: 1.29,
    age: 28,
    achievements: ["IEM Cologne 2025", "PGL Major Berlin 2025", "BLAST World Championship 2024"]
  },
  {
    id: 5,
    name: "Дмитрий Соколов",
    nickname: "sh1ro",
    country: "Россия",
    team: "Cloud9",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    rating: 1.25,
    age: 24,
    achievements: ["IEM Dallas 2025", "ESL Impact League S6"]
  },
  {
    id: 6,
    name: "Кит Маркович",
    nickname: "NAF",
    country: "Канада",
    team: "Team Liquid",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 1.22,
    age: 27,
    achievements: ["BLAST Premier: Americas Fall Showdown 2024", "ESL Pro League S26: North America"]
  },
  {
    id: 7,
    name: "Тимур Тулепов",
    nickname: "Jame",
    country: "Казахстан",
    team: "Virtus.pro",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    rating: 1.21,
    age: 26,
    achievements: ["PGL Major Asia 2025", "IEM Beijing 2024", "ESL Pro League CIS 2025"]
  },
  {
    id: 8,
    name: "Илья Осипов",
    nickname: "m0NESY",
    country: "Россия",
    team: "G2 Esports",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1548449112-96a38a643324?q=80&w=300&auto=format&fit=crop",
    rating: 1.28,
    age: 20,
    achievements: ["IEM Cologne 2025", "PGL Major Berlin 2025", "BLAST World Championship 2024"]
  },
  {
    id: 9,
    name: "Финн Андерсен",
    nickname: "karrigan",
    country: "Дания",
    team: "FaZe Clan",
    teamLogo: "https://via.placeholder.com/50",
    role: "IGL",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop",
    rating: 1.05,
    age: 35,
    achievements: ["BLAST Premier: Fall Finals 2024", "ESL Pro League S25", "IEM Rio 2024"]
  },
  {
    id: 10,
    name: "Денис Шарипов",
    nickname: "electronic",
    country: "Россия",
    team: "Natus Vincere",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300&auto=format&fit=crop",
    rating: 1.24,
    age: 27,
    achievements: ["PGL Major Stockholm 2025", "ESL Pro League S24", "BLAST Premier: World Final 2024"]
  },
  {
    id: 11,
    name: "Адам Торжаи",
    nickname: "torzsi",
    country: "Венгрия",
    team: "MOUZ",
    teamLogo: "https://via.placeholder.com/50",
    role: "AWP",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
    rating: 1.18,
    age: 22,
    achievements: ["ESL Pro League S22", "DreamHack Masters Melbourne 2025"]
  },
  {
    id: 12,
    name: "Карио Керубини",
    nickname: "KSCERATO",
    country: "Бразилия",
    team: "FURIA Esports",
    teamLogo: "https://via.placeholder.com/50",
    role: "Рифлер",
    photo: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=300&auto=format&fit=crop",
    rating: 1.19,
    age: 25,
    achievements: ["ESL Pro League Brazil 2025", "IEM Rio 2025", "BLAST Premier: American Finals 2024"]
  },
];