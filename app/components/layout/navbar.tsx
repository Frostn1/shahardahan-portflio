import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import SiteLogo from "@/assets/logo.png";
import Link from "next/link";
import React from "react";
import { LanguageSwitcher } from "../ui/locale-switcher";

const navs = [
  {
    name: "home",
    id: "home",
  },
  {
    name: "offer",
    id: "offer",
  },
  {
    name: "contact",
    id: "contact",
  },
];

const Navbar = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}) => {
  return (
    <nav
      className={
        "fixed z-20 top-0 flex w-full h-[60px] items-center justify-between box-border pr-2 sm:pr-5 pl-5 md:pr-10 md:pl-10 bg-background"
      }
    >
      <Link
        aria-label={dictionary.homeAriaLabel}
        accessKey="z"
        className="flex flex-row items-center gap-2"
        href="/"
        // onClick={() => window.location.assign("/")}
      >
        <img src={SiteLogo.src} className="h-11" />
        <h1 className="hidden sm:grid text-xl">{dictionary.title}</h1>
      </Link>

      <div className="flex h-5 flex-row items-center">
        {navs.map(({ name, id }: { name: string; id: string }) => (
          <Button
            aria-label={name}
            key={id}
            // onClick={() => handleScroll(id)}
            variant={"link"}
          >
            <Link href={`#${id}`} className="text-[15px] sm:text-xs md:text-sm">
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
