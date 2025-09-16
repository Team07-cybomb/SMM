import { HeroSection } from './HeroSection';
import { StatisticsSection } from './StatisticsSection';
import { ServicesSection } from './ServicesSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { ProcessSection } from './ProcessSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogPreviewSection } from './BlogPreviewSection';
import { NewsletterSection } from './NewsletterSection';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div>
      <HeroSection setCurrentPage={setCurrentPage} />
      <StatisticsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogPreviewSection setCurrentPage={setCurrentPage} />
      <NewsletterSection />
    </div>
  );
}