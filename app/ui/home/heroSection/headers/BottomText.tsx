import { poppins } from "../../../fonts";
import { GithubLogo, LinkedinLogo } from "@/app/components/svgs";

import ClickableContainer from "@/app/components/ClickableContainer";

export default function BottomText() {
  return (
    <div
      className="clip relative flex h-fit w-full items-center gap-3 sm:mt-3"
      id="bottomText"
    >
      <h2
        className={`${poppins.className} midTitle mr-1 w-max text-4xl font-bold uppercase text-primary sm:text-5xl sm:leading-[35px]`}
      >
        developer
      </h2>
      <ClickableContainer
        href="https://github.com/Thalisu"
        className="svg translate-y-7 cursor-none"
      >
        <GithubLogo className="button w-5 text-primary" />
      </ClickableContainer>
      <ClickableContainer
        href="https://www.linkedin.com/in/thalison-de-melo-correa-744958276/"
        className="svg translate-y-7 cursor-none"
      >
        <LinkedinLogo className="button w-5 text-primary" />
      </ClickableContainer>
    </div>
  );
}
