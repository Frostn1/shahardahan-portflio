import React from "react";

interface PageProps {
  children: React.ReactNode;
  id: string;
}

const Page: React.FC<PageProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      className={
        "relative flex flex-col gap-10 place-items-left box-border sm:p-10 md:p-20 xl:p-30 !pt-20"
      }
    >
      {children}
    </div>
  );
};

export default Page;
