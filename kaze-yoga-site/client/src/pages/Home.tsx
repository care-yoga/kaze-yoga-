/**
 * Home ページ
 * 風ヨガのメインページ
 * すべてのセクションを統合
 */

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InstructorSection from '@/components/InstructorSection';
import ScheduleSection from '@/components/ScheduleSection';
import CTASection from '@/components/CTASection';
import NotesSection from '@/components/NotesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <HeroSection />
        <AboutSection />
        <InstructorSection />
        <ScheduleSection />
        <CTASection />
        <NotesSection />
      </main>
      <Footer />
    </div>
  );
}
