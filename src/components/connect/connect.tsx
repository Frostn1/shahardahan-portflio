import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import WhatsappLogo from "@/assets/whatsapp.png";
import FacebookLogo from "@/assets/facebook.png";
import TikTokLogo from "@/assets/tiktok.png";
import InstagramLogo from "@/assets/instagram.png";

const socials = [
  {
    text: "ווצאפ",
    url: "https://wa.me/+972525216872?text=אני אשמח לעשות תוכנית אישית",
    logo: WhatsappLogo,
  },
  {
    text: "פייסבוק",
    url: "https://www.facebook.com/profile.php?id=100087787164428",
    logo: FacebookLogo,
  },
  {
    text: "טיקטוק",
    url: "https://www.tiktok.com/@shahard_6",
    logo: TikTokLogo,
  },
  {
    text: "אינסטגרם",
    url: "https://www.instagram.com/shahar_6",
    logo: InstagramLogo,
  },
];

const Connect = () => {
  const [name, setName] = useState("");

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="text-3xl text-right col-start-3 row-start-1">
        ? מוכנים להתחיל
      </div>
      <div className="flex flex-col sm:grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-3">
        <div className="border rounded-xl bg-background p-5 text-right flex flex-col gap-5 md:col-start-3 row-start-2">
          <div>שלחו לי הודעה</div>
          <Label htmlFor="name" className="text-right">
            שם
          </Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            dir="rtl"
            placeholder="ישראל ישראלי"
            value={name}
            className="col-span-3"
            required
          />
          <Button>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://wa.me/+972525216872?text=${`שמי ${name}, אני אשמח לעשות תוכנית אישית`}`}
            >
              בוא נתחיל
            </a>
          </Button>
        </div>
        <div className="border h-fit rounded-xl bg-background p-5 text-right flex flex-col gap-5 col-start-1 row-start-2">
          <div className="sm:text-sm md:text-md">
            ! מצאו אותי ברשתות החברתיות
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {socials.map(({ text, url, logo }) => (
              <a rel="noreferrer" target="_blank" href={url}>
                <div className="sm:text-sm text-md flex gap-2 justify-end items-center">
                  {text}
                  <img src={logo} className="h-7" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
