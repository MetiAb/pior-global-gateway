import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Check,
  Coffee,
  Eye,
  Handshake,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/about-p.jpeg";
import etagegnPortrait from "../assets/etagegn.jpg";
import aberaPortrait from "../assets/abera.jpg";
import demoPortrait from "../assets/demie.jpg";
import { translations, useLanguage } from "../lib/translations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${translations.en.siteTitle}` },
      {
        name: "description",
        content: translations.en.siteDescription,
      },
      { property: "og:title", content: `About — ${translations.en.siteTitle}` },
      { property: "og:description", content: translations.en.siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${delay ? `reveal-delay-${delay}` : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function AboutPage() {
  const { t } = useLanguage();
  const [activePillar, setActivePillar] = useState("Mission");

  const pillars = {
    Mission: {
      icon: Handshake,
      label: t("ourMission"),
      title: t("missionTitle"),
      description: t("missionText"),
      points: t("missionPoints").split("|"),
      detail: t("missionDetail"),
    },
    Vision: {
      icon: Eye,
      label: t("visionLabel"),
      title: t("visionTitle"),
      description: t("visionText"),
      points: t("visionPoints").split("|"),
      detail: t("visionDetail"),
    },
  } as const;
  const pillar = pillars[activePillar as keyof typeof pillars];
  const PillarIcon = pillar.icon;

  return (
    <div className="flex flex-col">
      <AboutHero title={t("aboutTitle")} subtitle={t("aboutSubtitle")} imageAlt={t("heroAlt")} />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div>
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("ourHistory")}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("heritageTitle")}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("heritageText")}</p>
            </ScrollReveal>
            <div className="relative mt-10 space-y-5 before:absolute before:bottom-5 before:left-6 before:top-5 before:w-px before:bg-border">
              <ScrollReveal delay={1}>
                <HistoryCard
                  icon={Coffee}
                  year={t("beganYear")}
                  title={t("beganTitle")}
                  description={t("beganText")}
                  color="bg-gold/15 text-gold"
                />
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <HistoryCard
                  icon={Boxes}
                  year={t("growingExperience")}
                  title={t("foundationTitle")}
                  description={t("foundationText")}
                  color="bg-primary/10 text-primary"
                />
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <HistoryCard
                  icon={HeartPulse}
                  year={t("todayBeyond")}
                  title={t("expandingTitle")}
                  description={t("expandingText")}
                  color="bg-accent/15 text-accent"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-secondary/55 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <ScrollReveal>
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {t("whatGuidesUs")}
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {t("purposeTitle")}
                </h2>
                <p className="mt-4 text-muted-foreground">{t("purposeText")}</p>
                <div className="mt-7 flex gap-3">
                  {Object.keys(pillars).map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setActivePillar(name)}
                      className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${activePillar === name ? "border-primary bg-primary text-primary-foreground shadow-md" : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/50"}`}
                    >
                      {name === "Mission" ? t("missionTab") : t("visionTab")}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="relative overflow-hidden rounded-xl border border-gold/25 bg-card p-8 shadow-lg shadow-coffee/5 transition-all duration-300 sm:p-10">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gold/20" />
                <div className="relative" key={activePillar}>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 rotate-[-3deg] items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-500 hover:rotate-3">
                      <PillarIcon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      <Sparkles className="h-3.5 w-3.5 text-gold" />
                      {pillar.label}
                    </div>
                  </div>
                  <h3 className="mt-7 text-2xl font-bold text-card-foreground">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{pillar.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {pillar.points.map((point) => (
                      <div
                        key={point}
                        className="group flex items-center gap-2 rounded-xl border border-border/70 bg-muted/40 px-3 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-transform group-hover:scale-110">
                          <Check className="h-4 w-4" />
                        </span>
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-border/70 pt-6">
                    <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      <span>{t("ourDirection")}</span>
                      <span className="text-primary">{t("alwaysForward")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {[t("people"), t("partnerships"), t("markets")].map((step, index) => (
                        <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
                          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold ring-4 ring-gold/15" />
                          <span className="truncate text-xs font-medium text-foreground">
                            {step}
                          </span>
                          {index < 2 && <div className="h-px flex-1 bg-border" />}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.detail}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {t("setsUsApartEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("setsUsApartTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("setsUsApartText")}</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <SetsUsApartCard
            title={t("industryExperience")}
            description={t("industryExperienceText")}
            delay={1}
          />
          <SetsUsApartCard
            title={t("reliableSourcing")}
            description={t("reliableSourcingText")}
            delay={2}
          />
          <SetsUsApartCard
            title={t("strongPartnerships")}
            description={t("strongPartnershipsText")}
            delay={3}
          />
          <SetsUsApartCard
            title={t("marketUnderstanding")}
            description={t("marketUnderstandingText")}
            delay={4}
          />
          <SetsUsApartCard
            title={t("commitmentToQuality")}
            description={t("commitmentToQualityText")}
            delay={5}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {t("leadershipEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("leadershipTitle")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <LeadershipCard
            image={etagegnPortrait}
            alt={t("etagegnBekele")}
            name={t("etagegnBekele")}
            title={t("etagegnBekeleTitle")}
            delay={1}
          />
          <LeadershipCard
            image={aberaPortrait}
            alt={t("aberaHailu")}
            name={t("aberaHailu")}
            title={t("aberaHailuTitle")}
            delay={2}
          />
          <LeadershipCard
            image={demoPortrait}
            alt={t("demoAberaHailu")}
            name={t("demoAberaHailu")}
            title={t("demoAberaHailuTitle")}
            delay={3}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("moreProducts")}</h3>
            <p className="mt-4 text-primary-foreground/90">{t("moreProductsText")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center rounded-md bg-salt px-6 py-3 text-sm font-semibold text-coffee shadow-lg transition-all hover:-translate-y-0.5 hover:bg-salt/90"
              >
                {t("viewProducts")}{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HistoryCard({
  icon: Icon,
  year,
  title,
  description,
  color,
}: {
  icon: typeof Coffee;
  year: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group relative flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:gap-5 sm:p-6">
      <div
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color} transition-transform duration-300 group-hover:rotate-6`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {year}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="mt-2 leading-6 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function LeadershipCard({
  image,
  alt,
  name,
  title,
  delay,
}: {
  image: string;
  alt: string;
  name: string;
  title: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-80 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-primary via-gold to-transparent" />
          <h3 className="text-xl font-semibold tracking-tight text-card-foreground transition-transform duration-300 group-hover:translate-x-0.5">
            <span className="bg-gradient-to-r from-primary via-primary to-gold bg-clip-text text-transparent">
              {name}
            </span>
          </h3>
          <p className="mt-2 text-sm font-medium text-primary transition-colors duration-300 group-hover:text-gold">
            {title}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function SetsUsApartCard({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-primary to-gold transition-all duration-300 group-hover:w-12" />
          <h3 className="text-lg font-bold tracking-tight text-card-foreground">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function AboutHero({
  title,
  subtitle,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  imageAlt: string;
}) {
  return (
    <section className="border-b border-gold/30 bg-coffee text-salt">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <div className="mb-6 h-1 w-14 rounded-full bg-gold" />
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-md text-lg leading-7 text-salt/80">{subtitle}</p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-salt/15 shadow-2xl shadow-black/20">
          <img
            src={aboutImage}
            alt={imageAlt}
            className="aspect-[3/2] w-full object-cover object-center"
            width={620}
            height={400}
            fetchPriority="high"
          />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
        </div>
      </div>
    </section>
  );
}
