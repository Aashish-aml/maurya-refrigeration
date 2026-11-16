import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/category-grid";
import { OpenStatus } from "@/components/open-status";
import { generalEnquiryMessage, shop, whatsappHref } from "@/lib/shop";

export default function Home() {
  return (
    <main>
        <section className="bg-frost">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-ice">
                Washing Machine · Microwave · Refrigerator · AC
              </p>
              <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-tight md:text-5xl">
                All kinds of appliance spare parts, under one roof.
              </h1>
              <p className="mt-4 max-w-md text-pretty text-lg text-slate-600">
                Maurya Refrigeration supplies quality spare parts for washing
                machines, microwaves, refrigerators and air conditioners to
                technicians and households across Chandigarh.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${shop.phoneTel}`}
                  className="rounded-lg bg-ice px-5 py-3 font-semibold text-white hover:bg-sky-700"
                >
                  Call {shop.phoneDisplay}
                </a>
                <Link
                  href="/parts"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-ink"
                >
                  Browse Parts
                </Link>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
                <div>
                  <dt className="text-xs text-slate-500">Experience</dt>
                  <dd className="font-display text-2xl font-bold">25+ yrs</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Appliances</dt>
                  <dd className="font-display text-2xl font-bold">4 types</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Open</dt>
                  <dd className="font-display text-2xl font-bold">7 days</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/img/hero.png"
                  alt="Shelves of appliance spare parts at the shop"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <OpenStatus />
            </div>
          </div>
        </section>

        <section id="parts" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-ice">What we deal in</p>
            <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">
              Spare parts by appliance
            </h2>
            <p className="mt-3 text-slate-600">
              Open a category for the parts we keep, then send the brand and
              model number on WhatsApp.
            </p>
          </div>
          <div className="mt-8">
            <CategoryGrid />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Don&apos;t see your part?{" "}
            <a
              href={whatsappHref(generalEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 hover:underline"
            >
              Ask on WhatsApp
            </a>{" "}
            with the brand and model number — we&apos;ll arrange it.
          </p>
        </section>

        <section id="about" className="scroll-mt-24 bg-ink text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[auto_1fr] md:py-20">
            <div className="flex flex-col items-start">
              <span className="font-display text-7xl font-bold leading-none text-amber md:text-8xl">
                25+
              </span>
              <span className="mt-2 text-sm uppercase tracking-wide text-frost/80">
                years in the trade
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-amber">Meet the owner</p>
              <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">
                Ram Raj Maurya
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-frost/90">
                With over 25 years of hands-on experience in appliance parts,
                Ram Raj Maurya knows exactly which part your machine needs. Tell
                him the problem, and he&apos;ll point you to the right part —
                honestly and at a fair price.
              </p>
              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
                <li className="rounded-xl border border-white/15 px-4 py-3">
                  Genuine &amp; compatible parts
                </li>
                <li className="rounded-xl border border-white/15 px-4 py-3">
                  Fair prices for technicians
                </li>
                <li className="rounded-xl border border-white/15 px-4 py-3">
                  Expert, honest advice
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-20"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-ice">Gallery</p>
              <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">
                Inside the shop
              </h2>
            </div>
            <a
              href="https://share.google/LlgQF9jVCsVEiPJ74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ice hover:underline"
            >
              See more photos on Google Maps
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl md:aspect-auto md:min-h-96">
              <Image
                src="/img/gallery-1.png"
                alt="Shop counter with spare parts"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <GalleryImage
              src="/img/gallery-2.png"
              alt="Refrigerator compressors and parts"
            />
            <GalleryImage
              src="/img/gallery-3.png"
              alt="Washing machine motors and pumps"
            />
            <div className="relative col-span-2 aspect-2/1 overflow-hidden rounded-2xl">
              <Image
                src="/img/gallery-4.png"
                alt="Air conditioner and microwave parts"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-frost">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Need a part? Just ask.
              </h2>
              <p className="mt-3 max-w-md text-slate-600">
                Call or WhatsApp with your appliance brand and model number.
                We&apos;ll confirm price and availability right away.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${shop.phoneTel}`}
                  className="rounded-lg bg-ice px-5 py-3 font-semibold text-white hover:bg-sky-700"
                >
                  Call {shop.phoneDisplay}
                </a>
                <a
                  href={whatsappHref(generalEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  WhatsApp Us
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maurya+Refrigeration+Kajheri+Sector+52+Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-ink"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <dl className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </dt>
                <dd className="mt-1 font-medium">
                  Shop No. 3, Plot No. 596, Village Kajheri,
                  <br />
                  Sector 52, Chandigarh 160036
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Hours
                </dt>
                <dd className="mt-1 font-medium">
                  Mon – Sat: 10:00 AM – 8:00 PM
                  <br />
                  Sunday: 10:00 AM – 2:00 PM
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </dt>
                <dd className="mt-1 font-medium">
                  <a href={`tel:${shop.phoneTel}`} className="hover:text-ice">
                    {shop.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </dt>
                <dd className="mt-1 break-all font-medium">
                  <a
                    href="mailto:ramrajmaurya033@gmail.com"
                    className="hover:text-ice"
                  >
                    ramrajmaurya033@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
  );
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
