import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const images = [
  {
    description: "רוכבים ונהנים",
    img: "/desk.jpg",
  },
  {
    description: "עבודה על מהירות",
    img: "/masters.jpg",
  },

  {
    description: "כושר קרבי",
    img: "/mil.jpg",
  },
  {
    description: "קייפ אפיק",
    img: "/self1.jpg",
  },
  {
    description: "פילאטיס מזרן",
    img: "/pilates.jpg",
  },
  {
    description: "אימון פונקציונלי",
    img: "/studio.jpg",
  },
  {
    description: "כוח וליבה",
    img: "/studio1.jpg",
  },
  {
    description: "שחר דהן",
    img: "/bike.jpg",
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
    description: "עבודה זוגית",
    img: "/couplework.jpg",
  },
  {
    description: "פילאטס מזרן",
    img: "/pilates1.jpg",
  },
  {
    description: "טריאתלון",
    img: "/ironman1.jpg",
  },

  {
    description: "גראבל",
    img: "/gravel.jpg",
  },
  {
    description: "אימון לתוצאות",
    img: "/brand.jpg",
  },
  {
    description: "אפיק ישראל",
    img: "/epicisrael.jpg",
  },
];

const firstColumn = images.slice(0, images.length / 2);
const secondColumn = images.slice(images.length / 2);

const ImageCard = ({
  description,
  img,
}: {
  img: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-45 w-45 xl:w-50 xl:h-50 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="w-full h-full object-cover" alt="" src={img} />
      <blockquote className="absolute text-(--sub-header) z-10 bottom-2 right-2 text-sm">
        {description}
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
          <ImageCard key={Math.random()} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondColumn.map((review) => (
          <ImageCard key={Math.random()} {...review} />
        ))}
      </Marquee>
      <div className="hidden sm:grid  pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-white dark:from-background" />
      <div className="hidden sm:grid pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
}
