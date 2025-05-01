import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, SortAsc, SortDesc, Target } from "lucide-react";
import { roleOptions, sortOptions } from "@/data/playersData";

interface PlayersFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (role: string) => void;
  sortOption: string;
  onSortChange: (sort: string) => void;
  onReset: () => void;
  showResetButton: boolean;
  filteredCount: number;
  totalCount: number;
}

const PlayersFilters = ({
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  sortOption,
  onSortChange,
  onReset,
  showResetButton,
  filteredCount,
  totalCount
}: PlayersFiltersProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Поиск */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск игроков..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          
          {/* Роль */}
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedRole} onValueChange={onRoleChange}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите роль" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Сортировка */}
          <div className="flex items-center space-x-2">
            {sortOption.includes('-desc') ? (
              <SortDesc className="h-4 w-4 text-muted-foreground" />
            ) : (
              <SortAsc className="h-4 w-4 text-muted-foreground" />
            )}
            <Select value={sortOption} onValueChange={onSortChange}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {showResetButton && (
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Показано {filteredCount} из {totalCount} игроков
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onReset}
              className="flex items-center gap-1"
            >
              <Filter className="h-3.5 w-3.5" />
              Сбросить фильтры
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PlayersFilters;