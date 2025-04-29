import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Trophy, 
  BarChart3, 
  Newspaper, 
  Menu, 
  X, 
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import useMobile from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const { isMobile } = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Проверка активной ссылки
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Эффект для отслеживания скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    { path: '/', label: 'Главная', icon: <Home className="h-4 w-4" /> },
    { path: '/teams', label: 'Команды', icon: <Users className="h-4 w-4" /> },
    { path: '/players', label: 'Игроки', icon: <Target className="h-4 w-4" /> },
    { path: '/tournaments', label: 'Турниры', icon: <Trophy className="h-4 w-4" /> },
    { path: '/rankings', label: 'Рейтинги', icon: <BarChart3 className="h-4 w-4" /> },
    { path: '/news', label: 'Новости', icon: <Newspaper className="h-4 w-4" /> },
  ];

  const NavLink = ({ path, label, icon, mobile = false }: { path: string; label: string; icon: React.ReactNode; mobile?: boolean }) => {
    return (
      <Link to={path} onClick={() => mobile && setIsSheetOpen(false)}>
        <Button
          variant={isActive(path) ? 'default' : 'ghost'}
          size={mobile ? 'default' : 'sm'}
          className={cn(
            'gap-2',
            mobile && 'w-full justify-start py-6',
            isActive(path) && !mobile && 'bg-primary/10 text-primary hover:bg-primary/20',
          )}
        >
          {icon}
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <header 
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-2 font-heading">
            <img src="/favicon.svg" alt="CS2 Teams" className="h-8 w-8" />
            <span className="font-bold text-xl hidden sm:inline-block">CS2 Teams</span>
          </Link>

          {/* Навигация для десктопа */}
          {!isMobile && (
            <nav className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <NavLink key={item.path} {...item} />
              ))}
            </nav>
          )}

          {/* Мобильное меню */}
          {isMobile && (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="px-4 py-5 flex items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                      <img src="/favicon.svg" alt="CS2 Teams" className="h-8 w-8" />
                      <span className="font-bold text-xl">CS2 Teams</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="px-2">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  
                  <nav className="flex-1 p-4 space-y-2">
                    {navigationItems.map((item) => (
                      <NavLink key={item.path} {...item} mobile />
                    ))}
                  </nav>
                  
                  <div className="border-t p-4">
                    <p className="text-xs text-muted-foreground text-center">
                      CS2 Teams © 2025
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
