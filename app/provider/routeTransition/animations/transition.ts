import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { TextPlugin } from "gsap/all";

const transition = (href: string, router: AppRouterInstance, path: string) => {
  const banners = ["#banner-3", "#banner-1", "#banner-2"];
  gsap.registerPlugin(TextPlugin);
  const tl = gsap.timeline({
    onComplete: () => {
      router.push(href, { scroll: false });
    },
  });

  const text = path === "/" ? "home" : path.replace("/", "");

  tl.set(banners, { yPercent: -100 })
    .set("#text", { text: text, opacity: 1 })
    .to(
      banners,
      {
        yPercent: 0,
        stagger: 0.3,
        ease: "power3.out",
      },
      "0",
    );
};
export default transition;
