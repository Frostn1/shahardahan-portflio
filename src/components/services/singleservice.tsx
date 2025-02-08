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
    <div className={"w-2xl"}>
      <div>{name}</div>
      <div className="text-(--subtext)">{description}</div>
      <img src={image} alt="Image was here" />
    </div>
  );
};

export default SingleService;
