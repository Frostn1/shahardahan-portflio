import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "../../../i18n-config";

const Accessibility = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;

  const dictionary = (await getDictionary(lang)).main.accessibility;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-5">{dictionary.title}</h1>
      <p className="text-wrap w-md">{dictionary.content}</p>
    </div>
  );
};

export default Accessibility;
