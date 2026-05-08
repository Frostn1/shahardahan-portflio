import { getDictionary } from "../lib/get-dictionary";
import { Locale } from "../../i18n-config";
import Champion from "../components/champion/champion";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <Champion dictionary={dictionary["main"]} navbar={dictionary.navbar} />
  );
}
