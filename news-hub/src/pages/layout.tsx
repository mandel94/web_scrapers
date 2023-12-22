import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
// import { useLayoutContext } from "@/context/layoutContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The News Beat",
  description: "Cover your beat as a pro",
};


export default function RootLayout({
  children,
}: {
    children: React.ReactElement;
}) {
  // const [currentLayout, setCurrentLayout] = useLayoutContext();
  return (
    <html lang="en">
      <body className={inter.className}>
        { children }
      </body>
    </html>
  );
}