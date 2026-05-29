import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function MenuButton({ icon: Icon, label, onClick }: MenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="flex flex-col items-center justify-center h-32 w-32 sm:h-36 sm:w-36 bg-white/90 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm rounded-2xl transition-all hover:scale-105"
    >
      <Icon className="h-12 w-12 sm:h-14 sm:w-14 mb-2 text-green-600" />
      <span className="text-xs sm:text-sm font-medium text-center">{label}</span>
    </Button>
  );
}
