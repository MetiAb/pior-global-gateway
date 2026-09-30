import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Gauge, Handshake, RefreshCw, Scale, ShieldCheck, Sprout } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import hero from "../assets/hero.jpg";
import rawCoffeeBeans from "../assets/raw-coffee-beans.jpg";
import salt from "../assets/salt.jpg";
import medical from "../assets/medical.jpg";
import { translations, useLanguage } from "../lib/translations";
import DeferredScene from "../components/3d/DeferredScene";

const CoreValues3D = lazy(() => import("../components/3d/CoreValues3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${translations.en.siteTitle} — Premium Ethiopian Coffee & Salt` },
      {
        name: "description",
        content: translations.en.siteDescription,
      },
      {
        property: "og:title",
        content: `${translations.en.siteTitle} — Premium Ethiopian Coffee & Salt`,
      },
      { property: "og:description", content: translations.en.siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <IntroSection />
      <ProductsSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
}

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
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" },
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

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt={t("heroAlt")}
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover transition-transform duration-[8000ms] ease-out motion-safe:animate-[slow-pan_18s_ease-in-out_infinite_alternate]"
        width={1920}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/50 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("heroEyebrow")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight text-salt sm:text-5xl md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-salt/90 sm:text-xl">{t("heroText")}</p>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl"
            >
              {t("viewProducts")}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-salt/30 bg-salt/10 px-6 py-3 text-sm font-semibold text-salt backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-salt/20 hover:shadow-lg"
            >
              {t("contactUs")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function IntroSection() {
  const { t } = useLanguage();
  const [activeValue, setActiveValue] = useState("reliability");

  const coreValues = [
    {
      id: "reliability",
      title: t("reliability"),
      description: t("reliabilityText"),
      icon: ShieldCheck,
      color: "bg-primary/10 text-primary",
    },
    {
      id: "integrity",
      title: t("integrity"),
      description: t("integrityText"),
      icon: Scale,
      color: "bg-gold/20 text-gold",
    },
    {
      id: "quality",
      title: t("quality"),
      description: t("qualityText"),
      icon: BadgeCheck,
      color: "bg-accent/15 text-accent",
    },
    {
      id: "efficiency",
      title: t("efficiency"),
      description: t("efficiencyText"),
      icon: Gauge,
      color: "bg-clay/15 text-clay",
    },
    {
      id: "partnership",
      title: t("partnership"),
      description: t("partnershipText"),
      icon: Handshake,
      color: "bg-primary/10 text-primary",
    },
    {
      id: "adaptability",
      title: t("adaptability"),
      description: t("adaptabilityText"),
      icon: RefreshCw,
      color: "bg-gold/20 text-gold",
    },
    {
      id: "responsibleGrowth",
      title: t("responsibleGrowth"),
      description: t("responsibleGrowthText"),
      icon: Sprout,
      color: "bg-accent/15 text-accent",
    },
  ];

  const selectedValue = coreValues.find((value) => value.id === activeValue) ?? coreValues[0]!;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto grid w-full max-w-6xl items-center gap-3 lg:grid-cols-[1fr_0.85fr]">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("whatWeStandFor")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("coreValues")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("coreValuesText")}</p>
        </div>
        <DeferredScene className="h-52 w-full sm:h-64 lg:h-72">
          <Suspense fallback={null}>
            <CoreValues3D className="h-full w-full" />
          </Suspense>
        </DeferredScene>
      </ScrollReveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreValues.map((value, index) => {
          const ValueIcon = value.icon;
          const isActive = value.id === activeValue;

          return (
            <ScrollReveal key={value.title} delay={index * 1}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveValue(value.id)}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isActive ? "border-primary bg-card ring-2 ring-primary/15" : "border-border bg-card"}`}
              >
                <span className="absolute right-4 top-4 text-xs font-bold text-muted-foreground/60">
                  0{index + 1}
                </span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${value.color} transition-transform duration-300 group-hover:rotate-6`}
                >
                  <ValueIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">{value.title}</h3>
                <p
                  className={`mt-2 text-sm leading-6 text-muted-foreground transition-all ${isActive ? "opacity-100" : "line-clamp-2 opacity-80"}`}
                >
                  {value.description}
                </p>
                <span
                  className={`mt-4 block h-1 rounded-full transition-all duration-300 ${isActive ? "w-full bg-primary" : "w-8 bg-border group-hover:w-16 group-hover:bg-gold"}`}
                />
              </button>
            </ScrollReveal>
          );
        })}
      </div>
      <ScrollReveal delay={2}>
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 text-center transition-all duration-300 sm:p-6">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <selectedValue.icon className="h-4 w-4" />
            {selectedValue.title}
          </div>
          <p className="mt-2 text-muted-foreground">{selectedValue.description}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ProductsSection() {
  const { t } = useLanguage();
  const products = [
    {
      title: t("coffeeTitle"),
      description: t("coffeeDescription"),
      image: rawCoffeeBeans,
      alt: t("coffeeAlt"),
    },
    {
      title: t("saltTitle"),
      description: t("saltDescription"),
      image: salt,
      alt: t("saltAlt"),
    },
    {
      title: t("medicalTitle"),
      description: t("medicalDescription"),
      image: medical,
      alt: t("medicalAlt"),
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("discoverProducts")}
              </h2>
              <p className="mt-2 text-muted-foreground">{t("discoverProductsText")}</p>
            </div>
            <Link
              to="/products"
              className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              {t("viewAllProducts")}
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-coffee/75 via-coffee/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="relative z-20 p-6">
                  <h3 className="text-xl font-semibold text-card-foreground">{product.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-0.5 hover:underline"
                  >
                    {t("learnMore")}
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { t } = useLanguage();
  const values = [
    { title: t("directSourcing"), description: t("directSourcingText") },
    { title: t("qualityAssured"), description: t("qualityAssuredText") },
    { title: t("globalReach"), description: t("globalReachText") },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("whyPartner")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("whyPartnerText")}</p>
            <div className="mt-8 grid gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex items-start gap-4 reveal-delay-${index + 1}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="group relative overflow-hidden rounded-2xl shadow-sm">
            <img
              src={rawCoffeeBeans}
              alt={t("coffeeImageAlt")}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("readyToSource")}</h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-lg text-primary-foreground/90">{t("readyToSourceText")}</p>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-salt px-6 py-3 text-sm font-semibold text-coffee shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-salt/90 hover:shadow-xl"
            >
              {t("contactUs")}
            </Link>
            <Link
              to="/products"
              className="rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/20"
            >
              {t("exploreProducts")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
