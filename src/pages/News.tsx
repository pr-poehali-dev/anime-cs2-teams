import { useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, Search, Tag } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Временные данные для новостей
const newsData = [
  {
    id: 1,
    title: "Natus Vincere выигрывают PGL Major Stockholm 2025",
    thumbnail: "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?q=80&w=500&auto=format&fit=crop",
    date: "2025-04-25",
    category: "Турниры",
    excerpt: "Украинская команда Natus Vincere одержала победу в финале PGL Major Stockholm 2025, обыграв Team Vitality со счетом 3-1.",
    content: "Украинская команда Natus Vincere стала победителем турнира PGL Major Stockholm 2025, обыграв в финале Team Vitality со счетом 3-1. MVP турнира был признан Александр «s1mple» Костылев, показавший феноменальную игру на протяжении всего турнира.\n\nЭто уже третий мэйджор-титул в истории организации и второй подряд. Команда получила $500,000 из призового фонда турнира в размере $2,000,000."
  },
  {
    id: 2,
    title: "FaZe Clan представили обновленный состав на сезон 2025",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop",
    date: "2025-04-20",
    category: "Команды",
    excerpt: "Международная организация FaZe Clan анонсировала изменения в составе своей команды по CS2, подписав нового игрока и сменив тренера.",
    content: "Международная организация FaZe Clan объявила об изменениях в составе по CS2. В команду присоединился Давид «frozen» Чернянский, ранее выступавший за MOUZ. Также сменился тренер команды - теперь эту должность занимает Янко «YNk» Пауновичу, ранее работавший с G2 Esports.\n\nНовый состав FaZe Clan по CS2:\n- Робин «ropz» Коль\n- Хелвийс «broky» Сукникс\n- Рассел «Twistzz» Ван Дульке\n- Давид «frozen» Чернянский\n- Финн «karrigan» Андерсен (капитан)\n- Янко «YNk» Пауновичу (тренер)"
  },
  {
    id: 3,
    title: "Valve анонсировала крупное обновление CS2",
    thumbnail: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=500&auto=format&fit=crop",
    date: "2025-04-15",
    category: "Обновления",
    excerpt: "Компания Valve объявила о выходе масштабного обновления для Counter-Strike 2, которое принесет новую карту и значительные изменения в игровой механике.",
    content: "Компания Valve анонсировала масштабное обновление для Counter-Strike 2, которое выйдет в мае 2025 года. В обновление войдет новая соревновательная карта «Canyon», созданная с учетом отзывов профессиональных игроков, а также значительные изменения в игровой механике.\n\nОсновные изменения:\n1. Новая карта Canyon\n2. Переработка системы рейтинга\n3. Оптимизация серверной части для снижения задержек\n4. Новый кейс с скинами 'Prisma 3'\n5. Обновленный интерфейс для просмотра турниров внутри игры"
  },
  {
    id: 4,
    title: "ESL объявила о расширении Pro League до 32 команд",
    thumbnail: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=500&auto=format&fit=crop",
    date: "2025-04-10",
    category: "Турниры",
    excerpt: "Организатор турниров ESL анонсировал расширение формата ESL Pro League начиная с 28 сезона - теперь участвовать будут 32 команды вместо 24.",
    content: "Организатор турниров ESL объявил о расширении формата ESL Pro League начиная с 28 сезона. Теперь в лиге будут участвовать 32 команды вместо 24, что позволит большему количеству коллективов из разных регионов мира принять участие в престижном соревновании.\n\nНовый формат будет включать предварительную стадию с 8 группами по 4 команды, после чего 16 лучших коллективов продолжат борьбу в плей-офф. Также увеличен призовой фонд турнира до $1,000,000."
  },
  {
    id: 5,
    title: "Команда G2 Esports подписала молодого таланта из Финляндии",
    thumbnail: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=500&auto=format&fit=crop",
    date: "2025-04-05",
    category: "Команды",
    excerpt: "G2 Esports объявили о подписании 16-летнего финского снайпера после впечатляющих выступлений на FACEIT Pro League.",
    content: "G2 Esports объявили о подписании 16-летнего финского талантливого снайпера Йоны «YEKINDAR» Саволайнена. Молодой игрок привлек внимание организации впечатляющими выступлениями на FACEIT Pro League, где стабильно показывал высокие индивидуальные результаты.\n\nЙона заменит в составе Джастина «jks» Сэвэджа, который решил взять перерыв от соревновательной сцены. Молодой финн будет выступать в роли снайпера, а Илья «m0NESY» Осипов перейдет на роль рифлера."
  },
  {
    id: 6,
    title: "BLAST Premier анонсировала турниры на 2026 год",
    thumbnail: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=500&auto=format&fit=crop",
    date: "2025-04-01",
    category: "Турниры",
    excerpt: "Организатор BLAST представил календарь турниров серии BLAST Premier на 2026 год, включая новые региональные квалификации.",
    content: "Организатор BLAST представил календарь турниров серии BLAST Premier на 2026 год. В следующем сезоне пройдет шесть основных турниров серии, включая Spring и Fall Groups, Spring и Fall Finals, а также World Final в конце года.\n\nВажным нововведением станет расширение региональных квалификаций, которые теперь будут проводиться в шести регионах: Европа, СНГ, Северная Америка, Южная Америка, Азия и Океания. Это позволит большему количеству команд из разных частей мира принять участие в престижной серии турниров."
  }
];

const NewsCard = ({ news, expanded = false }: { news: typeof newsData[0], expanded?: boolean }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className={`relative ${expanded ? 'aspect-[3/1] md:aspect-[5/1]' : 'aspect-square md:aspect-video'} overflow-hidden`}>
        <img 
          src={news.thumbnail} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-primary/90 hover:bg-primary text-white">{news.category}</Badge>
      </div>
      
      <CardHeader className={expanded ? "pb-2" : "pb-2 px-4 pt-4"}>
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {new Date(news.date).toLocaleDateString("ru-RU", { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })}
        </div>
        <CardTitle className={`mt-1 ${expanded ? 'text-2xl' : 'text-lg'} line-clamp-2`}>
          {news.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className={expanded ? "pb-4" : "px-4 py-2"}>
        <p className={`text-muted-foreground ${expanded ? '' : 'line-clamp-2'} text-sm`}>
          {news.excerpt}
        </p>
        
        {expanded && (
          <div className="mt-4 space-y-4">
            {news.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </CardContent>
      
      {!expanded && (
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="ghost" className="text-primary pl-0 hover:pl-2 transition-all">
            Читать полностью <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Получаем уникальные категории
  const categories = ["all", ...new Set(newsData.map(news => news.category))];
  
  // Фильтруем новости по поисковому запросу и категории
  const filteredNews = newsData.filter(news => {
    const matchesSearch = 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || news.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Новости CS2
            </h1>
            
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск новостей..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs value={activeCategory} className="mb-6">
            <TabsList className="mb-4 overflow-x-auto flex-nowrap w-full lg:w-auto">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="min-w-20"
                >
                  {category === "all" ? "Все" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {filteredNews.length > 0 ? (
            <>
              {/* Основная новость */}
              <div className="mb-8">
                <NewsCard news={filteredNews[0]} expanded={true} />
              </div>
              
              <Separator className="my-8" />
              
              {/* Сетка новостей */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.slice(1).map(news => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium">Новости не найдены</h3>
              <p className="text-muted-foreground mt-2">
                По вашему запросу не найдено новостей. Попробуйте изменить параметры поиска.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default News;
