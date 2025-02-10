import FacebookLogo from "@/assets/facebook.png";
import InstagramLogo from "@/assets/instagram.png";
import TikTokLogo from "@/assets/tiktok.png";
import WhatsappLogo from "@/assets/whatsapp.png";
import { PhoneCallIcon } from "lucide-react";
import { Button } from "../ui/button";

const socials = [
  {
    text: "טיקטוק",
    url: "https://www.tiktok.com/@shahard_6",
    logo: TikTokLogo,
  },

  {
    text: "פייסבוק",
    url: "https://www.facebook.com/profile.php?id=100087787164428",
    logo: FacebookLogo,
  },
  {
    text: "אינסטגרם",
    url: "https://www.instagram.com/shahar_6",
    logo: InstagramLogo,
  },
];

const contacts = [
  {
    logo: <img src={WhatsappLogo} className="h-7" />,
    button: (
      <Button asChild variant={"ghost"} className="text-center">
        <a href="https://wa.me/+972525216872?text=אשמח לקבל פרטים נוספים">
          <div className="text-xs md:text-md">וואטסאפ</div>
        </a>
      </Button>
    ),
  },
  {
    logo: <PhoneCallIcon />,
    button: (
      <Button asChild variant={"ghost"} className="text-center">
        <a href="tel:+972525216872">
          {" "}
          <div className="text-xs md:text-md">052-5216872</div>{" "}
        </a>
      </Button>
    ),
  },
];

const Connect = () => {
  return (
    <div className="p-5 flex flex-col items-center gap-3">
      <h2 className="text-3xl text-center">? מוכנים להתחיל</h2>
      <div className="flex gap-5 w-[95%] md:w-[30%]">
        {contacts.map(({ logo, button }) => (
          <div
            key={Math.random()}
            className="p-2 w-[50%] border rounded-xl bg-background flex flex-row-reverse items-center justify-center"
          >
            {logo}
            {button}
          </div>
        ))}
      </div>

      <div className="border h-fit rounded-xl bg-background p-5 text-right flex flex-col gap-5  items-center w-[95%] md:w-[30%]">
        <h2 className="text-lg md:text-md">! מצאו אותי ברשתות החברתיות</h2>
        <div className="grid grid-cols-3 gap-10 ">
          {socials.map(({ text, url, logo }) => (
            <a key={Math.random()} rel="noreferrer" target="_blank" href={url}>
              <div className="text-xs md:text-md flex gap-2 items-center">
                {text}
                <img src={logo} className="h-6 sm:h-7" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
