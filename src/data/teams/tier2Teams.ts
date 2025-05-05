import { TeamData } from "../types/team";

/**
 * Команды второго эшелона (6-12 место в рейтинге)
 */
export const tier2Teams: TeamData[] = [
  {
    id: 6,
    name: "Team Liquid",
    logo: "/placeholder.svg",
    country: "США",
    countryCode: "us",
    ranking: 6,
    players: [
      { id: 26, name: "Джонатан Ягер", nickname: "EliGE", country: "США" },
      { id: 27, name: "Кит Маркович", nickname: "NAF", country: "Канада" },
      { id: 28, name: "Марекс Галинскис", nickname: "YEKINDAR", country: "Латвия" },
      { id: 29, name: "Рубен Вильярроэль", nickname: "VINI", country: "Бразилия" },
      { id: 30, name: "Адам Торжай", nickname: "flameZ", country: "Израиль" }
    ],
    achievements: "BLAST Premier: Americas Fall Showdown 2024, ESL Pro League Season 26: North America, IEM Denver 2025"
  },
  {
    id: 7,
    name: "Virtus.pro",
    logo: "/placeholder.svg",
    country: "Россия",
    countryCode: "ru",
    ranking: 7,
    players: [
      { id: 31, name: "Тимур Тулепов", nickname: "Jame", country: "Казахстан" },
      { id: 32, name: "Евгений Манелов", nickname: "FL1T", country: "Россия" },
      { id: 33, name: "Давид Даутов", nickname: "n0rb3r7", country: "Россия" },
      { id: 34, name: "Алексей Голубев", nickname: "NickelBack", country: "Россия" },
      { id: 35, name: "Марсель Карлто", nickname: "m0tiv8", country: "Казахстан" }
    ],
    achievements: "PGL Major Asia 2025, IEM Beijing 2024, ESL Pro League CIS 2025, BLAST Moscow 2025"
  },
  {
    id: 8,
    name: "MOUZ",
    logo: "/placeholder.svg",
    country: "Европа",
    countryCode: "eu",
    ranking: 8,
    players: [
      { id: 36, name: "Адам Торжаи", nickname: "torzsi", country: "Венгрия" },
      { id: 37, name: "Адам Мадай", nickname: "siuhy", country: "Польша" },
      { id: 38, name: "Довидас Вайтегутис", nickname: "xertioN", country: "Литва" },
      { id: 39, name: "Людвиг Бролин", nickname: "Brollan", country: "Швеция" },
      { id: 40, name: "Кристофер Нонг", nickname: "dexter", country: "Австралия" }
    ],
    achievements: "ESL Pro League Season 22, DreamHack Masters Melbourne 2025"
  },
  {
    id: 9,
    name: "Astralis",
    logo: "/placeholder.svg",
    country: "Дания",
    countryCode: "dk",
    ranking: 9,
    players: [
      { id: 41, name: "Николай Ридц", nickname: "device", country: "Дания" },
      { id: 42, name: "Мартин Киек Луунд", nickname: "stavn", country: "Дания" },
      { id: 43, name: "Бенджамин Бремер", nickname: "blameF", country: "Дания" },
      { id: 44, name: "Виктор Бузган", nickname: "Buzz", country: "Дания" },
      { id: 45, name: "Лукас Росандер", nickname: "gla1ve", country: "Дания" }
    ],
    achievements: "BLAST Premier: Fall Groups 2024, PGL Major Copenhagen 2025 (финалисты)"
  },
  {
    id: 10,
    name: "FURIA Esports",
    logo: "/placeholder.svg",
    country: "Бразилия",
    countryCode: "br",
    ranking: 10,
    players: [
      { id: 46, name: "Карио Керубини", nickname: "KSCERATO", country: "Бразилия" },
      { id: 47, name: "Юри Сантос", nickname: "yuurih", country: "Бразилия" },
      { id: 48, name: "Андре Абреу", nickname: "drop", country: "Бразилия" },
      { id: 49, name: "Рафаэль Коста", nickname: "saffee", country: "Бразилия" },
      { id: 50, name: "Марсело Черлини", nickname: "chelo", country: "Бразилия" }
    ],
    achievements: "ESL Pro League Brazil 2025, IEM Rio 2025, BLAST Premier: American Finals 2024"
  },
  {
    id: 11,
    name: "Complexity",
    logo: "/placeholder.svg",
    country: "Северная Америка",
    countryCode: "us",
    ranking: 11,
    players: [
      { id: 51, name: "Джон Теодосиу", nickname: "JT", country: "ЮАР" },
      { id: 52, name: "Райан Леслер", nickname: "floppy", country: "США" },
      { id: 53, name: "Хаким Максим", nickname: "hallzerk", country: "Норвегия" },
      { id: 54, name: "Джонатан Шиндлер", nickname: "Grim", country: "США" },
      { id: 55, name: "Пол Джен", nickname: "junior", country: "США" }
    ],
    achievements: "ESL Challenger 2025, BLAST Premier: Spring Showdown 2025"
  },
  {
    id: 12,
    name: "OG Esports",
    logo: "/placeholder.svg",
    country: "Европа",
    countryCode: "eu",
    ranking: 12,
    players: [
      { id: 56, name: "Матеуш Копшински", nickname: "mantuu", country: "Польша" },
      { id: 57, name: "Марекс Галинскис", nickname: "YEKINDAR", country: "Латвия" },
      { id: 58, name: "Шахруз Захидов", nickname: "F1KU", country: "Норвегия" },
      { id: 59, name: "Николай Кристенсен", nickname: "niko", country: "Дания" },
      { id: 60, name: "Одри Жорж", nickname: "JACKZ", country: "Франция" }
    ],
    achievements: "DreamHack Open Summer 2025, ESL Pro League Season 26: Europe"
  }
];