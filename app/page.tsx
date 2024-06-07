import HeroSection from "./ui/home/heroSection";
import AboutMyWork from "./ui/home/aboutMyWork";
import Works from "./ui/home/works";
import Contact from "./ui/home/contact";
import CardAnimatedContainer from "./components/CardAnimatedContainer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CardAnimatedContainer className="boxShadow relative z-10 flex h-fit w-full flex-col items-center gap-28 rounded-[2rem] bg-secondary pb-[50svh] pt-[5%]">
        <AboutMyWork />
        <Works />
      </CardAnimatedContainer>
      <Contact />
    </main>
  );
}
