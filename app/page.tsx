import SmoothScroll from "./components/SmoothScroll";
import HeroSection from "./ui/home/heroSection";
import AboutMyWork from "./ui/home/aboutMyWork";
import Works from "./ui/home/works";
import Contact from "./ui/home/contact";
import RelativeToSelfContainer from "./components/CardAnimatedContainer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        <HeroSection />
        <RelativeToSelfContainer className="boxShadow z-10 flex h-fit w-full flex-col items-center gap-28 rounded-[2rem] bg-secondary pb-96 pt-[5%] relative">
          <AboutMyWork />
          <Works />
        </RelativeToSelfContainer>
        <Contact />
      </main>
    </SmoothScroll>
  );
}
