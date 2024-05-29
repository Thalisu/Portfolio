import HeroSection from "./ui/home/heroSection";
import Projects from "./ui/home/Projects";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <HeroSection />
        <Projects />
      </main>
    </SmoothScroll>
  );
}
