import React from "react";
import Buttons from "./Buttons";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  slideInFromBottom,
} from "@/utils/motion";

const GetApp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once when the element becomes visible
  });
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <motion.div className="get-app"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromBottom(0.5)}>
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for Free Now</h2>
          <p className="regular-16 text-gray-10">Available on IOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Buttons type="button"
            title="Download App"
            icon="/apple.svg"
            variant="btn_white"
            full
            />
          
            <Buttons type="button"
            title="Download App"
            icon="/android.svg"
            variant="btn_dark_green_outline"
            full
            />
          
          </div>
        </div>


        <div className="flex flex-1 items-center justify-end">
            <Image
            src={"/phones.png"}
            alt="phone"
            width={550}
            height={870}
            />
        </div>
      </motion.div>
    </section>
  );
};

export default GetApp;
