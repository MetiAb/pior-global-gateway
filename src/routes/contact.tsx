import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Building2, Clock3, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { translations, useLanguage } from "../lib/translations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us — ${translations.en.siteTitle}` },
      {
        name: "description",
        content: translations.en.siteDescription,
      },
      { property: "og:title", content: `Contact Us — ${translations.en.siteTitle}` },
      { property: "og:description", content: translations.en.siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_EMAIL = "piorinfocenter@gmail.com";
const WEB3FORMS_ACCESS_KEY = "bac07d11-dc38-43f6-b82b-79fb4ad828c2";

async function submitToWeb3Forms(e: React.FormEvent<HTMLFormElement>): Promise<boolean> {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") ?? "")
    .trim()
    .slice(0, 100);
  const email = String(data.get("email") ?? "")
    .trim()
    .slice(0, 255);
  const subject = String(data.get("subject") ?? "")
    .trim()
    .slice(0, 150);
  const message = String(data.get("message") ?? "")
    .trim()
    .slice(0, 2000);
  if (!name || !email || !subject || !message) return false;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name,
      email,
      subject,
      message,
      replyto: email,
      from_name: "Pior Export Import PLC website",
    }),
  });
  const result = (await response.json()) as { success?: boolean };
  return response.ok && result.success === true;
}

function ContactPage() {
  const { t } = useLanguage();
  const [inquiryType, setInquiryType] = useState(t("coffeeSalt"));
  const [messageLength, setMessageLength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
  const inquiryTypes = [t("coffeeSalt"), t("medicalInquiry"), t("inquiryPartnership")];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      const submitted = await submitToWeb3Forms(e);
      if (submitted) {
        form.reset();
        setInquiryType(t("coffeeSalt"));
        setMessageLength(0);
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col">
      <PageHeader title={t("contactTitle")} subtitle={t("contactSubtitle")} />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {t("getInTouchTitle")}
              </h2>
              <p className="mt-2 text-muted-foreground">{t("getInTouchText")}</p>
            </div>

            <div className="grid gap-4">
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                label={t("email")}
                value="piorinfocenter@gmail.com"
                href="mailto:piorinfocenter@gmail.com"
              />
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                label={t("mobile")}
                value="+251 911 228 457"
                href="tel:+251911228457"
              />
              <ContactCard
                icon={<Building2 className="h-5 w-5" />}
                label={t("landline")}
                value="+251 115 587 373"
                href="tel:+251115587373"
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                label={t("officeLocation")}
                value={t("officeAddress")}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8">
            <h3 className="text-xl font-semibold text-card-foreground">{t("sendInquiry")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("inquiryText")}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {inquiryTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setInquiryType(type)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${inquiryType === type ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
                >
                  {type}
                </button>
              ))}
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    {t("name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    type="text"
                    placeholder={t("yourName")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    {t("email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    maxLength={255}
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                  {t("subject")}
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  maxLength={150}
                  type="text"
                  placeholder={t("productInquiry")}
                  value={inquiryType}
                  onChange={(event) => setInquiryType(event.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  onChange={(event) => setMessageLength(event.target.value.length)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <p className="text-right text-xs text-muted-foreground">{messageLength}/2000</p>
              </div>
              {submissionStatus === "success" && (
                <p className="text-sm text-green-600" role="status">
                  {t("sentSuccess")}
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {t("sendError")}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {isSubmitting ? t("sending") : t("sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{t("findUs")}</h2>
            <p className="mt-2 text-muted-foreground">{t("mapAddress")}</p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Elilly+International+Hotel+Addis+Ababa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            {t("openMaps")}{" "}
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title={t("mapTitle")}
            src="https://www.google.com/maps?q=Elilly%20International%20Hotel%2C%20Guinea%20Conakry%20St%2C%20Addis%20Ababa%2C%20Ethiopia&z=16&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Clock3 className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
            {t("officeHours")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("weekdayHours")}</p>
          <p className="text-sm text-muted-foreground">{t("weekendHours")}</p>
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
    <a
      href={href}
      className="group block rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
    >
      {content}
    </a>
  ) : (
    <div className="rounded-xl border border-border bg-card p-4">{content}</div>
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
