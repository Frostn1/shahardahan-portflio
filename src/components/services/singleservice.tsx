import React from "react";

interface SingleServiceProps {
  name: string;
  description: string;
  image: string;
}

const SingleService: React.FC<SingleServiceProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div
      className={
        "flex flex-row-reverse justify-between rounded-3xl box-border text-right transition duration-500 hover:-translate-y-3 transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      }
    >
      <div className="p-4 box-border max-w-[60%] flex flex-col gap-2">
        <div className="text-sm md:text-md">{name}</div>
        <div
          dir="rtl"
          className="text-(--subtext) text-xs sm:text-md max-w-sm text-wrap"
        >
          {description}
        </div>
      </div>
      <img
        className="col-start-1 col-end-1 row-span rounded-3xl w-30 h-30 md:h-40 md:w-40"
        src={image}
        alt="Image was here"
      />
    </div>
  );
};

export default SingleService;
