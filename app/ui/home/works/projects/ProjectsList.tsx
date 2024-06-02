import { inter } from "@/app/ui/fonts";

export default function ProjectsList() {
  return (
    <ul className="h-96">
      <li className="flex justify-between border-t-[1px] border-spacing px-4 py-4">
        <span className={`${inter.className} font-semibold text-primary`}>
          Movie Streaming app
        </span>
        <span>Full Stack</span>
      </li>
      <li className="flex justify-between border-t-[1px] border-spacing px-4 py-4">
        <span className={`${inter.className} font-semibold text-primary`}>
          Portfólio
        </span>
        <span>Front-End</span>
      </li>
    </ul>
  );
}
