import FacebookLogo from "@/assets/facebook.png";
import InstagramLogo from "@/assets/instagram.png";
import WhatsappLogo from "@/assets/whatsapp.png";
import LinkedinLogo from "@/assets/linkedin.svg";
import { PhoneCallIcon } from "lucide-react";
import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import React from "react";
import { Card, CardContent } from "../ui/card";

const socials = [
  {
    text: "instagram",
    url: "https://www.instagram.com/coachshahar/",
    logo: InstagramLogo,
  },
  {
    text: "facebook",
    url: "https://www.facebook.com/profile.php?id=100087787164428",
    logo: FacebookLogo,
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/company/108040060",
    logo: LinkedinLogo,
  },
];

const Contact = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["contact"];
}) => {
  const contacts = [
    {
      logo: <img src={WhatsappLogo.src} className="h-5 sm:h-7" />,
      button: (
        <Button asChild variant={"link"}>
          <a
            href={`https://wa.me/+972525216872?text=${dictionary.whatsappText}`}
          >
            <div>{dictionary.socials.whatsapp}</div>
          </a>
        </Button>
      ),
    },
    {
      logo: <PhoneCallIcon className="!h-5 !sm:h-7" />,
      button: (
        <Button asChild variant={"ghost"}>
          <a href="tel:+972525216872">
            <div dir="ltr">+97252-5216872</div>
          </a>
        </Button>
      ),
    },
  ];
  return (
    <div className="p-5 pt-0 flex flex-col items-center gap-3">
      <h2 className="text-3xl text-center">{dictionary.callToAction}</h2>
      <div className="flex flex-row gap-5 w-[90%] md:w-xl">
        {contacts.map(({ logo, button }) => (
          <Card key={Math.random()} className="bg-accent w-[50%]">
            <CardContent className="text-xs sm:text-md md:text-xl p-2 flex flex-row items-center justify-center">
              {logo}
              {button}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card key={Math.random()} className="bg-accent w-[90%] md:w-xl">
        <CardContent className="h-fit p-5 flex flex-col gap-5 items-center">
          <h2 className="text-lg md:text-xl text-center">
            {dictionary.socials.title}
          </h2>
          <div className="grid grid-cols-3 gap-10 ">
            {socials.map(({ text, url, logo }) => (
              <Button key={Math.random()} asChild variant="link">
                <a rel="noreferrer" target="_blank" href={url}>
                  <div className="text-xs sm:text-md md:text-xl flex gap-1 sm:gap-2 justify-center items-center">
                    <img src={logo.src} className="h-5 sm:h-7" />
                    {
                      dictionary.socials[
                        text as keyof typeof dictionary.socials
                      ]
                    }
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
