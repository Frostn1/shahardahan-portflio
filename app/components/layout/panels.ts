import Home from "../panels/home";
import CommonQuestions from "../panels/common-questions";
import Offer from "../panels/offer";
import Contact from "../panels/contact";
import About from "../panels/about";

interface PanelInterface {
  El: React.ComponentType<{
    dictionary: any;
  }>;
  id: string;
  name: string;
}

export const panels: PanelInterface[] = [
  {
    name: "home",
    id: "home",
    El: Home,
  },
  {
    name: "about",
    id: "about",
    El: About,
  },
  {
    name: "offer",
    id: "offer",
    El: Offer,
  },
  {
    name: "common-questions",
    id: "common-questions",
    El: CommonQuestions,
  },
  {
    name: "contact",
    id: "contact",
    El: Contact,
  },
];
