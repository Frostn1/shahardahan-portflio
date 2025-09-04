import { ImagesMarquee } from "./imagemarquee";
import { useTranslation } from "react-i18next";
import { RainbowButton } from "../magicui/rainbow-button";

const WelcomeCard = () => {
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
    <div id={"welcome"} className="h-full grid grid-rows-2 gap-0 xl:gap-30">
      <div className="p-5 sm:p-0 flex flex-col items-center justify-center bg-green-0 gap-7">
        <div className="text-4xl lg:text-5xl text-center text-wrap">
          {t("pages.welcome.name")}
          <br />
          {t("pages.welcome.title")}
        </div>
        <div className="text-(--sub-header) text-xl lg:text-2xl text-center pb-2">
          {t("pages.welcome.visionTitle")}
          <br />
          {t("pages.welcome.visionDescription")}
        </div>
        <RainbowButton onClick={handleScroll} variant={"outline"}>
          {t("pages.welcome.contactTitle")}
        </RainbowButton>

        {/* <Dialog>
          <DialogTrigger asChild>
            <RainbowButton variant={"outline"}>
              {t("pages.welcome.contactTitle")}
            </RainbowButton>
          </DialogTrigger>
          <ContactForm />
        </Dialog> */}
      </div>
      <ImagesMarquee />
    </div>
  );
};

export default WelcomeCard;
