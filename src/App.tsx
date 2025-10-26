import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ReactLenis, { type LenisRef } from "lenis/react";
import { useRef } from "react";
import "./assets/fonts/fonts.css";
import Astronauts from "./components/Astronauts";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Launch from "./components/Launch";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const lenisRef = useRef<LenisRef | null>(null);

  useGSAP(() => {
    // Lenis integration
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
  });

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Hero />
      <Intro />
      <Astronauts />
      <Launch />

      {/* developing only div  */}
      {/* <div className="min-h-screen"></div> */}
    </>
  );
}

export default App;
