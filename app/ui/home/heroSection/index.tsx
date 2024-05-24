import { GithubLogo, LinkedinLogo } from "@/app/components/svgs";
import Switch from "@/app/components/switch";
import { poppins } from "@/app/ui/fonts";
import MiddleText from "./MiddleText";

export default function HeroSection() {
  return (
    <div className="flex flex-col w-svw h-svh items-center justify-center relative">
      <div className="w-fit h-fit flex flex-col gap-12">
        <div className={`${poppins.className} flex uppercase w-max`}>
          <p className="font-bold text-2xl w-max text-primary">
            {`oi 👋 eu sou o`}&nbsp;
          </p>
          <h1 className="font-bold text-2xl w-max text-primary">thalison</h1>
          <p className="font-bold text-2xl w-max text-primary">, um</p>
        </div>
        <MiddleText />
        <div className="w-full h-fit flex gap-2 items-center relative">
          <h2
            className={`${poppins.className} text-5xl font-bold uppercase w-max text-primary`}
          >
            developer
          </h2>
          <a href="https://github.com/Thalisu" className="ml-1" target="_blank">
            <GithubLogo className="w-5 text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/thalison-de-melo-correa-744958276/"
            target="_blank"
          >
            <LinkedinLogo className="w-5 text-primary" />
          </a>
          <Switch />
        </div>
      </div>
    </div>
  );
}
