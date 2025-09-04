import { getDictionary } from "../../lib/get-dictionary";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Bandage, Bike, WavesLadder } from "lucide-react";

export interface BoxProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
function Box({ title, description, Icon }: BoxProps) {
  return (
    <Card className="bg-gray-800 text-gray-300 h-full hover:brightness-110 transition-all duration-300 ease-in-out hover:translate-y-1">
      <CardHeader className="grid flex-col place-items-center">
        <Icon className="h-20 w-20 p-2 box-content bg-accent opacity-50 rounded-[50%]" />
        <CardTitle className="text-lg md:text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-md whitespace-pre-line text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
interface OfferInterface {
  name: string;
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const offers: OfferInterface[] = [
  {
    name: "offer1",
    image: "trainingpeaks-graph.png",
    icon: Bandage,
  },
  { name: "offer2", image: "trainingpeaks-main.png", icon: Bike },
  {
    name: "offer3",
    image: "",
    icon: WavesLadder,
  },
];

const Offer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["offer"];
}) => {
  return (
    <div className="h-full grid grid-rows-1 grid-cols-3 gap-10">
      {offers.map((offer) => (
        <Box
          key={offer.name}
          title={dictionary[offer.name as keyof typeof dictionary].title}
          description={
            dictionary[offer.name as keyof typeof dictionary].description
          }
          Icon={offer.icon}
        />
      ))}
    </div>
  );
};

export default Offer;
