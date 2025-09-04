import Footer from "../footer/footer"
import { Ripple } from "../magicui/ripple"
import { ScrollProgress } from "../magicui/scroll-progress"
import Navbar from "../navbar/navbar"
import { Button } from "../ui/button"

const Accessibility = () => {
    return (
        <div className="h-screen w-full font-[Varela]">
            <Navbar />
            <ScrollProgress className="top-[60px]" />
            <Ripple className={"fixed"} />
            <div className="p-10 md:p-30 pt-[80px] flex flex-col gap-3">
                <h1 className="font-bold text-md sm:text-xl ">הצהרת נגישות</h1>
                <p className="text-(--sub-header)">
                    שחר דהן עושה כמיטב יכולתו כדי שהאתר יהיה נגיש, לפי תקנים מודרניים.<br />
                    האתר נגיש ברמה AA לפי התקן הישראלי.<br />
                    אם נתקלתם בבעיית נגישות או שיש לכם הצעה, אנא פנו אלינו בכתובת הדואל: <Button asChild variant="link"><a href="mailto:shahar.dahan@gmail.com">shahar.dahan@gmail.com</a></Button>.
                </p>
                <h1 className="text-md sm:text-xl">דרכים לשיפור התצוגה לאנשים עם מוגבלות</h1>
                <h2 className="text-sm sm:text-md">גודל טקסט \ מרחק מתצוגה</h2>
                <p className="text-xs sm:text-sm text-(--sub-header)">אתר שחר דהן אימון לתוצאות נבנה כדי לאפשר את שינוי גודל התצוגה בקלות (נקרא גם "מרחק מתצוגה" או "זום"). השיטות שיפורטו בהמשך עובדות באתר שחר דהן אימון לתוצאות (כמו גם באתרים אחרים).</p>
                <h3 className="text-xs sm:text-sm">שיטה ראשונה</h3>
                <p className="text-xs sm:text-sm text-(--sub-header)">השיטה הפשוטה ביותר לשינוי גודל התצוגה באתר היא באמצעות קיצורי מקלדת, הפועלים בכל האתרים ובכל הדפדפנים. אלו הם הקיצורים:</p>
                <ol className="text-xs sm:text-sm text-(--sub-header)">
                    <li>החזקת מקש Ctrl ולחיצה על + להגדלת התצוגה</li>
                    <li>החזקת מקש Ctrl ולחיצה על - להקטנת התצוגה</li>
                    <li>חזקת מקש Ctrl ולחיצה על 0 (אפס) כדי להחזיר את התצוגה למצב ברירת המחדל שלה</li>
                </ol>
                <h3 className="text-xs sm:text-sm">שיטה שנייה</h3>
                <p className="text-xs sm:text-sm text-(--sub-header)">דרך שניה וקצת פחות מדויקת היא החזקת מקש Ctrl ושימוש בגלגלת העכבר כדי לגלול מעלה או מטה.</p>
                <h1 className="font-bold text-md sm:text-xl">בעיות נגישות באתר</h1>
                <p className="text-(--sub-header)">בשלב זה לא ידוע לנו על בעיות נגישות באתר.</p>
                <h1 className="font-bold text-md sm:text-xl">עמידה בתקנים</h1>
                <p className="text-(--sub-header)">כל העמודים באתר כל זכות עומדים בהנחיות הנגישות הבאות של ארגון <a target="_blank" rel="noreferrer noopener" className="external text" href="https://www.w3.org">World Wide Web Consortium</a> (ארגון תקינה לרשת האינטרנט):</p>
                <ol className="text-(--sub-header)">
                    <li>
                        <a target="_blank" rel="noreferrer noopener" className="external text" href="https://www.w3.org/TR/WCAG20/">הנחיות נגישות לתוכן (Web Content Accessibility Guidelines 2.0)</a>. הנחיות אלו מעוגנות גם בתקן הישראלי לנגישות (ת"י 5568); זהו תקן מחייב לפי תקנה 35 של תקנות נגישות השירות, לפי חוק שוויון זכויות לאנשים עם מוגבלות. בקישור הבא ישנו <a target="_blank" rel="noreferrer noopener" className="external text" href="https://www.isoc.org.il/files/w3c-wai/guidelines.html">תרגום לעברית של הנחיות WCAG 2.0</a>  (באדיבות איגוד האינטרנט הישראלי).</li>
                    <li>הנחיות נגישות ליישומי רשת (WAI-ARIA) - מיועדות לסייע בהנגשת אתרים הכוללים רכיבים מורכבים (לדוגמה: חלונות נפתחים, גלריית תמונות וכד').</li></ol>
            </div>
            <Footer />
        </div>
    )
}

export default Accessibility