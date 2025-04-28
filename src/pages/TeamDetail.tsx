import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { teamsData } from "@/data/teamsData";
import { ArrowLeft, Trophy, Users, MapPin, Calendar, Award } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import FooterComponent from "@/components/FooterComponent";

const TeamDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setLoading(true);
    
    setTimeout(() => {
      const foundTeam = teamsData.find(t => t.id === Number(id));
      setTeam(foundTeam);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[70vh]">
          <div className="animate-pulse text-primary">Загрузка информации о команде...</div>
        </div>
      </div>
    );
  }

  if (!team) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[70vh]">
          <h2 className="text-2xl font-bold mb-4">Команда не найдена</h2>
          <p className="text-muted-foreground mb-6">
            К сожалению, информация о запрашиваемой команде отсутствует
          </p>
          <Link to="/teams">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Вернуться к списку команд
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Преобразуем achievements в массив, если это строка
  const achievementsArray = typeof team.achievements === 'string' 
    ? team.achievements.split(', ') 
    : Array.isArray(team.achievements) ? team.achievements : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Верхняя панель навигации */}
        <div className="bg-muted py-3">
          <div className="container mx-auto px-4">
            <Link to="/teams" className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-3.5 w-3.5 mr-1" />
              Вернуться к списку команд
            </Link>
          </div>
        </div>
        
        {/* Основная информация о команде */}
        <section className="py-8 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Логотип команды */}
              <div className="flex-shrink-0 rounded-lg overflow-hidden bg-card p-6 animate-fade-in">
                <img
                  src={team.logo || "https://via.placeholder.com/200"}
                  alt={`Логотип ${team.name}`}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              
              {/* Информация о команде */}
              <div className="flex-1 animate-fade-in">
                <div className="flex items-center gap-3 mb-2">
                  {team.ranking && (
                    <Badge variant="secondary" className="text-xs font-semibold">
                      #{team.ranking} в мире
                    </Badge>
                  )}
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">{team.country}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{team.name}</h1>
                
                <p className="text-muted-foreground mb-6">
                  Профессиональная CS2 команда, известная своими выступлениями на международной сцене. В текущем составе команда показывает сильные результаты и регулярно входит в топ команд мирового рейтинга.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button className="gap-2" variant="default">
                    <Trophy className="h-4 w-4" />
                    Достижения
                  </Button>
                  <Button className="gap-2" variant="outline">
                    <Calendar className="h-4 w-4" />
                    Матчи
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Текущий состав */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Текущий состав
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(team.players) && team.players.map((player: any, index: number) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        {typeof player === 'object' && player.photo ? (
                          <img
                            src={player.photo || "https://via.placeholder.com/100"}
                            alt={typeof player === 'object' ? player.name : player}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <Users className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div>
                        {typeof player === 'object' ? (
                          <>
                            <h3 className="font-semibold">{player.nickname}</h3>
                            <p className="text-xs text-muted-foreground">{player.name}</p>
                            {player.country && (
                              <p className="text-xs flex items-center mt-1">
                                <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                                {player.country}
                              </p>
                            )}
                          </>
                        ) : (
                          <h3 className="font-semibold">{player}</h3>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Достижения */}
        {achievementsArray.length > 0 && (
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-primary" />
                Достижения
              </h2>
              
              <div className="space-y-3">
                {achievementsArray.map((achievement: string, index: number) => (
                  <div key={index} className="bg-card p-4 rounded-lg flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">{achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Статистика и дополнительная информация */}
        <section className="py-8 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Статистика</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Мировой рейтинг</p>
                  <p className="text-3xl font-bold text-primary">#{team.ranking || 'N/A'}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Побед в 2025</p>
                  <p className="text-3xl font-bold text-primary">34</p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Поражений в 2025</p>
                  <p className="text-3xl font-bold text-primary">12</p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Выигранных турниров</p>
                  <p className="text-3xl font-bold text-primary">{achievementsArray.length || 0}</p>
                </CardContent>
              </Card>
            </div>
            
            <Separator className="my-6" />
            
            <div className="text-center text-muted-foreground text-sm">
              <p>Данные обновлены: Апрель 2025</p>
            </div>
          </div>
        </section>
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default TeamDetail;
