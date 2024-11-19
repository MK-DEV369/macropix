import {
  UserSquare2,
  SquareActivity,
  SquareStack,
  DiamondPlus,
  ChartNetwork,

} from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <aside className="hidden w-60 border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SquareActivity className="h-6 w-6" />
            <span className="">Macropix</span>
          </Link>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            
            <Link
              href="/history"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <SquareStack className="h-4 w-4" />
              History
            </Link>
            <Link
              href="/new-data"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <DiamondPlus className="h-4 w-4" />
              New Data
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ChartNetwork className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <UserSquare2 className="h-4 w-4" />
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-between border-t px-4 py-3 lg:px-6">
          <UserButton />
          <ModeToggle />          
        </div>
      </div>
    </aside>
  );
}
