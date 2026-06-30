import CategorySection from '@/src/components/home/CategorySection';
import HeroSection from '@/src/components/home/HeroSection';
import { TrendingSection } from '@/src/components/home/TrendingSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <TrendingSection />
    </>
  );
}
