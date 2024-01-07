"use client";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromRight } from "@/utils/motion";
import { Puff } from "react-loader-spinner";
import { Toaster, toast } from 'sonner'

const Forms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactinfo: "",
    message: "",
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
     const response = await fetch("/api/formroute", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) { // Check if submission was successful
        // Reset formData to initial values
        setFormData({
          name: "",
          contactinfo: "",
          message: "",
        });
        toast.success('Message Sent !')
    
    
      }
  
      setIsLoading(false);

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <section className=" flex flex-col gap-20 py-10 pb-32 max-container padding-container">
      <Toaster
      expand={true}
      position="top-center"
      />
      <TransitionEffect />
      <form
        className="justify-center items-start gap-10 get-app"
        onSubmit={handleSubmit}
      >
        <motion.div
          className="flex gap-2 "
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromRight(1.5)}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            className="border rounded-md w-auto pl-1 text-green-50"
          />
        </motion.div>

        <motion.div
          className="flex gap-2"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromRight(1.7)}
        >
          <label htmlFor="contact">Contact Info:</label>
          <input
            type="text"
            id="contactinfo"
            value={formData.contactinfo}
            onChange={handleInputChange}
            name="contactinfo"
            className="border rounded-md w-auto pl-1 text-green-50"
          />
        </motion.div>

        <motion.div
          className="flex gap-2"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromRight(1.9)}
        >
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            name="message"
            className="border rounded-md w-auto pl-1 text-green-50"
          />
        </motion.div>

        {isLoading ? (
          <Puff height="80" width="80" radius="9" color="green" />
        ) : (
          <motion.input
            type="submit"
            className="bg-green-50 p-1 px-2 text-white rounded-2xl cursor-pointer"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromRight(2.2)}

          ></motion.input>
        )}
      </form>
    </section>
  );
};

export default Forms;
