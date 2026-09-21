import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

interface CaseStudySectionProps {
  heading?: string;
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({
  heading,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <div className={`py-10 sm:py-12 ${className ?? ""}`}>
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          {heading && (
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {heading}
            </h2>
          )}
          {children}
        </Reveal>
      </div>
    </div>
  );
}
