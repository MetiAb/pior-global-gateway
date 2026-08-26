import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Gauge, Handshake, RefreshCw, Scale, ShieldCheck, Sprout } from "lucide-react";
import { useState } from "react";
import hero from "../assets/hero.jpg";
import rawCoffeeBeans from "../assets/raw-coffee-beans.jpg";
import salt from "../assets/salt.jpg";
import medical from "../assets/medical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pior Export Import PLC — Premium Ethiopian Coffee & Salt" },
      {
        name: "description",
        content:
          "Pior Export Import PLC supplies Ethiopia's finest Wollega coffee, natural Afar iodised salt, and quality medical devices to exporters and international markets.",
      },
      { property: "og:title", content: "Pior Export Import PLC — Premium Ethiopian Coffee & Salt" },
      {
        property: "og:description",
        content:
          "Supplying Ethiopia's finest Wollega coffee, natural Afar iodised salt, and quality medical devices to exporters and international markets.",
      },
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

function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Ethiopian highlands with coffee and salt landscapes"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/50 to-background/90" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          Pior Export Import PLC
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold leading-tight text-salt sm:text-5xl md:text-6xl lg:text-7xl">
          Supplying Ethiopia’s Finest Coffee and Natural Salt
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-salt/90 sm:text-xl">
          Empowering farmers and supplying premium Wollega coffee and Afar salt to the whole sale
          market.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            View Products
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-salt/30 bg-salt/10 px-6 py-3 text-sm font-semibold text-salt backdrop-blur transition-all hover:bg-salt/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  const [activeValue, setActiveValue] = useState("Reliability");

  const coreValues = [
    {
      title: "Reliability",
      description:
        "We strive to be a dependable partner by delivering consistently and managing our commercial and supply-chain responsibilities with care.",
      icon: ShieldCheck,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Integrity",
      description:
        "We believe long-term business relationships are built on honesty, professionalism, accountability, and responsible conduct.",
      icon: Scale,
      color: "bg-gold/20 text-gold",
    },
    {
      title: "Quality",
      description:
        "We seek quality throughout our sourcing, handling, trading, and distribution activities, with standards appropriate to each sector in which we operate.",
      icon: BadgeCheck,
      color: "bg-accent/15 text-accent",
    },
    {
      title: "Efficiency",
      description:
        "We continuously work to improve our supply chains, logistics, inventory management, and operational processes.",
      icon: Gauge,
      color: "bg-clay/15 text-clay",
    },
    {
      title: "Partnership",
      description:
        "We value long-term relationships with suppliers, customers, and business partners and believe that sustainable growth is built through mutual success.",
      icon: Handshake,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Adaptability",
      description:
        "Our multi-sector experience allows us to respond to changing markets and explore new opportunities while building on the capabilities we have already developed.",
      icon: RefreshCw,
      color: "bg-gold/20 text-gold",
    },
    {
      title: "Responsible Growth",
      description:
        "We pursue expansion with careful planning, disciplined operations, and a focus on creating sustainable commercial value.",
      icon: Sprout,
      color: "bg-accent/15 text-accent",
    },
  ];

  const selectedValue = coreValues.find((value) => value.title === activeValue) ?? coreValues[0]!;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          What we stand for
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our Core Values
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The principles that shape how we work, grow, and build trusted connections across every
          market.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreValues.map((value, index) => {
          const ValueIcon = value.icon;
          const isActive = value.title === activeValue;

          return (
            <button
              key={value.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveValue(value.title)}
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
          );
        })}
      </div>
      <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 text-center transition-all duration-300 sm:p-6">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
          <selectedValue.icon className="h-4 w-4" />
          {selectedValue.title}
        </div>
        <p className="mt-2 text-muted-foreground">{selectedValue.description}</p>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      title: "Wollega Coffee",
      description: "100% Arabica , hand-sorted green beans from Qelem Wollega collection centres.",
      image: rawCoffeeBeans,
      alt: "Premium Wollega coffee beans in a burlap sack",
    },
    {
      title: "Afar Natural Salt",
      description:
        "Natural iodised salt from the Afar region, rich in minerals and free from artificial additives.",
      image: salt,
      alt: "Natural Afar salt mounds at sunset",
    },
    {
      title: "Medical Supplies",
      description:
        "Trusted importer of medicines and medical devices for clinics, hospitals, and healthcare partners.",
      image: medical,
      alt: "Medical devices and healthcare supplies",
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Discover Our Premium Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore our special aroma commercial coffee, natural Afar salt, and medical imports.
            </p>
          </div>
          <Link
            to="/products"
            className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            View All Products
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground">{product.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                <Link
                  to="/products"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "Direct Sourcing",
      description: "We work with coffee collection centres and salt producers across Ethiopia.",
    },
    {
      title: "Quality Assured",
      description: "Every batch is inspected for consistency, purity, and export readiness.",
    },
    {
      title: "Global Reach",
      description:
        "We serve exporters, distributors, and international buyers with reliable logistics.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Partner With Pior?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From highland coffee farms to Afar salt flats and trusted medical manufacturers, we
            manage every link in the supply chain with integrity and precision.
          </p>
          <div className="mt-8 grid gap-6">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
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
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={rawCoffeeBeans}
            alt="Premium Ethiopian coffee beans"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Source Premium Ethiopian Products?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/90">
          Get in touch with our team to discuss export quantities, specifications, and delivery
          options.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-md bg-salt px-6 py-3 text-sm font-semibold text-coffee shadow-lg transition-all hover:bg-salt/90 hover:shadow-xl"
          >
            Contact Us
          </Link>
          <Link
            to="/products"
            className="rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/20"
          >
            Explore Products
          </Link>
        </div>
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
