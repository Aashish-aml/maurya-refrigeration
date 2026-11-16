"use client";

import { useEffect, useState } from "react";

type ShopStatus = {
  isOpen: boolean;
  label: string;
};

function getShopStatus(): ShopStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? 0,
  );
  const time = hour + minute / 60;
  const isSunday = weekday === "Sun";
  const closingHour = isSunday ? 14 : 20;
  const isOpen = time >= 10 && time < closingHour;

  return {
    isOpen,
    label: isOpen
      ? `Open now · until ${isSunday ? "2 PM" : "8 PM"}`
      : "Closed now · opens 10 AM",
  };
}

export function OpenStatus() {
  const [status, setStatus] = useState<ShopStatus | null>(null);

  useEffect(() => {
    const updateStatus = () => setStatus(getShopStatus());
    updateStatus();
    const interval = window.setInterval(updateStatus, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          status
            ? status.isOpen
              ? "bg-emerald-500"
              : "bg-rose-500"
            : "bg-slate-400"
        }`}
        aria-hidden="true"
      />
      <span className="text-sm font-medium">
        {status?.label ?? "Mon–Sat 10 AM – 8 PM"}
      </span>
    </div>
  );
}
