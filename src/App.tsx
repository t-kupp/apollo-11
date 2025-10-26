import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useState } from "react";
import "./assets/fonts/fonts.css";
import Astronauts from "./components/Astronauts";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [masterTl, setMasterTl] = useState<GSAPTimeline | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({});
    setMasterTl(tl);
  });

  if (!masterTl) return;

  return (
    <>
      <Hero />
      <Intro masterTl={masterTl} />
      <Astronauts masterTl={masterTl} />

      {/* developing only div  */}
      <div className="min-h-screen"></div>
    </>
  );
}

export default App;
