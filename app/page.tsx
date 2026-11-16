import Image from "next/image";
import { OpenStatus } from "@/components/open-status";
import { PartsSection } from "@/components/parts-section";

export default function Home() {
  return (
    <>
      <div className="bg-ink text-xs text-frost sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <span>Kajheri, Sector 52, Chandigarh</span>
          <span>Mon–Sat 10 AM – 8 PM · Sun 10 AM – 2 PM</span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label="Maurya Refrigeration home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ice text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 2v20M4.9 6.5l14.2 11M19.1 6.5 4.9 17.5" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold leading-none">
              Maurya
              <br className="sm:hidden" />
              <span className="text-ice"> Refrigeration</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex"
            aria-label="Main navigation"
          >
            <a href="#parts" className="hover:text-ink">Spare Parts</a>
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#gallery" className="hover:text-ink">Gallery</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>
          <a
            href="tel:+919988692928"
            className="rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-ink hover:brightness-95"
          >
            Call Now
          </a>
        </div>
      </header>

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
                  href="tel:+919988692928"
                  className="rounded-lg bg-ice px-5 py-3 font-semibold text-white hover:bg-sky-700"
                >
                  Call +91 99886 92928
                </a>
                <a
                  href="#parts"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-ink"
                >
                  Browse Parts
                </a>
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

        <PartsSection />

        <section id="about" className="bg-ink text-white">
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
          className="mx-auto max-w-6xl px-4 py-16 md:py-20"
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

        <section id="contact" className="bg-frost">
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
                  href="tel:+919988692928"
                  className="rounded-lg bg-ice px-5 py-3 font-semibold text-white hover:bg-sky-700"
                >
                  Call +91 99886 92928
                </a>
                <a
                  href="https://wa.me/919988692928"
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
                  <a href="tel:+919988692928" className="hover:text-ice">
                    +91 99886 92928
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

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-6 text-sm text-slate-500">
          <span>© 2026 Maurya Refrigeration · Owner: Ram Raj Maurya</span>
          <span>
            Washing Machine, Microwave, Refrigerator &amp; AC Spare Parts
          </span>
        </div>
      </footer>
    </>
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
