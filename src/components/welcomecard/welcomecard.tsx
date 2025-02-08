import ContactForm from "@/components/contactform/contactform";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ImagesMarquee } from "./imagemarquee";

const WelcomeCard = () => {
  return (
    <div id={"welcome"} className="h-full grid grid-rows-2 gap-0 xl:gap-30">
      <div className="p-5 sm:p-0 flex flex-col items-center justify-center bg-green-0 gap-7">
        <div className="text-4xl lg:text-5xl text-center text-wrap">
          שחר דהן <br />
          מאמן כושר וטריאתלון
        </div>
        <div
          dir="rtl"
          className="text-(--sub-header) text-xl lg:text-2xl text-center pb-2"
        >
          החזון שלי:
          <br /> לעזור לכם לממש את הפוטנציאל וליהנות מהדרך!
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <InteractiveHoverButton>צרו קשר</InteractiveHoverButton>
          </DialogTrigger>
          <ContactForm />
        </Dialog>
      </div>
      <ImagesMarquee />
    </div>
  );
};
9;

export default WelcomeCard;
