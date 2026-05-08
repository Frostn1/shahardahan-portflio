import { getDictionary } from "../lib/get-dictionary";
import { Locale } from "../../i18n-config";
import { Main } from "../components/layout/main";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return <Main dictionary={dictionary["main"]} />;
}
