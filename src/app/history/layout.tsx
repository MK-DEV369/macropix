import Sidebar from "@/components/ui/sidebar";
import "../globals.css";

export const metadata = {
  title: "History Page",
  description: "View the history of analyzed nutrient data.",
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {children}
      </div>
    </div>
  );
}
