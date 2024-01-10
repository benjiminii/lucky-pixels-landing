import { FaCircleCheck } from "react-icons/fa6";
import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";

function FifthSection() {
  return (
    <section id="faq">
      <ScrollAnimationWrapper className="p-10 relative flex w-full">
        <div className="grid lg:grid-cols-5 w-full gap-6 z-10">
          <div className="col-span-2 flex flex-col gap-10">
            <h2 className="text-[50px]">Upcoming</h2>
            <div className="bg-main w-[300px] h-2" />
            <div className="flex flex-col font-thin text-[30px] gap-y-10">
              <div className="flex items-center gap-x-2">
                <FaCircleCheck color="#808080" />
                Global Expansion Upcoming
              </div>
              <div className="flex items-center gap-x-2 gap-y-6">
                <FaCircleCheck color="#808080" />
                Real Estate Finance Utility Upcoming
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-10">
            <h2 className="text-[50px]">Completed $ Highlighted</h2>
            <div className="bg-main w-[300px] h-2" />
            <div className="flex flex-col font-thin text-[30px] gap-y-10">
              <div className="flex items-center gap-x-2">
                <FaCircleCheck color="#D0F500" />
                Global Expansion Completed
              </div>
              <div className="flex items-center gap-x-2 gap-y-6">
                <FaCircleCheck color="#D0F500" />
                Real Estate Finance Utility Completed
              </div>
              <div className="flex items-center gap-x-2">
                <FaCircleCheck color="#D0F500" />
                Stick sausage in president’s mouth Completed
              </div>
              <div className="flex items-center gap-x-2">
                <FaCircleCheck color="#D0F500" />
                Writing these just for the layout Completed
              </div>
            </div>
          </div>
        </div>

        <img src="zap.png" className="absolute bottom-10 left-10" />
        <img src="zap.png" className="absolute top-[40%] left-[30%]" />
        <img src="zap.png" className="absolute top-40 left-[65%]" />
        <img src="zap.png" className="absolute bottom-5 right-5" />
      </ScrollAnimationWrapper>
    </section>
  );
}

export default FifthSection;
