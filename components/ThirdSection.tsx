const contents = [
  {
    desc: "Secure your lifetime spot on the canvas now! Each block guarantees an estimated 5000 clicks and visits to your weblink. Act fast to claim yours before the best spots are filled. Don't miss out on this prime opportunity for lasting visibility.",
    title: "RESERVE YOUR SPOT TODAY!",
    image: "/third_section/block.png",
  },
  {
    desc: "We are committed to providing you with the best possible experience. Our team of experts will work with you to create a custom design that will maximize your brand's impact. We will also provide you with a detailed report of your campaign's performance.",
    title: "MORE DETAILS",
    image: "/third_section/head.png",
  },
  {
    desc: "Leave the rest to us. With an exceptional marketing strategy, your participation is destined to become a landmark in internet history. Trust in our expertise to amplify your presence and make a lasting impact. Your success is our commitment.",
    title: "MORE DETAILS...",
    image: "/third_section/chess.png",
  },
];

function ThirdSection() {
  return (
    <section
      className="flex flex-col p-10 justify-center gap-6 items-center"
      id="3rd"
    >
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
    </section>
  );
}

export default ThirdSection;
