import FacebookLogo from "@/assets/facebook.png";
import InstagramLogo from "@/assets/instagram.png";
import WhatsappLogo from "@/assets/whatsapp.png";
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
      <div className="flex flex-row gap-5">
        {contacts.map(({ logo, button }) => (
          <Card key={Math.random()}>
            <CardContent className="p-2 flex flex-row-reverse items-center justify-center">
              {button}
              {logo}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card key={Math.random()}>
        <CardContent className="h-fit p-5 flex flex-col gap-5 items-center">
          <h2 className="text-lg md:text-md text-center">
            {dictionary.socials.title}
          </h2>
          <div className="grid grid-cols-3 gap-10 ">
            {socials.map(({ text, url, logo }) => (
              <a
                key={Math.random()}
                rel="noreferrer"
                target="_blank"
                href={url}
              >
                <div className="text-xs md:text-md flex gap-2 items-center">
                  <img src={logo.src} className="h-6 sm:h-7" />
                  {dictionary.socials[text as keyof typeof dictionary.socials]}
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
