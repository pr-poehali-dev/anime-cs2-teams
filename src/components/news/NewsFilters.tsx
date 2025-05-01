import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface NewsFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}

/**
 * Компонент фильтров для новостей
 */
const NewsFilters = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categories,
}: NewsFiltersProps) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          Новости CS2
        </h1>
        
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск новостей..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs value={activeCategory} className="mb-6">
        <TabsList className="mb-4 overflow-x-auto flex-nowrap w-full lg:w-auto">
          {categories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              onClick={() => setActiveCategory(category)}
              className="min-w-20"
            >
              {category === "all" ? "Все" : category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
};

export default NewsFilters;
