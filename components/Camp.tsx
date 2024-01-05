import React from "react";
import Image from "next/image";
import { PEOPLE_URL } from "@/contants";
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Campsite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded=r=5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={"/folded-map.svg"} alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={index}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:m-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Putok Truno Camp"
          subtitle="Progen, Pasuran"
          peopleJoined="50+ join"
        />
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Putok Truno Camp"
          subtitle="Progen, Pasuran"
          peopleJoined="50+ join"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:relar-32 2xl:regular-64 capitalize text-white">
            {" "}
            <strong>Feeling Lost </strong>and Not Knowing the way
          </h2>

          <p className="regular-14 xl:regular-16 mt-5 rext-white">
            dhsuaoidhuashdiouashdioashdioahsdjiaspdjioashioashtrtertreqwndoqwhjeiu
            qwjpeuqwope upasdjpasijfpsdfj r9sdpu fpisduf psdu fpsdu fopidsufp
            sdufop sdufopsd fopsdu fopsdu pfusdop fusdopfu sdopf sdpof uopsd
            fuopsd fuposdu fpos updos fuposd ufopsd uopsduopf sudop
          </p>
          <Image
            src={"/quote.svg"}
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
