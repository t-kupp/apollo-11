import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { horizontalLoop } from "../utils/horizontalLoop";

export default function Launch() {
  const upperText = "Launch from Kennedy Space Center";
  const lowerText = "July 16 1969 13:32 UTC";

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".launch",
        pin: true,
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
    });

    tl.from(".launch-video-wrapper", {
      width: "30rem",
      height: "22.5rem",
      filter: "grayscale(0.6)",
      ease: "power1.in",
    });

    const upper = gsap.utils.toArray(".upperText");
    horizontalLoop(upper, { repeat: -1 });

    const lower = gsap.utils.toArray(".lowerText");
    horizontalLoop(lower, { repeat: -1, reversed: true });
  });

  return (
    <section className="launch relative section h-screen bg-bg-dark">
      <div className="absolute left-1/2 -translate-1/2 top-1/2 w-full">
        <div className="flex no-wrap">
          {[...Array(3)].map(() => (
            <h1 className="text-nowrap text-light-muted text-8xl upperText font-medium uppercase pr-6 tracking-tight">
              {upperText}
            </h1>
          ))}
        </div>
        <div className="flex no-wrap ">
          {[...Array(3)].map(() => (
            <h1 className="text-nowrap text-8xl h1-serif lowerText font-medium uppercase pr-6 tracking-tight">
              {lowerText}
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-1/2 top-1/2 launch-video-wrapper w-full h-full">
        <video
          autoPlay
          muted
          loop
          controls={false}
          src="src/assets/media/launch-reel-1080.mp4"
          className=" h-full w-full object-cover"
        ></video>
      </div>
    </section>
  );
}
