import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ConvexClientProvider } from '../app/ConvexClientProvider'


export const metadata: Metadata = {
  title: "Spott",
  description: "Discover and create amazing events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <Header />
            <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
              <div>
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
                </div>
              </div>
              <div className="relative z-10 min-h-[70vh]">
                {children}
              </div>
              <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto">
                <div className="text-small text-gray-400">
                  Made for eventing
                </div>
              </footer>
            </main>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
