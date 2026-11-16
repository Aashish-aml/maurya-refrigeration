import type { Metadata } from "next";
import { CategoryGrid } from "@/components/category-grid";
import { generalEnquiryMessage, whatsappHref } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Appliance Spare Parts in Chandigarh",
  description:
    "Spare parts for washing machines, microwaves, refrigerators and air conditioners at Maurya Refrigeration, Kajheri, Sector 52, Chandigarh.",
};

export default function PartsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <p className="text-sm font-semibold text-ice">What we deal in</p>
      <h1 className="mt-1 max-w-2xl font-display text-3xl font-bold md:text-4xl">
        Spare parts by appliance
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Pick the machine, then send the brand and model number on WhatsApp. We
        confirm price and availability from the shop in Kajheri, Sector 52.
      </p>
      <div className="mt-8">
        <CategoryGrid />
      </div>
      <p className="mt-8 text-sm text-slate-500">
        Don&apos;t see the appliance?{" "}
        <a
          href={whatsappHref(generalEnquiryMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-700 hover:underline"
        >
          Ask on WhatsApp
        </a>
        .
      </p>
    </main>
  );
}
