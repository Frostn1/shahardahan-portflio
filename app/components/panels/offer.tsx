"use client";
import React = require("react");
import { getDictionary } from "../../lib/get-dictionary";
import { Bandage, Bike, WavesLadder } from "lucide-react";
import Box from "../ui/box";
import { useState } from "react";

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
  const [offerIndex, setOfferIndex] = useState(0);
  const offer = offers[offerIndex];
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
