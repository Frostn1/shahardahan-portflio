"use client";
import React, { useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";

import { LanguageSwitcher } from "../ui/locale-switcher";
import { MobileMenu } from "../ui/mobile-menu";

import "./rbrc.css";

const HERO_PHOTO =
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202026-04-22%20at%2016.59.57.jpeg";
const ABOUT_THUMB =
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar4.jpeg";
const PROGRAM_PHOTO =
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2013.18.39.jpeg";
const COACH_AVATAR =
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar3.jpeg";

const SERVICE_TILE_IMAGES = [
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar5.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar1.jpeg",
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.06.16.jpeg",
];

const WHATSAPP_HREF = (text: string) =>
  `https://wa.me/+972525216872?text=${encodeURIComponent(text)}`;
const PHONE_HREF = "tel:+12069107427";
const PHONE_DISPLAY = "+1 206-910-7427";
const EMAIL_HREF = "mailto:hi@shahardahan.com";
const EMAIL_DISPLAY = "hi@shahardahan.com";

const SOCIALS = {
  instagram: "https://www.instagram.com/coachdahan_/",
  facebook: "https://www.facebook.com/profile.php?id=100087787164428",
  linkedin: "https://www.linkedin.com/company/108040060",
};

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="4"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"></circle>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zm7.4 0h4.37v2h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.55c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.46V23H7.62V8.5z" />
    </svg>
  );
}

type Dict = any;

function Header({ navbar, dict }: { navbar: Dict; dict: Dict }) {
  return (
    <header className="rb-header">
      <a href="#home" className="rb-logo" aria-label={navbar.homeAriaLabel}>
        <div className="rb-logo-text rb-logo-text--solo">
          {dict.home.name}
          <small>Result driven training</small>
        </div>
      </a>

      <nav className="rb-nav" aria-label="Primary">
        <a href="#about">{navbar.about}</a>
        <a href="#programs">{navbar.offer}</a>
        <a href="#services">Services</a>
        <a href="#testimonials">{navbar.testimonials}</a>
        <a href="#faq">{navbar["common-questions"]}</a>
        <a href="#contact">{navbar.contact}</a>
      </nav>

      <div className="rb-header-tools">
        <div className="rb-social">
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <IconFacebook />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>
        </div>
        <LanguageSwitcher />
        <MobileMenu dictionary={navbar} />
      </div>
    </header>
  );
}

function Hero({ home }: { home: Dict }) {
  return (
    <section
      id="home"
      className="rb-hero"
      style={{ backgroundImage: `url(${HERO_PHOTO})` }}
    >
      {/* <p className="rb-hero-tagline">{home.visionDescription}</p> */}
    </section>
  );
}

function Intro({ about, isHe }: { about: Dict; isHe: boolean }) {
  return (
    <section id="about" className="rb-intro-row">
      <div>
        <p className="rb-eyebrow">{isHe ? "אודות" : "About"}</p>
        <h2 className="rb-h2">
          {isHe
            ? "אימון מקיף לספורטאי הסיבולת."
            : "Comprehensive Coaching for the Endurance Athlete."}
        </h2>
        <div className="rb-body">{parse(about.description)}</div>
        <a href="#programs" className="rb-link">
          {about.readmore}
        </a>
      </div>
      <img className="rb-intro-thumb" src={ABOUT_THUMB} alt="" />
    </section>
  );
}

function Programs({
  offer,
  about,
  isHe,
}: {
  offer: Dict;
  about: Dict;
  isHe: boolean;
}) {
  return (
    <section id="programs" className="rb-section">
      <h2 className="rb-section-h1">
        {isHe ? "מוכנים לעלות שלב?" : "Ready to Level Up?"}
      </h2>
      <div className="rb-program">
        <div>
          <h3>{isHe ? "תוכניות אימון אישיות" : "Online Training Programs"}</h3>
          <p className="rb-body">
            {isHe
              ? "תוכניות שבועיות מובנות עם אימוני שחייה, רכיבה וריצה ייעודיים. תוכנית מותאמת בתוכנת Training Peaks, ליווי אישי וצמוד וקשר רציף בוואטסאפ לשאלות והתאמות."
              : "Structured weekly workouts along with specific swim, bike, and run drills. Choose the program that fits your needs or select a level that provides custom race periodization specifically for you."}
          </p>

          <h3>{isHe ? "למי זה מיועד?" : "Who is this for?"}</h3>
          <p className="rb-body">
            {isHe
              ? "מתאים לספורטאים מכל הרמות — בין אם את/ה ספורטאי תחרותי שמחפש שיא אישי או מתאמן/ת חובב/ת שרוצה להיכנס לכושר בצורה חכמה. גם מתאמנים אחרי פציעה או ניתוח, המעוניינים לחזור לפעילות, מוצאים אצלי בית מקצועי, מדויק וקשוב."
              : "Suitable for athletes of ALL levels. Whether you're a serious competitor chasing a personal best or a recreational athlete who wants to train properly and increase their fitness. Endurance athletes (Ironman, MTB, marathon), people returning from injury, and anyone who wants to train smarter all welcome."}
          </p>
          <p className="rb-body">
            {isHe
              ? "אם אתם רוצים לחזור לפעילות, להתחזק, או להתאמן ליעד ספציפי – אני כאן בשבילכם."
              : "If you want to learn how to train efficiently and make real gains in your riding, running, and racing, this is for you."}
          </p>

          <div className="rb-program-coach">
            <img src={COACH_AVATAR} alt={about.title || "Shahar Dahan"} />
            <div>
              <h3 style={{ marginBottom: 8 }}>
                {isHe ? "שחר דהן — מאמן" : "Shahar Dahan — Coach"}
              </h3>
              <p className="rb-body" style={{ marginBottom: 8 }}>
                {isHe
                  ? "עם יותר מ-15 שנות ניסיון כספורטאי טריאתלון וסיבולת, ואחרי קריירה של 23 שנה בהייטק, שחר מביא הבנה עמוקה של הספורט וניסיון מעשי שמאפשר לו ללוות מתאמנים בכל רמה."
                  : "With 15+ years of experience as a triathlete and endurance athlete, and after a 23-year career in tech, Shahar Dahan brings deep understanding of the sport and proven success on the course."}
              </p>
              <p className="rb-body">
                {isHe
                  ? "בין אם את/ה מתאמן/ת לתחרות הבאה או פשוט משפר/ת את הכושר, הניסיון של שחר נותן לך את הכלים להגיע לפוטנציאל המלא."
                  : "Whether you're training for your next race or just improving your fitness, Shahar's experience ensures you'll have the right tools to rise to your potential."}
              </p>
              <a href="#contact" className="rb-link" style={{ marginTop: 8 }}>
                {isHe ? "פרטים נוספים" : "More Info"}
              </a>
            </div>
          </div>
        </div>
        <img className="rb-program-img" src={PROGRAM_PHOTO} alt="" />
      </div>
    </section>
  );
}

function Services({ offer }: { offer: Dict }) {
  return (
    <section id="services" className="rb-services">
      <div className="rb-services-inner">
        <h2 className="rb-services-title">{offer.title}</h2>
        <div className="rb-tiles">
          {offer.offers.map(
            (
              o: { title: string; description: string },
              i: number,
            ) => (
              <article key={i} className="rb-tile">
                <div className="rb-tile-img-wrap">
                  <img src={SERVICE_TILE_IMAGES[i]} alt="" />
                </div>
                <div className="rb-tile-body">
                  <div className="rb-tile-label">{o.title}</div>
                  <div className="rb-tile-desc">{parse(o.description)}</div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Faq({ faq }: { faq: Dict }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="rb-section">
      <h2 className="rb-section-h1">{faq.title}</h2>
      <div className="rb-faq-list">
        {faq.questions.map(
          (q: { question: string; answer: string }, i: number) => (
            <div
              key={i}
              className={`rb-faq ${open === i ? "is-open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="rb-faq-q">
                <span>{q.question}</span>
                <span className="rb-faq-q-arrow" aria-hidden="true">
                  +
                </span>
              </div>
              <div className="rb-faq-a">
                <div>{parse(q.answer)}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

function Testimonials({ testi, isHe }: { testi: Dict; isHe: boolean }) {
  return (
    <section id="testimonials" className="rb-testi">
      <h2 className="rb-testi-h">
        {isHe ? "המלצות מספורטאים" : "Athlete Testimonials"}
      </h2>
      <div className="rb-testi-grid">
        {testi.testimonials.map(
          (
            t: { name: string; title: string; description: string; src: string },
            i: number,
          ) => (
            <article key={i} className="rb-testi-card">
              <img className="rb-testi-card-img" src={t.src} alt={t.name} loading="lazy" />
              <p className="rb-testi-name">
                {t.name}
                <small>{t.title}</small>
              </p>
              <p className="rb-testi-quote">&ldquo;{t.description}&rdquo;</p>
            </article>
          ),
        )}
      </div>
    </section>
  );
}

function Footer({
  contact,
  footer,
  isHe,
  lang,
}: {
  contact: Dict;
  footer: Dict;
  isHe: boolean;
  lang: string;
}) {
  return (
    <footer id="contact" className="rb-footer">
      <div className="rb-footer-inner">
        <div>
          <div className="rb-foot-mark">
            SD<span>COACH</span>
          </div>
        </div>
        <div>
          <h3 className="rb-foot-h">{contact.callToAction}</h3>
          <p className="rb-foot-line">
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <p className="rb-foot-line">
            <a href={WHATSAPP_HREF(contact.whatsappText)}>
              {isHe ? "וואטסאפ" : "WhatsApp"} · +972 52-521-6872
            </a>
          </p>
          <p className="rb-foot-line">
            <a href={EMAIL_HREF}>{EMAIL_DISPLAY}</a>
          </p>
        </div>
        <div>
          <h3 className="rb-foot-h">{contact.socials.title}</h3>
          <div className="rb-foot-social">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={contact.socials.instagram}
            >
              <IconInstagram />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label={contact.socials.facebook}
            >
              <IconFacebook />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={contact.socials.linkedin}
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="rb-foot-bottom">
        <span>{footer.text}</span>
        <Link href={`/${lang}/accessibility`}>{footer.accessibility}</Link>
      </div>
    </footer>
  );
}

export default function RBRC({
  dictionary,
  navbar,
  lang,
}: {
  dictionary: any;
  navbar: any;
  lang: string;
}) {
  const isHe = lang === "he";
  return (
    <div className="rb-root">
      <Header navbar={navbar} dict={dictionary} />
      <Hero home={dictionary.home} />
      <Intro about={dictionary.about} isHe={isHe} />
      <Programs about={dictionary.about} offer={dictionary.offer} isHe={isHe} />
      <Services offer={dictionary.offer} />
      <Faq faq={dictionary["common-questions"]} />
      <Testimonials testi={dictionary.testimonials} isHe={isHe} />
      <Footer
        contact={dictionary.contact}
        footer={dictionary.footer}
        isHe={isHe}
        lang={lang}
      />
    </div>
  );
}
