import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { teamsData } from "@/data/teamsData";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import TeamHeader from "@/components/team-detail/TeamHeader";
import TeamRoster from "@/components/team-detail/TeamRoster";
import TeamAchievements from "@/components/team-detail/TeamAchievements";
import TeamStats from "@/components/team-detail/TeamStats";
import TeamNavBar from "@/components/team-detail/TeamNavBar";
import TeamLoading from "@/components/team-detail/TeamLoading";
import TeamNotFound from "@/components/team-detail/TeamNotFound";

const TeamDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setLoading(true);
    
    setTimeout(() => {
      const foundTeam = teamsData.find(t => t.id === Number(id));
      setTeam(foundTeam);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <TeamLoading />;
  }

  if (!team) {
    return <TeamNotFound />;
  }

  // Преобразуем achievements в массив, если это строка
  const achievementsArray = typeof team.achievements === 'string' 
    ? team.achievements.split(', ') 
    : Array.isArray(team.achievements) ? team.achievements : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <TeamNavBar />
        <TeamHeader team={team} />
        <TeamRoster players={team.players} />
        <TeamAchievements achievements={achievementsArray} />
        <TeamStats 
          ranking={team.ranking} 
          achievementsCount={achievementsArray.length} 
        />
      </main>
      
      <FooterComponent />
    </div>
  );
};

export default TeamDetail;