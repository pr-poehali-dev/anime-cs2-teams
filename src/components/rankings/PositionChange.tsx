
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface PositionChangeProps {
  current: number;
  previous: number;
}

const PositionChange = ({ current, previous }: PositionChangeProps) => {
  const change = previous - current;
  
  if (change > 0) {
    return (
      <div className="flex items-center text-green-500 whitespace-nowrap">
        <ArrowUp className="w-4 h-4 mr-1" />
        <span>{change}</span>
      </div>
    );
  } else if (change < 0) {
    return (
      <div className="flex items-center text-red-500 whitespace-nowrap">
        <ArrowDown className="w-4 h-4 mr-1" />
        <span>{Math.abs(change)}</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center text-gray-400 whitespace-nowrap">
        <Minus className="w-4 h-4 mr-1" />
        <span>0</span>
      </div>
    );
  }
};

export default PositionChange;
