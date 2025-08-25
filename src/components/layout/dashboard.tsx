import { BlurFade } from "@/components/magicui/blur-fade";
import LazyLoad from "react-lazyload";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Page from "../pages/page";
import Footer from "./footer";
import { Offer, OfferInterface, OfferRibbon } from "../pages/offer";
import { Cpu, SquareChartGantt } from "lucide-react";

const offers: OfferInterface[] = [
  {
    name: "offer1",
    icon: <SquareChartGantt />,
    image: "trainingpeaks-graph.png",
  },
  { name: "offer2", icon: <Cpu />, image: "trainingpeaks-main.png" },
];

const pages = [
  {
    El: <Home />,
    id: "home",
  },
  {
    El: <OfferRibbon offer={offers[0]} />,
    id: "offer1",
    bgColor: "bg-ribbon",
  },
  {
    El: <OfferRibbon offer={offers[1]} />,
    id: "offer2",
  },
  {
    El: <Contact />,
    id: "contact",
    bgColor: "bg-ribbon",
  },
];

export const Dashboard = () => {
  return (
    <div className="h-full w-full ">
      <div className={"h-screen no-scrollbar scroll-auto"}>
        {pages.map(({ El, id, bgColor }, idx) => (
          <LazyLoad>
            <Page key={id} id={id} bgColor={bgColor} className="z-10">
              <BlurFade
                className="relative h-[100%]"
                key={id}
                delay={0.25 + idx * 0.05}
                inView
              >
                {El}
              </BlurFade>
            </Page>
          </LazyLoad>
        ))}
        <Footer className="z-20 bottom-0 w-full" />
      </div>
    </div>
  );
};
