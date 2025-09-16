import { HeroSection } from './HeroSection';
import { StatisticsSection } from './StatisticsSection';
import { ServicesSection } from './ServicesSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { ProcessSection } from './ProcessSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogPreviewSection } from './BlogPreviewSection';
import { NewsletterSection } from './NewsletterSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <NewsletterSection />
    </div>
  );
}
