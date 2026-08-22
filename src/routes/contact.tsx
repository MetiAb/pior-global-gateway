import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Pior Export Import PLC" },
      { name: "description", content: "Contact Pior Export Import PLC for coffee, salt, and medical supply inquiries. Email, phone, and office location in Addis Ababa, Ethiopia." },
      { property: "og:title", content: "Contact Us — Pior Export Import PLC" },
      { property: "og:description", content: "Contact Pior Export Import PLC for coffee, salt, and medical supply inquiries." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        subtitle="We’d love to hear from you. Reach out for product inquiries, partnerships, or export orders."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Our team is ready to answer your questions about Wollega coffee, Afar salt, and medical device imports.
              </p>
            </div>

            <div className="grid gap-6">
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="piorinfocenter@gmail.com"
                href="mailto:piorinfocenter@gmail.com"
              />
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                label="Mobile"
                value="+251 911 228 457"
                href="tel:+251911228457"
              />
              <ContactCard
                icon={<Building2 className="h-5 w-5" />}
                label="Landline"
                value="+251 115 587 373"
                href="tel:+251115587373"
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                label="Office Location"
                value="Kazanches, Elilly International Hotel Second Floor, Addis Ababa, Ethiopia"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-card-foreground">Send an Inquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we will respond as soon as possible.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-card-foreground">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Product inquiry"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Office Hours</h2>
          <p className="mt-4 text-muted-foreground">
            Monday — Friday: 8:30 AM – 5:30 PM (EAT)
          </p>
          <p className="text-sm text-muted-foreground">
            Saturday: 9:00 AM – 1:00 PM by appointment
          </p>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="group block rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md">
      {content}
    </a>
  ) : (
    <div className="rounded-xl border border-border bg-card p-4">
      {content}
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
