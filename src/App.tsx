import { BlurFade } from "@/components/magicui/blur-fade";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Navbar from "@/components/navbar/navbar";
import Page from "@/components/page/page";
import Services from "@/components/services/services";
import Connect from "./components/connect/connect";
import { Ripple } from "./components/magicui/ripple";
import WelcomeCard from "./components/welcomecard/welcomecard";
import Footer from "./components/footer/footer";
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
    El: Connect,
    id: "connect",
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
