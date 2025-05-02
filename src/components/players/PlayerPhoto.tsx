interface PlayerPhotoProps {
  photo: string;
  nickname: string;
  team?: string;
  teamLogo?: string;
  children?: React.ReactNode;
}

/**
 * Компонент для отображения фото игрока
 */
const PlayerPhoto = ({ photo, nickname, team, teamLogo, children }: PlayerPhotoProps) => {
  return (
    <div className="relative">
      <div className="aspect-[3/2] overflow-hidden bg-gradient-to-b from-muted to-card">
        <img 
          src={photo} 
          alt={nickname} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
        {children}
        
        {team && teamLogo && (
          <div className="bg-black/50 backdrop-blur-sm p-1 rounded-full">
            <img 
              src={teamLogo} 
              alt={team} 
              className="w-8 h-8 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerPhoto;