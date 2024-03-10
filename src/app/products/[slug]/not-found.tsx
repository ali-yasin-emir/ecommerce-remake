"use client";

import notFoundImg from "@/../public/not-found.gif";
import Image from "next/image";

const NotFound = () => {
  return (
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <h1 className="text-6xl text-white">Not Found</h1>
        <Image
          src={notFoundImg}
          className="w-[1040px] h-[440px]  object-cover rounded-2xl"
          alt="error img"
        />
      </div>
  );
};

export default NotFound;
