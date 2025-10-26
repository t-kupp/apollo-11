export default function Hero() {
  return (
    <>
      <section className="min-h-screen h-full section relative items-center justify-center">
        <div className="px-global">
          <h1 className="display-serif text-[16rem]  uppercase">Apollo 11</h1>
          <div className="flex justify-end">
            <p className="label-sans text-light-muted pr-3">Jul 16, 1969 – Jul 24, 1969</p>
          </div>
        </div>

        <div className="fixed video-wrapper w-full h-full  overflow-hidden -z-10">
          <video
            className="w-full h-full brightness-30 grayscale-50 object-cover"
            muted
            autoPlay
            loop
            controls={false}
            src="/src/assets/media/launch-reel-1080.mp4"
          ></video>
        </div>
      </section>
    </>
  );
}
