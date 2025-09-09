import { getDictionary } from "@/lib/get-dictionary";
import Me from "@/assets/me.jpeg";

const About = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["about"];
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <img className="" src={Me.src} />
      <div className="whitespace-pre-line text-wrap w-[80%]">
        {dictionary.description}
      </div>
    </div>
  );
};

export default About;
