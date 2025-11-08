import React from "react";
import people from "../assets/people.png";
import stickyNote from "../assets/note.png";
import { circularMotion } from "../utils/motion.ts";
import { motion } from "framer-motion";
import company from "../assets/company.png";

const AboutTeam = () => {
  return (
    <section
      id="theirStory"
      className="h-full w-full mt-32 flex flex-col items-center justify-center gap-y-20 mb-20"
    >
      <div className="flex lg:flex-row xxs:flex-col items-center justify-between h-full w-[90%] mx-auto ">
        <img
          alt="note"
          src={stickyNote}
          className="z-50  lg:min-w-[430px] lg:min-h-[550px] md:w-[350px] md:h-[450px] sm:w-[300px] sm:h-[400px] xs:w-[250px] xs:h-[350px] xxs:w-[200px] xxs:h-[300px] object-contain "
        />

        <div className="w-[97%] h-[85%] flex items-center justify-end">
          <div className="flex flex-col items-end  justify-between gap-y-4 relative">
            <img
              alt="people"
              src={people}
              className=" xl:min-w-[1000px] xl:min-h-[800px] lg:w-[480px] lg:h-[395px] xxs:w-full  object-contain"
            />
            <div className="2xl:w-full xl:w-[70%] md:w-full flex flex-col items-center justify-between gap-y-4">
              <p className="lg:text-3xl sm:text-xl xxs:text-sm">
                {" "}
                Take a closer look at the stories V bring to life.
              </p>
              <a href="/#varnan" className="bg-[#F15D2B] rounded-full p-3">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* company */}
      <motion.img
        alt="company"
        src={company}
        className="2xl:w-[565px] 2xl:h-[565px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] sm:w-[380px] sm:h-[380px] xs:w-[350px] xs:h-[350px] xxs:w-[230px] xxs:h-[230px] z-0 max-w-full "
        variants={circularMotion}
        initial="hidden"
        animate="visible"
      />
    </section>
  );
};

export default AboutTeam;
