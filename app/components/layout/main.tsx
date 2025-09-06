import { BlurFade } from "@/components/magicui/blur-fade";
import Home from "../panels/home";
import Contact from "../panels/contact";
import Panel from "../panels/panel";
import Footer from "./footer";
import Offer from "../panels/offer";
import { getDictionary } from "../../lib/get-dictionary";
import About from "../panels/about";

interface PanelInterface<> {
  El: React.ComponentType<{
    dictionary: any;
  }>;
  id: string;
  bgColor?: string;
}

const pages: PanelInterface[] = [
  {
    El: Home,
    id: "home",
  },
  {
    El: About,
    id: "about",
  },
  {
    El: Offer,
    id: "offer",
  },
  {
    El: Contact,
    id: "contact",
    bgColor: "bg-ribbon",
  },
];

export const Main = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"];
}) => {
  return (
    <div className="h-full w-full ">
      <div className={"h-screen no-scrollbar scroll-auto"}>
        {pages.map(({ El, id, bgColor }, idx) => (
          <Panel key={id} id={id} bgColor={bgColor} className="z-10">
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
