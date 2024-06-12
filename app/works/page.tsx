import Image from "next/image";

export default function Works() {
  return (
    <div className="relative flex w-full flex-col items-center gap-6 py-24">
      <div className="relative right-[10%] aspect-video w-5/12 rounded border-4 border-spacing shadow-2xl">
        <Image
          src={"/imgs/movieStreamingHome.png"}
          alt={"Movie Streaming App"}
          fill={true}
        ></Image>
      </div>
      <div className="relative left-[10%] aspect-video w-5/12 rounded border-4 border-spacing shadow-2xl">
        <Image
          src={"/imgs/portfolio.png"}
          alt={"Portfolio"}
          fill={true}
        ></Image>
      </div>
    </div>
  );
}
