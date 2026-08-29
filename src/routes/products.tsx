import { createFileRoute, Link } from "@tanstack/react-router";
import rawCoffeeBeans from "../assets/raw-coffee-beans.jpg";
import salt from "../assets/salt.jpg";
import medical from "../assets/medical.jpg";
import { translations, useLanguage } from "../lib/translations";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: `Products — ${translations.en.siteTitle}` },
      {
        name: "description",
        content: translations.en.siteDescription,
      },
      { property: "og:title", content: `Products — ${translations.en.siteTitle}` },
      { property: "og:description", content: translations.en.siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      <PageHeader title={t("productsTitle")} subtitle={t("productsSubtitle")} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          <ProductFeature
            image={rawCoffeeBeans}
            alt={t("wollegaAlt")}
            label={t("highLandCoffee")}
            title={t("wollegaOrigin")}
            description={t("wollegaText")}
            features={t("wollegaFeatures").split("|")}
          />

          <ProductFeature
            image={salt}
            alt={t("afarSaltAlt")}
            label={t("naturalSalt")}
            title={t("afarSaltTitle")}
            description={t("afarSaltText")}
            features={t("afarFeatures").split("|")}
            reverse
            extra={
              <div className="mt-6 rounded-xl border border-border bg-card p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {t("productionStorage")}
                </p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">{t("producer")}</dt>
                    <dd className="text-muted-foreground">{t("producerValue")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">{t("warehouse")}</dt>
                    <dd className="text-muted-foreground">{t("warehouseValue")}</dd>
                  </div>
                </dl>
              </div>
            }
          />

          <ProductFeature
            image={medical}
            alt={t("medicalAltFull")}
            label={t("medicalSupplies")}
            title={t("medicineTitle")}
            description={t("medicineText")}
            features={t("medicalFeatures").split("|")}
          />
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("bulkTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("bulkText")}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            {t("requestQuote")}
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProductFeature({
  image,
  alt,
  label,
  title,
  description,
  features,
  reverse = false,
  extra,
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
  extra?: React.ReactNode;
}) {
  return (
    <div
      className={`grid items-center gap-6 sm:grid-cols-2 sm:gap-8 ${reverse ? "sm:grid-flow-dense" : ""}`}
    >
      <div className={`overflow-hidden rounded-2xl ${reverse ? "sm:col-start-2" : ""}`}>
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>
      <div className={reverse ? "sm:col-start-1" : ""}>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {label}
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        {extra}
      </div>
    </div>
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative overflow-hidden border-b border-coffee/80 bg-coffee py-20 text-salt">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-salt sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-salt/80">{subtitle}</p>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
