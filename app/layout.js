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

export const metadata = {
  title: 'Portofolio || Tri Hartono',
  author: 'Tri Hartono',
  url: 'https://trihartono-portofolio.vercel.app',
  siteName: 'Portofolio | Tri Hartono',
  description: 'Selamat datang di portofolio Tri Hartono. Temukan karya-karya saya dalam pengembangan web dan design.',
  keywords: 'portofolio, Portofolio Tri Hartono, Tri Hartono, desain, pengembangan web, karya, pengembang, web developer, frontend, UI/UX, admin, ',
  icons: {
    icon: '/icon.png',
  },
  images: [
    {
      url: 'https://trihartono-portofolio.vercel.app/logo.png',
      width: 257,
      height: 302,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          <div className="px-setting 2xl:w-3/4 m-auto overflow-hidden">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
