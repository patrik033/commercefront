import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/navigation/sidenav";
import Header from "./ui/header/Header";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>

          <div className="flex-grow    md:overflow-y-auto   ">
            <Header />
            <main>
              {children}
            </main>

          </div>
        </div>

      </body>
    </html>
  );
}
