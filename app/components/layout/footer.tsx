import Link from "next/link";
import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";

const Footer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["main"]["footer"];
}) => {
  return (
    <div className="z-20 bottom-0 w-full flex flex-col items-center gap-3 pb-10 text-(--subtext)">
      <Button variant={"link"} asChild>
        <Link href="/accessibility">{dictionary.accessibility}</Link>
      </Button>
      <footer className="text-gray-400">{dictionary.text}</footer>
    </div>
  );
};

export default Footer;
