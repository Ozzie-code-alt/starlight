import React from "react";
import Image from "next/image";
import Buttons from "./Buttons";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
} from "@/utils/motion";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      <motion.div className="relative z-20 flex-1 flex-col xl:w-1/2"
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(1.5)}
      >
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px]  w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putok Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          we want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help ypi on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map(
                (
                  _,
                  index // very interesting way to loop something dynamically
                ) => (
                  <Image
                    src={"/star.svg"}
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                )
              )}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70 dark:text-white">198k</p>
          <span className="regular-16 lg:regular-20 ml-1">
            Excellent Reviews
          </span>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Buttons type="button" title="Download App" variant="btn_green" />
          <Buttons
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </motion.div>

      <motion.div className="relative flex flex-1 items-start "
               initial="hidden"
               animate="visible"
               variants={slideInFromBottom(1.5)}
      >
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-gray-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={"/close.svg"} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Philippines </p>
            </div>




            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">178.28mi</p>
              </div>

              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040km</p>
              </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
