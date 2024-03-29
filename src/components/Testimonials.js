// src/components/Testimonials.jsx

import FeedbackCard from "./FeedbackCard";
import Carousel from "nuka-carousel";

const feedback = [
  {
    id: "feedback-1",
    content:
      "My daily 2k is now assured, I love across Nigeria",
    name: "Baba Ifeanyi",
    title: "Subscriber",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:pb-16 pb-6 flex justify-center items-center flex-col relative `}
  >
    <div className="w-full mx-auto text-center flex bg-gray-800 justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2
        className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}
      >Testimonials
      </h2>
     
    </div>
    <Carousel autoplay autoplayInterval={3000} wrapAround={true}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;