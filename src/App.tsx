import { BlurFade } from "@/components/magicui/blur-fade";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Navbar from "@/components/navbar/navbar";
import Page from "@/components/page/page";
import Services from "@/components/services/services";
import About from "./components/about/about";
import { Ripple } from "./components/magicui/ripple";
import WelcomeCard from "./components/welcomecard/welcomecard";
const pages = [
  {
    El: WelcomeCard,
    id: "home",
  },
  {
    El: Services,
    id: "services",
  },
  {
    El: About,
    id: "about",
  },
];
// 00adf2
function App() {
  return (
    <div className="h-full w-full font-[Varela] ">
      <ScrollProgress className="top-[60px]" />
      <Navbar />
      <Ripple className={"fixed"} />
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
