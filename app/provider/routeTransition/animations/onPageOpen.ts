import gsap from "gsap";
import { TextPlugin } from "gsap/all";

const onPageOpen = () => {
  const banners = ["#banner-1", "#banner-2", "#banner-3"];
  gsap.registerPlugin(TextPlugin);
  const tl = gsap.timeline({ delay: 0.2 });

  tl.set(banners, { yPercent: 0 })
    .set("#text", { opacity: 1 })
    .to(banners, { yPercent: 100, stagger: 0.3, ease: "power3.in" }, "0")
    .to(["#text", "#loading"], { opacity: 0, duration: 0.2 }, "-=0.2")
    .set("#loading", { animationPlayState: "paused" }, ">");
};
export default onPageOpen;
