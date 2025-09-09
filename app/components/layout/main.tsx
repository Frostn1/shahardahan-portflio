import { BlurFade } from "@/components/magicui/blur-fade";
import Panel from "../panels/panel";
import Footer from "./footer";
import { getDictionary } from "../../lib/get-dictionary";
import { panels } from "./panels";

export const Main = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"];
}) => {
  return (
    <div className="h-full w-full ">
      <div className={"h-screen no-scrollbar scroll-auto"}>
        {panels.map(({ El, id }, idx) => (
          <Panel key={id} id={id} className="z-10">
            <BlurFade
              className="relative h-[100%]"
              key={id}
              delay={0.25 + idx * 0.05}
              inView
            >
              <El dictionary={dictionary[id as keyof typeof dictionary]} />
            </BlurFade>
          </Panel>
        ))}
        <Footer />
      </div>
    </div>
  );
};
