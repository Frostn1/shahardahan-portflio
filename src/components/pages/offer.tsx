import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Cpu, SquareChartGantt } from "lucide-react";
import { ReactElement } from "react";

export interface BoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
function Box({ title, description, icon }: BoxProps) {
  return (
    <Card className="bg-gray-800 text-gray-300 w-full hover:brightness-110 transition-all duration-300 ease-in-out">
      <CardHeader className="flex flex-row">
        {icon}
        <CardTitle className="text-lg md:text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-md">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
export interface OfferInterface {
  name: string;
  icon: ReactElement;
  image: string;
}
const offers: OfferInterface[] = [
  {
    name: "offer1",
    icon: <SquareChartGantt />,
    image: "trainingpeaks-graph.png",
  },
  { name: "offer2", icon: <Cpu />, image: "trainingpeaks-main.png" },
];

interface OfferRibbonProps {
  offer: OfferInterface;
}

export function OfferRibbon({ offer }: OfferRibbonProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 gap-10 items-start">
      <Box
        title={t(`pages.offer.${offer.name}.title`)}
        description={t(`pages.offer.${offer.name}.description`)}
        icon={offer.icon}
      />
      <img src={offer.image} />
    </div>
  );
}
export function Offer() {
  return (
    <div className="h-full grid grid-rows-2 gap-10">
      {offers.map((offer) => (
        <OfferRibbon offer={offer} />
      ))}
    </div>
  );
}
