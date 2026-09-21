"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "code", label: "Code", x: 40, y: 140 },
  { id: "agent", label: "Agent", x: 220, y: 60 },
  { id: "verify", label: "Verification", x: 400, y: 140 },
  { id: "signal", label: "Signal", x: 580, y: 60 },
];

const edges: [string, string][] = [
  ["code", "agent"],
  ["agent", "verify"],
  ["verify", "signal"],
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function PipelineVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <svg
        viewBox="0 0 620 200"
        className="w-full overflow-visible"
        role="img"
        aria-label="Diagram showing code flowing through an AI agent into verification, producing a quality signal"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.9" />
          </linearGradient>
          <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* base grid lines for technical texture */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={0}
            y1={40 + i * 45}
            x2={620}
            y2={40 + i * 45}
            stroke="var(--border)"
            strokeWidth={1}
          />
        ))}

        {/* edges */}
        {edges.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          const midX = (a.x + b.x) / 2;
          const path = `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
          return (
            <g key={i}>
              <motion.path
                d={path}
                fill="none"
                stroke="var(--border-strong)"
                strokeWidth={1.5}
              />
              <motion.path
                d={path}
                fill="none"
                stroke="url(#edgeGradient)"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.25, ease: "easeInOut" }}
              />
              {!shouldReduceMotion && (
                <motion.path
                  d={path}
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeDasharray="6 640"
                  filter="url(#softGlow)"
                  initial={{ strokeDashoffset: 60, opacity: 0 }}
                  animate={{ strokeDashoffset: -560, opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.2,
                    delay: 1.6 + i * 0.85,
                    repeat: Infinity,
                    repeatDelay: 2.6,
                    ease: "easeInOut",
                  }}
                />
              )}
            </g>
          );
        })}

        {/* nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect
              x={node.x - 44}
              y={node.y - 20}
              width={88}
              height={40}
              rx={10}
              fill="var(--surface)"
              stroke={
                node.id === "signal" ? "var(--signal)" : "var(--border-strong)"
              }
              strokeWidth={1}
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontSize={12}
              fontFamily="var(--font-mono)"
              fill={node.id === "signal" ? "var(--signal)" : "var(--foreground)"}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
