import gsap from "gsap";
import { TextPlugin } from "gsap/all";

const onPageOpen = () => {
  const banners = ["#banner-1", "#banner-2", "#banner-3"];
  gsap.registerPlugin(TextPlugin);
  const tl = gsap.timeline({ delay: 0.2 });

  tl.set(banners, { yPercent: 0 })
    .set("#text", { opacity: 1 })
    .set("#loading", { animationPlayState: "paused" }, "0")
    .to("#loading", { opacity: 0, duration: 0.2 }, "0")
    .to(banners, { yPercent: 100, stagger: 0.3, ease: "power3.in" }, "0")
    .to("#text", { opacity: 0, duration: 0.2 }, "-=0.2");
};
export default onPageOpen;
