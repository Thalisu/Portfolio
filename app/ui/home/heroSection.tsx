import { GithubLogo, LinkedinLogo } from "@/app/components/svgs";
import { poppins } from "@/app/ui/fonts";

export default function HeroSection() {
  return (
    <div className="w-full h-svh flex justify-center">
      <div className="flex flex-col w-4/5 h-svh max-w-7xl items-center justify-center">
        <div className="w-fit h-fit">
          <div className={`${poppins.className} flex uppercase w-max`}>
            <p className="font-bold text-2xl w-max text-primary">
              {`oi 👋 eu sou o`}&nbsp;
            </p>
            <h1 className="font-bold text-2xl w-max text-primary">thalison</h1>
            <p className="font-bold text-2xl w-max text-primary">, um</p>
          </div>
          <h2
            className={`${poppins.className} text-8xl font-bold uppercase text-gray-700 w-max text-primary`}
          >
            frontend
          </h2>
          <div className="w-full h-fit flex gap-2 items-center relative">
            <h2
              className={`${poppins.className} text-5xl font-bold uppercase w-max text-primary`}
            >
              developer
            </h2>
            <a
              href="https://github.com/Thalisu"
              className="ml-1"
              target="_blank"
            >
              <GithubLogo className="w-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/thalison-de-melo-correa-744958276/"
              target="_blank"
            >
              <LinkedinLogo className="w-5 text-primary" />
            </a>
            <div className="w-16 h-28 border-4 absolute right-8 top-4 border-primary flex flex-col items-center justify-center">
              <span
                className={`${poppins.className} uppercase font-bold text-primary`}
              >
                on
              </span>
              <div className="w-8 h-14 border-4 border-primary flex justify-center items-start cursor-pointer">
                <div className="my-0.5 w-5 h-5 border-4 border-primary"></div>
              </div>
              <span
                className={`${poppins.className} uppercase font-bold text-primary`}
              >
                off
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
