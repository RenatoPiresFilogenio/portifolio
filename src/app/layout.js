import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "./components/header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portifolio",
  description: "Conheça quem é renato",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
