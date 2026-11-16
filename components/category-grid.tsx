import Link from "next/link";
import { appliances } from "@/lib/parts";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {appliances.map((appliance) => (
        <Link
          key={appliance.slug}
          href={`/parts/${appliance.slug}`}
          className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-ice hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-bold">{appliance.label}</h3>
            <span className="shrink-0 rounded-full bg-frost px-2.5 py-1 text-xs font-semibold text-ice">
              {appliance.parts.length} parts
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{appliance.summary}</p>
          <p className="mt-4 text-sm text-slate-500">
            {appliance.parts
              .slice(0, 4)
              .map((part) => part.name)
              .join(" · ")}
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-ice group-hover:underline">
            View parts
          </span>
        </Link>
      ))}
    </div>
  );
}
