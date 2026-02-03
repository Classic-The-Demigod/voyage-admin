import { Button } from "./ui/button";

interface DashboardTextHeaderProps {
  title?: string;
  description?: string;
  offer?: boolean;
  onAction?: () => void; 
}

export function DashboardTextHeader({
  title = "Admin Dashboard",
  description = "Comprehensive overview of your platform performance and management",
  offer = false,
  onAction
}: DashboardTextHeaderProps) {
  return (
    <div className="bg-secondary p-6 rounded-xl border border-gray-dark flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-white">{title}</h1>
        <p className="text-gray-dark text-sm md:text-base">{description}</p>
      </div>

      {offer && (
        <Button 
          onClick={onAction}
          className="bg-[#CB9E4B] hover:bg-[#b38a3d]  font-bold px-6 py-2 rounded-lg transition-colors"
        >
          + New Offers
        </Button>
      )}
    </div>
  );
}