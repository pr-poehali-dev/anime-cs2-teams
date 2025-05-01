import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const TeamNotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-2xl font-bold mb-4">Команда не найдена</h2>
        <p className="text-muted-foreground mb-6">
          К сожалению, информация о запрашиваемой команде отсутствует
        </p>
        <Link to="/teams">
          <Button className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Вернуться к списку команд
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TeamNotFound;