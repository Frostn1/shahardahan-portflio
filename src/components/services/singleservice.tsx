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
        "flex flex-col gap-2 items-end rounded-3xl p-4 box-border text-right transition duration-500 hover:-translate-y-3 transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      }
    >
      <div className="font-bold">{name}</div>
      <div className="text-(--subtext) max-w-sm text-wrap">{description}</div>
      <img src={image} alt="Image was here" />
    </div>
  );
};

export default SingleService;
