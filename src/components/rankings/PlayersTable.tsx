
import { Card } from "@/components/ui/card";
import { PlayerRanking } from "@/data/rankingsData";
import PositionChange from "./PositionChange";

interface PlayersTableProps {
  players: PlayerRanking[];
}

const PlayersTable = ({ players }: PlayersTableProps) => {
  return (
    <Card className="bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden animate-fade-in">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Игрок</th>
              <th className="p-4 text-center">Страна</th>
              <th className="p-4 text-center">Команда</th>
              <th className="p-4 text-center">Рейтинг</th>
              <th className="p-4 text-center">+/-</th>
            </tr>
          </thead>
          <tbody>
            {players.length > 0 ? (
              players.map((player) => (
                <tr 
                  key={player.nickname} 
                  className="border-b border-border/50 hover:bg-card/90 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className="font-bold">{player.rank}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-card/80 p-1 rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={player.photo} alt={player.nickname} className="w-8 h-8 rounded-full" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-primary">{player.nickname}</span>
                        <span className="text-xs text-muted-foreground">{player.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">{player.country}</td>
                  <td className="p-4 text-center">{player.team}</td>
                  <td className="p-4 text-center font-mono font-bold">{player.rating.toFixed(2)}</td>
                  <td className="p-4 text-center">
                    <PositionChange current={player.rank} previous={player.previousRank} />
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

export default PlayersTable;
