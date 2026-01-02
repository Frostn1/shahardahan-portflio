import { getDictionary } from "@/lib/get-dictionary";
import parse from "html-react-parser";
import CarouselPlugin from "../ui/animated-carousel";

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["about"];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 ">
      <CarouselPlugin className={"sm:col-span-2"} />
      <div className="sm:col-span-3 whitespace-pre-line gap-10 self-center text-wrap text-lg lg:text-xl">
        {parse(dictionary.description)}
      </div>
    </div>
  );
};

export default About;
