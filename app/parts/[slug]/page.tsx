import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { appliances, getAppliance } from "@/lib/parts";
import { partEnquiryMessage, whatsappHref } from "@/lib/shop";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return appliances.map((appliance) => ({ slug: appliance.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const appliance = getAppliance(slug);

  if (!appliance) {
    return { title: "Spare parts" };
  }

  return {
    title: `${appliance.label} Spare Parts in Chandigarh`,
    description: `${appliance.description} Maurya Refrigeration, Kajheri, Sector 52, Chandigarh.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const appliance = getAppliance(slug);

  if (!appliance) {
    notFound();
  }

  const others = appliances.filter((item) => item.slug !== appliance.slug);

  return (
    <main>
      <section className="bg-frost">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/parts" className="hover:text-ink">
                  Spare parts
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-ink">{appliance.label}</li>
            </ol>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold md:text-5xl">
            {appliance.label} spare parts
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {appliance.description}
          </p>
          <a
            href="#enquiry"
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Send details on WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div>
          <h2 className="font-display text-2xl font-bold">Parts we keep</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {appliance.parts.map((part) => (
              <article
                key={part.name}
                className="chip flex flex-col rounded-2xl border border-slate-200 p-5 transition hover:border-ice hover:shadow-md"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-lg bg-frost font-display font-bold text-ice"
                  aria-hidden="true"
                >
                  {part.name[0]}
                </div>
                <h3 className="mt-4 font-semibold">{part.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{part.description}</p>
                <a
                  href={whatsappHref(
                    partEnquiryMessage(appliance.label, part.name),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Ask on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <EnquiryForm
            applianceLabel={appliance.label}
            parts={appliance.parts}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-sm font-semibold text-slate-500">
          Other appliances
        </h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/parts/${item.slug}`}
                className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-ice hover:text-ice"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
