import { getDictionary } from "../lib/get-dictionary";
import { Locale } from "../../i18n-config";
import RBRC from "../components/rbrc/rbrc";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <RBRC
      dictionary={dictionary["main"]}
      navbar={dictionary.navbar}
      lang={lang}
    />
  );
}
