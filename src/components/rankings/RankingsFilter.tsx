
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RankingsFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  timeRange: string;
  setTimeRange: (value: string) => void;
}

const RankingsFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  timeRange, 
  setTimeRange 
}: RankingsFilterProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10 bg-card/50 border-primary/20 focus:border-primary"
            placeholder="Поиск по командам, игрокам, странам..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="bg-card/50 border-primary/20">
            <SelectValue placeholder="Выберите период" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Последний месяц</SelectItem>
            <SelectItem value="3m">Последние 3 месяца</SelectItem>
            <SelectItem value="6m">Последние 6 месяцев</SelectItem>
            <SelectItem value="1y">Последний год</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RankingsFilter;
