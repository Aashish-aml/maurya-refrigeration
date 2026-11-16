"use client";

import { useState } from "react";
import { type Appliance, parts } from "@/lib/parts";

const tabs: { key: Appliance; label: string }[] = [
  { key: "washer", label: "Washing Machine" },
  { key: "microwave", label: "Microwave" },
  { key: "fridge", label: "Refrigerator" },
  { key: "ac", label: "Air Conditioner" },
];

export function PartsSection() {
  const [activeTab, setActiveTab] = useState<Appliance>("washer");

  return (
    <section id="parts" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ice">What we deal in</p>
          <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">
            Spare parts by appliance
          </h2>
        </div>
        <div
          className="flex flex-wrap rounded-lg border border-slate-200 p-1 text-sm font-medium"
          role="tablist"
          aria-label="Appliance"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="parts-panel"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-md px-4 py-2 ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-slate-600 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="parts-panel"
        role="tabpanel"
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {parts[activeTab].map(([name, description]) => (
          <article
            key={name}
            className="chip rounded-2xl border border-slate-200 p-5 transition hover:border-ice hover:shadow-md"
          >
            <div
              className="grid h-10 w-10 place-items-center rounded-lg bg-frost font-display font-bold text-ice"
              aria-hidden="true"
            >
              {name[0]}
            </div>
            <h3 className="mt-4 font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Don&apos;t see your part? Call us with the brand and model number —
        we&apos;ll arrange it.
      </p>
    </section>
  );
}
