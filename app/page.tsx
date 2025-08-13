'use client';

import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CertificationSection } from '@/components/sections/CertificationSection';
import { WorkExperienceSection } from '@/components/sections/WorkExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="overflow-hidden custom-scrollbar pt-16">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="certifications">
        <CertificationSection />
      </section>
      <section id="work-experience">
        <WorkExperienceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}