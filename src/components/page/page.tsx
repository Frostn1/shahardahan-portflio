import React from "react";

interface PageProps {
  children: React.ReactNode;
  id: string;
}

const Page: React.FC<PageProps> = ({ children, id }) => {
  return (
    <div
      className={
        "relative flex flex-col gap-10 place-items-left box-border"
      }
    >
      <div id={id} className="absolute -top-[80px]"/>
      {children}
    </div>
  );
};

export default Page;
