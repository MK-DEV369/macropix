import Sidebar from "@/components/ui/sidebar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import MobileNav from "@/components/ui/mobile-nav";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex">
          <Sidebar />

          <div className="flex-1 p-4 overflow-y-auto">
            <SignedOut>
              <div className="flex justify-center items-center h-full">
                <SignInButton mode="modal" />
              </div>
            </SignedOut>
            <SignedIn><MobileNav />{children}</SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
