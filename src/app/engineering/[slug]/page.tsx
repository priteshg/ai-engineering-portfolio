import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { MetricCallout } from "@/components/case-study/MetricCallout";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { engineeringCaseStudies } from "@/data/engineering-case-studies";

export function generateStaticParams() {
  return engineeringCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = engineeringCaseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${study.employer} | Pritesh Gandhi`,
    description: study.problem,
  };
}

export default async function EngineeringCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = engineeringCaseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyHeader
        backHref="/#engineering"
        backLabel="Engineering"
        kicker={`${study.employer} · ${study.kicker}`}
        title={study.title}
      />

      <CaseStudySection heading="Problem">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {study.problem}
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Approach">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {study.approach}
        </p>
      </CaseStudySection>

      {study.metric && (
        <CaseStudySection>
          <MetricCallout
            from={study.metric.from}
            to={study.metric.to}
            label={study.metric.label}
          />
        </CaseStudySection>
      )}

      <CaseStudySection heading="Outcome">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {study.outcome}
        </p>
      </CaseStudySection>

      {study.principle && (
        <CaseStudySection>
          <blockquote className="max-w-2xl border-l-2 border-accent pl-6 font-display text-xl font-semibold italic leading-snug text-foreground sm:text-2xl">
            &ldquo;{study.principle}&rdquo;
          </blockquote>
        </CaseStudySection>
      )}

      <div className="pb-16 sm:pb-20" />
      <CaseStudyNav currentHref={`/engineering/${study.slug}`} />
    </>
  );
}
