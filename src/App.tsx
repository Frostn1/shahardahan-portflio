import Navbar from "@/components/navbar/navbar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import WelcomeCard from "./components/welcomecard/welcomecard";
import Page from "@/components/page/page";
import { BlurFade } from "@/components/magicui/blur-fade";
import Services from "@/components/services/services";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
const pages = [
  {
    El: WelcomeCard,
    id: "home",
  },
  {
    El: Services,
    id: "services",
  },
];
function App() {
  return (
    <div className="h-full w-full font-[Varela] ">
      <ScrollProgress className="top-[60px]" />
      <Navbar />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <div className={"h-screen no-scrollbar scroll-auto"}>
        {pages.map(({ El, id }, idx) => (
          <Page id={id}>
            <BlurFade
              className="relative h-[calc(100%-60px)]"
              key={id}
              delay={0.25 + idx * 0.05}
              inView
            >
              <El />
            </BlurFade>
          </Page>
        ))}
      </div>
    </div>
  );
}

export default App;
