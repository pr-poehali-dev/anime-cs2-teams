import { Trophy, Award } from "lucide-react";

interface TeamAchievementsProps {
  achievements: string[];
}

const TeamAchievements = ({ achievements }: TeamAchievementsProps) => {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-primary" />
          Достижения
        </h2>
        
        <div className="space-y-3">
          {achievements.map((achievement: string, index: number) => (
            <div key={index} className="bg-card p-4 rounded-lg flex items-center gap-3">
              <Award className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium">{achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAchievements;