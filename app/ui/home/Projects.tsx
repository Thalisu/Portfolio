import Image from "next/image";
import { poppins } from "../fonts";

export default function Projects() {
  return (
    <div className="w-full max-w-screen-xl mt-16 flex flex-col gap-28">
      <div className="w-3/5 max-w-xl">
        <div className="rounded border-4 border-primary boxShadow">
          <Image
            className="bg-primary"
            src="/imgs/movieStreamingHome.png"
            alt="Movie Streaming Home Page"
            width={1920}
            height={1080}
          />
        </div>
        <h3
          className={`${poppins.className} font-bold text-3xl text-primary text-center pt-4 uppercase`}
        >
          Watch now
        </h3>
      </div>
      <div className="w-fit">
        <Image
          className="w-3/5 max-w-xl border-4 border-primary rounded drop-shadow-sm"
          src="/imgs/movieStreamingHome.png"
          alt="Movie Streaming Home Page"
          width={1920}
          height={1080}
        ></Image>
      </div>
      <div className="w-fit">
        <Image
          className="w-3/5 max-w-xl border-4 border-primary rounded drop-shadow-sm"
          src="/imgs/movieStreamingHome.png"
          alt="Movie Streaming Home Page"
          width={1920}
          height={1080}
        ></Image>
      </div>
    </div>
  );
}
