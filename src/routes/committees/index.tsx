import { createFileRoute } from "@tanstack/react-router";
import { CommitteeCard } from "@/components/committee-card";
import { PageHero } from "@/components/page-hero";
import { COMMITTEES } from "@/data/committees";
import { SITE_NAME } from "@/data/conference";

export const Route = createFileRoute("/committees/")({
  head: () => ({
    meta: [
      { title: `Committees · ${SITE_NAME}` },
      {
        name: "description",
        content: `Nine committees of ${SITE_NAME} — agendas, background, and questions.`,
      },
    ],
  }),
  component: CommitteesIndex,
});

function CommitteesIndex() {
  return (
    <main>
      <PageHero
        eyebrow="Committees"
        title="Nine forums. One conversation."
        description="From the International Court of Justice to the World Economic Forum, each committee brings a distinct lens to the theme of Dialogue on Democracy."
      />
      <section className="site-container py-12 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMMITTEES.map((c) => (
            <CommitteeCard key={c.slug} committee={c} />
          ))}
        </div>
      </section>
    </main>
  );
}
