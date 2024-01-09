"use client";
import { ABout, ProgramFlow } from "@/contants";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromRight } from "@/utils/motion";
import TransitionEffect from "@/components/TransitionEffect";
const HowHiLink = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once when the element becomes visible
  });

  return (
    <motion.section
      className="padding-container max-container  gap-20 py-10 pb-32 md:gap-28 lg:py-20"
      initial="hidden"
      animate="visible"
    >
      <TransitionEffect />
      <div className="max-container bg-feature-bg  h-auto flex flex-col padding-container relative w-full justify-end sm:flex-row">
        {/*Left Container*/}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="bold-52 lg:bold-88">
            How{" "}
            <span className="font-bold">
              Hi<span className="text-green-50">Link</span>{" "}
            </span>{" "}
            works
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            HILInk offers a range of features that enhance the camping
            experience:
          </p>
        </div>

        <div className="border h-auto  max-h-min flex flex-col border-green-50  sm:mx-3 my-8" />

        {/*Right Container */}
        <div className="w-full ">
          <div className="flex flex-col sm: gap-10 lg:gap-20 sm:pl-5 lg:pl-20">
            {ABout.map((list, index) => (
              <ul key={index}>
                <motion.p
                  className="regular-16 mt-6 text-gray-30 "
                  initial="hidden"
                  animate="visible"
                  variants={slideInFromRight(Number(list.duration))}
                >
                  <span className="font-bold">{list.title}</span>:{" "}
                  {list.description}
                </motion.p>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className=" lg:pt-60 padding-container max-container flex text-center py-40  md:gap-28 lg:py-20">
        <div className="flexCenter">
          {/*Left Image*/}
          <motion.div
            className="mx-auto hidden lg:flex px-10"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom(0.7)}
          >
            <Image src={"/cloud_3.svg"} width={200} height={40} alt="cloud" />
          </motion.div>
          <div>
            <motion.h1
              ref={ref}
              className="text-2xl"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromBottom(0.5)}
            >
              Prepare to fall in love.{" "}
              <span className="font-bold">
                Hi<span className="text-green-50">Link</span>{" "}
              </span>{" "}
              makes online Navigation easy and delightful for everyone. And it
              takes just minutes to get started.{" "}
            </motion.h1>
          </div>

          {/*Right Image*/}
          <motion.div
            className="mx-auto  hidden lg:flex px-10"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom(0.7)}
          >
            <Image src={"/cloud_4.svg"} width={200} height={40} alt="cloud" />
          </motion.div>
        </div>
      </div>

      {/*Another Section*/}
      <div className="border bg-gray-20" />

      <div className=" lg:pt-60 padding-container max-container py-40  md:gap-28 lg:py-20 ">
        <div className="flex flex-col gap-20 lg:gap-64  relative ">
          <div className="flex flex-col justify center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full  z-10">
            <div className="flex flex-col border border-gray-50 border-dotted h-full z-[10]" />
          </div>

          {ProgramFlow.map((flow, index) => (
            <div
              className="px-1 relative py-10 flexCenter flex-col sm:flex-row gap-5 border border-black bg-white rounded-lg z-[20] lg:gap-20 "
              key={index}
            >
              <div className="absolute border border-green-500 bg-green-50 px-8 py-6 rounded-full -top-12">
                <p className="text-2xl font-bold ">{index + 1}</p>
              </div>

              <Image
                src={flow.image}
                width={500}
                height={500}
                alt=""
                className="rounded-2xl flex"
              />
              <div className="flex gap-10 lg:gap-20 flex-col text-center px-5 justify-center items-center">
                <span className="max-w-[200px] bold-20 lg:bold-32 mt-5 capitalize">
                  <h2 className="text-2xl lg:text-4xl">{flow.title}</h2>
                </span>
                <p className="regular-16 mt-6 text-gray-30 max-w-[400px]">
                  {flow.desription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};



export default HowHiLink;
