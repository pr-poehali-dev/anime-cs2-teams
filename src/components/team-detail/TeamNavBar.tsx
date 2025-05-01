import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TeamNavBar = () => {
  return (
    <div className="bg-muted py-3">
      <div className="container mx-auto px-4">
        <Link to="/teams" className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-3.5 w-3.5 mr-1" />
          Вернуться к списку команд
        </Link>
      </div>
    </div>
  );
};

export default TeamNavBar;