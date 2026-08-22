import { createFileRoute, Link } from "@tanstack/react-router";
import coffee from "../assets/coffee.jpg";
import salt from "../assets/salt.jpg";
import medical from "../assets/medical.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Pior Export Import PLC" },
      { name: "description", content: "Explore Pior Export Import PLC’s products: Wollega specialty coffee, natural Afar iodised salt, and imported medical devices." },
      { property: "og:title", content: "Products — Pior Export Import PLC" },
      { property: "og:description", content: "Wollega specialty coffee, natural Afar iodised salt, and imported medical devices." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Our Products"
        subtitle="Premium Ethiopian exports and trusted medical imports"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          <ProductFeature
            image={coffee}
            alt="Premium Wollega coffee beans"
            label="Specialty Coffee"
            title="Wollega Origin Coffee"
            description="We supply premium Ethiopian coffee sourced from the Wollega region, known for its distinctive rich flavor, full body, and exceptional quality. Our coffee is carefully selected and processed to preserve its authentic Ethiopian character."
            features={[
              "Direct from coffee collection centres in Qelem Wollega",
              "100% Arabica, shade-grown, hand-sorted",
              "Available as green beans for export",
              "Rich flavor, full body, and complex notes",
            ]}
          />

          <ProductFeature
            image={salt}
            alt="Natural Afar salt mounds at sunset"
            label="Natural Salt"
            title="Natural Iodised Afar Salt"
            description="Our natural iodised salt is sourced from the Afar region, an area renowned for traditional salt harvesting methods that date back centuries. The salt is carefully hand-harvested and processed to maintain its purity and natural mineral composition."
            features={[
              "Sourced from the Afar region, Ethiopia",
              "Rich in essential minerals",
              "Free from artificial additives",
              "Unique texture and flavor profile",
            ]}
            reverse
            extra={
              <div className="mt-6 rounded-xl border border-border bg-card p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Production &amp; Storage
                </p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">Producer</dt>
                    <dd className="text-muted-foreground">Sino Salt PLC, Semera Industry Park, Afar</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Warehouse</dt>
                    <dd className="text-muted-foreground">
                      Sheger City, Burayu, Ashewa Meda, Block 8, Shade No. 238
                    </dd>
                  </div>
                </dl>
              </div>
            }
          />

          <ProductFeature
            image={medical}
            alt="Medical devices and healthcare supplies"
            label="Medical Supplies"
            title="Medicine & Medical Device Imports"
            description="Pior Export Import PLC imports quality medicines and medical devices, supporting healthcare providers with reliable products and compliant sourcing."
            features={[
              "Trusted medical device sourcing",
              "Compliant import procedures",
              "Reliable supply for clinics and hospitals",
              "Focus on quality and patient safety",
            ]}
          />
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Interested in bulk supply or export orders?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Contact us for product specifications, quantities, pricing, and shipping arrangements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Request a Quote
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
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}) {
  return (
    <div className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:grid-flow-dense" : ""}`}>
      <div className={`overflow-hidden rounded-2xl ${reverse ? "lg:col-start-2" : ""}`}>
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>
      <div className={reverse ? "lg:col-start-1" : ""}>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">{label}</span>
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
      </div>
    </div>
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
