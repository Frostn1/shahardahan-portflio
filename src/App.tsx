import { BlurFade } from "@/components/magicui/blur-fade";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Navbar from "@/components/layout/navbar";
import Page from "@/components/pages/page";
import Contact from "./components/pages/contact";
import { Ripple } from "./components/magicui/ripple";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/layout/layout";
import { Dashboard } from "./components/layout/dashboard";
import { Page404 } from "./components/pages/page404";
import { Helmet } from "react-helmet";

function App() {
  return (
    <span className="font-[Varela]">
      <Helmet>
        <title>שחר דהן</title>
        <meta
          name="description"
          content="סובלים מכאבי גב ? אני תום דהן, מטפל בכאבי גב, מציע פתרונות מותאמים אישית להקלה על כאבים ושיפור איכות החיים."
        />
        <meta property="og:title" content="שחר דהן" />
        <meta
          property="og:description"
          content="סובלים מכאבי גב ? אני תום דהן, מטפל בכאבי גב, מציע פתרונות מותאמים אישית להקלה על כאבים ושיפור איכות החיים."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/seandahan/tom-vsl.webm/ik-thumbnail.jpg"
        />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="/accessibility" element={<Accessibility />} /> */}
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </span>
  );
}

export default App;
