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
    <Card className="bg-accent text-gray-300 h-full hover:brightness-120 transition-all duration-300 ease-in-out hover:-translate-y-1">
      <CardHeader className="grid flex-col place-items-center">
        {/*<Icon className="h-10 w-10 md:h-20 md:w-20 p-1 md:p-2 box-content bg-accent opacity-50 rounded-[50%]" />*/}
        <CardTitle className="text-md lg:text-lg xl:text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs md:text-md whitespace-pre-line leading-7">
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
