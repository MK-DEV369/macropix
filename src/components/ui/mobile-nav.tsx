import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import {
  Menu,
  SquareActivity,
  SquareStack,
  DiamondPlus,
  ChartNetwork,
  UserSquare2,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col gap-4 px-4 pb-4">
        <div className="flex items-center gap-2 border-b pb-3">
          <SquareActivity className="h-6 w-6" />
          <Link href="/" className="text-lg font-semibold">
            Macropix
          </Link>
        </div>

        <nav className="flex flex-col gap-2 text-base font-medium">
          <Link
            href="/history"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <SquareStack className="h-5 w-5" />
            History
          </Link>
          <Link
            href="/new-data"
            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <DiamondPlus className="h-5 w-5" />
            New Data
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <ChartNetwork className="h-5 w-5" />
            Analytics
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <UserSquare2 className="h-5 w-5" />
            About
          </Link>
        </nav>

        <div className="flex-col  items-center justify-between border-t px-4 py-7 lg:px-6">
          <UserButton />
          <ModeToggle />          
        </div>
      </SheetContent>
    </Sheet>
  );
}
