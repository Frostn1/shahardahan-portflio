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
    if (window.location.pathname !== '/') window.location.assign('/')
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav
      className={
        "fixed z-20 top-0 flex flex-row-reverse w-full h-[60px] items-center justify-between box-border pr-2 sm:pr-5 pl-5 md:pr-10 md:pl-10 bg-background"
      }
    >
      <div aria-label="לדף בית של שחר דהן" accessKey="z" className="flex flex-row items-center gap-2 font-bold" onClick={() => window.location.assign("/")}>
        <h1 className="hidden sm:grid">שחר דהן | אימון לתוצאות</h1>
        <img src="/logo.png" className="h-11" />
      </div>

      <div className="flex h-5 flex-row items-center">
        {navs.map(({ name, id }) => (
          <Button aria-label={name} key={id} onClick={() => handleScroll(id)} variant={"link"}>
            <a className="text-[15px] sm:text-xs md:text-sm">{name}</a>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
