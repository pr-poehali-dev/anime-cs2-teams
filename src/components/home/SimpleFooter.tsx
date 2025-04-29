import { Trophy } from "lucide-react";

const SimpleFooter = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Trophy className="w-5 h-5 text-primary mr-2" />
            <span className="font-bold">CS Stats © 2025</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Проект создан <span className="font-medium">Поповым Максимом</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
