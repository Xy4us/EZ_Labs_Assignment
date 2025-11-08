import React from "react";
import portfolio from "../assets/portfolio.png";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section id="varnan" className="h-full w-full mt-60 ">
      <div className="h-full w-[85%] mx-auto flex items-center justify-center">
        <div className="h-full w-full flex flex-col items-center justify-start gap-y-2">
          <h1 className="lg:text-4xl md:text-3xl xs:text-xl xxs:text-lg">
            The Highlight Reel
          </h1>
          <h2 className="lg:text-2xl xxs:text-base sm:text-lg ">
            Watch the magic we’ve captured.
          </h2>

          {/* portfolio image */}
          <motion.img
            ref={ref}
            variants={slideInFromBottom(0.25)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            alt="portfolio"
            src={portfolio}
            className="mt-16 lg:h-[500px] lg:w-[881px] cursor-pointer transition-all duration-150 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
