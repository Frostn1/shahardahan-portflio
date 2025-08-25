import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const Home = () => {
  const { t } = useTranslation();
  function handleScroll() {
    const id = "contact";
    if (window.location.pathname !== "/") window.location.assign("/");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      id={"welcome"}
      className="h-full flex flex-col p-5 sm:p-30 justify-center group relative w-full gap-20 lg:gap-30 items-center rounded-lg"
    >
      <div className="text-4xl lg:text-6xl text-center text-wrap">
        {t("pages.welcome.name")}
        <br />
        {t("pages.welcome.title")}
      </div>
      <div className="text-(--sub-header) text-xl lg:text-2xl text-center whitespace-pre-line">
        {t("pages.welcome.visionDescription")}
      </div>
      {/* <Button
        className="text-lg w-3xs bg-yellow-50"
        onClick={handleScroll}
        variant={"default"}
      >
        {t("pages.welcome.contactTitle")}
      </Button> */}
    </div>
  );
};

export default Home;
