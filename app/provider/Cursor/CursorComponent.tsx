import { CursorSVG } from "@/app/components/svgs";
import { ForwardedRef, forwardRef } from "react";

export default forwardRef(function CursorComponent(
  props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9999999] h-svh w-svw bg-transparent mix-blend-difference"
    >
      <CursorSVG className="fixed h-4 w-4" id="circle"></CursorSVG>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
      <div className="fixed rounded-full bg-primary" id="circle"></div>
    </div>
  );
});
