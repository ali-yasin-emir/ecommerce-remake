"use client";

import errorImg from '../../public/error.gif'
import Image from "next/image";

const Error = () => {
  return (
    <div className="bg-[#0C0B22] h-full flex justify-center pb-[241px]">
      <div className="w-[1040px] scroll-y-b h-[440px] mt-48 flex flex-col justify-center items-center relative">
        <Image fill src={errorImg} className="object-cover rounded-2xl" alt="error img"/>
      </div>
    </div>
  );
};

export default Error;
