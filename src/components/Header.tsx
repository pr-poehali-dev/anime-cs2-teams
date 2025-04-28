import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X, Users, BarChart2, Newspaper, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Закрыть меню при переходе на новую страницу
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-200",
        isScrolled ? "bg-background/95 shadow-sm border-b" : "bg-background/70"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary rounded-md p-1.5 transition-transform group-hover:scale-110">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl tracking-tight">
              CS<span className="text-primary font-extrabold">Stats</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" active={isActive("/")}>
              <Home className="w-4 h-4 mr-1.5" />
              Главная
            </NavLink>
            <NavLink to="/teams" active={isActive("/teams")}>
              <Users className="w-4 h-4 mr-1.5" />
              Команды
            </NavLink>
            <NavLink to="/tournaments" active={isActive("/tournaments")}>
              <Trophy className="w-4 h-4 mr-1.5" />
              Турниры
            </NavLink>
            <NavLink to="/rankings" active={isActive("/rankings")}>
              <BarChart2 className="w-4 h-4 mr-1.5" />
              Рейтинги
            </NavLink>
            <NavLink to="/news" active={isActive("/news")}>
              <Newspaper className="w-4 h-4 mr-1.5" />
              Новости
            </NavLink>
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
        <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <MobileNavLink to="/" icon={<Home className="w-5 h-5 text-primary" />} active={isActive("/")}>
              Главная
            </MobileNavLink>
            <MobileNavLink to="/teams" icon={<Users className="w-5 h-5 text-primary" />} active={isActive("/teams")}>
              Команды
            </MobileNavLink>
            <MobileNavLink to="/tournaments" icon={<Trophy className="w-5 h-5 text-primary" />} active={isActive("/tournaments")}>
              Турниры
            </MobileNavLink>
            <MobileNavLink to="/rankings" icon={<BarChart2 className="w-5 h-5 text-primary" />} active={isActive("/rankings")}>
              Рейтинги
            </MobileNavLink>
            <MobileNavLink to="/news" icon={<Newspaper className="w-5 h-5 text-primary" />} active={isActive("/news")}>
              Новости
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center py-2 px-3 rounded-md font-medium text-sm transition-colors",
        active 
          ? "bg-primary/10 text-primary" 
          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
      )}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  active: boolean;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, icon, active }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center space-x-3 py-3 px-4 rounded-md transition-all",
        active 
          ? "bg-primary/10 text-primary font-medium" 
          : "text-foreground/80 hover:bg-muted"
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};

export default Header;
