import React from "react";

import ContactForm from "../components/ContactForm";
import AboutTeam from "./AboutTeam.jsx";
import AboutUs from "./AboutUs.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import HeroSection from "./HeroSection.jsx";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About team */}

      <AboutTeam />

      {/* About us */}
      <AboutUs />

      {/* Services */}
      <Services />

      {/* portfolio */}
      <Portfolio />

      {/* Contact us */}
      <section id="contact" className="w-full h-full mx-auto mt-60">
        <div className="h-[100vh] 2xl:w-[97%] md:w-[90%]  flex  items-center justify-between mx-auto">
          <div className="w-full h-[75%] flex md:flex-row xxs:flex-col items-center justify-between">
            <div className="w-[55%] gap-y-3 flex flex-col items-center justify-center  ">
              <p className="text-left md:w-[70%] xxs:w-full lg:text-2xl md:text-xl">
                Whether you have an idea, a question, or simply want to explore
                how we can work together, we’re just a message away.
              </p>
              <p className="text-left md:w-[70%] xxs:w-full  lg:text-2xl md:text-xl">
                Let's catch up over coffee. Great stories always begin with a
                good conversation.
              </p>
            </div>

            <div className="w-[55%] flex flex-col items-center justify-between md:mt-0 xxs:mt-12">
              <div className="flex flex-col items-center justify-between xl:gap-y-5 lg:gap-y-3 ">
                <h1 className="2xl:text-6xl lg:text-3xl xl:text-5xl md:text-2xl sm:text-3xl ">
                  Join the story
                </h1>
                <h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl  2xl:mb-32 xl:mb-20 lg:mb-14 md:mb-10 sm:mb-6 text-center">
                  Ready to bring your vision to life? Let’s talk.
                </h2>
              </div>

              {/* form  */}
              <ContactForm />

              {/* email */}
              <div className="text-[#F15D2B] flex items-center justify-between 2xl:w-[45%] xl:w-[65%] md:w-[70%] xxs:w-full  lg:mt-20 md:mt-10 sm:mt-8 xxs:mt-6 2xl:text-base xl:text-sm lg:text-xs md:text-[12px] xxs:text-[10px] xl:gap-x-2 pb-2">
                <p className="hover:underline cursor-pointer duration-150 ease-in-out transition-all ">
                  vernita@varnanfilms.co.in
                </p>{" "}
                <p>|</p>
                <p className="hover:underline cursor-pointer duration-150 ease-in-out transition-all">
                  +91 98736 84567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
