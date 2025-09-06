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
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export default function Box({ title, description, Icon }: Props) {
  return (
    <Card className="bg-accent text-gray-300 h-full hover:brightness-120 transition-all duration-300 ease-in-out hover:-translate-y-1">
      <CardHeader className="grid flex-col place-items-center">
        <Icon className="h-20 w-20 p-2 box-content bg-accent opacity-50 rounded-[50%]" />
        <CardTitle className="text-lg md:text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-md whitespace-pre-line text-center leading-7">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
