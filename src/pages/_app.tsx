import "@/styles/globals.css";
import "lenis/dist/lenis.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Space_Mono, Geist } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";

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

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <main className={`${cormorant.variable} ${spaceMono.variable} ${geist.variable} font-sans bg-background text-ivory min-h-screen transition-colors duration-400`}>
          <Component {...pageProps} />
        </main>
      </SmoothScroll>
    </ThemeProvider>
  );
}
