import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Space_Mono } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${cormorant.variable} ${spaceMono.variable} font-mono bg-background text-ivory min-h-screen transition-colors duration-400`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
