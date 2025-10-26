"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar1.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar2.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar3.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar4.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar5.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar6.jpeg",
];

export default function CarouselPlugin({ className }: { className?: string }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <div dir="ltr" className={cn("w-full p-10 flex justify-center", className)}>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-lg md:max-w-5xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((imagesrc, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
