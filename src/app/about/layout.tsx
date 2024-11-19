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
        <h1 className="text-2xl font-bold">About Us</h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="mt-6 border-t p-4 text-center">
        © 2024 Team Macropix. All rights reserved.
      </footer>
    </div>
  );
}
