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
  description: 'Selamat datang di portofolio Tri Hartono. Temukan karya-karya saya dalam pengembangan web dan design.',
  keywords: 'portofolio, Tri Hartono, desain, pengembangan web, karya, pengembang, web developer, frontend, UI/UX, admin, ',
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
