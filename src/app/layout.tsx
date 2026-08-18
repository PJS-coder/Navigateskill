import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Navigate Skill — Modern IT & Digital Solutions Studio',
  description: 'Navigateskill turns brands into digital powerhouses through intelligent marketing, creative strategy, web development, app engineering, and next-gen automation.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238C21EF'><path d='M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z'/></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;600;800;900&family=Playfair+Display:ital,wght@0,600;0,800;0,900;1,600;1,800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F7F3EC] text-[#111111] font-sans antialiased selection:bg-[#8C21EF] selection:text-[#F7F3EC] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
