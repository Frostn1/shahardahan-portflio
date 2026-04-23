"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2013.18.39.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.06.16.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar4.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar1.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.04.25.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar3.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar7",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar5.jpeg",
  // "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar6.jpeg?",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.06.20.jpeg",
  // "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.05.40.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202026-04-22%20at%2016.59.57.jpeg"
];

export default function CarouselPlugin({ className }: { className?: string }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );
  return (
    <div
      dir="ltr"
      className={cn(
        "w-full p-10 sm:p-0 md:p-5 box-border flex justify-center",
        className,
      )}
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-2xl md:max-w-2xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((imagesrc, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={imagesrc}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
