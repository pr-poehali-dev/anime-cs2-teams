
const RankingsHeader = () => {
  return (
    <div className="flex flex-col space-y-4 mb-6">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-enter">
        Рейтинги киберспортсменов и команд CS2
      </h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Официальный рейтинг команд и игроков CS2, основанный на результатах турниров, 
        индивидуальной статистике и показателях производительности.
      </p>
    </div>
  );
};

export default RankingsHeader;
