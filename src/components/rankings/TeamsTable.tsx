
import { Card } from "@/components/ui/card";
import { TeamRanking } from "@/data/rankingsData";
import PositionChange from "./PositionChange";
import TeamForm from "./TeamForm";

interface TeamsTableProps {
  teams: TeamRanking[];
}

const TeamsTable = ({ teams }: TeamsTableProps) => {
  return (
    <Card className="bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden animate-fade-in">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Команда</th>
              <th className="p-4 text-center">Страна</th>
              <th className="p-4 text-center">Очки</th>
              <th className="p-4 text-center">+/-</th>
              <th className="p-4 text-center">Форма</th>
            </tr>
          </thead>
          <tbody>
            {teams.length > 0 ? (
              teams.map((team) => (
                <tr 
                  key={team.name} 
                  className="border-b border-border/50 hover:bg-card/90 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className="font-bold">{team.rank}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-card/80 p-1 rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={team.logo} alt={team.name} className="w-8 h-8 rounded-full" />
                      </div>
                      <span className="font-semibold">{team.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">{team.country}</td>
                  <td className="p-4 text-center font-mono font-semibold">{team.points}</td>
                  <td className="p-4 text-center">
                    <PositionChange current={team.rank} previous={team.previousRank} />
                  </td>
                  <td className="p-4">
                    <TeamForm results={team.form} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-muted-foreground">
                  Ничего не найдено...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TeamsTable;
