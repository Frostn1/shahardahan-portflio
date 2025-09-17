import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./card";

interface Props {
  title: string;
  description: string;
}
export default function Box({ title, description }: Props) {
  return (
    <Card className="bg-accent h-full hover:brightness-120 transition-all duration-300 ease-in-out hover:-translate-y-1">
      <CardHeader className="grid flex-col place-items-center">
        <CardTitle className="text-md lg:text-lg xl:text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md md:text-lg whitespace-pre-line leading-7">
          <ul className="list-disc">
            {description.split("\n").map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
