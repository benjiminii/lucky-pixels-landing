import { contents } from "@/constants/thirdSection.constant";
import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";

function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <ScrollAnimationWrapper className="flex flex-col p-10 justify-center gap-6 items-center">
        <h2 className="text-[50px] uppercase text-main font-200">
          How it works
        </h2>
        <div className="flex gap-10">
          <div className="p-10 border border-white flex flex-col gap-3 bg-black shadow-[9px_9px_rgba(255,255,255)] max-w-[600px] text-center">
            <div className="flex flex-col gap-3 py-16 pb-32">
              <p className="text-lg">{contents[0].subtitle}</p>
              <p className="text-4xl text-main">{contents[0].title}</p>
              <p className="text-lg">{contents[0].desc}</p>
              <p className="text-xl text-main">{contents[0].subDesc}</p>
            </div>
            <div className="rounded-none border-t border-neutral-500" />
          </div>
          <div className="p-10 border border-white flex flex-col gap-3 bg-black shadow-[9px_9px_rgba(255,255,255)] max-w-[600px] text-center">
            <div className="flex flex-col gap-3 py-16 pb-32">
              <p className="text-lg">{contents[1].subtitle}</p>
              <p className="text-4xl text-main">{contents[1].title}</p>
              <p className="text-lg">{contents[1].desc}</p>
              <p className="text-xl text-main">{contents[1].subDesc}</p>
            </div>
            <div className="rounded-none border-t border-neutral-500" />
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default HowItWorksSection;
