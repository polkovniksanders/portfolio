import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const HomeSection = dynamic(() => import('@/app/screens/home/HomeSection'), {
  ssr: true,
});
const TechnologiesSection = dynamic(
  () => import('@/app/screens/technologies/TechnologiesSection'),
  {
    ssr: true,
  },
);
const SkillsSections = dynamic(
  () => import('@/app/screens/skills/SkillsSections'),
  {
    ssr: true,
  },
);
const ProjectsSection = dynamic(
  () => import('@/app/screens/projects/ProjectsSection'),
  {
    ssr: true,
  },
);
const FaqSection = dynamic(() => import('@/app/screens/faq/FaqSection'), {
  ssr: true,
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className='w-screen'>
        <HomeSection />
        <SkillsSections />
        <TechnologiesSection />
        <ProjectsSection />
        <FaqSection />
      </main>
    </>
  );
}
