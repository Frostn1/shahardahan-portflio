import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
const reviews = [
  "desk",
  "masters",
  "self1",
  "pilates",
  "studio",
  "studio1",
  "bike",
  "coffeebreak",
  "masters1",
  "couplework",
  "pilates1",
  "ironman1",
  "gravel",
  "brand",
  "epicisrael",
];

const firstColumn = reviews.slice(0, reviews.length / 2);
const secondColumn = reviews.slice(reviews.length / 2);

const ImageCard = ({ review }: { review: string }) => {
  const { t } = useTranslation();
  return (
    <figure
      className={cn(
        "relative h-45 w-45 xl:w-50 xl:h-50 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img
        className="w-full h-full object-cover"
        alt=""
        src={`${review}.jpg`}
      />
      <blockquote className="absolute text-(--sub-header) z-10 bottom-2 right-2 text-sm">
        {t(`pages.welcome.marquee.${review}`)}
      </blockquote>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white dark:from-background"></div>
    </figure>
  );
};

export function ImagesMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-red-0 pb-20">
      <Marquee pauseOnHover className="[--duration:35s]">
        {firstColumn.map((review) => (
          <ImageCard key={Math.random()} review={review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondColumn.map((review) => (
          <ImageCard key={Math.random()} review={review} />
        ))}
      </Marquee>
      <div className="hidden sm:grid  pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-white dark:from-background" />
      <div className="hidden sm:grid pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
}
