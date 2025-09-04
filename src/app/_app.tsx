import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";
import { Dashboard } from "@/components/layout/dashboard";

function App() {
  return <Dashboard />;
}
const appTranslated = appWithTranslation(App, nextI18nConfig);
export default appTranslated;
