import { i18n, Locale } from "../../i18n-config";
import { getDictionary } from "../lib/get-dictionary";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shahar Dahan",
  description: "",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }>,
) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang as Locale);
  return (
    <html
      lang={params.lang}
      dir={params.lang === "he" ? "rtl" : "ltr"}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{dictionary.meta.title}</title>
        <meta name="description" content={dictionary.meta.description} />
        <meta property="og:title" content={dictionary.meta.title} />
        <meta property="og:description" content={dictionary.meta.description} />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2013.18.39.jpeg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{props.children}</body>
    </html>
  );
}
