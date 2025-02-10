import React from "react";
import HeroVideoDialog from "../magicui/hero-video-dialog";

interface SingleServiceProps {
  name: string;
  description: string;
  image: string;
  video?: string;
}

const SingleService: React.FC<SingleServiceProps> = ({
  name,
  description,
  image,
  video,
}) => {
  return (
    <div
      className={
        "flex flex-row justify-between rounded-3xl box-border text-right transition duration-500 transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      }
    >
      <div className="p-3 box-border max-w-[63%] flex flex-col gap-1">
        <h1 aria-label={name} className="text-[16px] md:text-xl">{name}</h1>
        <p
          dir="rtl"
          className="text-(--subtext) text-[15px] sm:text-md max-w-sm md:text-md text-wrap"
        >
          {description}
        </p>
      </div>
      {video ? (
        <HeroVideoDialog
          className="col-start-1 col-end-1 row-span rounded-3xl z-20"
          thumbnailClassName="w-30 h-30 md:h-40 md:w-40 lg:w-70 lg:h-70"
          animationStyle="from-center"
          videoSrc={video}
          thumbnailSrc={image}
          thumbnailAlt="Video"
        />
      ) : (
        <img
          className="col-start-1 col-end-1 row-span rounded-3xl w-30 h-30 md:h-40 md:w-40 lg:w-70 lg:h-70"
          src={image}
          alt="Image was here"
        />
      )}

      {/*  */}
    </div>
  );
};

export default SingleService;
