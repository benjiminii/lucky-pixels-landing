import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";
import Image from "next/image";
import welcomeOneLoop from "@/public/about/welcomeOneLoop.gif";

function AboutSection() {
  return (
    <section id="about">
      <ScrollAnimationWrapper className="flex flex-col p-10 justify-center gap-6 items-center relative">
        <Image
          src={welcomeOneLoop}
          alt="Welcome"
          width={welcomeOneLoop.width}
          height={welcomeOneLoop.height}
          className="max-w-[800px] w-screen"
          loading="lazy"
        />

        <img
          src="/about/globe.png"
          className="w-[200px] md:w-[300px] lg:w-[500px] absolute top-[70px] -left-[200px]"
        />
        <img
          src="/about/globe2.png"
          className="w-[150px] md:w-[250px] lg:w-[400px] absolute top-[70%] left-[85%]"
        />
        <div className="p-10 border border-white flex flex-col gap-3 bg-black shadow-[9px_9px_rgba(255,255,255)] max-w-[900px] text-center mb-20">
          <div className="flex flex-col gap-3 text-3xl items-center">
            <div className="flex gap-20 items-center">
              <img src="/about/star.png" />
              <p>About</p>
              <img src="/about/star.png" />
            </div>
            <p>
              Lucky Pixels is inspired by the groundbreaking Million Dollar
              Homepage of 2005, a students ingenious solution to cover
              university ex-penses. Fast forward fifteen years, Lucky Pixels
              reimagines this success with a twist - a gamified approach where
              users earn points for interacting with ads. Online advertising can
              be annoying, but Lucky Pixels is changing that. Players clicking
              on ads and engaging is super effective, as a brand logo alone can
              make a big impact. After Phase 2, we share valuable player data
              with advertisers for targeted campaigns. Join us in crafting a
              captivating environment for advertisers and audiences alike.
            </p>
          </div>
        </div>
        <div className="uppercase text-2xl flex gap-20">
          <img src="/about/arrow.png" />
          Scroll to continue
          <img src="/about/arrow.png" />
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default AboutSection;
