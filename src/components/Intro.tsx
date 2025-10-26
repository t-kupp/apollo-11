import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Intro() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        pin: true,
        start: "top top",
        end: "+=5000",
        scrub: 1,
      },
    });

    const h1Split = SplitText.create(".jfk-quote", { type: "words", mask: "words" });
    tl.from([h1Split.words], { yPercent: 100, opacity: 0, stagger: 0.1 });
  });

  return (
    <section className="section min-h-screen intro bg-bg-dark">
      <div className="section-inner">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <p className="h1-serif jfk-quote text-light-muted mb-8">
              Many years ago, the great British explorer George Mallory, who was to die on Mount
              Everest, was asked why did he want to climb it? He said, “Because it is there.”
              <br />
              <br />
              Well, space is there,
              <span className="h1-sans text-light"> and we’re going to climb it</span>.
              <span className="block body-sans text-light-muted mt-12">John F. Kennedy 1962</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
