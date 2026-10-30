import type { Metadata, Viewport } from 'next';
import { Fraunces, Figtree, Shantell_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import PawTrailCanvas from '@/components/PawTrailCanvas';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const shantell = Shantell_Sans({
  subsets: ['latin'],
  variable: '--font-shantell',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#fffdf8',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://puppy.instabizweb.com'),
  title: 'TeddyPups U.A.E. – Premium teacup puppies in Dubai',
  description:
    'Find your dream miniature companion at TeddyPups UAE. Health-guaranteed, microchipped, vaccinated teacup and toy puppies in Dubai.',
  keywords: [
    'teacup puppies dubai',
    'maltipoo dubai',
    'pomeranian uae',
    'toy poodle dubai',
    'cavapoo dubai',
    'puppies for sale dubai',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'TeddyPups U.A.E. – Premium teacup puppies in Dubai',
    description:
      'Ethical, premium teacup & toy puppies in Dubai. Health-guaranteed, microchipped & raised with love.',
    url: 'https://puppy.instabizweb.com',
    siteName: 'TeddyPups U.A.E.',
    images: [
      {
        url: '/brand/logo.png',
        width: 800,
        height: 800,
        alt: 'TeddyPups Logo',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} ${shantell.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-milk text-cocoa antialiased selection:bg-honey selection:text-cocoa">
        <Header />
        <main className="flex-1 pt-[var(--bar-h,4.5rem)]">{children}</main>
        <Footer />
        <MobileBottomBar />

        {/* Interactive Paw Trail Canvas (Walking puppy paws & click burst) */}
        <PawTrailCanvas />

        {/* Floating WhatsApp pill button on desktop */}
        <div className="fixed bottom-6 right-6 z-40 hidden md:block">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border-2 border-cocoa bg-emerald-500 px-4 py-3 font-semibold text-white shadow-[4px_4px_0px_#2a170e] hover:bg-emerald-600 hover:-translate-y-0.5 transition-all"
            aria-label="Direct WhatsApp Chat"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.66 6.072 6.224-1.632c1.701.928 3.652 1.455 5.727 1.455 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
            <span>Chat with us</span>
          </a>
        </div>
      </body>
    </html>
  );
}
