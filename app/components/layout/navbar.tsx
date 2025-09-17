import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import SiteLogo from "@/assets/logo.png";
import Link from "next/link";
import React from "react";
import { LanguageSwitcher } from "../ui/locale-switcher";
import { panels } from "./panels";

const Navbar = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}) => {
  return (
    <nav
      className={
        "fixed z-20 top-0 flex w-full h-[60px] items-center justify-between box-border pr-2 pl-2 lg:pr-10 lg:pl-10 bg-background"
      }
    >
      <Link
        aria-label={dictionary.homeAriaLabel}
        accessKey="z"
        className="flex flex-row items-center gap-2"
        href="#home"
      >
        <img src={SiteLogo.src} className="h-11" />
        <h1 className="grid md:text-md lg:text-xl">{dictionary.title}</h1>
      </Link>

      <div className="hidden md:flex h-5 flex-row items-center gap-1 lg:gap-3">
        {panels.map(({ name, id }: { name: string; id: string }) => (
          <Button aria-label={name} key={id} variant={"link"}>
            <Link href={`#${id}`} className="text-[10px] sm:text-xs md:text-sm">
              {dictionary[name as keyof typeof dictionary]}
            </Link>
          </Button>
        ))}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
