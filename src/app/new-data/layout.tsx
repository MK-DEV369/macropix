import Sidebar from "@/components/ui/sidebar";
import "../globals.css";

export const metadata = {
  title: "New Data",
  description: "Capture or upload images for food analysis.",
};

export default function NewDataLayout({
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
