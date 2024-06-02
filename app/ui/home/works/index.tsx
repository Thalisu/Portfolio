import Header from "./Header";
import Projects from "./projects";

export default function Works() {
  return (
    <div className="flex h-svh w-full flex-col items-center gap-5 bg-secondary">
      <Header />
      <Projects />
    </div>
  );
}
