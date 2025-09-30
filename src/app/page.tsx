import home from 'public/home.jpg';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <Hero image={home} imgAlt="car factory" title="Professional Cloud Hosting" />
  );
}
