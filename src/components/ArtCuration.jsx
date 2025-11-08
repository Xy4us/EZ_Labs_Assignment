import React from "react";
import line from "../assets/line.png";
import artcuration from "../assets/artcuration.png";
import { Link } from "react-router-dom";

const ArtCuration = () => {
  return (
    <section className="w-full h-[100vh] xxs:overflow-y-auto lg:overflow-y-hidden flex items-center justify-center flex-col ">
      {/* heading */}
      <div className=" flex items-center justify-between flex-col xxs:mt-36">
        <h1 className="pt-5 xl:text-4xl   lg:text-2xl md:text-xl sm:text-lg xs:text-base xxs:text-sm">
          "V take art where it belongs, to the people.” - Vernita Verma
        </h1>
        <img
          alt="line"
          src={line}
          className="xl:w-[880px] lg:w-[600px] md:w-[460px] sm:w-[360px] xs:w-[260px] xxs:w-[160px]  h-[28px]"
        />
      </div>
      <div className="xl:w-[70%] lg:w-[80%] md:w-[95%] xxs:w-[90%]  md:flex-row xxs:flex-col  mx-auto flex items-center justify-between lg:gap-x-14 ">
        {/* image */}
        <div className="w-[100%] xxs:flex xxs:items-center xxs:justify-center">
          <img
            alt="Film Production"
            src={artcuration}
            className="lg:min-w-[430px] lg:min-h-[550px] md:w-[350px] md:h-[450px] sm:w-[300px] sm:h-[400px] xs:w-[250px] xs:h-[350px] xxs:w-[200px] xxs:h-[300px] object-contain "
          />
        </div>

        {/* text */}
        <div className="md:w-full flex flex-col md:item-center justify-center  ">
          <p className="2xl:w-[75%]  lg:w-full   text-2xl">
            Art isn’t meant to sit on distant walls - it’s meant to breathe, to
            travel, to belong. Through every festival, every performance, and
            every gathering, we help stories find their stage and their people.
          </p>

          <h1>V crafts:</h1>
          <ul className="list-disc list-inside">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>
        </div>
      </div>
      <Link to="/" className="bg-[#F15D2B] rounded-full p-3 px-5">
        Back
      </Link>
    </section>
  );
};

export default ArtCuration;
