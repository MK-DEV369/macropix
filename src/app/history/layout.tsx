import React from "react";
import "../globals.css";
import { Input } from "@/components/ui/input";

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/10">
      <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
        <h1 className="text-2xl font-bold">History</h1>
        <Input
          placeholder="Search for Data"
          className="w-1/3"
          aria-label="Search for historical data"
        />
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
