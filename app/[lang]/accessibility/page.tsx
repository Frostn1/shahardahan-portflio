import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "../../../i18n-config";
import { LanguageSwitcher } from "@/components/ui/locale-switcher";
import "../../components/champion/champion.css";

const Accessibility = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);
  const a11y = dict.main.accessibility;
  const isHe = lang === "he";

  const sections = isHe
    ? [
        {
          n: "01",
          h: "המחויבות שלנו",
          body: "אנו מחויבים להבטיח שהאתר יהיה זמין לכל המשתמשים, ללא קשר ליכולת או טכנולוגיה. אנו פועלים לעמוד בתקן הישראלי 5568 ובהנחיות הנגישות לתוכן ברשת (WCAG) 2.1 ברמה AA.",
        },
        {
          n: "02",
          h: "תכונות נגישות באתר",
          list: [
            "ניווט מלא באמצעות מקלדת",
            "ניגודיות צבעים מספקת לקריאות גבוהה",
            "טקסט חלופי לתמונות בעלות תוכן משמעותי",
            "מבנה כותרות סמנטי וברור",
            "תאימות לקוראי מסך מובילים",
            "תמיכה בכיווניות RTL לעברית ו-LTR לאנגלית",
          ],
        },
        {
          n: "03",
          h: "חוסר התאמות ידועים",
          body: "חלק מהתכנים החיצוניים והמדיה (תמונות מאינסטגרם, סרטונים מצדדים שלישיים) עשויים שלא להיות נגישים במלואם. אנו עובדים בשיתוף עם הספקים שלנו לטפל בכך.",
        },
        {
          n: "04",
          h: "נתקלת בבעיה?",
          body: "אם נתקלת בבעיית נגישות, אשמח לשמוע. תוכל לפנות אליי באחת מהדרכים בעמוד יצירת הקשר.",
        },
      ]
    : [
        {
          n: "01",
          h: "Our commitment",
          body: "We are committed to ensuring this site is usable for everyone, regardless of ability or technology. We work to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard.",
        },
        {
          n: "02",
          h: "Accessibility features",
          list: [
            "Full keyboard navigation",
            "Sufficient color contrast for legibility",
            "Alt text for meaningful images",
            "Semantic heading structure",
            "Compatibility with major screen readers",
            "RTL (Hebrew) and LTR (English) layout support",
          ],
        },
        {
          n: "03",
          h: "Known limitations",
          body: "Some embedded third-party media (e.g. social images, external videos) may not be fully accessible. We work with our providers to improve coverage.",
        },
        {
          n: "04",
          h: "Found an issue?",
          body: "If you encounter an accessibility problem, please let me know. Reach out via any of the contact methods on the home page.",
        },
      ];

  return (
    <div className="v1-root">
      <header className="v1-nav">
        <div className="v1-nav-left">
          <Link
            href={`/${lang}#home`}
            className="v1-mark"
            aria-label={dict.navbar.homeAriaLabel}
          >
            SD
          </Link>
          <div className="v1-mark-meta">
            <div>SHAHAR DAHAN</div>
            <div className="v1-mark-sub">
              {isHe ? "הצהרת נגישות" : "ACCESSIBILITY STATEMENT"}
            </div>
          </div>
        </div>
        <div className="v1-nav-tools">
          <LanguageSwitcher />
          <Link href={`/${lang}#home`} className="v1-nav-cta">
            {isHe ? "חזרה לדף הבית" : "Back home"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <section className="v1-section v1-a11y-hero">
        <div className="v1-a11y-eyebrow">/// {isHe ? "מסמך 00" : "DOC/00"}</div>
        <h1 className="v1-a11y-title">{a11y.title}</h1>
        <p className="v1-a11y-lede">{a11y.content}</p>
      </section>

      <section className="v1-section v1-a11y-body">
        <div className="v1-a11y-list">
          {sections.map((s) => (
            <article key={s.n} className="v1-a11y-row">
              <div className="v1-a11y-row-num">/{s.n}</div>
              <div className="v1-a11y-row-body">
                <h2 className="v1-a11y-row-h">{s.h}</h2>
                {s.body && <p>{s.body}</p>}
                {s.list && (
                  <ul className="v1-a11y-checklist">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="v1-a11y-meta">
          <div>
            <span>{isHe ? "תקן" : "STANDARD"}</span>WCAG 2.1 AA
          </div>
          <div>
            <span>{isHe ? "עודכן" : "UPDATED"}</span>2026
          </div>
        </div>
      </section>

      <footer className="v1-footer">
        <div>{dict.main.footer.text}</div>
        <div>
          <Link href={`/${lang}#contact`}>
            {isHe ? "יצירת קשר" : "Contact"}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Accessibility;
