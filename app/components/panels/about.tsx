import { getDictionary } from "@/lib/get-dictionary";
import Me from "@/[lang]/assets/me.jpeg";
import parse from "html-react-parser";
import Link from "next/link";
import { Button } from "../ui/button";
import CarouselPlugin from "../ui/animated-carousel";

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["about"];
}) => {
  return (
    <div className="grid md:grid-cols-5 gap-5 ">
      <CarouselPlugin className={"col-span-3"} />
      <div className="col-span-2 whitespace-pre-line flex flex-col justify-around gap-10 self-center text-wrap w-[80%] text-lg lg:text-xl">
        {parse(dictionary.description)}
      </div>
    </div>
  );
};

export default About;
