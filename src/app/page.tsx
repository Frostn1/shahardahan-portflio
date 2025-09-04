import { BlurFade } from "@/components/magicui/blur-fade";
import { Cpu, SquareChartGantt } from "lucide-react";
import { OfferInterface, OfferRibbon } from "@/components/pages/offer";
import Home from "@/components/pages/home";
import Contact from "@/components/pages/contact";
import Page from "@/components/pages/page";
import Footer from "@/components/layout/footer";

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

export function Dashboard() {
  return (
    <div className="h-full w-full ">
      <div className={"h-screen no-scrollbar scroll-auto"}>
        {pages.map(({ El, id, bgColor }, idx) => (
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
        ))}
        <Footer />
      </div>
    </div>
  );
}
