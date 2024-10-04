import './globals.css';

import { Footer, NavBar } from '@components';

export const metadata = {
  title: 'Urban Sportswear',
  description: 'Tu estilo marca tu vida',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
