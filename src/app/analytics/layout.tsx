import React from 'react';
import "../globals.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/10">
      <header className="border-b p-4">
        <h1 className="text-2xl font-bold">Analytics</h1>
      </header>
      <main className="p-6">{children}</main>      
    </div>
  );
}
