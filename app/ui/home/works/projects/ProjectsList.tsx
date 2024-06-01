import { inter } from "@/app/ui/fonts";

export default function ProjectsList() {
  return (
    <ul className="h-96">
      <li className="py-4 px-4 border-spacing border-t-[1px] flex justify-between">
        <span className={`${inter.className} text-primary font-semibold`}>
          Movie Streaming app
        </span>
        <span>Full Stack</span>
      </li>
      <li className="py-4 px-4 border-spacing border-t-[1px] flex justify-between">
        <span className={`${inter.className} text-primary font-semibold`}>
          Portfólio
        </span>
        <span>Front-End</span>
      </li>
    </ul>
  );
}
