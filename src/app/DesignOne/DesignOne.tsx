import React from "react";
import Image from "next/image";
import img from "../image/img.jpg";
const DesignOne = () => {
  return (
    <>
      <main className="flex h-screen">
        <div className=" w-[70%]  flex justify-center items-center">
          <div className=" ">
            <p className="font-serif m-10 text-2xl text-orange-600">
              Next Js Developer.
            </p>
            <h1 className="text-6xl font-bold font-serif m-10 text-blue-800">
              I'm Full Stack Developer <br />
              Nehal Tariq{" "}
            </h1>
            <p className="font-serif m-10 text-2xl">
              {" "}
              Hello! I'm Nehal Tariq, a passionate Full Stack Developer with a
              love for creating dynamic and responsive web applications. I have
              experience in various technologies including React, Next.js, and
              Tailwind CSS. I enjoy solving complex problems and continuously
              learning new skills to improve my craft.
            </p>
          </div>
        </div>

        <div className=" w-1/2 flex justify-center items-center ">
          <div className="mr-16 w-fit">
            {" "}
            <Image
              src={img}
              alt="Profile Picture"
              className=""
              width={1000}
              height={500}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default DesignOne;
