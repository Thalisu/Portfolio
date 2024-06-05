import SmoothScroll from "./components/SmoothScroll";
import HeroSection from "./ui/home/heroSection";
import AboutMyWork from "./ui/home/aboutMyWork";
import Works from "./ui/home/works";
import Contact from "./ui/home/contact";
import RelativeToSelfContainer from "./components/RelativeToSelfContainer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <HeroSection />
        <RelativeToSelfContainer className="boxShadow flex h-fit w-full flex-col items-center gap-28 rounded-[2rem] bg-secondary pb-96 pt-[5%]">
          <AboutMyWork />
          <Works />
        </RelativeToSelfContainer>
        <Contact />
      </main>
    </SmoothScroll>
  );
}
