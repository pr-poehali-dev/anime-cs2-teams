import { Link } from "react-router-dom";
import { Trophy, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const FooterComponent = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-md p-1">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">
                CS<span className="text-primary">Stats</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Актуальная информация о командах, турнирах и игроках профессиональной сцены CS2.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-primary w-8 h-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary w-8 h-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary w-8 h-8">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Главная</FooterLink>
              <FooterLink to="/teams">Команды</FooterLink>
              <FooterLink to="/tournaments">Турниры</FooterLink>
              <FooterLink to="/rankings">Рейтинги</FooterLink>
              <FooterLink to="/news">Новости</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <FooterExternalLink href="https://www.hltv.org/">HLTV</FooterExternalLink>
              <FooterExternalLink href="https://www.faceit.com/">FACEIT</FooterExternalLink>
              <FooterExternalLink href="https://www.esl-one.com/">ESL</FooterExternalLink>
              <FooterExternalLink href="https://play.esea.net/">ESEA</FooterExternalLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">О проекте</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Проект создан в образовательных целях, чтобы продемонстрировать разработку интерфейса с использованием 
              современных веб-технологий.
            </p>
            <p className="text-sm font-medium">
              Автор: <span className="font-bold">Попов Максим</span>
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CS Stats. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
              Условия использования
            </Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link 
      to={to} 
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  </li>
);

interface FooterExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterExternalLink = ({ href, children }: FooterExternalLinkProps) => (
  <li>
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
    >
      {children}
      <ExternalLink className="ml-1 h-3 w-3" />
    </a>
  </li>
);

export default FooterComponent;
