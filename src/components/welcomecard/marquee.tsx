import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    description: "אימון מאסטרים",
    img: "/masters.jpg",
  },
  {
    description: "כושר קרבי",
    img: "/mil.jpg",
  },
  {
    description: "סטודיו בוטיק",
    img: "/studio.jpg",
  },
  {
    description: "אימוני סטודיו",
    img: "/studio1.jpg",
  },
  {
    description: "הפסקת קפה",
    img: "/coffeebreak.jpg",
  },
  {
    description: "אופניים שישי",
    img: "/masters1.jpg",
  },
  {
    description: "שחר דהן",
    img: "/self.jpg",
  },
];

const firstColumn = reviews.slice(0, reviews.length / 2);
const secondColumn = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  description,
  img,
}: {
  img: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-45 w-45 xl:w-64 xl:h-64 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="w-64" alt="" src={img} />
      <blockquote className="absolute z-10 bottom-2 right-2 text-sm">
        {description}
      </blockquote>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white dark:from-background"></div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[400px] xl:h-[700px] w-full flex-col xl:flex-row items-center justify-center overflow-hidden">
      <div className="hidden xl:flex">
        <Marquee pauseOnHover vertical className="[--duration:15s]">
          {firstColumn.map((review) => (
            <ReviewCard key={Math.random()} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:15s]">
          {secondColumn.map((review) => (
            <ReviewCard key={Math.random()} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/7 bg-gradient-to-b from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/7 bg-gradient-to-t from-white dark:from-background" />
      </div>
      <div className="xl:hidden">
        <Marquee pauseOnHover className="[--duration:10s]">
          {firstColumn.map((review) => (
            <ReviewCard key={Math.random()} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondColumn.map((review) => (
            <ReviewCard key={Math.random()} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/7 bg-gradient-to-r from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/7 bg-gradient-to-l from-white dark:from-background" />
      </div>
    </div>
  );
}
