
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, type MotionValue } from "framer-motion";

// ============================================================================
// STAGE CONFIGURATION
// Easily edit copy, technical specs, or stage order here.
// ============================================================================
export interface StoryStage {
  step: string;
  category: string;
  title: string;
  highlight: string;
  description: string;
  specs: { label: string; value: string }[];
  statusBadge: string;
}

export const STORY_STAGES: StoryStage[] = [
  {
    step: "01",
    category: "SPECIFICATION",
    title: "System Blueprint & Data Contracts",
    highlight: "Blueprint",
    description:
      "Every resilient system starts with formal architectural boundaries. Relational schemas, strict type contracts, and throughput requirements are defined before drafting runtime code.",
    specs: [
      { label: "PARADIGM", value: "Schema-Driven & RBAC Contracts" },
      { label: "CONCURRENCY", value: "ACID Isolation & Row Locking" },
      { label: "INTERFACE", value: "Typed REST & Streaming Endpoints" },
    ],
    statusBadge: "SPEC_VERIFIED",
  },
  {
    step: "02",
    category: "SERVICE_DECOUPLING",
    title: "Exploded Architectural Tiers",
    highlight: "Decoupled",
    description:
      "Decomposing monolithic blueprints into isolated spatial tiers — decoupling relational storage, asynchronous background worker pools, and reverse-proxy caching gateways to eliminate cascading failure domains.",
    specs: [
      { label: "TIER_01", value: "Persistence & Relational Transactions" },
      { label: "TIER_02", value: "TaskFlow Concurrency Worker Pool" },
      { label: "TIER_03", value: "Stream Gateway Edge Reverse-Proxy" },
    ],
    statusBadge: "LAYERS_DISPATCHED",
  },
  {
    step: "03",
    category: "CONCURRENCY_PIPELINES",
    title: "Asynchronous Pipelines & Concurrency",
    highlight: "Reactive",
    description:
      "Background worker threads, job state machines (queued, active, failure recovery), and streaming proxies process concurrent tasks in non-blocking event loops across distributed instances.",
    specs: [
      { label: "EXECUTION", value: "Multi-Threaded Worker Pool" },
      { label: "RELIABILITY", value: "Transactional Retries & Failure Recovery" },
      { label: "CACHING", value: "In-Memory HLS Segment Offload" },
    ],
    statusBadge: "LOOPS_SYNCHRONIZED",
  },
  {
    step: "04",
    category: "HARDENED_RELEASE",
    title: "Hardened Production Deployment",
    highlight: "Monolith",
    description:
      "The decoupled tiers reassemble into containerized Docker deployments — fortified by automated regression suites, origin offloading, and continuous observability serving 20,000+ users.",
    specs: [
      { label: "SCALE", value: "20,000+ Active Users Served" },
      { label: "CONTAINER", value: "Dockerized Reproducible Runtime" },
      { label: "RECOVERY", value: "Zero-Downtime Rollback & Health Probes" },
    ],
    statusBadge: "DEPLOYMENT_ACTIVE",
  },
];

// ============================================================================
// VISUAL COMPONENT: Layered Architectural Product Sheet
// 100% OPAQUE cards with clean stage progression to prevent any bleed-through.
// ============================================================================
interface VisualProps {
  progress: MotionValue<number>;
}

function ArchitecturalCardStack({ progress }: VisualProps) {
  // Continuous 3D perspective rotation (GPU transform only)
  // Stage 1 (0 -> 0.25): Gentle isometric blueprint angle
  // Stage 2 (0.25 -> 0.50): Exploded perspective angle
  // Stage 3 (0.50 -> 0.75): Shifted monitoring perspective
  // Stage 4 (0.75 -> 1.0): Returns to clean frontal planar view
  const rotateX = useTransform(progress, [0, 0.28, 0.65, 0.9, 1], [14, 26, 18, 4, 0]);
  const rotateY = useTransform(progress, [0, 0.28, 0.65, 0.9, 1], [-10, -20, 14, -2, 0]);
  const rotateZ = useTransform(progress, [0, 0.28, 0.65, 0.9, 1], [1, 4, -2, 0, 0]);
  const scale = useTransform(progress, [0, 0.28, 0.7, 1], [0.98, 1.0, 1.02, 1.0]);

  // STAGE 1 & STAGE 4 VIEW (Unified Blueprint / Hardened Monolith Card)
  // In Stage 1: Shows Schema & Contracts.
  // In Stage 2 & 3: Fades out as exploded tiers take over.
  // In Stage 4: Fades back in as hardened production monolithic release.
  const unifiedCardOpacity = useTransform(
    progress,
    [0, 0.22, 0.27, 0.73, 0.78, 1],
    [1, 1, 0, 0, 1, 1]
  );
  const unifiedCardZ = useTransform(
    progress,
    [0, 0.22, 0.27, 0.73, 0.78, 1],
    [0, 0, -30, -30, 0, 0]
  );

  // Crossfade between Blueprint copy (Stage 1) and Monolith copy (Stage 4) on the unified card
  const stage1ContentOpacity = useTransform(progress, [0, 0.25, 0.35], [1, 1, 0]);
  const stage4ContentOpacity = useTransform(progress, [0.65, 0.78, 1], [0, 1, 1]);

  // STAGE 2 & STAGE 3 VIEW (Exploded Tiers)
  // These 3 cards ONLY appear during Stage 2 & 3.
  // In Stage 1, their opacity is 0 so they CANNOT bleed through or obscure the blueprint!
  const explodedTiersOpacity = useTransform(
    progress,
    [0.22, 0.27, 0.73, 0.78],
    [0, 1, 1, 0]
  );

  // Spatial separation along Y and Z axis for exploded tiers
  // Top Tier (Gateway): moves up and forward in Z
  const tierGatewayY = useTransform(progress, [0.22, 0.35, 0.65, 0.78], [-15, -100, -90, -15]);
  const tierGatewayZ = useTransform(progress, [0.22, 0.35, 0.65, 0.78], [0, 90, 70, 0]);

  // Middle Tier (Engine): remains centrally positioned
  const tierEngineY = useTransform(progress, [0.22, 0.35, 0.65, 0.78], [0, 0, 0, 0]);
  const tierEngineZ = useTransform(progress, [0.22, 0.35, 0.65, 0.78], [0, 0, 0, 0]);

  // Bottom Tier (Persistence): moves down and backward in Z
  const tierPersistY = useTransform(progress, [0.22, 0.35, 0.65, 0.78], [15, 100, 90, 15]);
  const tierPersistZ = useTransform(progress, [0.22, 0.35, 0.65, 0.78], [0, -90, -70, 0]);

  // Telemetry beam & circuit glow in Stage 3 (Reactive Loops)
  const telemetryPulse = useTransform(progress, [0.45, 0.55, 0.72], [0, 1, 0.2]);

  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[480px] h-[340px] flex items-center justify-center select-none"
      style={{ perspective: "1300px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          rotateZ,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* ==================================================================
            1. UNIFIED CARD (ACTIVE IN STAGE 01 & STAGE 04)
            - 100% Solid Opaque background (var(--bg-card))
            - Zero bleed-through because no cards exist beneath it in Stage 1!
            ================================================================== */}
        <motion.div
          style={{
            opacity: unifiedCardOpacity,
            z: unifiedCardZ,
            transformStyle: "preserve-3d",
            backgroundColor: "var(--bg-card)",
          }}
          className="absolute inset-0 border border-stone-700 p-6 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]"
        >
          {/* Tactical Corner Reticle Brackets */}
          <span className="absolute top-2 left-2 text-accent font-mono text-xs select-none pointer-events-none">┌</span>
          <span className="absolute top-2 right-2 text-accent font-mono text-xs select-none pointer-events-none">┐</span>
          <span className="absolute bottom-2 left-2 text-accent font-mono text-xs select-none pointer-events-none">└</span>
          <span className="absolute bottom-2 right-2 text-accent font-mono text-xs select-none pointer-events-none">┘</span>

          {/* STAGE 01 CONTENT: BLUEPRINT SPECIFICATION */}
          <motion.div
            style={{ opacity: stage1ContentOpacity }}
            className="absolute inset-6 flex flex-col justify-between pointer-events-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" />
                <span className="text-[10px] font-mono tracking-widest text-ivory font-bold uppercase">
                  ARCH_SPEC // CONTRACT_BLUEPRINT
                </span>
              </div>
              <span className="text-[9px] font-mono text-brass border border-stone-800 px-2 py-0.5">
                v1.4.0_STABLE
              </span>
            </div>

            {/* Schema Models Table */}
            <div className="space-y-3 font-mono my-auto">
              <div className="p-3 bg-surface border border-stone-800">
                <div className="flex items-center justify-between text-[10px] mb-1.5">
                  <span className="text-accent font-bold">TYPE_SCHEMA: DataContracts</span>
                  <span className="text-sand/70 text-[9px]">RELATIONAL</span>
                </div>
                <div className="text-[9px] text-sand space-y-0.5 leading-relaxed">
                  <div>• user_id: <span className="text-brass">UUID (PRIMARY_KEY)</span></div>
                  <div>• rbac_role: <span className="text-ivory">Admin | Student | Institution</span></div>
                  <div>• concurrency: <span className="text-ivory">PessimisticLock&lt;ACID&gt;</span></div>
                </div>
              </div>

              <div className="p-2.5 bg-surface border border-stone-800 flex items-center justify-between text-[9px]">
                <span className="text-sand">INTERFACE_RESOLVER:</span>
                <span className="text-brass font-semibold">REST APIs & HLS Streaming /v1/</span>
              </div>
            </div>

            {/* Blueprint Footer */}
            <div className="flex items-center justify-between text-[8px] font-mono text-sand/80 pt-2.5 border-t border-stone-800">
              <span className="text-accent font-semibold">STATUS: CONTRACT_LOCKED</span>
              <span>ISOLATION_TIERS: 03</span>
            </div>
          </motion.div>

          {/* STAGE 04 CONTENT: HARDENED PRODUCTION MONOLITH */}
          <motion.div
            style={{ opacity: stage4ContentOpacity }}
            className="absolute inset-6 flex flex-col justify-between pointer-events-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-[10px] font-mono tracking-widest text-accent font-bold uppercase">
                  PRODUCTION_RELEASE // VERIFIED
                </span>
              </div>
              <span className="text-[9px] font-mono text-accent border border-accent/40 bg-accent/10 px-2 py-0.5 font-bold">
                DEPLOYED_ACTIVE
              </span>
            </div>

            {/* Production Telemetry Stats */}
            <div className="space-y-3 font-mono my-auto">
              <div className="p-3 bg-surface border border-accent/30">
                <div className="flex justify-between items-center text-[10px] mb-1">
                  <span className="text-sand">ACTIVE_SCALE</span>
                  <span className="text-ivory font-bold">20,000+ USERS SERVED</span>
                </div>
                <div className="w-full bg-background h-1.5 border border-stone-800">
                  <div className="h-full bg-accent w-[96%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[9px]">
                <div className="p-2 bg-surface border border-stone-800">
                  <div className="text-sand/70 text-[8px]">CONTAINER</div>
                  <div className="text-ivory font-bold mt-0.5">DOCKER // PROD</div>
                </div>
                <div className="p-2 bg-surface border border-stone-800">
                  <div className="text-sand/70 text-[8px]">AVAILABILITY</div>
                  <div className="text-brass font-bold mt-0.5">99.98% UPTIME</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-[8px] font-mono text-sand pt-2.5 border-t border-stone-800">
              <span className="text-brass">MONOLITHIC RUNTIME HARDENED</span>
              <span className="text-accent font-bold">SHA-256: 8f4c2e1</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ==================================================================
            2. EXPLODED TIERS (ACTIVE ONLY IN STAGE 02 & STAGE 03)
            - Each card has 100% Solid Opaque background (var(--bg-surface) / var(--bg-card))
            - Crisp drop shadows and solid borders prevent any visual clash.
            - Hidden during Stage 1 so they never bleed into the blueprint.
            ================================================================== */}

        {/* TIER 01 (BOTTOM): PERSISTENCE & STORAGE LAYER */}
        <motion.div
          style={{
            opacity: explodedTiersOpacity,
            y: tierPersistY,
            z: tierPersistZ,
            backgroundColor: "var(--bg-card)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-x-2 top-10 h-[150px] border border-stone-700 p-4 flex flex-col justify-between shadow-[0_20px_45px_-10px_rgba(0,0,0,0.9)]"
        >
          <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
            <span className="text-[9px] font-mono tracking-widest text-brass font-bold uppercase">
              TIER_01 // PERSISTENCE_ENGINE
            </span>
            <span className="text-[8px] font-mono text-sand">POSTGRESQL · MYSQL · REDIS</span>
          </div>

          <div className="my-auto py-1 font-mono text-[9px] grid grid-cols-2 gap-2">
            <div className="p-1.5 bg-surface border border-stone-800">
              <div className="text-accent font-bold text-[8px]">DATABASE_CORE</div>
              <div className="text-sand text-[8px]">Relational ACID Engine</div>
            </div>
            <div className="p-1.5 bg-surface border border-stone-800">
              <div className="text-brass font-bold text-[8px]">CACHE_LAYER</div>
              <div className="text-sand text-[8px]">Sub-ms In-Memory KeyStore</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[8px] font-mono text-sand/70 pt-1.5 border-t border-stone-800">
            <span>STORAGE INTEGRITY: ISOLATED</span>
            <span className="text-brass">TRANSACTIONS: SERIALIZABLE</span>
          </div>
        </motion.div>

        {/* TIER 02 (MIDDLE): RUNTIME ENGINE & AUTOMATION WORKER */}
        <motion.div
          style={{
            opacity: explodedTiersOpacity,
            y: tierEngineY,
            z: tierEngineZ,
            backgroundColor: "var(--bg-surface)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-x-0 top-16 h-[170px] border border-accent/40 p-4 flex flex-col justify-between shadow-[0_25px_50px_-10px_rgba(0,0,0,0.95)] z-20"
        >
          {/* Tactical Reticle Corner Brackets */}
          <span className="absolute top-1.5 left-1.5 text-accent font-mono text-[10px] select-none pointer-events-none">┌</span>
          <span className="absolute top-1.5 right-1.5 text-accent font-mono text-[10px] select-none pointer-events-none">┐</span>
          <span className="absolute bottom-1.5 left-1.5 text-accent font-mono text-[10px] select-none pointer-events-none">└</span>
          <span className="absolute bottom-1.5 right-1.5 text-accent font-mono text-[10px] select-none pointer-events-none">┘</span>

          <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
              <span className="text-[9px] font-mono tracking-widest text-ivory font-bold uppercase">
                TIER_02 // TASKFLOW_CONCURRENCY
              </span>
            </div>
            <span className="text-[8px] font-mono text-accent">THREAD_POOL: 16 WORKERS</span>
          </div>

          {/* Automation Code Display */}
          <div className="my-auto py-1 font-mono text-[9px] bg-background/90 p-2 border border-stone-800 text-ivory leading-relaxed">
            <div>
              <span className="text-accent">await</span> taskQueue.<span className="text-brass">submit</span>({"{"}
            </div>
            <div className="pl-3 text-sand">
              job: <span className="text-brass">&quot;async_worker_pool&quot;</span>,
            </div>
            <div className="pl-3 text-sand">
              priority: <span className="text-ivory">&quot;CRITICAL_RETRY&quot;</span>,
            </div>
            <div>{"}"});</div>
          </div>

          {/* Telemetry Stream Output (Stage 3 Pulse) */}
          <div className="flex items-center justify-between text-[8px] font-mono text-accent pt-1.5 border-t border-accent/20">
            <motion.span style={{ opacity: telemetryPulse }} className="flex items-center gap-1.5 font-bold">
              <span className="w-1 h-1 bg-accent rounded-full animate-ping" />
              THROUGHPUT: 18,200 JOBS/MIN
            </motion.span>
            <span className="text-sand/80">NON-BLOCKING WORKERS</span>
          </div>
        </motion.div>

        {/* TIER 03 (TOP): EDGE GATEWAY & API ROUTER */}
        <motion.div
          style={{
            opacity: explodedTiersOpacity,
            y: tierGatewayY,
            z: tierGatewayZ,
            backgroundColor: "var(--bg-card)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-x-2 top-2 h-[150px] border border-stone-700 p-4 flex flex-col justify-between shadow-[0_20px_45px_-10px_rgba(0,0,0,0.9)] z-30"
        >
          <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span className="text-[9px] font-mono tracking-widest text-brass font-bold uppercase">
                TIER_03 // STREAM_GATEWAY
              </span>
            </div>
            <span className="text-[8px] font-mono text-sand">HLS PROXY · SEGMENT CACHE</span>
          </div>

          <div className="my-auto py-1 font-mono text-[9px] space-y-1.5">
            <div className="flex justify-between text-sand text-[8px]">
              <span>RESOLVER_TARGET</span>
              <span className="text-ivory font-bold">hls.proxy.cache (.m3u8)</span>
            </div>
            <div className="p-1.5 bg-surface border border-stone-800 flex justify-between items-center text-[8px]">
              <span className="text-sand">ORIGIN_OFFLOAD</span>
              <span className="text-accent font-bold">SEGMENT_CACHED (94%)</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[8px] font-mono text-sand/80 pt-1.5 border-t border-stone-800">
            <span className="text-brass">EDGE CACHE: HIT_OPTIMIZED</span>
            <span className="text-accent">ONLINE</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT: ScrollStory
// Pinned scrollytelling section with continuous scrubbed timeline.
// ============================================================================
interface ScrollStoryProps {
  customVisual?: React.ReactNode;
}

export default function ScrollStory({ customVisual }: ScrollStoryProps) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress within the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappy spring scrubbing matching site feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Active stage flags for HUD phase counter
  const activeStage0 = useTransform(smoothProgress, [0, 0.22, 0.24], [1, 1, 0]);
  const activeStage1 = useTransform(smoothProgress, [0.24, 0.26, 0.47, 0.50], [0, 1, 1, 0]);
  const activeStage2 = useTransform(smoothProgress, [0.50, 0.52, 0.73, 0.76], [0, 1, 1, 0]);
  const activeStage3 = useTransform(smoothProgress, [0.76, 0.78, 1], [0, 1, 1]);

  // Stage 01 Text Card transforms (Zero overlap with Stage 2)
  const stage0Opacity = useTransform(smoothProgress, [0, 0.19, 0.23], [1, 1, 0]);
  const stage0Y = useTransform(smoothProgress, [0, 0.19, 0.23], [0, 0, -25]);

  // Stage 02 Text Card transforms (Enters after Stage 1 is gone)
  const stage1Opacity = useTransform(smoothProgress, [0.25, 0.29, 0.45, 0.49], [0, 1, 1, 0]);
  const stage1Y = useTransform(smoothProgress, [0.25, 0.29, 0.45, 0.49], [25, 0, 0, -25]);

  // Stage 03 Text Card transforms (Enters after Stage 2 is gone)
  const stage2Opacity = useTransform(smoothProgress, [0.51, 0.55, 0.71, 0.75], [0, 1, 1, 0]);
  const stage2Y = useTransform(smoothProgress, [0.51, 0.55, 0.71, 0.75], [25, 0, 0, -25]);

  // Stage 04 Text Card transforms (Enters after Stage 3 is gone)
  const stage3Opacity = useTransform(smoothProgress, [0.77, 0.82, 1], [0, 1, 1]);
  const stage3Y = useTransform(smoothProgress, [0.77, 0.82, 1], [25, 0, 0]);

  // Scrubbed HUD vertical progress line height (0% to 100%)
  const railProgressScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Smooth click-to-jump into specific architectural stage
  const scrollToStage = (stageIdx: number) => {
    if (!containerRef.current) return;
    const targets = [0.08, 0.35, 0.62, 0.88];
    const targetProgress = targets[stageIdx];
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalScrollableDistance =
      containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY =
      containerTop + totalScrollableDistance * targetProgress;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  // ==========================================================================
  // ACCESSIBILITY: PREFERS REDUCED MOTION
  // ==========================================================================
  if (shouldReduceMotion) {
    return (
      <section
        id="process"
        className="py-32 bg-background relative overflow-hidden border-b border-stone-800"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
              [ 04 / PROCESS_BLUEPRINT ]
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
              Engineering <span className="font-serif italic font-normal text-accent">Lifecycle</span>
            </h2>
            <p className="mt-4 text-xs font-mono text-sand max-w-xl">
              An architectural overview of how systems are conceptualized, decomposed, automated, and hardened.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORY_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="p-6 bg-surface/30 border border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-brass uppercase tracking-widest">
                      {"//"} {stage.step} {stage.category}
                    </span>
                    <span className="text-[9px] font-mono text-accent border border-accent/40 px-2 py-0.5">
                      {stage.statusBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light text-ivory tracking-tight mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm font-mono text-sand leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>
                <div className="border-t border-stone-800 pt-4 space-y-2 font-mono text-[10px]">
                  {stage.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between text-sand">
                      <span>{spec.label}:</span>
                      <span className="text-ivory">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================================
  // STANDARD SCROLLYTELLING VIEWPORT (PINNED & SCRUBBED)
  // ==========================================================================
  return (
    <section
      ref={containerRef}
      id="process"
      className="relative h-[240vh] md:h-[320vh] lg:h-[380vh] bg-background border-b border-stone-800"
    >
      {/* Pinned Viewport Container (Sticky 100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 py-10 md:py-16">
        
        {/* Top Header Row in Sticky Viewport */}
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between border-b border-stone-800/80 pb-5 mb-auto relative z-20">
          <div>
            <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-1">
              [ 04 / PROCESS ]
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-ivory tracking-tight">
              Engineering <span className="font-serif italic font-normal text-accent">Lifecycle</span>
            </h2>
          </div>

          {/* Tactical Stage Navigation HUD & Interactive Jump Pills */}
          <div className="flex items-center gap-2 sm:gap-4 font-mono text-xs">
            {/* Interactive Stage Jump Pills */}
            <div className="hidden md:flex items-center gap-1 p-1 bg-surface/50 border border-stone-850 backdrop-blur-sm">
              {[
                { num: "01", name: "SPEC", opacity: activeStage0 },
                { num: "02", name: "TIERS", opacity: activeStage1 },
                { num: "03", name: "CONCURRENCY", opacity: activeStage2 },
                { num: "04", name: "RELEASE", opacity: activeStage3 },
              ].map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStage(idx)}
                  className="relative px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-sand hover:text-ivory transition-colors group cursor-pointer"
                >
                  {/* Active highlight background indicator */}
                  <motion.div
                    style={{ opacity: pill.opacity }}
                    className="absolute inset-0 bg-accent/15 border border-accent/50"
                  />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-accent group-hover:text-brass transition-colors">
                      {pill.num}
                    </span>
                    <span>{pill.name}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Stage Counter HUD */}
            <div className="px-3 py-1.5 bg-surface border border-stone-800 text-accent font-semibold tracking-widest text-[11px] flex items-center">
              <span className="text-sand/70 text-[9px] mr-1.5 hidden sm:inline uppercase">
                PHASE
              </span>
              <div className="relative w-4 h-4 inline-flex items-center justify-center">
                <motion.span style={{ opacity: activeStage0 }} className="absolute">01</motion.span>
                <motion.span style={{ opacity: activeStage1 }} className="absolute">02</motion.span>
                <motion.span style={{ opacity: activeStage2 }} className="absolute">03</motion.span>
                <motion.span style={{ opacity: activeStage3 }} className="absolute">04</motion.span>
              </div>
              <span className="text-sand/50 ml-1">/ 04</span>
            </div>
          </div>
        </div>

        {/* Center Arena: 2-Column Responsive Layout (Text + Persistent Visual) */}
        <div className="max-w-6xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-20">
          
          {/* Left Column: Crossfading Story Stage Text (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[250px] flex items-center">
            
            {/* Stage 01 Text Card */}
            <motion.div
              style={{ opacity: stage0Opacity, y: stage0Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <div className="text-[10px] text-brass font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>{"// 01"}</span>
                <span>{STORY_STAGES[0].category}</span>
                <span className="w-1.5 h-1.5 bg-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-ivory tracking-tight mb-4 leading-snug">
                {STORY_STAGES[0].title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-sand leading-relaxed mb-6">
                {STORY_STAGES[0].description}
              </p>
              <div className="space-y-1.5 border-t border-stone-800/80 pt-4 font-mono text-[10px]">
                {STORY_STAGES[0].specs.map((s, i) => (
                  <div key={i} className="flex justify-between text-sand">
                    <span className="text-sand/70">{s.label}:</span>
                    <span className="text-ivory">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stage 02 Text Card */}
            <motion.div
              style={{ opacity: stage1Opacity, y: stage1Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <div className="text-[10px] text-brass font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>{"// 02"}</span>
                <span>{STORY_STAGES[1].category}</span>
                <span className="w-1.5 h-1.5 bg-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-ivory tracking-tight mb-4 leading-snug">
                {STORY_STAGES[1].title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-sand leading-relaxed mb-6">
                {STORY_STAGES[1].description}
              </p>
              <div className="space-y-1.5 border-t border-stone-800/80 pt-4 font-mono text-[10px]">
                {STORY_STAGES[1].specs.map((s, i) => (
                  <div key={i} className="flex justify-between text-sand">
                    <span className="text-sand/70">{s.label}:</span>
                    <span className="text-ivory">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stage 03 Text Card */}
            <motion.div
              style={{ opacity: stage2Opacity, y: stage2Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <div className="text-[10px] text-brass font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>{"// 03"}</span>
                <span>{STORY_STAGES[2].category}</span>
                <span className="w-1.5 h-1.5 bg-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-ivory tracking-tight mb-4 leading-snug">
                {STORY_STAGES[2].title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-sand leading-relaxed mb-6">
                {STORY_STAGES[2].description}
              </p>
              <div className="space-y-1.5 border-t border-stone-800/80 pt-4 font-mono text-[10px]">
                {STORY_STAGES[2].specs.map((s, i) => (
                  <div key={i} className="flex justify-between text-sand">
                    <span className="text-sand/70">{s.label}:</span>
                    <span className="text-ivory">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stage 04 Text Card */}
            <motion.div
              style={{ opacity: stage3Opacity, y: stage3Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <div className="text-[10px] text-brass font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>{"// 04"}</span>
                <span>{STORY_STAGES[3].category}</span>
                <span className="w-1.5 h-1.5 bg-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-ivory tracking-tight mb-4 leading-snug">
                {STORY_STAGES[3].title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-sand leading-relaxed mb-6">
                {STORY_STAGES[3].description}
              </p>
              <div className="space-y-1.5 border-t border-stone-800/80 pt-4 font-mono text-[10px]">
                {STORY_STAGES[3].specs.map((s, i) => (
                  <div key={i} className="flex justify-between text-sand">
                    <span className="text-sand/70">{s.label}:</span>
                    <span className="text-ivory">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Persistent Visual Asset (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            {customVisual ? customVisual : <ArchitecturalCardStack progress={smoothProgress} />}
          </div>

          {/* Far Right: Tactical Vertical Progress Rail (1 col) */}
          <div className="hidden lg:flex lg:col-span-1 justify-end items-center h-full">
            <div className="flex flex-col items-center">
              {/* Progress Rail Track */}
              <div className="relative w-0.5 h-44 bg-stone-800">
                <motion.div
                  style={{ scaleY: railProgressScaleY, originY: 0 }}
                  className="absolute top-0 left-0 w-full h-full bg-accent"
                />

                {/* Tactical Stage Indicator Dots */}
                {STORY_STAGES.map((st, i) => {
                  const stageThreshold = i / (STORY_STAGES.length - 1);
                  return (
                    <div
                      key={st.step}
                      style={{ top: `${stageThreshold * 100}%` }}
                      className="absolute -left-1 -translate-y-1/2 w-2.5 h-2.5 bg-background border border-stone-700 flex items-center justify-center transition-colors duration-300"
                    >
                      <motion.div
                        style={{
                          opacity:
                            i === 0
                              ? activeStage0
                              : i === 1
                              ? activeStage1
                              : i === 2
                              ? activeStage2
                              : activeStage3,
                        }}
                        className="w-1 h-1 bg-accent"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacer to balance sticky viewport */}
        <div className="mt-auto" />
      </div>
    </section>
  );
}
