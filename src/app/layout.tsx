import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Shahar Dahan",
  description: "Workouts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" className="dark" dir="rtl">
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
        <Navbar />
        <div className="mt-[60px]">{children}</div>
      </body>
    </html>
  );
}
