import React from "react";
import line from "../assets/line.png";
import film from "../assets/film.png";
import branding from "../assets/branding.png";
import art from "../assets/art.png";
import { Link } from "react-router-dom";
import border from "../assets/border.png";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const services = [
    {
      name: "Film Production",
      link: "/services/film-production",
      image: film,
      variants: slideInFromLeft(0.35),
    },
    {
      name: "Branding",
      link: "/services/branding",
      image: branding,
      variants: slideInFromBottom(0.25),
    },
    {
      name: "Art Curation",
      link: "/services/art-curation",
      image: art,
      variants: slideInFromRight(0.45),
    },
  ];

  return (
    <section id="services" className="w-full h-full mt-60">
      <div className="h-full w-[80%] flex items-center justify-evenly mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-y-2">
          <h1 className="pt-5 lg:text-4xl md:text-3xl xs:text-xl xxs:text-lg">
            The storyboard reveals the breadth of our craft.
          </h1>
          <img alt="line" src={line} className="w-[880px] h-[28px]" />

          {/* Service Cards */}
          <div className="w-full flex items-center justify-between px-2">
            {services.map((service) => (
              <Link
                to={service.link}
                key={service.name}
                className="w-[30%] h-[70%]  cursor-pointer"
              >
                <motion.img
                  ref={ref}
                  variants={service.variants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <img
        alt="border"
        src={border}
        className=" w-full lg:h-[113px] sm:h-[60px] xxs:h-[40px]"
      />
    </section>
  );
};

export default Services;
