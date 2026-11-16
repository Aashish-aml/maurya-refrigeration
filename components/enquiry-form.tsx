"use client";

import { useState, type FormEvent } from "react";
import type { Part } from "@/lib/parts";
import { enquiryMessage, whatsappHref } from "@/lib/shop";

const otherPart = "other";

export function EnquiryForm({
  applianceLabel,
  parts,
}: {
  applianceLabel: string;
  parts: Part[];
}) {
  const [part, setPart] = useState("");
  const [customPart, setCustomPart] = useState("");
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const partName = part === otherPart ? customPart.trim() : part;

    if (!partName) {
      setStatus("Choose a part, or type the one you need.");
      return;
    }

    const url = whatsappHref(
      enquiryMessage({
        name: String(form.get("name") ?? ""),
        applianceLabel,
        partName,
        brand: String(form.get("brand") ?? ""),
        model: String(form.get("model") ?? ""),
      }),
    );

    setStatus("Opening WhatsApp…");
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = url;
    }
  }

  return (
    <form
      id="enquiry"
      onSubmit={onSubmit}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="font-display text-xl font-bold">Send details on WhatsApp</h2>
      <p className="mt-2 text-sm text-slate-600">
        Brand and model help us confirm the exact {applianceLabel.toLowerCase()}{" "}
        part. Nothing is stored on the site.
      </p>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-1 text-sm font-medium">
          Your name
          <input
            name="name"
            autoComplete="name"
            className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
            placeholder="Optional"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Part
          <select
            name="part"
            required
            value={part}
            onChange={(event) => setPart(event.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal"
          >
            <option value="" disabled>
              Choose a part
            </option>
            {parts.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
            <option value={otherPart}>Other / not listed</option>
          </select>
        </label>
        {part === otherPart ? (
          <label className="grid gap-1 text-sm font-medium">
            Part name
            <input
              name="customPart"
              required
              value={customPart}
              onChange={(event) => setCustomPart(event.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
              placeholder="Describe the part"
            />
          </label>
        ) : null}
        <label className="grid gap-1 text-sm font-medium">
          Brand
          <input
            name="brand"
            required
            className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
            placeholder="LG, Samsung, Whirlpool…"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Model number
          <input
            name="model"
            required
            className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
            placeholder="From the sticker or manual"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
      >
        Send on WhatsApp
      </button>
      {status ? <p className="mt-3 text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
