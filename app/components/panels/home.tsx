// import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
const Home = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["home"];
}) => {
  return (
    <div
      id={"welcome"}
      className="h-full flex flex-col p-5 md:p-30 md:pb-5 justify-center group relative w-full gap-5 md:gap-18 items-center"
    >
      <DotPattern
        width={15}
        height={15}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />

      <div className="text-2xl md:text-4xl lg:text-6xl text-center text-wrap">
        {dictionary.name}
        <br />
        {dictionary.title}
      </div>
      <div className="text-(--sub-header) text-lg lg:text-2xl text-center w-fit whitespace-pre-line">
        {dictionary.visionDescription}
      </div>
    </div>
  );
};

export default Home;
