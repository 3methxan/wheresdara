import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Navbar from "./navbar";
import FootFetish from "./feet";

const jura = Jura({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Where's Dara?",
    absolute: "Where's Dara?",
  },
  description:
    "Glorious streetwear, just right for your next gentrified coffee shop date.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jura.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FootFetish/>
        </ThemeProvider>
      </body>
    </html>
  );
}
