import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "../../i18n-config";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shahar Dahan",
  description: "How to do i18n in Next.js 15 within app router",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
  }>,
) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang} className="dark" dir="rtl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>שחר דהן</title>
        <meta
          name="description"
          content="סובלים מכאבי גב ? אני תום דהן, מטפל בכאבי גב, מציע פתרונות מותאמים אישית להקלה על כאבים ושיפור איכות החיים."
        />
        <meta property="og:title" content="תום דהן" />
        <meta
          property="og:description"
          content="סובלים מכאבי גב ? אני תום דהן, מטפל בכאבי גב, מציע פתרונות מותאמים אישית להקלה על כאבים ושיפור איכות החיים."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/seandahan/tom-vsl.webm/ik-thumbnail.jpg"
        />
      </head>
      <body className={`antialiased h-full w-full font-[Varela]`}>
        <Navbar dictionary={dictionary.navbar} />
        <div className="mt-[60px]">{props.children}</div>
      </body>
    </html>
  );
}
