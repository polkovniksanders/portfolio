import { Navbar } from '@/widgets/navbar';
import { HeroSection } from '@/widgets/hero';
import { SkillsSection } from '@/widgets/skills';
import { ProjectsSection } from '@/widgets/projects';
import { TechnologiesSection } from '@/widgets/technologies';
import { FaqSection } from '@/widgets/faq';

export default function Page() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-screen">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TechnologiesSection />
        <FaqSection />
      </main>
    </>
  );
}
