"use client";

import { motion } from "framer-motion";
import { PipelineVisual } from "./PipelineVisual";
import { basePath } from "@/lib/basePath";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[50rem]"
        style={{
          background:
            "radial-gradient(45% 38% at 50% 0%, var(--accent-soft), transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mb-12"
            >
              <p className="font-display text-[13px] font-semibold uppercase tracking-[0.32em] text-foreground sm:text-sm">
                Pritesh&nbsp;&nbsp;Gandhi
              </p>
              <span className="hidden h-px w-8 bg-border-strong sm:block" />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                Quality Engineering &middot; AI-assisted systems
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-display max-w-2xl text-balance text-5xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Quality Engineering,
              <br />
              rebuilt with AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26, ease: easeOut }}
              className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
            >
              20 years building automated quality engineering systems. Now
              exploring what happens when AI becomes part of the engineering
              team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease: easeOut }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                View my work
              </a>
              <a
                href="https://github.com/priteshg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-accent-soft"
              >
                GitHub
                <span aria-hidden className="text-subtle">
                  &#8599;
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border lg:mx-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/pritesh-hero.jpg`}
              alt="Pritesh Gandhi"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
        className="relative mx-auto mt-24 max-w-content px-6 sm:px-8 lg:px-12"
      >
        <div className="rounded-2xl border border-border bg-surface/60 px-6 py-12 backdrop-blur-sm sm:px-10">
          <PipelineVisual />
        </div>
      </motion.div>
    </section>
  );
}
