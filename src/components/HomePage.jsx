import React from "react";
import flower from "../assets/flower.png";
import logo from "../assets/VFilmsLogo.png";
import stickyNote from "../assets/note.png";
import IndiaGate from "../assets/IndiaGate.png";
import people from "../assets/people.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import house from "../assets/house.png";
import line from "../assets/line.png";
import film from "../assets/film.png";
import branding from "../assets/branding.png";
import art from "../assets/art.png";
import { Link } from "react-router-dom";
import border from "../assets/border.png";
import portfolio from "../assets/portfolio.png";
import camera from "../assets/camera.png";
import ring from "../assets/ring.png";
import { motion } from "framer-motion";
import { circularMotion } from "../utils/motion.ts";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
  const services = [
    {
      name: "Film Production",
      link: "/",
      image: film,
    },
    {
      name: "Branding",
      link: "/",
      image: branding,
    },
    {
      name: "Art Curation",
      link: "/",
      image: art,
    },
  ];

  return (
    <div className="horizontal-scroller">
      {/* Hero Section */}
      <section className="page">
        <div className="flex items-center justify-center h-[100vh] w-full">
          <div className="w-[80%] flex items-center justify-between ">
            <div className="w-[35%] relative">
              <motion.img
                alt="flower"
                src={flower}
                className="w-[565px] h-[565px] z-0 max-w-full "
                variants={circularMotion}
                initial="hidden"
                animate="visible"
              />
              <img
                alt="logo"
                src={logo}
                className="w-[388px] h-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full object-contain"
              />
            </div>

            <div className="w-[50%] flex flex-col items-center justify-between">
              <h1 className="font-custom1 text-[#0F3255] ">
                Varnan is where stories find their voice and form
              </h1>
              <h2 className="text-[#F15D2B]">Films . Brands . Art</h2>
              <p className="text-center">
                Since 2009, V’ve been telling stories ...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About team */}
      <section className="page">
        <div className="flex items-center justify-center h-[100vh] w-full relative">
          <img
            alt="note"
            src={stickyNote}
            className="z-50 absolute top-0 left-32 w-[580px] h-[495px] max-w-full object-contain"
          />
          <img
            alt="India Gate"
            src={IndiaGate}
            className="absolute bottom-5 left-5 w-[342px] h-[342px] max-w-full object-contain"
          />

          <div className="w-[97%] h-[85%] flex items-center justify-end">
            <div className="flex flex-col items-center justify-between gap-y-4 relative">
              <img
                alt="people"
                src={people}
                className="min-w-[70%] h-auto z-[1] max-w-full object-contain"
              />
              <p> Take a closer look at the stories V bring to life.</p>
              <button className="bg-[#F15D2B] rounded-full p-3">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="page relative">
        {/* Container */}
        <div className="w-[80%] h-[100vh] flex items-center justify-between ">
          {/* Left Section -> Text */}
          <div className="w-[47%] h-[50%] flex flex-col items-center justify-between">
            <h1>A montage of familiar faces and names.</h1>

            <p>
              Some stories come from the biggest names. Others begin with bold,
              rising voices. We’ve been fortunate to walk alongside both -
              listening, creating, and building stories that matter.
            </p>

            <div className="w-full flex items-center pl-20 ">
              <img
                alt="card2"
                src={card2}
                className="w-[235px] h-[235px] z-0 "
              />
              <img
                alt="card1"
                src={card1}
                className="w-[235px] h-[235px] -translate-x-20 z-[2]"
              />
              <img
                alt="card3"
                src={card3}
                className="w-[235px] h-[235px] -translate-x-44 z-[3] "
              />
            </div>
          </div>
          {/* Right Section -> Image */}
          <div className="w-[47%] h-[50%] flex flex-col items-center justify-start">
            <h1 className="font-island text-7xl text-centre ">
              Every project is more than just a brief - it’s a new chapter
              waiting to be written. Together, we've crafted tales that inspire,
              connect, and endure.
            </h1>
          </div>
        </div>

        {/* bottom image */}
        <div className="absolute bottom-0 right-0">
          <img alt="house" src={house} />
        </div>
      </section>

      {/* Services */}
      <section className="page relative">
        <div className="h-[100vh] w-[75%] flex items-center justify-center">
          <div className="h-[80%] w-full flex flex-col items-center justify-start  gap-y-2">
            <h1 className="pt-5">
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
                  <img
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
          className="absolute bottom-0 left-0 w-full h-[113px]"
        />
      </section>

      {/* portfolio */}
      <section className="page relative">
        <div className="h-[100vh] w-[75%] flex items-center justify-center">
          {/* camera image */}
          <img
            alt="camera"
            src={camera}
            className="-translate-x-10 -translate-y-5"
          />
          <div className="h-[80%] w-full flex flex-col items-center justify-start  gap-y-2">
            <h1 className="text-4xl">The Highlight Reel</h1>
            <h2 className="text-2xl">Watch the magic we’ve captured.</h2>

            {/* portfolio image */}
            <img
              alt="portfolio"
              src={portfolio}
              className="mt-16 h-[500px] w-[881px] cursor-pointer transition-all duration-150 ease-in-out"
            />
          </div>
        </div>

        {/* ring */}
        <img
          alt="ring"
          src={ring}
          className="absolute -bottom-[650px] -right-[500px]"
        />
      </section>

      {/* Contact us */}
      <section className="page">
        <div className="h-[100vh] w-[75%] flex items-center justify-center">
          <div className="w-full h-[75%] flex items-center justify-between">
            <p className="text-center w-[40%]">
              Whether you have an idea, a question, or simply want to explore
              how we can work together, we’re just a message away. Let's catch
              up over coffee. Great stories always begin with a good
              conversation.
            </p>

            {/* form  */}
            <div className="w-[55%] flex flex-col items-center justify-between">
              <h1>Join the story</h1>
              <h2>Ready to bring your vision to life? Let’s talk.</h2>
              {/* 
              <form className="w-full flex flex-col items-center gap-y-4">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your name*"
                  required
                  className="bg-white focus:outline-none w-full p-2 text-2xl rounded-lg"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your email*"
                  className="bg-white focus:outline-none w-full p-2 text-2xl rounded-lg"
                />
                <input
                  type="number"
                  name="user_phone"
                  placeholder="Phone"
                  className=" focus:outline-none w-full p-2 text-2xl rounded-lg"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message*"
                  required
                  className="bg-white focus:outline-none w-full p-2 text-2xl rounded-lg"
                />
              </form> */}

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
