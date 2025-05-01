import Header from "@/components/Header";

const TeamLoading = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[70vh]">
        <div className="animate-pulse text-primary">Загрузка информации о команде...</div>
      </div>
    </div>
  );
};

export default TeamLoading;