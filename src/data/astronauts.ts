interface Astronaut {
  name: string;
  title: string;
  portrait: string;
}

export const astronautsData: Astronaut[] = [
  {
    name: "Neil Armstrong",
    title: "Mission Commander",
    portrait: "src/assets/media/astronauts/Armstrong.png",
  },
  {
    name: `Edwin "Buzz" Aldrin`,
    title: "Lunar Module Pilot",
    portrait: "src/assets/media/astronauts/Aldrin.png",
  },
  {
    name: "Michael Collins",
    title: "Command Module Pilot",
    portrait: "src/assets/media/astronauts/Collins.png",
  },
];
