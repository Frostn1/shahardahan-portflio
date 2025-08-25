import { cn } from "@/lib/utils";
import React from "react";

interface PageProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  disablePadding?: boolean;
  bgColor?: string;
}

const Page = ({
  children,
  id,
  className,
  disablePadding,
  bgColor,
}: PageProps) => {
  return (
    <div
      id={id}
      className={cn(
        "relative flex flex-col align-center gap-10  box-border ",
        className,
        disablePadding ? "" : "md:pt-10 md:pb-10 p-5 md:p-10",
        bgColor,
      )}
    >
      {children}
    </div>
  );
};

export default Page;
