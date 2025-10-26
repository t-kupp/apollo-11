interface Astronaut {
  name: string;
  title: string;
  portrait: string;
}

export default function Astronauts() {
  const astronautsData: Astronaut[] = [
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

  return (
    <section className="section bg-bg-light text-dark">
      <div className="section-inner">
        <p className="label-sans text-dark-muted mb-24 text-center">The Astronauts</p>
        <div className="grid grid-cols-3 gap-x-6">
          {astronautsData.map((astronaut) => (
            <GridCell astronaut={astronaut} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GridCell({ astronaut }: { astronaut: Astronaut }) {
  return (
    <div className="text-center">
      <img src={astronaut.portrait} className="w-full object-cover mb-6" alt="" />
      <p className="text-dark-muted mb-2">{astronaut.title}</p>
      <p className="h1-serif text-4xl">{astronaut.name}</p>
    </div>
  );
}
