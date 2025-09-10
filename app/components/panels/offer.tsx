import React from "react";
import { getDictionary } from "../../lib/get-dictionary";
import Box from "../ui/box";

interface OfferInterface {
  title: string;
  description: string;
}

const Offer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["offer"];
}) => {
  const offers = dictionary.offers;
  return (
    <div className="text-md lg:text-lg flex flex-col gap-2 md:gap-5">
      <h2 className="text-3xl text-center">{dictionary.title}</h2>

      <div className="h-full flex flex-col md:grid grid-rows-1 grid-cols-3 gap-10">
        {offers.map((offer: OfferInterface, index: number) => (
          <Box
            key={index}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
