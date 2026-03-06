import { Navbar } from '@/widgets/navbar';
import { HeroSection } from '@/widgets/hero';
import { AboutSection } from '@/widgets/about';
import { ProjectsSection } from '@/widgets/projects';
import { ExperienceSection } from '@/widgets/experience';
import { TechnologiesSection } from '@/widgets/technologies';
import { FaqSection } from '@/widgets/faq';
import { ContactsSection } from '@/widgets/contacts';
import { PixelCat, CursorSpotlight } from '@/shared/ui';

export default function Page() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full overflow-x-hidden pb-16 sm:pb-0">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechnologiesSection />
        <FaqSection />
        <ContactsSection />
      </main>
      <PixelCat />
      <CursorSpotlight />
    </>
  );
}
