import React from "react";
import Image from "next/image";
import { FEATURES } from "@/contants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once when the element becomes visible
  });

  return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg bg-center dark:bg-white mb-20 mt-20 bg-no-repeat py-24">
      <div className="max-container flex padding-container relative w-full justify-end ">
        <div className="flex flex-1 lg:min-h-[900px] ">
          <Image
            src={"/phone.png"}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative ">
            <Image
              src={"/camp.svg"}
              width={50}
              height={50}
              alt="camp"
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <motion.h2 className="bold-40 lg:bold-64 dark:text-black"
             ref={ref}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={slideInFromTop}
            >
              Our Feartures
            </motion.h2>
          </div>

          <ul  className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
          
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 dark:text-black flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} width={28} height={28} alt="icon" />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="relaagular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
    </li>
  );
};

export default Features;
