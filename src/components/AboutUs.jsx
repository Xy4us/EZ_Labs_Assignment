import React from "react";
import house from "../assets/house.png";
import ring from "../assets/ring.png";
import { circularMotion, slideInFromBottom } from "../utils/motion.ts";
import { motion } from "framer-motion";
import members from "../assets/members.png";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section id="ourStory" className="w-full h-full mt-60">
      {/* Container */}
      <div className="w-[80%] h-full mx-auto flex md:flex-row xxs:flex-col items-center justify-between xxs:gap-y-20 md:gap-y-0">
        {/* Left Section -> Text */}
        <div className="w-[47%] h-full flex flex-col items-center justify-between gap-y-14">
          <h1 className="lg:text-4xl md:text-3xl xs:text-xl xxs:text-lg">
            A montage of familiar faces and names.
          </h1>

          <p className="lg:text-2xl xxs:text-base sm:text-lg ">
            Some stories come from the biggest names. Others begin with bold,
            rising voices. We’ve been fortunate to walk alongside both -
            listening, creating, and building stories that matter.
          </p>

          <motion.img
            ref={ref}
            variants={slideInFromBottom(0.25)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            alt="members"
            src={members}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Right Section -> Image */}
        <div className="w-[47%] h-[50%] flex flex-col items-center justify-start">
          <h1 className="font-island lg:text-6xl md:text-4xl xs:text-2xl xxs:text-xl text-centre ">
            Every project is more than just a brief - it’s a new chapter waiting
            to be written. Together, we've crafted tales that inspire, connect,
            and endure.
          </h1>
        </div>
      </div>

      {/* Image at the bottom */}
      <div className="w-full h-full flex items-center flex-col gap-y-20 mt-40">
        {/* Ring */}
        <div className="relative">
          <motion.img
            alt="ring"
            src={ring}
            className="2xl:w-[565px] 2xl:h-[565px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] sm:w-[380px] sm:h-[380px] xs:w-[350px] xs:h-[350px] xxs:w-[230px] xxs:h-[230px] z-0 max-w-full "
            variants={circularMotion}
            initial="hidden"
            animate="visible"
          />
          {/* House Image */}
          <img
            src={house}
            alt="House"
            className="absolute top-20 right-20 w-[75%] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
