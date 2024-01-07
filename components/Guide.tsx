import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  slideInFromRight,
} from "@/utils/motion";

const Guide = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once when the element becomes visible
  });
  return (
    <section className="flexCenter flex-col">
      <motion.div className=" padding-container max-container w-full pb-24"
       ref={ref}
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={slideInFromRight(0.5)}
      >
        <Image src={"/camp.svg"} alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You To Easy Path
          </h2>
          <p>
            hnasoifhasiohfiodshf sdf hsdiof sdiof hsdio hfiosdhf oisdh fosdh
            foisdh fiosdh fiohs doifhdshf osdhf osdh fiosdh ofisdh fiosd hio
            sdio hfiosd hiosd hfio io hoih
            iohiohiohiohiohiohiohiohiohuiotguiguigivcbfghgfggioggyuiguiguiguigigougiugiguigig
            uiguiguioguig uiguiogu
          </p>
        </div>
      </motion.div>

      <div className="flexCenter max-container relative w-full  ">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
        <Image
        src={"/meter.svg"}
        alt="meter"
        width={16}
        height={158}
        className="h-full w-auto"
        />

          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
