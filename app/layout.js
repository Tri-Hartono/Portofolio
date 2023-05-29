'use client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Providers from './providers';
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          <div className="px-setting 2xl:w-3/4 m-auto overflow-x-hidden">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
