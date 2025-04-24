
interface TeamFormProps {
  results: string[];
}

const TeamForm = ({ results }: TeamFormProps) => {
  return (
    <div className="flex gap-1">
      {results.map((result, index) => {
        let bgColor = "bg-gray-400";
        if (result === "W") bgColor = "bg-green-500";
        if (result === "L") bgColor = "bg-red-500";
        if (result === "D") bgColor = "bg-yellow-500";
        
        return (
          <div 
            key={index} 
            className={`${bgColor} w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white`}
            title={result === "W" ? "Победа" : result === "L" ? "Поражение" : "Ничья"}
          >
            {result}
          </div>
        );
      })}
    </div>
  );
};

export default TeamForm;
