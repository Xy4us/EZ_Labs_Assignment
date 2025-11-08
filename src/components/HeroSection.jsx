import React from "react";
import flower from "../assets/flower.png";
import logo from "../assets/VFilmsLogo.png";
import { motion } from "framer-motion";
import { circularMotion, slideInFromBottom } from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full h-full">
      <div className="flex items-center justify-center h-[100vh] w-full">
        <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] xxs:w-[100%]  sm:flex-col  md:flex-row md:flex items-center justify-between  ">
          <div className="2xl:w-[40%] xl:w-[35%] lg:w-[42%] md:w-[46%] sm:w-[100%]  items-center flex justify-center relative xs:mt-9">
            <motion.img
              alt="flower"
              src={flower}
              className="2xl:w-[565px] 2xl:h-[565px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] sm:w-[380px] sm:h-[380px] xs:w-[350px] xs:h-[350px] xxs:w-[230px] xxs:h-[230px] z-0 max-w-full "
              variants={circularMotion}
              initial="hidden"
              animate="visible"
            />
            <img
              alt="logo"
              src={logo}
              className="2xl:w-[388px] 2xl:h-[150px] xl:w-[300px] xl:h-[100px] lg:w-[250px] lg:h-[90px] md:w-[200px] md:h-[70px] sm:w-[230px] sm:h-[110px] xs:w-[190px] xs:h-[80px] xxs:w-[120px] xxs:h-[50px] absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 lg:top-1/3 lg:left-[10%] lg:-translate-x-1/6 lg:-translate-y-1/6 md:top-[40%] md:left-[30%] md:-translate-x-1/4 md:-translate-y-1/4 max-w-full object-contain "
            />
          </div>

          <div className="xl:w-[50%] lg:w-[46%] md:w-[47%] h-full flex flex-col items-center justify-between md:gap-y-16 sm:gap-y-7 xxs:gap-y-4 xs:gap-5 sm:mt-20 xs:mt-12 xxs:mt-9">
            <motion.h1
              ref={ref}
              variants={slideInFromBottom(0.25)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-island text-[#0F3255] 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl xxs:text-2xl sm:w-[75%] xs:w-[65%] xxs:w-[60%] text-center "
            >
              Varnan is where stories find their voice and form
            </motion.h1>
            <h2 className="text-[#F15D2B] 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl xs:text-2xl xxs:text-lg">
              Films . Brands . Art
            </h2>
            <p className="text-center 2xl:text-lg xl:text-base lg:text-sm sm:text-xs sm:w-[75%] xs:text-[12px] xs:w-[75%] xxs:w-[75%] xxs:text-[10px]">
              Since 2009, V’ve been telling stories - stories of people, their
              journeys, and the places that shape them. Some begin in polished
              boardrooms, others in humble village squares. But every story
              starts the same way - by listening with intention. V believes it
              takes trust, patience, and an eye for the unseen to capture what
              truly matters. V doesn’t just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
