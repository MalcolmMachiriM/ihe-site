import { Pickaxe, Factory, Wheat, Hammer, Building2, Zap, Truck, ShieldCheck } from "lucide-react";

const sectors = [
  { label: "Mining", icon: Pickaxe },
  { label: "Industrial", icon: Factory },
  { label: "Manufacturing", icon: Hammer },
  { label: "Agricultural", icon: Wheat },
  { label: "Construction", icon: Building2 },
  { label: "Power & Solar", icon: Zap },
  { label: "Logistics", icon: Truck },
  { label: "Safety & PPE", icon: ShieldCheck },
];

export default function SectorsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee">
          {[...sectors, ...sectors, ...sectors].map((s, i) => (
            <div
              key={`${s.label}-${i}`}
              className="flex shrink-0 items-center gap-3 px-8 text-zinc-500 dark:text-zinc-400"
            >
              <s.icon className="h-4 w-4" aria-hidden />
              <span className="font-display text-2xl tracking-tight sm:text-3xl">
                {s.label}
              </span>
              <span className="ml-8 h-1 w-1 rounded-full bg-brand-accent" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
