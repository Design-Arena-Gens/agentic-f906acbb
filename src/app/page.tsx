"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

const features = [
  {
    title: "Atomically Smooth",
    description:
      "LiquidGlass seals at a molecular level to create an invisible layer that makes every surface feel impossibly smooth.",
    metric: "0.8nm",
    footnote: "average surface variance",
  },
  {
    title: "Self-Healing Matrix",
    description:
      "Microfractures repair themselves in real-time thanks to a dynamic lattice that responds to pressure and temperature.",
    metric: "92%",
    footnote: "micro-scratch repair rate",
  },
  {
    title: "Optical Purity",
    description:
      "A proprietary wave-guided coating refracts light back to your eyes for richer contrast and true-to-life color.",
    metric: "1.0003",
    footnote: "refractive index clarity",
  },
];

const experienceMoments = [
  {
    heading: "Edge-to-Edge Immersion",
    copy: "Feel the display dissolve into the frame. LiquidGlass bends with every contour, making hardware disappear.",
    tint: "from-sky-400/60 via-purple-400/50 to-transparent",
  },
  {
    heading: "Intuitive Touch",
    copy: "We re-engineered touch response with a glass layer so thin it amplifies micro-gestures and reduces input lag.",
    tint: "from-fuchsia-300/50 via-pink-500/40 to-transparent",
  },
  {
    heading: "Sonic Resonance",
    copy: "Vibration translates into pure, balanced sound. The film re-shapes acoustic waves and removes harsh edges.",
    tint: "from-indigo-400/60 via-blue-300/40 to-transparent",
  },
];

const timeline = [
  {
    title: "Phase 01 — Liquid State",
    summary: "Adaptive nano-particles realign while your device rests, constantly shaping to your touch.",
  },
  {
    title: "Phase 02 — Photonic Fuse",
    summary: "Sub-pixel prisms harmonize light, bathing the interface in a subtle glow that follows your gaze.",
  },
  {
    title: "Phase 03 — Living Surface",
    summary: "Temperature-aware molecules expand and contract to disperse heat, making the glass feel alive.",
  },
];

const gallery = [
  {
    label: "Atmospheric Depth",
    angle: "120°",
    accent: "bg-gradient-to-br from-white/30 via-sky-300/40 to-transparent",
  },
  {
    label: "Hovering Elements",
    angle: "48°",
    accent: "bg-gradient-to-br from-white/30 via-fuchsia-200/40 to-transparent",
  },
  {
    label: "Ceramic Soft-Touch",
    angle: "12°",
    accent: "bg-gradient-to-br from-white/30 via-indigo-300/40 to-transparent",
  },
];

const HeroStat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/5 px-6 py-4 text-center backdrop-blur-xl">
      <span className="text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">
        {value}
      </span>
      <span className="text-sm uppercase tracking-[0.25em] text-white/60">
        {label}
      </span>
      <span className="absolute -top-3 h-5 w-12 rounded-full bg-gradient-to-r from-sky-300/70 via-white/80 to-pink-300/70 blur-sm" />
    </div>
  );
};

export default function Home() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: pageProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end start"],
  });

  const smoothProgress = useSpring(pageProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.8,
  });

  const heroTranslate = useTransform(heroProgress, [0, 0.6], [0, -160]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0.25]);
  const heroScale = useTransform(heroProgress, [0, 0.7], [1, 0.85]);

  const timelineHeight = useTransform(timelineProgress, [0, 1], ["10%", "100%"]);

  const heroStats = useMemo(
    () => [
      { value: "8.2M", label: "Nanoscopic Points" },
      { value: "0.2 μm", label: "Friction Layer" },
      { value: "24/hr", label: "Self-Cycles" },
    ],
    [],
  );

  return (
    <main ref={pageRef} className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24">
      <motion.span className="scroll-progress" style={{ scaleX: smoothProgress }} />

      <section className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb left-[12%] top-[12%] h-[340px] w-[340px]" />
        <div className="orb right-[10%] top-[22%] h-[380px] w-[380px]" />
        <div className="orb left-[20%] bottom-[10%] h-[420px] w-[420px]" />
      </section>

      <section
        ref={heroRef}
        className="relative flex min-h-[110vh] flex-col items-center justify-center px-6 pt-32 pb-16 md:px-12 lg:px-20"
      >
        <motion.div
          className="hero-glow left-1/2 top-1/3 hidden md:block"
          style={{ opacity: heroOpacity }}
        />

        <motion.div
          className="relative glass-panel isolate flex w-full max-w-6xl flex-col items-center gap-14 overflow-hidden rounded-[48px] px-8 py-16 text-center shadow-[0_60px_120px_rgba(15,12,60,0.55)] sm:px-12 md:px-20 md:py-20"
          style={{ y: heroTranslate, opacity: heroOpacity, scale: heroScale }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22)_0%,transparent_60%)]" />

          <div className="relative mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.55em] text-white/60">
              Introducing
            </p>
            <h1 className="text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              LiquidGlass
            </h1>
            <p className="text-lg text-white/70 md:text-xl">
              An Apple-inspired exploration of glass that thinks, adapts, and transforms with every
              scroll. Designed for a world where the interface feels alive beneath your fingertips.
            </p>
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:border-white/50 hover:bg-white/20">
              Experience
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-400/40 to-pink-400/30 opacity-0 transition group-hover:opacity-100" />
            </button>
            <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-slate-100">
              Discover
            </button>
          </div>

          <div className="relative grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
            {heroStats.map((stat) => (
              <HeroStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
            className="glass-panel relative hidden max-w-5xl rounded-[32px] border-white/10 bg-white/5 p-1 sm:block"
          >
            <div className="flex items-center justify-between rounded-[28px] bg-black/40 px-6 py-5 text-left lg:px-10 lg:py-8">
              <div className="max-w-2xl text-left">
                <h2 className="text-2xl font-semibold text-white/90 lg:text-3xl">
                  Liquid optics engineered to disappear.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-white/60 lg:text-base">
                  Every atom is aligned by light, then sealed with a thermal wave. The result is
                  glass that bends to light and touch like water.
                </p>
              </div>
              <div className="hidden shrink-0 flex-col items-end text-right text-xs uppercase tracking-[0.5em] text-white/50 sm:flex">
                <span>Ultra Thin</span>
                <span className="text-white/70">0.11 mm</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative mt-16 grid gap-12 px-6 md:px-12 lg:px-24">
        <div className="relative z-10 flex flex-col gap-6 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.55em] text-white/50">
            Features
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A liquid glass story told in motion.
          </h2>
          <p className="max-w-2xl text-base text-white/65 md:text-lg">
            Scroll to reveal how LiquidGlass reacts. Each moment unfolds with a weighted animation
            that guides your focus and invites touch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative flex flex-col gap-5 overflow-hidden rounded-[32px] border border-white/15 bg-white/5 px-6 py-9 text-left backdrop-blur-2xl md:px-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                {feature.metric}
              </span>
              <h3 className="text-2xl font-semibold text-white/95">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
              <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                {feature.footnote}
              </span>
              <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-white/40 via-white/5 to-transparent blur-xl" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mt-24 flex flex-col gap-12 px-6 md:px-12 lg:px-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 overflow-hidden rounded-[46px] border border-white/10 bg-white/5 p-1 backdrop-blur-2xl">
          <div className="relative flex flex-col justify-between gap-10 rounded-[42px] bg-black/40 px-6 py-10 md:flex-row md:gap-16 md:px-16 md:py-14">
            <div className="max-w-xl space-y-5">
              <p className="text-xs uppercase tracking-[0.45em] text-white/50">
                Sculpted glass
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                Precision layers that feel like a living surface.
              </h2>
              <p className="text-sm text-white/65 md:text-base">
                Inspired by Apple&apos;s liquid design language, the surface reflects the world in
                gradients of light. Each swipe triggers a fluid response in the UI that follows your
                motion.
              </p>
            </div>
            <div className="glass-panel relative flex h-72 w-full max-w-sm flex-col justify-between overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-white/0 p-6">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                Live feedback
              </span>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl font-semibold text-white">Adaptive tone</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                    in 18 ms
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-black/60 p-5">
                  <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/80 via-white/10 to-transparent blur-3xl" />
                  <span className="relative text-sm font-medium text-white/80">
                    Touch ripple
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      <span className="h-2 w-2 rounded-full bg-sky-300" />
                    </span>
                    <div>
                      <p className="text-sm text-white/70">Gesture intensity</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        adaptive curve
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-24 flex flex-col gap-10 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.55em] text-white/50">
            Immersion
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Motion crafted for a fluid, glassy moment.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {experienceMoments.map((moment, index) => (
            <motion.div
              key={moment.heading}
              className="group relative overflow-hidden rounded-[36px] border border-white/15 bg-white/5 p-[1px] backdrop-blur-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.75, ease: "easeOut" }}
            >
              <div
                className={`relative flex h-72 flex-col gap-4 overflow-hidden rounded-[32px] bg-black/60 bg-gradient-to-br ${moment.tint} p-8`}
              >
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl transition duration-[1200ms] group-hover:scale-125 group-hover:opacity-80" />
                <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/55">
                  <span>LiquidGlass</span>
                  <span className="h-[1px] flex-1 bg-white/20" />
                  <span>{`0${index + 1}`}</span>
                </div>
                <h3 className="relative text-2xl font-semibold text-white/95">
                  {moment.heading}
                </h3>
                <p className="relative mt-auto text-sm leading-relaxed text-white/70">
                  {moment.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        ref={timelineRef}
        className="relative mt-28 flex flex-col gap-14 px-6 md:px-12 lg:px-24"
      >
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.55em] text-white/50">
            Evolution
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            A kinetic narrative, synced to your scroll.
          </h2>
          <p className="max-w-2xl text-base text-white/65 md:text-lg">
            Follow the phases of LiquidGlass as it awakens. The progress bar grows in sync with
            each reveal—mirroring the rhythm of responsive Apple scroll stories.
          </p>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-2 top-6 h-[75%] w-[2px] origin-top bg-gradient-to-b from-white/80 via-white/40 to-transparent md:left-3 lg:left-4"
            style={{ height: timelineHeight }}
          />

          <div className="relative flex flex-col gap-14 pl-10 md:pl-14 lg:pl-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
              >
                <span className="absolute -left-8 top-1 h-4 w-4 rounded-full border border-white/50 bg-black/80 shadow-[0_0_0_6px_rgba(255,255,255,0.05)] transition group-hover:border-white md:-left-10 lg:-left-10" />
                <div className="flex flex-col gap-4 rounded-[32px] border border-white/15 bg-white/5 px-6 py-8 text-left backdrop-blur-2xl md:px-8 md:py-10">
                  <h3 className="text-2xl font-semibold text-white/95 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/65 md:text-base">{item.summary}</p>
                  <div className="text-xs uppercase tracking-[0.4em] text-white/45">
                    Phase {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-32 flex flex-col gap-12 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.55em] text-white/50">
            Visual Atmosphere
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Light, refraction, and impossibly thin edges.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((frame) => (
            <motion.div
              key={frame.label}
              className="group relative overflow-hidden rounded-[38px] border border-white/15 bg-white/5 p-1 backdrop-blur-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div
                className={`relative flex h-72 flex-col justify-between overflow-hidden rounded-[34px] bg-black/60 ${frame.accent} p-6`}
              >
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl transition duration-700 group-hover:scale-125 group-hover:opacity-80" />
                <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/55">
                  <span>{frame.label}</span>
                  <span>{frame.angle}</span>
                </div>
                <div className="relative mt-auto flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                    <span className="text-sm">LG</span>
                  </div>
                  <p className="text-sm text-white/70">
                    A crystalline surface that bends light softly, revealing the depth beneath each
                    pixel.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mt-32 flex flex-col gap-16 px-6 md:px-12 lg:px-24">
        <div className="glass-panel relative overflow-hidden rounded-[44px] border border-white/15 bg-white/5 px-8 py-10 text-center backdrop-blur-2xl md:px-16 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_55%)] opacity-70" />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.45em] text-white/60">
              Inspired by Cupertino
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              A liquid glass journey that responds to you.
            </h2>
            <p className="text-base text-white/70 md:text-lg">
              This concept site channels Apple&apos;s love for minimalism, glass, and motion—each
              scroll invites a new layer of depth. LiquidGlass is not a product, it&apos;s a story
              told in refraction, blur, and light.
            </p>
          </div>

          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.45em] text-white/50 md:gap-8">
            <span className="rounded-full border border-white/15 px-6 py-3 backdrop-blur-2xl">
              Liquid micro lattice
            </span>
            <span className="rounded-full border border-white/15 px-6 py-3 backdrop-blur-2xl">
              Photonic alignment
            </span>
            <span className="rounded-full border border-white/15 px-6 py-3 backdrop-blur-2xl">
              Adaptive tone
            </span>
            <span className="rounded-full border border-white/15 px-6 py-3 backdrop-blur-2xl">
              Edge immersion
            </span>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-6 pb-10 text-center text-xs uppercase tracking-[0.35em] text-white/45 md:text-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span>LiquidGlass</span>
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
          <p className="max-w-xl text-[11px] leading-relaxed tracking-[0.2em] text-white/35 md:text-xs">
            Concept experience. Crafted with Next.js, Tailwind, and Framer Motion. Designed to be
            explored in motion on every screen.
          </p>
        </footer>
      </section>
    </main>
  );
}
