
interface PositionChangeProps {
  change: number;
  showFullText?: boolean;
}

const PositionChange = ({ change, showFullText = false }: PositionChangeProps) => {
  if (change > 0) {
    return (
      <span className="text-green-500">
        {showFullText ? `+${change}` : <span>▲{change}</span>}
      </span>
    );
  }
  
  if (change < 0) {
    return (
      <span className="text-red-500">
        {showFullText ? `${change}` : <span>▼{Math.abs(change)}</span>}
      </span>
    );
  }
  
  return (
    <span className="text-muted-foreground">
      {showFullText ? '0' : '■'}
    </span>
  );
};

export default PositionChange;
