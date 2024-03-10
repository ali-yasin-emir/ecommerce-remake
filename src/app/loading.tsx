import Image from "next/image";
import loadingGif from "@/../public/loading.gif";

const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12">
      <Image
        src={loadingGif}
        className="h-[840px] w-[1040px]  rounded-2xl object-cover"
        alt="error img"
      />
    </div>
  );
};

export default Loading;
