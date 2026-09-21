import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Committee } from "@/data/committees";
import { cn } from "@/lib/utils";

export function CommitteeCard({
  committee,
  className,
}: {
  committee: Committee;
  className?: string;
}) {
  return (
    <Link
      to="/committees/$slug"
      params={{ slug: committee.slug }}
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl border border-line bg-cream p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {committee.number} · {committee.acronym}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-accent" />
      </div>
      <h3 className="font-display text-xl leading-snug text-ink">{committee.name}</h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted">{committee.agenda}</p>
      <p className="mt-auto text-xs text-muted">{committee.delegates} delegates</p>
    </Link>
  );
}
