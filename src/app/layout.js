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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
