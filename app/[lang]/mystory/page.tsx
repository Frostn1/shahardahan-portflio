import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "../../../i18n-config";

const MyStory = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;

  // const dictionary = (await getDictionary(lang)).main.mystory;
  return <div className="grid md:grid-cols-2 gap-5 ">WIP</div>;
};

export default MyStory;
