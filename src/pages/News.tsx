import { useState } from "react";
import { Search, Calendar, Tag, Clock, ChevronRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Типы данных
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  coverImage: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}

// Моковые данные для новостей
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Natus Vincere триумфально побеждают на IEM Katowice 2024",
    excerpt: "Украинская команда демонстрирует невероятную форму, доминируя над соперниками в финальной стадии турнира.",
    category: "Турниры",
    tags: ["NAVI", "IEM Katowice", "s1mple"],
    coverImage: "/placeholder.svg",
    publishDate: "24 февраля 2024",
    readTime: "4 мин",
    author: {
      name: "Мику Хацунэ",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: 2,
    title: "Официально: Valve анонсирует следующий мажор в Токио",
    excerpt: "CS2 впервые получит мажор-турнир в Японии, запланированный на конец года с призовым фондом $2,000,000.",
    category: "Анонсы",
    tags: ["Valve", "Major", "Токио"],
    coverImage: "/placeholder.svg",
    publishDate: "15 февраля 2024",
    readTime: "3 мин",
    author: {
      name: "Рин Тосака",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 3,
    title: "Интервью: ZywOo рассказывает о переходе на CS2",
    excerpt: "Французская звезда делится своими впечатлениями от новой версии игры и планами Vitality на предстоящий сезон.",
    category: "Интервью",
    tags: ["ZywOo", "Vitality", "CS2"],
    coverImage: "/placeholder.svg",
    publishDate: "10 февраля 2024",
    readTime: "6 мин",
    author: {
      name: "Асуна Юки",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 4,
    title: "Слухи: FaZe Clan рассматривает изменения в составе",
    excerpt: "По информации инсайдеров, американская организация ведет переговоры с несколькими игроками для усиления состава.",
    category: "Трансферы",
    tags: ["FaZe", "Трансферы", "Слухи"],
    coverImage: "/placeholder.svg",
    publishDate: "5 февраля 2024",
    readTime: "3 мин",
    author: {
      name: "Лелуш Ламперуж",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 5,
    title: "Статистика: самые популярные карты в CS2 за первый квартал",
    excerpt: "Подробный анализ пиков и банов на профессиональных турнирах показывает смещение мета от CS:GO.",
    category: "Аналитика",
    tags: ["Карты", "Статистика", "Мета"],
    coverImage: "/placeholder.svg",
    publishDate: "1 февраля 2024",
    readTime: "5 мин",
    author: {
      name: "Сейбер",
      avatar: "/placeholder.svg"
    }
  },
  {
    id: 6,
    title: "Обновление CS2: Valve вносит изменения в механику движения",
    excerpt: "Последний патч значительно меняет ощущения от игры, профессиональные игроки делятся первыми впечатлениями.",
    category: "Обновления",
    tags: ["Valve", "Патч", "Механика"],
    coverImage: "/placeholder.svg",
    publishDate: "28 января 2024",
    readTime: "4 мин",
    author: {
      name: "Киритто",
      avatar: "/placeholder.svg"
    }
  }
];

// Категории для фильтрации
const categories = [
  "Все", "Турниры", "Анонсы", "Интервью", "Трансферы", "Аналитика", "Обновления"
];

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  // Фильтрация новостей по поиску и категории
  const filteredNews = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "Все" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Получение featured новости
  const featuredNews = newsData.find(item => item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Заголовок страницы */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Новости CS2
              </h1>
              <p className="mt-2 text-muted-foreground">
                Свежие новости, интервью и аналитика из мира Counter-Strike 2
              </p>
            </div>
            
            {/* Поиск */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск новостей..."
                  className="pl-10 w-full md:w-[300px] focus-visible:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Главная новость (featured) */}
          {featuredNews && (
            <Card className="overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative overflow-hidden h-[250px] md:h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay" />
                  <img 
                    src={featuredNews.coverImage} 
                    alt={featuredNews.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/80 hover:bg-primary">
                    Главная новость
                  </Badge>
                </div>
                
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      {featuredNews.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredNews.title}</h2>
                    <p className="text-muted-foreground">{featuredNews.excerpt}</p>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8 border-2 border-primary/20">
                          <img src={featuredNews.author.avatar} alt={featuredNews.author.name} />
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{featuredNews.author.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {featuredNews.publishDate}
                            <span className="mx-1">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            {featuredNews.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="group">
                        Читать
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
          
          {/* Категории новостей */}
          <Tabs defaultValue="Все" className="w-full">
            <TabsList className="w-full flex overflow-x-auto justify-start mb-6 bg-background/50 p-1 border border-border rounded-lg">
              {categories.map(category => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="flex-shrink-0 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              {/* Список новостей */}
              {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.map(news => (
                    <Card key={news.id} className="overflow-hidden border border-border/60 bg-background/30 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={news.coverImage} 
                          alt={news.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <Badge 
                          variant="secondary" 
                          className="absolute top-3 left-3 bg-black/70 text-white hover:bg-black/80"
                        >
                          {news.category}
                        </Badge>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                          {news.title}
                        </h3>
                      </CardHeader>
                      
                      <CardContent className="pb-2">
                        <p className="text-muted-foreground text-sm line-clamp-2">{news.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {news.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs bg-primary/5">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="pt-2">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <img src={news.author.avatar} alt={news.author.name} />
                            </Avatar>
                            <div className="text-xs">
                              <span className="font-medium">{news.author.name}</span>
                              <div className="text-muted-foreground flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {news.publishDate}
                              </div>
                            </div>
                          </div>
                          
                          <Button size="sm" variant="ghost" className="rounded-full h-8 w-8 p-0">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 border border-dashed rounded-lg">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-muted-foreground/60" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Новости не найдены</h3>
                  <p className="text-muted-foreground">
                    По вашему запросу "{searchQuery}" в категории "{activeCategory}" ничего не найдено
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("Все");
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Навигация по страницам */}
          {filteredNews.length > 6 && (
            <div className="flex justify-center mt-10">
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="default" size="sm" className="bg-primary">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default News;
