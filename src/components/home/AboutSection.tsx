import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section className="py-14 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">О нашем проекте</h2>
          <p className="text-muted-foreground mb-8">
            CS Stats — это информационный ресурс о киберспортивной дисциплине CS2.
            Мы предоставляем актуальную информацию о командах, игроках и турнирах.
          </p>
          <div className="bg-card border rounded-lg p-6 mb-6 shadow-sm">
            <p className="text-sm font-medium mb-2">
              Работу выполнил: <span className="font-bold">Попов Максим</span>
            </p>
            <p className="text-xs text-muted-foreground">© 2025 CS Stats - Все права защищены</p>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>
              <Trophy className="mr-2 h-4 w-4" />
              Рейтинг команд
            </Button>
            <Button variant="outline">
              Последние матчи
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
