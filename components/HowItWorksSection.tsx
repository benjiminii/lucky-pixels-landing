import { contents } from "@/constants/thirdSection.constant";
import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";

function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <ScrollAnimationWrapper className="flex flex-col p-10 justify-center gap-6 items-center">
        <h2 className="text-[50px]">Phase 1</h2>
        <div className="grid lg:grid-cols-3 gap-6 text-center">
          {contents.map((content, index) => (
            <div
              key={index}
              className="p-10 border border-white flex flex-col gap-3 bg-black"
            >
              <div className="w-full h-[300px] grid place-items-center">
                <img src={content.image} />
              </div>
              <p className="text-lg">{content.desc}</p>
              <p className="text-xl text-main">{content.title}</p>
            </div>
          ))}
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default HowItWorksSection;
