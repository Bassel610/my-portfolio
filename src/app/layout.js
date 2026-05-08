import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import ThemeRegistry from '@/components/shared/theme-registry';
import BootLoaderHider from '@/components/shared/boot-loader';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Basel Sherif — Frontend Engineer',
  description:
    'Frontend engineer based in Cairo. Production React / Next.js — design systems, dashboards, marketing sites, real-time UIs.',
  authors: [{ name: 'Basel Sherif' }],
  creator: 'Basel Sherif',
  publisher: 'Basel Sherif',
  openGraph: {
    title: 'Basel Sherif — Frontend Engineer',
    description: 'Production React / Next.js. Design systems, dashboards, real-time UIs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basel Sherif — Frontend Engineer',
    description: 'Production React / Next.js. Design systems, dashboards, real-time UIs.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const themeBootScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','light');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <div id="boot-loader" aria-hidden="true">
          <div className="boot-stack">
            <div className="boot-mark">Basel Sherif</div>
            <div className="boot-rule-wrap">
              <svg
                className="boot-rule"
                viewBox="0 0 220 4"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 2 L220 2" />
              </svg>
              <span className="boot-rule-cursor" aria-hidden="true" />
            </div>
            <span className="boot-cap">PORTFOLIO &middot; 2026</span>
          </div>
        </div>
        <ThemeRegistry>
          <BootLoaderHider />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
