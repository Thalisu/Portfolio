import SmoothScroll from "./components/SmoothScroll";
import HeroSection from "./ui/home/heroSection";
import AboutMyWork from "./ui/home/aboutMyWork";
import Works from "./ui/home/works";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <HeroSection />
        <AboutMyWork />
        <Works />
      </main>
    </SmoothScroll>
  );
}
