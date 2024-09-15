import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "A Pele que Vibra",
  description: "Um projeto de Caio Oliveira",
  icons: {
    icon: "/favicon.png",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
