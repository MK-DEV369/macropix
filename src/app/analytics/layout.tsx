import "../globals.css";

export const metadata = {
  title: "Analytics Page",
  description: "View analytics and trends of scanned data.",
};

export default function AnalyticsLayout({
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
