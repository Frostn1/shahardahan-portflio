import { getDictionary } from "@/lib/get-dictionary";
import React = require("react");

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["about"];
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-(--sub-header) text-xl lg:text-2xl text-center whitespace-pre-line">
        About me
      </div>
    </div>
  );
};

export default About;
