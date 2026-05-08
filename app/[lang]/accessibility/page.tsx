import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "../../../i18n-config";
import "../../components/rbrc/rbrc.css";

const Accessibility = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);
  const a11y = dict.main.accessibility;
  const isHe = lang === "he";

  const sections = isHe
    ? [
        {
          h: "המחויבות שלנו",
          body: "אנו מחויבים להבטיח שהאתר זמין לכל המשתמשים, ללא קשר ליכולת או טכנולוגיה. אנו פועלים לעמוד בהנחיות הנגישות לתוכן ברשת (WCAG) 2.1 ברמה AA.",
        },
        {
          h: "תכונות נגישות",
          list: [
            "ניווט מלא במקלדת",
            "ניגודיות צבעים מספקת לקריאות",
            "טקסט חלופי לתמונות בעלות תוכן משמעותי",
            "מבנה כותרות סמנטי וברור",
            "תאימות לקוראי מסך מובילים",
            "תמיכה בכיווניות RTL לעברית ו-LTR לאנגלית",
          ],
        },
        {
          h: "מגבלות ידועות",
          body: "חלק מהתכנים החיצוניים והמדיה (תמונות מאינסטגרם, סרטונים מצדדים שלישיים) עשויים שלא להיות נגישים במלואם. אנו עובדים עם הספקים שלנו להמשיך ולשפר.",
        },
        {
          h: "נתקלת בבעיה?",
          body: "אם נתקלת בבעיית נגישות, אשמח לשמוע. ניתן לפנות אליי באחת מהדרכים בעמוד יצירת הקשר.",
        },
      ]
    : [
        {
          h: "Our commitment",
          body: "We are committed to ensuring this site is usable by everyone, regardless of ability or technology. We work to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard.",
        },
        {
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
          h: "Known limitations",
          body: "Some embedded third-party media (e.g. social images, external videos) may not be fully accessible. We work with our providers to keep improving coverage.",
        },
        {
          h: "Found an issue?",
          body: "If you encounter an accessibility problem, please let me know. Reach out via any of the contact methods on the home page.",
        },
      ];

  return (
    <div className="rb-root">
      <header className="rb-header">
        <Link
          href={`/${lang}#home`}
          className="rb-logo"
          aria-label={dict.navbar.homeAriaLabel}
        >
          <div className="rb-logo-mark">
            SD<span>COACH</span>
          </div>
          <div className="rb-logo-text">
            {dict.main.home.name}
            <small>
              {isHe ? "הצהרת נגישות" : "Accessibility statement"}
            </small>
          </div>
        </Link>
        <nav className="rb-nav" aria-label="Primary">
          <Link href={`/${lang}#home`}>{dict.navbar.home}</Link>
          <Link href={`/${lang}#about`}>{dict.navbar.about}</Link>
          <Link href={`/${lang}#contact`}>{dict.navbar.contact}</Link>
        </nav>
        <div className="rb-header-tools">
          <Link href={`/${lang}#home`} className="rb-link">
            {isHe ? "חזרה לדף הבית" : "Back home"}
          </Link>
        </div>
      </header>

      <main className="rb-page">
        <p className="rb-page-eyebrow">
          {isHe ? "מסמך · 00" : "Document · 00"}
        </p>
        <h1 className="rb-page-h">{a11y.title}</h1>
        <p className="rb-page-lede">{a11y.content}</p>

        {sections.map((s, i) => (
          <section key={i} className="rb-page-section">
            <h2>{s.h}</h2>
            {s.body && <p>{s.body}</p>}
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="rb-page-meta">
          <div>
            <span>{isHe ? "תקן" : "Standard"}</span>WCAG 2.1 AA
          </div>
          <div>
            <span>{isHe ? "עודכן" : "Updated"}</span>2026
          </div>
        </div>
      </main>

      <footer className="rb-footer">
        <div className="rb-footer-inner">
          <div>
            <div className="rb-foot-mark">
              SD<span>COACH</span>
            </div>
          </div>
          <div>
            <h3 className="rb-foot-h">{dict.main.contact.callToAction}</h3>
            <p className="rb-foot-line">
              <Link href={`/${lang}#contact`}>
                {isHe ? "מעבר ליצירת קשר" : "Go to contact"}
              </Link>
            </p>
          </div>
          <div></div>
        </div>
        <div className="rb-foot-bottom">
          <span>{dict.main.footer.text}</span>
        </div>
      </footer>
    </div>
  );
};

export default Accessibility;
