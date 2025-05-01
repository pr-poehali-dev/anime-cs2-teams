import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlayersTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const PlayersTabs = ({ activeTab, onTabChange }: PlayersTabsProps) => {
  return (
    <Tabs defaultValue={activeTab} className="mb-8" value={activeTab} onValueChange={onTabChange}>
      <TabsList>
        <TabsTrigger value="all">Все игроки</TabsTrigger>
        <TabsTrigger value="top">Топ игроки</TabsTrigger>
        <TabsTrigger value="rising">Восходящие звезды</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PlayersTabs;