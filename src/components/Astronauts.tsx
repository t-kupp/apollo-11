import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { astronautsData } from "../data/astronauts";

export default function Astronauts({ masterTl }: { masterTl: GSAPTimeline }) {
  useGSAP(() => {
    gsap.fromTo(
      ".astronaut-portrait",
      {
        yPercent: -7,
      },
      {
        yPercent: 7,
        scrollTrigger: {
          trigger: ".astronauts",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    const titleSplit = SplitText.create(".astronaut-title", { type: "words", mask: "words" });
    const nameSplit = SplitText.create(".astronaut-name", { type: "words", mask: "words" });

    gsap.from(titleSplit.words, {
      yPercent: 100,
      stagger: 0.1,
      scrollTrigger: { trigger: ".astronaut-title", start: "top 90%" },
    });

    gsap.from(nameSplit.words, {
      yPercent: 100,
      stagger: 0.1,
      scrollTrigger: { trigger: ".astronaut-name", start: "top 90%" },
    });
  });

  return (
    <section className="section astronauts bg-bg-light text-dark">
      <div className="section-inner">
        <div className="grid grid-cols-3 gap-x-6">
          {astronautsData.map((astronaut) => (
            <div key={astronaut.name} className="text-center">
              <div className="overflow-hidden">
                <img
                  src={astronaut.portrait}
                  className="scale-115 astronaut-portrait w-full h-full object-cover "
                  alt={`Portrait of ${astronaut.name}`}
                />
              </div>
              <p className="astronaut-title text-dark-muted mb-2 mt-6">{astronaut.title}</p>
              <p className="astronaut-name h1-serif text-4xl">{astronaut.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
