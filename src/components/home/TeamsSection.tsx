import { Link } from "react-router-dom";
import { Trophy, ArrowRight } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import { Card } from "@/components/ui/card";

interface TeamsSectionProps {
  isLoading: boolean;
  teams: any[];
}

const TeamsSection = ({ isLoading, teams }: TeamsSectionProps) => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-primary" />
            Топ команды
          </h2>
          <Link to="/teams" className="text-primary hover:text-primary/80 flex items-center text-sm font-medium group">
            Все команды
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <SkeletonTeamCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map(team => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Скелетон для карточки команды
const SkeletonTeamCard = () => (
  <Card className="p-6 space-y-4">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 bg-muted-foreground/10 rounded-md animate-pulse"></div>
      <div className="space-y-2 flex-1">
        <div className="h-5 bg-muted-foreground/10 rounded w-1/2 animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded w-1/3 animate-pulse"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-muted-foreground/10 rounded w-1/4 animate-pulse"></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
        <div className="h-4 bg-muted-foreground/10 rounded animate-pulse"></div>
      </div>
    </div>
  </Card>
);

export default TeamsSection;
