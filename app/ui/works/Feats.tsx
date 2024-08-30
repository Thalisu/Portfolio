import { poppins } from "../fonts";
import Image from "next/image";

export default function Feats({ feats }: { feats: string[] }) {
  return (
    <div className="flex w-full flex-col items-center bg-secondary">
      <h2
        className={`${poppins.className} flex w-full content-center justify-center px-2 py-12 text-2xl font-bold text-secondary`}
      >
        Features
      </h2>
      <ul className="flex w-full max-w-3xl flex-col px-2">
        {feats.map((feat, i) => {
          return (
            <li
              key={crypto.randomUUID()}
              className="relative my-6 aspect-video w-5/12 min-w-96 rounded border-4 border-spacing shadow-2xl"
              style={{ alignSelf: `${2 % i === 0 ? "end" : "right"}` }}
            >
              <Image src={feat} alt={""} fill={true}></Image>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
