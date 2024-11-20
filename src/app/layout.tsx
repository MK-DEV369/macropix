import Sidebar from "@/components/ui/sidebar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import MobileNav from "@/components/ui/mobile-nav";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="flex flex-col h-full">
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1  p-4 overflow-hidden">
              <SignedOut>
                <div className="flex justify-center items-center h-full">
                  <SignInButton mode="modal" />
                </div>
              </SignedOut>
              <SignedIn>
                <MobileNav />
                {children}
                <footer className="border-t flex sticky top-0 p-4 justify-center text-center">
                  © 2024 Team Macropix. All rights reserved.
                </footer>
              </SignedIn>
            </div>
          </div>
          
        </body>
      </html>
    </ClerkProvider>
  );
}

