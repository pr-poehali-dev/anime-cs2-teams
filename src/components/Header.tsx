import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Menu, X, Star, Zap, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary rounded-md p-1">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              CS<span className="text-primary">Stats</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/teams" className="text-foreground hover:text-primary transition-colors">
              Команды
            </Link>
            <Link to="/tournaments" className="text-foreground hover:text-primary transition-colors">
              Турниры
            </Link>
            <Link to="/rankings" className="text-foreground hover:text-primary transition-colors">
              Рейтинги
            </Link>
            <Link to="/news" className="text-foreground hover:text-primary transition-colors">
              Новости
            </Link>
          </nav>

          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t animate-accordion-down">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link to="/" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-muted transition-colors">
              <Star className="w-5 h-5 text-primary" />
              <span>Главная</span>
            </Link>
            <Link to="/teams" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-muted transition-colors">
              <Users className="w-5 h-5 text-primary" />
              <span>Команды</span>
            </Link>
            <Link to="/tournaments" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-muted transition-colors">
              <Trophy className="w-5 h-5 text-primary" />
              <span>Турниры</span>
            </Link>
            <Link to="/rankings" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-muted transition-colors">
              <Zap className="w-5 h-5 text-primary" />
              <span>Рейтинги</span>
            </Link>
            <Link to="/news" className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-muted transition-colors">
              <Star className="w-5 h-5 text-primary" />
              <span>Новости</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
