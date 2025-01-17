import HeroSection from "@/app/ui/home/heroSection";
import AboutMyWork from "@/app/ui/home/aboutMyWork";
import Works from "@/app/ui/home/works";
import Contact from "@/app/ui/home/contact";
import CardAnimatedContainer from "@/app/components/CardAnimatedContainer";

export default function Home() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <CardAnimatedContainer className="boxShadow relative z-10 flex h-fit w-full flex-col items-center gap-28 rounded-[2rem] bg-secondary pb-[50svh] pt-[5%]">
        <AboutMyWork />
        <Works />
      </CardAnimatedContainer>
      <Contact />
    </main>
  );
}
