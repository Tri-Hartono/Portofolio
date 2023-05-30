import Image from 'next/image';
import Header from './header';
import Experience from './about/experience';
import ProjectSlicing from './project/projectslicing';
import ProjectDesign from './project/projectdesign';
import Contact from './contact';
import Project from './project';
import AboutMe from './about';

export const metadata = {
  title: 'Portofolio || Tri Hartono',
  description: 'Selamat datang di portofolio Tri Hartono. Temukan karya-karya saya dalam pengembangan web dan design.',
  keywords: 'portofolio, Tri Hartono, desain, pengembangan web, karya, pengembang, web developer, frontend, UI/UX, admin, ',
};

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-32 py-10 ">
      <Header />
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
}
