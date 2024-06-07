import { poppins } from "@/app/ui/fonts";
import { ForwardedRef, forwardRef } from "react";

export default forwardRef(function Banners(
  props: { path: string },
  ref: ForwardedRef<HTMLDivElement>,
) {
  const text = props.path === "/" ? "home" : props.path.replace("/", "");
  return (
    <div ref={ref}>
      <div
        id="banner-1"
        className="fixed left-0 top-0 z-50 min-h-svh w-[33svw] bg-neutral-950"
      ></div>
      <div
        id="banner-3"
        className="fixed left-[33svw] top-0 z-50 flex min-h-svh w-[35svw] items-center justify-center bg-neutral-950"
      >
        <p
          className={`${poppins.className} w-fit text-5xl font-bold uppercase text-secondary`}
          id="text"
        >
          {text}
        </p>
        <div
          id="loading"
          className="absolute bottom-1/3 inline-block aspect-square w-8 animate-loading rounded border-4 border-[#e8e8e3]"
        >
          <div
            id="loading"
            className="w-full animate-loadingInner bg-primary align-top"
          ></div>
        </div>
      </div>
      <div
        id="banner-2"
        className="fixed left-[67svw] top-0 z-50 min-h-svh w-[33svw] bg-neutral-950"
      ></div>
    </div>
  );
});
