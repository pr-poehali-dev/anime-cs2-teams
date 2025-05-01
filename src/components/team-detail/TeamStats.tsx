import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

interface TeamStatsProps {
  ranking?: number;
  achievementsCount: number;
}

const TeamStats = ({ ranking, achievementsCount }: TeamStatsProps) => {
  return (
    <section className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Статистика</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-muted/30">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Мировой рейтинг</p>
              <p className="text-3xl font-bold text-primary">#{ranking || 'N/A'}</p>
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
              <p className="text-3xl font-bold text-primary">{achievementsCount || 0}</p>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-muted-foreground text-sm">
          <p>Данные обновлены: Апрель 2025</p>
        </div>
      </div>
    </section>
  );
};

export default TeamStats;