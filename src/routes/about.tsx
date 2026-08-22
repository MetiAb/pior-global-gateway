import { createFileRoute, Link } from "@tanstack/react-router";
import coffee from "../assets/coffee.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pior Export Import PLC" },
      { name: "description", content: "Learn about Pior Export Import PLC’s history, mission, and vision. We export premium Ethiopian coffee and salt and import quality medical supplies." },
      { property: "og:title", content: "About — Pior Export Import PLC" },
      { property: "og:description", content: "Learn about Pior Export Import PLC’s history, mission, and vision." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About Pior Export Import PLC"
        subtitle="Our History, Mission & Vision"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={coffee}
              alt="Ethiopian coffee cherries on the branch"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our History</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built on Ethiopian Heritage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pior Export Import PLC was founded in 2021 in Addis Ababa, Ethiopia. The company was established to supply high-quality Ethiopian products to exporters and international markets.
            </p>
            <p className="mt-4 text-muted-foreground">
              From sourcing premium coffee in Qelem Wollega to natural salt from Afar, we have built strong relationships with producers and buyers worldwide. Our commitment is to deliver consistent quality, transparent sourcing, and dependable logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Mission</span>
              <h3 className="mt-3 text-2xl font-bold text-card-foreground">Empowering Producers</h3>
              <p className="mt-4 text-muted-foreground">
                To empower Ethiopian farmers and producers by connecting them with reliable international buyers, ensuring fair trade, consistent quality, and sustainable growth across every partnership.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Vision</span>
              <h3 className="mt-3 text-2xl font-bold text-card-foreground">A Trusted Global Name</h3>
              <p className="mt-4 text-muted-foreground">
                To be a leading Ethiopian export and import company recognized for premium Wollega coffee, natural Afar salt, and trusted medical supplies — delivering excellence at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Want to learn more about our products?
            </h3>
            <p className="mt-4 text-primary-foreground/90">
              Discover the full range of Wollega coffee, Afar salt, and medical supplies we offer to international partners.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="rounded-md bg-salt px-6 py-3 text-sm font-semibold text-coffee shadow-lg transition-all hover:bg-salt/90"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
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
