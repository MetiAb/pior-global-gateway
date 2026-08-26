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
      label: "Our Mission",
      title: "Connecting markets with purpose",
      description:
        "PIOR's mission is to connect markets through reliable trade, responsible sourcing, efficient supply chains, and long-term commercial partnerships.",
      points: ["Reliable trade", "Responsible sourcing", "Efficient supply chains"],
      detail:
        "We seek to create value across coffee export, salt wholesale, and our growing pharmaceutical activities. As we grow, we remain centered on responsible business, sustainable value creation, and trusted connections between suppliers, businesses, and markets.",
    },
    Vision: {
      icon: Eye,
      label: "Where we are going",
      title: "A trusted global name",
      description:
        "PIOR's vision is to become a trusted and diversified Ethiopian commercial enterprise, recognized for reliable trade, responsible supply chains, strong partnerships, and sustainable growth.",
      points: ["Coffee export", "Salt wholesale", "Pharmaceuticals"],
      detail:
        "By developing our people, partnerships, infrastructure, and supply-chain capabilities, we connect Ethiopian and international markets.",
    },
  } as const;
  const pillar = pillars[activePillar as keyof typeof pillars];
  const PillarIcon = pillar.icon;

  return (
    <div className="flex flex-col">
      <PageHeader title="About Pior Export Import PLC" subtitle="Our History, Mission & Vision" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our History
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on Ethiopian Heritage
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            From a focused trading company to a growing multi-sector enterprise, every step has
            strengthened the way PIOR connects products, people, and markets.
          </p>
          <div className="relative mt-10 space-y-5 before:absolute before:bottom-5 before:left-6 before:top-5 before:w-px before:bg-border">
            <HistoryCard
              icon={Coffee}
              year="2013 E.C. / July 2021 G.C."
              title="Where it began"
              description="PIOR Export Import PLC began its journey as a multi-sector commercial enterprise within Ethiopia's trading environment."
              color="bg-gold/15 text-gold"
            />
            <HistoryCard
              icon={Boxes}
              year="Growing experience"
              title="Building the foundation"
              description="We developed practical experience across coffee export supply chains, edible salt wholesale trade, logistics, and commercial distribution."
              color="bg-primary/10 text-primary"
            />
            <HistoryCard
              icon={HeartPulse}
              year="Today and beyond"
              title="Expanding with purpose"
              description="Our strong foundation in supply-chain execution, financial discipline, operations, and relationships now supports pharmaceutical importation and wholesale distribution."
              color="bg-accent/15 text-accent"
            />
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
                    <span>Our direction</span>
                    <span className="text-primary">Always moving forward</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {["People", "Partnerships", "Markets"].map((step, index) => (
                      <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
                        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold ring-4 ring-gold/15" />
                        <span className="truncate text-xs font-medium text-foreground">{step}</span>
                        {index < 2 && <div className="h-px flex-1 bg-border" />}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.detail}</p>
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
              our customers.
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
