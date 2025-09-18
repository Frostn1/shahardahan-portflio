import { getDictionary } from "@/lib/get-dictionary";
import Me from "@/assets/me.jpeg";
import parse from "html-react-parser";

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["about"];
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-5 ">
      <img src={Me.src} />
      <div className="whitespace-pre-line self-center text-wrap w-[80%] text-lg lg:text-xl">
        {parse(dictionary.description)}
      </div>
    </div>
  );
};

export default About;
