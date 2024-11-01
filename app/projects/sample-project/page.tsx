import Image from "next/image";
import img1 from "@/images/image 33 copy.png";
import img2 from "@/images/image 34.png";
import img3 from '@/images/image 35.png'
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="pl-6 sm:pl-14 md:pl-28 lg:pl-40 text-2xl md:text-5xl mb-6 text-gray-400">
        Our
        <br /> <span className="text-black font-semibold">Projects</span>{" "}
      </h1>
      <div className="flex flex-col  items-center gap-10 w-[100%]">
        <div className="h-[2px] bg-gray-400 w-[90%]"></div>
        <div className="flex flex-col items-center w-[90%] gap-5">
        <div className="fade-in">
          <Image src={img1} alt="image" />
        </div>
        <div className="flex lg:flex-row flex-col w-[100%] items-center lg:justify-center gap-3">
          <Image src={img2} alt="image2" className="fade-in2" />
          <p className="w-[100%] lg:w-[700px] fade-in2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with.
          </p>
        </div>
        <div className="fade-in2">
            <Image src={img3} alt="image"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
