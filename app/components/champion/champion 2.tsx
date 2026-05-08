"use client";
import React, { useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { PhoneCallIcon } from "lucide-react";

import FacebookLogo from "@/[lang]/assets/facebook.png";
import InstagramLogo from "@/[lang]/assets/instagram.png";
import WhatsappLogo from "@/[lang]/assets/whatsapp.png";
import LinkedinLogo from "@/[lang]/assets/linkedin.svg";
import { LanguageSwitcher } from "../ui/locale-switcher";
import { MobileMenu } from "../ui/mobile-menu";

import "./champion.css";

const HERO_PHOTO =
  "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202026-04-22%20at%2016.59.57.jpeg";

const GALLERY_TILES: Array<{ src: string; span?: number }> = [
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar4.jpeg",
    span: 2,
  },
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2013.18.39.jpeg",
  },
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar1.jpeg",
  },
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar3.jpeg",
  },
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/shahar5.jpeg",
    span: 2,
  },
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.06.16.jpeg",
  },
  {
    src: "https://ik.imagekit.io/seandahan/Shahar%20Images/WhatsApp%20Image%202025-12-09%20at%2019.06.20.jpeg",
  },
];

const STATS = [
  { n: "23y", l: "In tech, then all-in" },
  { n: "15+", l: "Years racing" },
  { n: "4", l: "Sports coached" },
  { n: "1:1", l: "Every athlete" },
];

const CRED_LIST = [
  "Custom plans",
  "TrainingPeaks",
  "Strava & Garmin",
  "Threshold testing",
  "Weekly check-ins",
];

type Dict = any;

function ChampionNav({ navDict, ctaLabel }: { navDict: Dict; ctaLabel: string }) {
  return (
    <header className="v1-nav">
      <div className="v1-nav-left">
        <Link href="#home" className="v1-mark" aria-label={navDict.homeAriaLabel}>
          SD
        </Link>
        <div className="v1-mark-meta">
          <div>SHAHAR DAHAN</div>
          <div className="v1-mark-sub">TRIATHLON · FUNCTIONAL · REHAB</div>
        </div>
      </div>
      <nav className="v1-nav-links">
        <a href="#about">{navDict.about}</a>
        <a href="#services">{navDict.offer}</a>
        <a href="#results">Results</a>
        <a href="#testimonials">{navDict.testimonials}</a>
        <a href="#gallery">Field</a>
        <a href="#faq">{navDict["common-questions"]}</a>
      </nav>
      <div className="v1-nav-tools">
        <LanguageSwitcher />
        <a href="#contact" className="v1-nav-cta">
          {ctaLabel} <span aria-hidden="true">→</span>
        </a>
        <MobileMenu dictionary={navDict} />
      </div>
    </header>
  );
}

function ChampionHero({ home }: { home: Dict }) {
  return (
    <section id="home" className="v1-hero">
      <div
        className="v1-hero-photo"
        style={{ backgroundImage: `url(${HERO_PHOTO})` }}
      />
      <div className="v1-hero-vignette" />
      <div className="v1-hero-content">
        <div className="v1-hero-tag">
          <span className="v1-dot" /> COACH · ATHLETE · CLINICIAN
        </div>
        <h1 className="v1-hero-name">{home.name}</h1>
        <div className="v1-hero-foot">
          <p>
            {home.title}
            <br />
            {home.visionDescription}
          </p>
          <a className="v1-btn-primary" href="#contact">
            {home.contactTitle} →
          </a>
        </div>
      </div>
      <div className="v1-hero-marquee">
        <div className="v1-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              TRIATHLON · RUNNING · CYCLING · FUNCTIONAL · REHAB · 1-ON-1
              COACHING · CUSTOM PROGRAMS · TRIATHLON · RUNNING · CYCLING ·
              FUNCTIONAL · REHAB · 1-ON-1 COACHING · CUSTOM PROGRAMS ·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChampionAbout({ about, label }: { about: Dict; label: string }) {
  return (
    <section id="about" className="v1-section">
      <div className="v1-section-head">
        <div className="v1-section-num">01</div>
        <div className="v1-section-label">{label}</div>
      </div>
      <div className="v1-about-grid">
        <div className="v1-about-quote">
          <span className="v1-hero-accent">&ldquo;</span>
          After 23 years in tech,
          <br />
          I went all-in on what I love most — coaching athletes.
        </div>
        <div className="v1-about-body">{parse(about.description)}</div>
      </div>
      <ul className="v1-credentials">
        <li>
          <strong>15+ yrs</strong> racing
        </li>
        <li>
          <strong>Tri / Run / Cycle</strong> coaching
        </li>
        <li>
          <strong>Functional</strong> strength cert.
        </li>
        <li>
          <strong>Rehab</strong> programs
        </li>
      </ul>
    </section>
  );
}

function ChampionServices({ offer, label }: { offer: Dict; label: string }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="v1-section">
      <div className="v1-section-head">
        <div className="v1-section-num">02</div>
        <div className="v1-section-label">{label}</div>
      </div>
      <div className="v1-services-list">
        {offer.offers.map((s: { title: string; description: string }, i: number) => (
          <div
            key={i}
            className={`v1-service ${open === i ? "is-open" : ""}`}
            onMouseEnter={() => setOpen(i)}
            onClick={() => setOpen(i)}
          >
            <div className="v1-service-row">
              <div className="v1-service-n">S/0{i + 1}</div>
              <div className="v1-service-name">{s.title}</div>
              <div className="v1-service-short">{stripTags(s.description).slice(0, 80)}…</div>
              <div className="v1-service-arrow" aria-hidden="true">
                →
              </div>
            </div>
            <div className="v1-service-detail">
              <div className="v1-service-detail-inner">
                {parse(s.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function stripTags(s: string) {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function ChampionResults() {
  return (
    <section id="results" className="v1-section v1-results">
      <div className="v1-section-head v1-section-head-light">
        <div className="v1-section-num">03</div>
        <div className="v1-section-label">Results</div>
      </div>
      <div className="v1-results-grid">
        {STATS.map((s, i) => (
          <div key={i} className="v1-stat">
            <div className="v1-stat-n">{s.n}</div>
            <div className="v1-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="v1-credentials-row">
        <div className="v1-cred-title">Approach &amp; tools</div>
        <div className="v1-cred-list">
          {CRED_LIST.map((c, i) => (
            <React.Fragment key={c}>
              <span>{c}</span>
              {i < CRED_LIST.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChampionTestimonials({ testi, label }: { testi: Dict; label: string }) {
  return (
    <section id="testimonials" className="v1-section">
      <div className="v1-section-head">
        <div className="v1-section-num">04</div>
        <div className="v1-section-label">{label}</div>
      </div>
      <div className="v1-testi-grid">
        {testi.testimonials.map(
          (
            t: { name: string; title: string; description: string; src: string },
            i: number,
          ) => (
            <figure key={i} className="v1-testi">
              <blockquote>{t.description}</blockquote>
              <figcaption>
                <img
                  className="v1-testi-avatar"
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                />
                <div className="v1-testi-id">
                  <strong>{t.name}</strong>
                  <span>{t.title}</span>
                </div>
              </figcaption>
            </figure>
          ),
        )}
      </div>
    </section>
  );
}

function ChampionGallery() {
  return (
    <section id="gallery" className="v1-section">
      <div className="v1-section-head">
        <div className="v1-section-num">05</div>
        <div className="v1-section-label">Field</div>
      </div>
      <div className="v1-gallery-grid">
        {GALLERY_TILES.map((t, i) => (
          <div
            key={i}
            className={`v1-tile${t.span === 2 ? " v1-tile-2" : ""}`}
          >
            <img
              src={t.src}
              alt=""
              className="v1-tile-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ChampionFaq({ faq, label }: { faq: Dict; label: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="v1-section">
      <div className="v1-section-head">
        <div className="v1-section-num">06</div>
        <div className="v1-section-label">{label}</div>
      </div>
      <div className="v1-faq-list">
        {faq.questions.map(
          (q: { question: string; answer: string }, i: number) => (
            <div
              key={i}
              className={`v1-faq ${open === i ? "is-open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="v1-faq-q">
                <span className="v1-faq-q-num">Q/0{i + 1}</span>
                <span>{q.question}</span>
                <span className="v1-faq-q-arrow" aria-hidden="true">
                  +
                </span>
              </div>
              <div className="v1-faq-a">
                <div>{parse(q.answer)}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

function ChampionContact({
  contact,
  footer,
}: {
  contact: Dict;
  footer: Dict;
}) {
  const socials = [
    {
      key: "instagram",
      url: "https://www.instagram.com/coachdahan_/",
      logo: InstagramLogo.src,
    },
    {
      key: "facebook",
      url: "https://www.facebook.com/profile.php?id=100087787164428",
      logo: FacebookLogo.src,
    },
    {
      key: "linkedin",
      url: "https://www.linkedin.com/company/108040060",
      logo: LinkedinLogo.src,
    },
  ];

  return (
    <section id="contact" className="v1-contact">
      <div className="v1-contact-inner">
        <div className="v1-contact-eyebrow">— {contact.callToAction}</div>
        <h2 className="v1-contact-h">{contact.callToAction}</h2>
        <p className="v1-contact-sub">{contact.socials.title}</p>
        <div className="v1-contact-actions">
          <a
            className="v1-btn-primary v1-btn-lg"
            href={`https://wa.me/+972525216872?text=${encodeURIComponent(contact.whatsappText)}`}
          >
            <img src={WhatsappLogo.src} alt="" style={{ width: 18, height: 18 }} />
            {contact.socials.whatsapp}
          </a>
          <a className="v1-btn-ghost v1-btn-lg" href="tel:+12069107427">
            <PhoneCallIcon size={18} /> +1 206-910-7427
          </a>
        </div>
        <div className="v1-contact-socials">
          <span className="v1-contact-socials-label">
            {contact.socials.title}
          </span>
          <div className="v1-contact-socials-list">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={s.logo} alt="" />
                {contact.socials[s.key]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="v1-footer">
        <div>{footer.text}</div>
        <div>
          <Link href="/accessibility">{footer.accessibility}</Link>
        </div>
      </footer>
    </section>
  );
}

export default function Champion({
  dictionary,
  navbar,
}: {
  dictionary: any;
  navbar: any;
}) {
  return (
    <div className="v1-root">
      <ChampionNav navDict={navbar} ctaLabel={dictionary.home.contactTitle} />
      <ChampionHero home={dictionary.home} />
      <ChampionAbout about={dictionary.about} label={navbar.about} />
      <ChampionServices offer={dictionary.offer} label={dictionary.offer.title} />
      <ChampionResults />
      <ChampionTestimonials
        testi={dictionary.testimonials}
        label={navbar.testimonials}
      />
      <ChampionGallery />
      <ChampionFaq
        faq={dictionary["common-questions"]}
        label={dictionary["common-questions"].title}
      />
      <ChampionContact
        contact={dictionary.contact}
        footer={dictionary.footer}
      />
    </div>
  );
}
