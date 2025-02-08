import ContactForm from "@/components/contactform/contactform";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ImagesMarquee } from "./imagemarquee";

const WelcomeCard = () => {
  return (
    <div
      id={"welcome"}
      className="h-full grid gap-0 xl:gap-5 grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1"
    >
      <div className="flex flex-col items-end row-start-1 row-end-2 gap-5 xl:col-start-2 xl:col-end-2 xl:row-start-1">
        <div className="text-3xl lg:text-5xl text-right text-wrap">
          אני מלווה אנשים להגיע לפוטנציאל הספורטיבי שלהם
        </div>
        <div className="text-(--sub-header) text-wrap sm:w-sm text-right">
          בעזרת אימונים בסטודיו בוטיק באלוני אבא, בניית תוכניות אימון מותאמות
          אישית על פי יעדים
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
