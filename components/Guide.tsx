import React from "react";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24">
        <Image src={"/camp.svg"} alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">WE ARE HERE FOR YOU</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You To Easy Path</h2>
        <p>hnasoifhasiohfiodshf sdf hsdiof sdiof hsdio hfiosdhf oisdh fosdh foisdh fiosdh fiohs doifhdshf osdhf osdh fiosdh ofisdh fiosd hio sdio hfiosd hiosd hfio  io hoih iohiohiohiohiohiohiohiohiohuiotguiguigivcbfghgfggioggyuiguiguiguigigougiugiguigig uiguiguioguig uiguiogu</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
