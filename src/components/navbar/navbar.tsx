import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FacebookLogo from "@/assets/facebook.png";

const links = [
  {
    url: "https://www.facebook.com/profile.php?id=100087787164428",
    logo: FacebookLogo,
  },
];

const navs = [
  {
    name: "בית",
    id: "home",
  },
  {
    name: "שירותים",
    id: "services",
  },
  {
    name: "צרו קשר",
    id: "connect",
  },
];

const Navbar = () => {
  function handleScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      className={
        "fixed z-20 top-0 flex w-full h-[60px] items-center justify-between box-border sm:pr-5 pl-5 md:pr-10 md:pl-10 bg-background"
      }
    >
      <img src="/logo.png" className="h-10" />

      <div className="flex h-5 flex-row-reverse items-center">
        {navs.map(({ name, id }) => (
          <Button onClick={() => handleScroll(id)} variant={"link"}>
            <p className="text-[12px] sm:text-xs md:text-sm">{name}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
