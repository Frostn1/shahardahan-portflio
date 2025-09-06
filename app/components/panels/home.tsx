// import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
const Home = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["home"];
}) => {
  return (
    <div
      id={"welcome"}
      className="h-full flex flex-col p-5 sm:p-30 justify-center group relative w-full gap-20 lg:gap-30 items-center rounded-lg"
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />

      <div className="text-4xl lg:text-6xl text-center text-wrap">
        {dictionary.name}
        <br />
        {dictionary.title}
      </div>
      <div className="text-(--sub-header) text-xl lg:text-2xl text-center whitespace-pre-line">
        {dictionary.visionDescription}
      </div>
    </div>
  );
};

export default Home;
