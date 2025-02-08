import { Button } from "@/components/ui/button";



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
        "fixed z-20 top-0 flex flex-row-reverse w-full h-[60px] items-center justify-between box-border sm:pl-5 pr-5 md:pr-10 md:pl-10 bg-background"
      }
    >
      <div className="flex flex-row items-center gap-2 font-bold">
        <div className="hidden sm:grid">שחר דהן | אימון לתוצאות</div>
        <img src="/logo.png" className="h-10" />
      </div>

      <div className="flex h-5 flex-row-reverse items-center">
        {navs.map(({ name, id }) => (
          <Button key={id} onClick={() => handleScroll(id)} variant={"link"}>
            <p className="text-[15px] sm:text-xs md:text-sm">{name}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
