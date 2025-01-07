import projects from "../lib/projects";
import { Pos } from "../lib/types";
import Project from "../ui/works/Project";

export default function Works() {
  return (
    <main className="relative flex w-full flex-col items-center gap-6 py-24">
      {projects.map((project, i) => (
        <Project
          {...project}
          key={crypto.randomUUID()}
          pos={i % 2 === 0 ? Pos.right : Pos.left}
        ></Project>
      ))}
    </main>
  );
}
