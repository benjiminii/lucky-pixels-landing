import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";

function AboutSection() {
  return (
    <section id="about">
      <ScrollAnimationWrapper
        className={"grid md:grid-cols-2 p-10 text-white gap-6 items-center"}
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-[50px]">
            Welcome to <span className="text-main">Lucky Pixels</span>, where
            advertising meets engagement!
          </h2>
          <div className="flex flex-col md:flex-row gap-3">
            <span>
              We redefine advertising by providing a unique canvas for your
              brand. Each of our 10,000 individual blocks is an exclusive
              opportunity for you to showcase your message to the world.
            </span>
            <span>
              With a guaranteed minimum of 10,000 clicks per block, your message
              will resonate far and wide. This is not just ad space; it's a
              dynamic platform designed to elevate your brand's visibility.
            </span>
          </div>
        </div>
        <img src="second_section.png" />
      </ScrollAnimationWrapper>
    </section>
  );
}

export default AboutSection;
