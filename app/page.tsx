"use client"
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  return (
    <>
    <TransitionEffect/>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    </>
  )
}
