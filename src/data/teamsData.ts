export interface TeamProps {
  id: number;
  name: string;
  logo: string;
  country: string;
  countryCode?: string;
  ranking?: number;
  players: string[] | { id: number; name: string; nickname: string; country: string; photo?: string }[];
  achievements?: string[] | string;
}

export const teamsData: TeamProps[] = [
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
      { id: 4, name: "Алекси Виролайнен", nickname: "Aleksib", country: "Финляндия" },
      { id: 5, name: "Игорь Минскийи", nickname: "iM", country: "Украина" }
    ],
    achievements: "ESL Pro League Season 24, BLAST Premier: World Final 2024, PGL Major Stockholm 2025"
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
      { id: 8, name: "Уильям Мезерди", nickname: "mezii", country: "Великобритания" },
      { id: 9, name: "Шамир Берхами", nickname: "flameZ", country: "Израиль" },
      { id: 10, name: "Дэн Мадесклер", nickname: "apEX", country: "Франция" }
    ],
    achievements: "IEM Katowice 2025, BLAST Premier: Spring Finals 2025, ESL Pro League Season 23"
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
  },
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
      { id: 28, name: "Джош Оак", nickname: "oSee", country: "США" },
      { id: 29, name: "Джейк Йип", nickname: "Stewie2K", country: "США" },
      { id: 30, name: "Ник Кэннелла", nickname: "nitr0", country: "США" }
    ],
    achievements: "BLAST Premier: Americas Fall Showdown 2024, ESL Pro League Season 26: North America"
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
      { id: 34, name: "Алексей Голубев", nickname: "fame", country: "Россия" },
      { id: 35, name: "Алексей Голубев", nickname: "Qikert", country: "Казахстан" }
    ],
    achievements: "PGL Major Asia 2025, IEM Beijing 2024, ESL Pro League CIS 2025"
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
