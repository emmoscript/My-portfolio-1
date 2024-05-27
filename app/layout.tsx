import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "EmmoScript",
	authors: {
		name: "EmmoScript",
	},
  icons: {
    icon: "./favicon.png",
  },
	description:
		"Based in Dominican Republic, I'm a Junior FullStack developer who likes to build good-looking and functional web applications.",
	openGraph: {
		title: "EmmoScript",
		description:
			"Based in Dominican Republic, I'm a Junior FullStack developer who likes to build good-looking and functional web applications.",
		url: "http://localhost:3000/",
		siteName: "EmmoScript",
		images: "/project-1.png",
		type: "website",
	},
	keywords: ["daily web coding", "EmmoScript", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
