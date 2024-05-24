import SwitchFrame from "./SwitchFrame";
import { Suspense } from "react";

export default function Switch() {
  return (
    <div className="w-16 h-28 absolute right-8 top-4">
      <Suspense>
        <SwitchFrame />
      </Suspense>
    </div>
  );
}
