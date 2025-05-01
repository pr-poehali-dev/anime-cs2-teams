import { Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Player {
  id?: number;
  name?: string;
  nickname?: string;
  country?: string;
  photo?: string;
}

interface TeamRosterProps {
  players: Array<string | Player>;
}

const TeamRoster = ({ players }: TeamRosterProps) => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          Текущий состав
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(players) && players.map((player, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    {typeof player === 'object' && player.photo ? (
                      <img
                        src={player.photo || "https://via.placeholder.com/100"}
                        alt={typeof player === 'object' ? player.name : player}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <Users className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  
                  <div>
                    {typeof player === 'object' ? (
                      <>
                        <h3 className="font-semibold">{player.nickname}</h3>
                        <p className="text-xs text-muted-foreground">{player.name}</p>
                        {player.country && (
                          <p className="text-xs flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                            {player.country}
                          </p>
                        )}
                      </>
                    ) : (
                      <h3 className="font-semibold">{player}</h3>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRoster;