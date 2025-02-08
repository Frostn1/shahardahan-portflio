import ContactForm from "@/components/contactform/contactform";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const WelcomeCard = () => {
  return (
    <div id={"welcome"} className="h-full flex flex-col items-end gap-5">
      <div className="text-5xl w-2xl text-right">
        אני מלווה אנשים להגיע לפוטנציאל הספורטיבי שלהם
      </div>
      <div className="text-(--sub-header) text-wrap md:w-sm text-right">
        בעזרת אימונים אצלי בסטודיו, בניית תוכניות אימון מותאמות אישית על פי
        יעדים
      </div>
        <Dialog>
          <DialogTrigger asChild>
            <InteractiveHoverButton>צור קשר</InteractiveHoverButton>
          </DialogTrigger>
          <ContactForm />
        </Dialog>
    </div>
  );
};
9;

export default WelcomeCard;
