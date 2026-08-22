import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Eye, Handshake } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pior Export Import PLC" },
      {
        name: "description",
        content:
          "Learn about Pior Export Import PLC’s history, mission, and vision. We export premium Ethiopian coffee and salt and import quality medical supplies.",
      },
      { property: "og:title", content: "About — Pior Export Import PLC" },
      {
        property: "og:description",
        content: "Learn about Pior Export Import PLC’s history, mission, and vision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [activePillar, setActivePillar] = useState("Mission");

  const pillars = {
    Mission: {
      icon: Handshake,
      label: "How we work",
      title: "Empowering Producers",
      description:
        "We connect Ethiopian farmers and producers with reliable international buyers, creating fair trade, consistent quality, and sustainable growth across every partnership.",
      points: [
        "Direct producer relationships",
        "Transparent sourcing",
        "Partnerships built to last",
      ],
    },
    Vision: {
      icon: Eye,
      label: "Where we are going",
      title: "A Trusted Global Name",
      description:
        "We are building a leading Ethiopian export and import company recognized for premium Wollega coffee, natural Afar salt, and trusted medical supplies.",
      points: [
        "Premium Ethiopian products",
        "Dependable global logistics",
        "Excellence at every step",
      ],
    },
  } as const;
  const pillar = pillars[activePillar as keyof typeof pillars];
  const PillarIcon = pillar.icon;

  return (
    <div className="flex flex-col">
      <PageHeader title="About Pior Export Import PLC" subtitle="Our History, Mission & Vision" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our History
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built on Ethiopian Heritage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pior Export Import PLC was founded in 2021 in Addis Ababa, Ethiopia. The company was
              established to supply high-quality Ethiopian products to exporters and international
              markets.
            </p>
            <p className="mt-4 text-muted-foreground">
              From sourcing premium coffee in Qelem Wollega to natural salt from Afar, we have built
              strong relationships with producers and buyers worldwide. Our commitment is to deliver
              consistent quality, transparent sourcing, and dependable logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                What guides us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Purpose with a pulse.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Choose a pillar to see the principles behind every shipment and relationship.
              </p>
              <div className="mt-7 flex gap-3">
                {Object.keys(pillars).map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setActivePillar(name)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${activePillar === name ? "border-primary bg-primary text-primary-foreground shadow-md" : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/50"}`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 sm:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gold/20" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <PillarIcon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-bold text-card-foreground">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{pillar.description}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {pillar.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Check className="h-4 w-4 text-accent" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
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
              Discover the full range of Wollega coffee, Afar salt, and medical supplies we offer to
              international partners.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center rounded-md bg-salt px-6 py-3 text-sm font-semibold text-coffee shadow-lg transition-all hover:-translate-y-0.5 hover:bg-salt/90"
              >
                View Products{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
