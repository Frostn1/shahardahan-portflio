import FacebookLogo from "@/assets/facebook.png";
import InstagramLogo from "@/assets/instagram.png";
import TikTokLogo from "@/assets/tiktok.png";
import WhatsappLogo from "@/assets/whatsapp.png";
import { PhoneCallIcon } from "lucide-react";
import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";

const socials = [
  {
    text: "instagram",
    url: "https://www.instagram.com/shahar_6",
    logo: InstagramLogo,
  },
  {
    text: "facebook",
    url: "https://www.facebook.com/profile.php?id=100087787164428",
    logo: FacebookLogo,
  },
  {
    text: "tiktok",
    url: "https://www.tiktok.com/@shahard_6",
    logo: TikTokLogo,
  },
];

const Contact = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["contact"];
}) => {
  const contacts = [
    {
      logo: <img src={WhatsappLogo.src} className="h-7" />,
      button: (
        <Button asChild variant={"ghost"} className="text-center">
          <a
            href={`https://wa.me/+972525216872?text=${dictionary.whatsappText}`}
          >
            <div className="text-xs md:text-md">
              {dictionary.socials.whatsapp}
            </div>
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
  return (
    <div className="p-5 flex flex-col items-center gap-3">
      <h2 className="text-3xl text-center">{dictionary.callToAction}</h2>
      <div className="flex gap-5 w-[95%] md:w-[30%]">
        {contacts.map(({ logo, button }) => (
          <div
            key={Math.random()}
            className="p-2 w-[50%] border rounded-xl bg-background flex flex-row-reverse items-center justify-center"
          >
            {button}
            {logo}
          </div>
        ))}
      </div>

      <div className="border h-fit rounded-xl bg-background p-5 flex flex-col gap-5  items-center w-[95%] md:w-[30%]">
        <h2 className="text-lg md:text-md">{dictionary.socials.title}</h2>
        <div className="grid grid-cols-3 gap-10 ">
          {socials.map(({ text, url, logo }) => (
            <a key={Math.random()} rel="noreferrer" target="_blank" href={url}>
              <div className="text-xs md:text-md flex gap-2 items-center">
                <img src={logo.src} className="h-6 sm:h-7" />
                {dictionary.socials[text as keyof typeof dictionary.socials]}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
