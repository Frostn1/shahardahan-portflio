import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Cpu, SquareChartGantt } from "lucide-react";
import { ReactElement } from "react";
import { getDictionary } from "@/lib/get-dictionary";

export interface BoxProps {
  title: string;
  description: string;
}
function Box({ title, description }: BoxProps) {
  return (
    <Card className="bg-gray-800 text-gray-300 h-full hover:brightness-110 transition-all duration-300 ease-in-out">
      <CardHeader className="flex flex-row">
        <CardTitle className="text-lg md:text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-md whitespace-pre-line">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
export interface OfferInterface {
  name: string;
  image: string;
}
const offers: OfferInterface[] = [
  {
    name: "offer1",
    image: "trainingpeaks-graph.png",
  },
  { name: "offer2", image: "trainingpeaks-main.png" },
  {
    name: "offer3",
    image: "",
  },
];

const Offer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["offer"];
}) => {
  return (
    <div className="h-full grid grid-cols-3 grid-rows-1 gap-10">
      {offers.map((offer) => (
        <Box
          key={offer.name}
          title={dictionary[offer.name as keyof typeof dictionary].title}
          description={
            dictionary[offer.name as keyof typeof dictionary].description
          }
        />
      ))}
    </div>
  );
};

export default Offer;
