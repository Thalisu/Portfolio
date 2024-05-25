import SwitchFrame from "./SwitchFrame";
import { Suspense } from "react";

export default function Switch() {
  return (
    <div className="w-16 h-28 absolute right-[2px] -bottom-[79px]">
      <Suspense>
        <SwitchFrame />
      </Suspense>
    </div>
  );
}
