"use client";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const navs = [
  {
    name: "home",
    id: "home",
  },
  {
    name: "contact",
    id: "connect",
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  function handleScroll(id: string) {
    if (window.location.pathname !== "/") window.location.assign("/");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav
      className={
        "fixed z-20 top-0 flex w-full h-[60px] items-center justify-between box-border pr-2 sm:pr-5 pl-5 md:pr-10 md:pl-10 bg-background"
      }
    >
      <div
        aria-label={t("navbar.homeAriaLabel")}
        accessKey="z"
        className="flex flex-row items-center gap-2"
        onClick={() => window.location.assign("/")}
      >
        <img src="/logo.png" className="h-11" />
        <h1 className="hidden sm:grid text-xl">{t("navbar.title")}</h1>
      </div>

      <div className="flex h-5 flex-row items-center">
        {navs.map(({ name, id }) => (
          <Button
            aria-label={name}
            key={id}
            onClick={() => handleScroll(id)}
            variant={"link"}
          >
            <a className="text-[15px] sm:text-xs md:text-sm">
              {t(`navbar.${name}`)}
            </a>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
