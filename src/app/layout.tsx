"use client";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { GlobalStyle } from "../styles/global";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={defaultTheme}>
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}
