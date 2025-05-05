import { TeamData } from "../types/team";

/**
 * Топ-5 команд мирового рейтинга
 */
export const tier1Teams: TeamData[] = [
  {
    id: 1,
    name: "Natus Vincere",
    logo: "/placeholder.svg",
    country: "Украина",
    countryCode: "ua",
    ranking: 1,
    players: [
      { id: 1, name: "Александр Костылев", nickname: "s1mple", country: "Украина" },
      { id: 2, name: "Валерий Ваховский", nickname: "b1t", country: "Украина" },
      { id: 3, name: "Илья Залуцкий", nickname: "w0nderful", country: "Украина" },
      { id: 4, name: "Юрий Янковский", nickname: "headtr1ck", country: "Украина" },
      { id: 5, name: "Кирилл Михайлов", nickname: "Boombl4", country: "Россия" }
    ],
    achievements: "ESL Pro League Season 24, BLAST Premier: World Final 2024, PGL Major Stockholm 2025, ESL One Cologne 2025"
  },
  {
    id: 2,
    name: "Team Vitality",
    logo: "/placeholder.svg",
    country: "Франция",
    countryCode: "fr",
    ranking: 2,
    players: [
      { id: 6, name: "Матье Эрбо", nickname: "ZywOo", country: "Франция" },
      { id: 7, name: "Лотан Гилади", nickname: "Spinx", country: "Израиль" },
      { id: 8, name: "Даниэль Марино", nickname: "apEX", country: "Франция" },
      { id: 9, name: "Шамир Берхами", nickname: "flameZ", country: "Израиль" },
      { id: 10, name: "Лукас Росенхольм", nickname: "misutaaa", country: "Франция" }
    ],
    achievements: "IEM Katowice 2025, BLAST Premier: Spring Finals 2025, ESL Pro League Season 23, BLAST World Final 2024"
  },
  {
    id: 3,
    name: "FaZe Clan",
    logo: "/placeholder.svg",
    country: "Интернациональная",
    countryCode: "eu",
    ranking: 3,
    players: [
      { id: 11, name: "Давид Чернянский", nickname: "frozen", country: "Словакия" },
      { id: 12, name: "Робин Коль", nickname: "ropz", country: "Эстония" },
      { id: 13, name: "Рассел Ван Дульке", nickname: "Twistzz", country: "Канада" },
      { id: 14, name: "Хелвийс Сукникс", nickname: "broky", country: "Латвия" },
      { id: 15, name: "Финн Андерсен", nickname: "karrigan", country: "Дания" }
    ],
    achievements: "BLAST Premier: Fall Finals 2024, ESL Pro League Season 25, IEM Rio 2024"
  },
  {
    id: 4,
    name: "G2 Esports",
    logo: "/placeholder.svg",
    country: "Интернациональная",
    countryCode: "eu",
    ranking: 4,
    players: [
      { id: 16, name: "Никола Ковач", nickname: "NiKo", country: "Босния и Герцеговина" },
      { id: 17, name: "Илья Осипов", nickname: "m0NESY", country: "Россия" },
      { id: 18, name: "Немания Ковач", nickname: "nexa", country: "Сербия" },
      { id: 19, name: "Неманья Ковач", nickname: "huNter", country: "Босния и Герцеговина" },
      { id: 20, name: "Джастин Сэвэдж", nickname: "jks", country: "Австралия" }
    ],
    achievements: "IEM Cologne 2025, PGL Major Berlin 2025, BLAST World Championship 2024"
  },
  {
    id: 5,
    name: "Cloud9",
    logo: "/placeholder.svg",
    country: "Интернациональная",
    countryCode: "eu",
    ranking: 5,
    players: [
      { id: 21, name: "Тимофей Якушин", nickname: "Ax1Le", country: "Россия" },
      { id: 22, name: "Дмитрий Соколов", nickname: "sh1ro", country: "Россия" },
      { id: 23, name: "Абай Хасенов", nickname: "HObbit", country: "Казахстан" },
      { id: 24, name: "Евгений Нагорный", nickname: "interz", country: "Россия" },
      { id: 25, name: "Кирилл Михайлов", nickname: "Boombl4", country: "Россия" }
    ],
    achievements: "IEM Dallas 2025, ESL Impact League Season 6, Intel Grand Slam Season 5"
  }
];