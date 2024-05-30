import { poppins } from "../../fonts";

export default function Works() {
  return (
    <div className="w-full h-svh flex flex-col items-center gap-28 bg-primary pt-[5%]">
      <h2
        className={`${poppins.className} text-secondary uppercase font-bold text-5xl clip`}
      >
        Meus Projetos
      </h2>
    </div>
  );
}
