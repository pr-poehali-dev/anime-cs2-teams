import { Link } from "react-router-dom";
import { Search, Users, Trophy, BarChart2, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const HeroSection = ({ searchTerm, setSearchTerm }: HeroSectionProps) => {
  return (
    <section className="relative bg-hero-pattern py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Статистика и новости
            <span className="text-primary block"> мира CS2</span>
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
            Самая актуальная информация о командах, турнирах и игроках профессиональной сцены CS2.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Поиск команд, игроков, турниров..."
              className="pl-10 pr-4 py-2 w-full shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <CategoryButton icon={<Users className="w-4 h-4 mr-2" />} label="Команды" to="/teams" />
            <CategoryButton icon={<Trophy className="w-4 h-4 mr-2" />} label="Турниры" to="/tournaments" />
            <CategoryButton icon={<BarChart2 className="w-4 h-4 mr-2" />} label="Рейтинги" to="/rankings" />
            <CategoryButton icon={<Newspaper className="w-4 h-4 mr-2" />} label="Новости" to="/news" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Кнопка категории на главной странице
const CategoryButton = ({ icon, label, to }: { icon: React.ReactNode, label: string, to: string }) => (
  <Link to={to}>
    <Button variant="outline" className="bg-background hover:bg-background/90">
      {icon}
      {label}
    </Button>
  </Link>
);

export default HeroSection;
