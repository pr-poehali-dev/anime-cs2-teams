
interface TeamFormProps {
  results: Array<"win" | "loss" | "draw">;
}

const TeamForm = ({ results }: TeamFormProps) => {
  return (
    <div className="flex justify-center space-x-1">
      {results.map((result, index) => (
        <span
          key={index}
          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold
            ${result === 'win' ? 'bg-green-500 text-white' : 
              result === 'loss' ? 'bg-red-500 text-white' : 
              'bg-amber-500 text-white'}`}
        >
          {result === 'win' ? 'W' : result === 'loss' ? 'L' : 'D'}
        </span>
      ))}
    </div>
  );
};

export default TeamForm;
