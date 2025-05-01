import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TeamHeaderProps {
  team: {
    name: string;
    logo?: string;
    ranking?: number;
    country: string;
  };
}

const TeamHeader = ({ team }: TeamHeaderProps) => {
  return (
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
  );
};

export default TeamHeader;