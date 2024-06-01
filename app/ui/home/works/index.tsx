import Header from "./Header";
import Projects from "./projects";

export default function Works() {
  return (
    <div className="w-full h-svh bg-secondary flex flex-col items-center gap-5">
        <Header />
        <Projects />
    </div>
  );
}
