import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider, translations, useLanguage } from "../lib/translations";

function NotFoundComponent() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("notFoundTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("notFoundText")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useLanguage();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("loadErrorTitle")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("loadErrorText")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: translations.en.siteTitle },
      {
        name: "description",
        content: translations.en.siteDescription,
      },
      { name: "author", content: translations.en.siteTitle },
      { property: "og:site_name", content: translations.en.siteTitle },
      { property: "og:type", content: "website" },
      { property: "og:title", content: translations.en.siteTitle },
      {
        property: "og:description",
        content: translations.en.siteDescription,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@PiorExportImport" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: translations.en.siteTitle,
          url: "https://pior-export-import.com",
          email: "piorinfocenter@gmail.com",
          telephone: "+251911228457",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kazanches, Elilly International Hotel Second floor",
            addressLocality: "Addis Ababa",
            addressCountry: "Ethiopia",
          },
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("about") },
    { to: "/products", label: t("products") },
    { to: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground transition-transform hover:scale-[1.01]"
        >
          <img src="/favicon.png" alt={t("logoAlt")} className="h-8 w-8" />
          <span className="hidden sm:inline">{t("siteTitle")}</span>
          <span className="sm:hidden">{t("brandShort")}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary font-semibold" }}
              className="relative text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
          >
            {t("getInTouch")}
          </Link>
          <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label={t("toggleMenu")}
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 transition-all duration-300 ease-out md:hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-primary/5 text-primary" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            {t("getInTouch")}
          </Link>
          <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <img src="/favicon.png" alt={t("logoAlt")} className="h-8 w-8" />
              {t("siteTitle")}
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{t("footerText")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-foreground">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-foreground">
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-foreground">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>piorinfocenter@gmail.com</li>
              <li>+251 911 228 457</li>
              <li>+251 115 587 373</li>
              <li>Kazanches, Elilly International Hotel 2nd Floor, Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t("siteTitle")}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
  t,
}: {
  language: "en" | "am" | "om";
  setLanguage: (language: "en" | "am" | "om") => void;
  t: (key: keyof typeof translations.en) => string;
}) {
  return (
    <div
      className="flex items-center gap-1 rounded-md border border-border bg-background p-1 text-xs font-semibold shadow-sm"
      aria-label={t("languageLabel")}
    >
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={`rounded px-2 py-1.5 transition-all duration-200 ${language === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
      >
        {t("english")}
      </button>
      <button
        type="button"
        aria-pressed={language === "am"}
        onClick={() => setLanguage("am")}
        className={`rounded px-2 py-1.5 transition-all duration-200 ${language === "am" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
      >
        {t("amharic")}
      </button>
      <button
        type="button"
        aria-pressed={language === "om"}
        onClick={() => setLanguage("om")}
        className={`rounded px-2 py-1.5 transition-all duration-200 ${language === "om" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
      >
        {t("oromo")}
      </button>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
