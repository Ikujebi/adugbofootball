"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  Goal,
  Menu,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
  Activity,
  MapPin,
  Play,
  Medal,
  TrendingUp,
  Swords,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    number: "01",
    title: "Competition management",
    description:
      "Create and manage league competitions or knockout tournaments with flexible rules, formats and settings.",
    tag: "COMPETITIONS",
  },
  {
    icon: Users,
    number: "02",
    title: "Teams and players",
    description:
      "Register teams, organize squads, manage player profiles and keep every participant connected.",
    tag: "TEAM MANAGEMENT",
  },
  {
    icon: CalendarDays,
    number: "03",
    title: "Fixtures and results",
    description:
      "Generate match schedules, publish fixtures, record results and keep everyone up to date.",
    tag: "MATCH SCHEDULING",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Statistics and standings",
    description:
      "Track league tables, player performances, goals, assists and competition statistics.",
    tag: "ANALYTICS",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Organization management",
    description:
      "Give every community its own administrative workspace, competitions and access permissions.",
    tag: "ORGANIZATION",
  },
  {
    icon: Zap,
    number: "06",
    title: "Match centre",
    description:
      "Record goals, cards, substitutions and important match events in a structured match record.",
    tag: "LIVE MATCHES",
  },
];

const standings = [
  { position: 1, team: "Greenfield FC", played: 5, won: 4, drawn: 1, lost: 0, gd: "+8", points: 13 },
  { position: 2, team: "United Stars", played: 5, won: 3, drawn: 2, lost: 0, gd: "+6", points: 11 },
  { position: 3, team: "Young Lions", played: 5, won: 3, drawn: 1, lost: 1, gd: "+4", points: 10 },
  { position: 4, team: "City Warriors", played: 5, won: 2, drawn: 1, lost: 2, gd: "+1", points: 7 },
];

const upcomingMatches = [
  {
    home: "Greenfield FC",
    away: "Young Lions",
    date: "SAT, NOV 07",
    time: "15:00",
    homeColor: "bg-emerald-600",
    awayColor: "bg-amber-500",
  },
  {
    home: "United Stars",
    away: "City Warriors",
    date: "SUN, NOV 08",
    time: "16:30",
    homeColor: "bg-blue-600",
    awayColor: "bg-rose-600",
  },
];

const benefits = [
  "League and knockout competitions",
  "Centralized team and player records",
  "Organized fixtures and match results",
  "Competition statistics and standings",
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex w-fit items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#153e2b] text-[#b9ef62] shadow-lg shadow-[#153e2b]/15 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Trophy size={22} strokeWidth={2.2} />
      </div>
      <div>
        <p className={`text-[17px] font-black leading-tight tracking-[-0.06em] ${light ? "text-white" : "text-[#153e2b]"}`}>
          ADUGBO
        </p>
        <p className={`mt-0.5 text-[9px] font-extrabold tracking-[0.2em] ${light ? "text-white/50" : "text-[#748078]"}`}>
          FOOTBALL LEAGUE
        </p>
      </div>
    </Link>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] ${light ? "text-[#b9ef62]" : "text-[#537c4c]"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#b9ef62] animate-pulse" />
      {children}
    </div>
  );
}

function TeamBadge({
  name,
  color,
  size = "md",
}: {
  name: string;
  color: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={`${color} flex shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 hover:scale-105 ${
        size === "sm" ? "h-8 w-8 rounded-lg" : "h-10 w-10"
      }`}
      aria-label={`${name} team`}
    >
      <ShieldCheck size={size === "sm" ? 15 : 19} />
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#b9ef62]/20 blur-[100px]" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative rounded-[28px] border border-white/15 bg-white/[0.08] p-2.5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-3 transition-transform duration-500 hover:scale-[1.01]">
        <div className="overflow-hidden rounded-[21px] bg-[#f8faf7] text-[#153e2b]">
          {/* Dashboard header */}
          <div className="flex items-center justify-between border-b border-[#e9eee8] bg-white px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#153e2b] text-[#b9ef62]">
                <Trophy size={16} />
              </div>
              <div>
                <p className="text-[11px] font-black tracking-tight">
                  ADUGBO
                </p>
                <p className="text-[8px] font-bold tracking-widest text-[#829087]">
                  MANAGEMENT CONSOLE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden rounded-full bg-[#eaf3e7] px-3 py-1.5 text-[9px] font-bold text-[#537c4c] sm:inline-flex">
                SEASON 2026
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#153e2b] text-[10px] font-black text-[#b9ef62]">
                AF
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {/* Greeting */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-widest text-[#89958c]">
                  COMPETITION OVERVIEW
                </p>
                <h3 className="mt-1 text-lg font-black tracking-tight sm:text-xl">
                  Premier League
                </h3>
                <p className="mt-1 text-[10px] text-[#89958c]">
                  Your competition at a glance.
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-[#e8f4e8] px-2.5 py-1.5 text-[9px] font-bold text-[#39764c]">
                <CircleDot size={10} className="animate-pulse" />
                ACTIVE
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {[
                { icon: Users, label: "TEAMS", value: "12", sub: "Registered" },
                { icon: CalendarDays, label: "MATCHES", value: "30", sub: "Scheduled" },
                { icon: Trophy, label: "MATCHDAYS", value: "05", sub: "Completed" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#e9eee8] bg-white p-3 sm:p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={15} className="text-[#638b59]" />
                      <span className="hidden text-[8px] font-bold text-[#a1aaa3] sm:block">
                        {stat.label}
                      </span>
                    </div>
                    <p className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[9px] text-[#89958c]">
                      {stat.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Standings */}
            <div className="mt-4 rounded-2xl border border-[#e9eee8] bg-white p-3.5 sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black">League standings</h4>
                  <p className="mt-1 text-[9px] text-[#89958c]">
                    Season performance
                  </p>
                </div>
                <span className="rounded-lg bg-[#f1f5ef] px-2.5 py-1.5 text-[9px] font-bold text-[#537c4c]">
                  MATCHDAY 05
                </span>
              </div>

              <div className="grid grid-cols-[25px_minmax(0,1fr)_28px_32px_35px] gap-1 border-b border-[#edf0ec] pb-2 text-[8px] font-black tracking-wider text-[#a1aaa3] sm:grid-cols-[30px_minmax(0,1fr)_35px_35px_40px]">
                <span>POS</span>
                <span>TEAM</span>
                <span className="text-center">P</span>
                <span className="text-center">GD</span>
                <span className="text-right">PTS</span>
              </div>

              {standings.map((team) => (
                <div
                  key={team.position}
                  className={`grid grid-cols-[25px_minmax(0,1fr)_28px_32px_35px] items-center gap-1 border-b border-[#f0f2ef] py-3 text-[10px] last:border-0 sm:grid-cols-[30px_minmax(0,1fr)_35px_35px_40px] transition-colors duration-200 hover:bg-[#f9fbf8] ${
                    team.position === 1 ? "bg-[#f4f8ef]" : ""
                  }`}
                >
                  <span className={`font-black ${team.position === 1 ? "text-[#58853d]" : "text-[#a0aaa2]"}`}>
                    {String(team.position).padStart(2, "0")}
                  </span>
                  <span className="flex min-w-0 items-center gap-2 font-bold text-[#354c3e]">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${team.position === 1 ? "bg-[#8fbd4c]" : "bg-[#d7ded7]"}`} />
                    <span className="truncate">{team.team}</span>
                  </span>
                  <span className="text-center text-[#829087]">{team.played}</span>
                  <span className="text-center text-[#829087]">{team.gd}</span>
                  <span className="text-right font-black text-[#153e2b]">{team.points}</span>
                </div>
              ))}
            </div>

            {/* Upcoming matches */}
            <div className="mt-4">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-xs font-black">Upcoming fixtures</h4>
                <span className="text-[9px] font-bold text-[#638b59]">
                  NEXT MATCHDAY
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {upcomingMatches.map((match) => (
                  <div
                    key={match.home}
                    className="rounded-xl border border-[#e9eee8] bg-white p-3 transition-all duration-300 hover:border-[#b9d99b] hover:shadow-sm"
                  >
                    <div className="mb-3 flex justify-between text-[8px] font-bold tracking-wider text-[#929d94]">
                      <span>{match.date}</span>
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <TeamBadge name={match.home} color={match.homeColor} size="sm" />
                        <span className="truncate text-[9px] font-bold">{match.home}</span>
                      </div>
                      <span className="text-[9px] font-black text-[#a0aaa2]">VS</span>
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span className="truncate text-[9px] font-bold">{match.away}</span>
                        <TeamBadge name={match.away} color={match.awayColor} size="sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#e9eee8] bg-white px-5 py-3">
            <span className="text-[9px] font-semibold text-[#89958c]">
              Powered by Adugbo
            </span>
            <span className="flex items-center gap-1.5 text-[9px] font-bold text-[#537c4c]">
              <Activity size={12} className="animate-pulse" />
              COMPETITION ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-7 -left-3 hidden items-center gap-3 rounded-2xl border border-[#e8eee6] bg-white p-4 shadow-xl shadow-black/10 sm:flex lg:-left-10 transition-transform duration-300 hover:scale-105">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3e7] text-[#153e2b]">
          <TrendingUp size={20} />
        </div>
        <div>
          <p className="text-[11px] font-black text-[#153e2b]">
            Every match counts.
          </p>
          <p className="mt-0.5 text-[9px] text-[#829087]">
            One organized football experience.
          </p>
        </div>
        <CheckCircle2 size={17} className="ml-2 text-[#6b9b4b]" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faf7] font-sans text-[#153e2b] antialiased selection:bg-[#b9ef62] selection:text-[#153e2b]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#e8eee6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Brand />

          <nav className="hidden items-center gap-9 md:flex">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "#about" },
              { label: "Features", href: "#features" },
              { label: "Competitions", href: "#competitions" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-2 text-[12px] font-bold text-[#69766d] transition-colors duration-200 hover:text-[#153e2b] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8fb94f] after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-[#153e2b] px-6 py-3 text-[11px] font-extrabold text-white shadow-lg shadow-[#153e2b]/10 transition-all hover:-translate-y-0.5 hover:bg-[#24583a] hover:shadow-xl"
            >
              Get started
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Native mobile navigation */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#e8eee6] bg-white text-[#153e2b] transition hover:bg-[#f1f5ef] [&::-webkit-details-marker]:hidden"
            >
              <Menu size={20} className="group-open:hidden" />
              <span className="hidden group-open:block">
                <span className="sr-only">Close menu</span>
                <span className="text-xl leading-none">×</span>
              </span>
            </summary>
            <div className="absolute right-0 top-[54px] w-[min(88vw,320px)] rounded-2xl border border-[#e8eee6] bg-white p-4 shadow-2xl shadow-[#153e2b]/10">
              <nav className="flex flex-col gap-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "#about" },
                  { label: "Features", href: "#features" },
                  { label: "Competitions", href: "#competitions" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm font-bold text-[#526158] transition hover:bg-[#f3f7f1] hover:text-[#153e2b]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#get-started"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#153e2b] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#24583a]"
                >
                  Get started <ArrowUpRight size={16} />
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102d20] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(185,239,98,0.14),transparent_45%),radial-gradient(ellipse_at_0%_100%,rgba(31,91,59,0.5),transparent_50%)]" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute -right-20 top-20 h-[350px] w-[350px] rounded-full border border-white/[0.05]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#b9ef62]/25 bg-[#b9ef62]/[0.08] px-4 py-2.5 transition-all duration-300 hover:border-[#b9ef62]/50">
                <Sparkles size={13} className="text-[#b9ef62]" />
                <span className="text-[9px] font-black tracking-[0.18em] text-[#d6f4ae] sm:text-[10px]">
                  BUILT FOR COMMUNITY FOOTBALL
                </span>
              </div>

              <h1 className="max-w-2xl text-[42px] font-black leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[68px] xl:text-[74px]">
                Every community has a{" "}
                <span className="relative inline-block text-[#b9ef62]">
                  football story.
                </span>{" "}
                Let's organize it.
              </h1>

              <p className="mt-7 max-w-lg text-[14px] leading-7 text-white/65 sm:text-base sm:leading-8">
                The home of organized community football. Create competitions,
                manage teams, schedule fixtures and follow every moment of the
                beautiful game — all in one place.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#get-started"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#b9ef62] px-7 py-4 text-[12px] font-black text-[#153e2b] shadow-xl shadow-[#b9ef62]/10 transition-all hover:-translate-y-1 hover:bg-[#cdf58b] hover:shadow-[#b9ef62]/20"
                >
                  Explore the platform
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-7 py-4 text-[12px] font-bold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <Play size={15} className="fill-current" />
                  Discover features
                </Link>
              </div>

              <div className="mt-11 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7">
                {[
                  "League competitions",
                  "Knockout tournaments",
                  "Multiple communities",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[10px] font-semibold text-white/65 sm:text-[11px]"
                  >
                    <CheckCircle2 size={15} className="text-[#b9ef62]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <DashboardPreview />
          </div>
        </div>

        {/* Hero bottom strip */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
            <p className="text-[10px] font-bold tracking-[0.14em] text-white/45">
              MORE THAN JUST A FOOTBALL COMPETITION.
            </p>
            <div className="flex items-center gap-5 text-[10px] font-bold text-white/65 sm:gap-8">
              <span className="flex items-center gap-2 transition-colors hover:text-[#b9ef62]">
                <Trophy size={13} className="text-[#b9ef62]" /> COMPETE
              </span>
              <span className="flex items-center gap-2 transition-colors hover:text-[#b9ef62]">
                <Users size={13} className="text-[#b9ef62]" /> CONNECT
              </span>
              <span className="flex items-center gap-2 transition-colors hover:text-[#b9ef62]">
                <TrendingUp size={13} className="text-[#b9ef62]" /> GROW
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <div>
            <SectionLabel>THE ADUGBO EXPERIENCE</SectionLabel>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.15] tracking-[-0.045em] text-[#153e2b] sm:text-5xl">
              From the neighbourhood pitch to a professionally managed league.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-[#758078] sm:text-base">
              Community football deserves more than handwritten fixtures and
              scattered records. It deserves a proper system.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#758078] sm:text-base">
              Adugbo brings organizers, teams, players and supporters into one
              connected football ecosystem. Whether you are running a local
              league or a knockout tournament, everything has a place.
            </p>

            <Link
              href="#features"
              className="group mt-8 inline-flex items-center gap-3 text-[12px] font-black text-[#537c4c]"
            >
              Discover what you can do
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf3e7] transition-all group-hover:translate-x-1 group-hover:bg-[#153e2b] group-hover:text-[#b9ef62]">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-[#edf4e9] transition-transform duration-500 hover:scale-[1.01]" />
            <div className="relative overflow-hidden rounded-[28px] bg-[#153e2b] p-7 text-white sm:p-10 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] text-[#b9ef62]">
                    THE BIGGER PICTURE
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Football brings us together.
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b9ef62] text-[#153e2b] transition-transform duration-300 hover:rotate-6">
                  <Goal size={25} />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/65">
                We are building tools that help communities create better
                competitions, recognize local talent and make every match
                count.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <div className="grid grid-cols-2 gap-6">
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <Trophy size={22} className="text-[#b9ef62]" />
                  <h4 className="mt-3 text-sm font-extrabold">
                    Better competitions
                  </h4>
                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Organized from start to finish.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <Users size={22} className="text-[#b9ef62]" />
                  <h4 className="mt-3 text-sm font-extrabold">
                    Stronger communities
                  </h4>
                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Bringing people closer through football.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:bg-white/[0.09]">
                <div>
                  <p className="text-[9px] font-bold tracking-widest text-[#b9ef62]">
                    OUR MISSION
                  </p>
                  <p className="mt-1 text-xs font-bold text-white">
                    Community football, organized.
                  </p>
                </div>
                <Sparkles size={20} className="text-[#b9ef62]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-24 border-y border-[#e8eee6] bg-[#f8faf7] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>BUILT FOR THE GAME</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-[-0.045em] text-[#153e2b] sm:text-5xl">
                Everything your competition needs.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#758078]">
              One connected platform for competition organizers, team
              administrators, match officials and football supporters.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-[24px] border border-[#e6ece4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d99b] hover:shadow-xl hover:shadow-[#153e2b]/[0.06] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5e9] text-[#537c4c] transition-all duration-300 group-hover:bg-[#153e2b] group-hover:text-[#b9ef62] group-hover:scale-110">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-black tracking-widest text-[#d7dfd5] transition-colors group-hover:text-[#537c4c]">
                      {feature.number}
                    </span>
                  </div>

                  <p className="mt-7 text-[9px] font-black tracking-[0.16em] text-[#83a66c]">
                    {feature.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-black tracking-tight text-[#153e2b]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-[12px] leading-6 text-[#7a867d] sm:text-[13px]">
                    {feature.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#edf0ec] pt-5">
                    <span className="text-[10px] font-bold text-[#8c988e]">
                      PLATFORM CAPABILITY
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f5ef] text-[#537c4c] transition-all group-hover:bg-[#153e2b] group-hover:text-[#b9ef62]">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPETITION FORMATS */}
      <section
        id="competitions"
        className="scroll-mt-24 bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>COMPETITION FORMATS</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#153e2b] sm:text-5xl">
              Your competition. Your format.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#758078] sm:text-base">
              Every community has its own way of playing. Adugbo gives you
              flexible competition structures to match your vision.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* League */}
            <article className="group overflow-hidden rounded-[28px] border border-[#e5ebe3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#153e2b]/[0.06]">
              <div className="relative overflow-hidden bg-[#153e2b] p-8 text-white sm:p-10">
                <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border-[30px] border-white/[0.04]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b9ef62] text-[#153e2b] transition-transform duration-300 group-hover:scale-110">
                      <Trophy size={27} />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[9px] font-black tracking-[0.15em] text-[#b9ef62]">
                      FORMAT 01
                    </span>
                  </div>

                  <h3 className="mt-9 text-3xl font-black tracking-tight sm:text-4xl">
                    League format.
                  </h3>
                  <p className="mt-3 max-w-sm text-[13px] leading-7 text-white/65">
                    Consistency, competition and the pursuit of the top spot.
                    Teams earn points across scheduled matchdays.
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-[#b9ef62]">
                    <Activity size={14} className="animate-pulse" />
                    THE RACE TO THE TOP
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <h4 className="text-[11px] font-black tracking-widest text-[#153e2b]">
                  LEAGUE MANAGEMENT FEATURES
                </h4>
                <ul className="mt-6 space-y-5">
                  {[
                    "Automatic league standings calculation",
                    "Custom win, draw and loss points",
                    "Round-robin fixture generation",
                    "Team performance and statistics",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[12px] font-semibold text-[#647168]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf3e7] text-[#537c4c]">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Knockout */}
            <article className="group overflow-hidden rounded-[28px] border border-[#e5ebe3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#153e2b]/[0.06]">
              <div className="relative overflow-hidden bg-[#eaf3e7] p-8 text-[#153e2b] sm:p-10">
                <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border-[30px] border-[#153e2b]/[0.04]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153e2b] text-[#b9ef62] transition-transform duration-300 group-hover:scale-110">
                      <Swords size={27} />
                    </div>
                    <span className="rounded-full border border-[#153e2b]/10 bg-white/60 px-4 py-2 text-[9px] font-black tracking-[0.15em] text-[#537c4c]">
                      FORMAT 02
                    </span>
                  </div>

                  <h3 className="mt-9 text-3xl font-black tracking-tight sm:text-4xl">
                    Knockout format.
                  </h3>
                  <p className="mt-3 max-w-sm text-[13px] leading-7 text-[#647168]">
                    Every match matters. Teams fight through elimination
                    rounds on their journey to the championship.
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-[#537c4c]">
                    <Medal size={14} />
                    THE ROAD TO GLORY
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <h4 className="text-[11px] font-black tracking-widest text-[#153e2b]">
                  TOURNAMENT MANAGEMENT FEATURES
                </h4>
                <ul className="mt-6 space-y-5">
                  {[
                    "Visual tournament bracket management",
                    "Single-leg or two-leg ties",
                    "Extra time and penalty shootouts",
                    "Progression through elimination rounds",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[12px] font-semibold text-[#647168]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf3e7] text-[#537c4c]">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY ADUGBO */}
      <section className="border-y border-[#e5ebe3] bg-[#f3f7f1] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>WHY ADUGBO</SectionLabel>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.045em] text-[#153e2b] sm:text-5xl">
              Less administration. More football.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-[#758078]">
              Managing a football competition should not be harder than playing
              one. Bring your competition operations together and spend more
              time growing the game.
            </p>

            <div className="mt-9 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-1">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#153e2b] text-[#b9ef62]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[12px] font-bold text-[#43564a] sm:text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#get-started"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#153e2b] px-7 py-4 text-[11px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#24583a]"
            >
              Get started with Adugbo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Decorative football pitch with enhanced micro-animations */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -inset-5 rounded-[32px] bg-white shadow-xl shadow-[#153e2b]/[0.04] transition-all duration-500 hover:scale-[1.01]" />
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#153e2b] p-5 sm:p-8 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] text-[#b9ef62] animate-pulse">
                    THE BEAUTIFUL GAME
                  </p>
                  <p className="mt-1 text-sm font-black text-white">
                    Every match matters.
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#b9ef62] transition-transform duration-300 hover:rotate-12 hover:scale-110 cursor-pointer">
                  <Goal size={22} />
                </div>
              </div>

              <div className="relative aspect-[1.4/1] overflow-hidden rounded-xl border-2 border-white/30 bg-[#28613d] shadow-inner">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0, transparent 20%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 40%)" }} />
                <div className="absolute inset-[7%] border border-white/50" />
                <div className="absolute bottom-[7%] left-[25%] right-[25%] h-[14%] border border-b-0 border-white/50" />
                <div className="absolute left-[25%] right-[25%] top-[7%] h-[14%] border border-t-0 border-white/50" />
                <div className="absolute bottom-1/2 left-0 right-0 border-t border-white/50" />
                <div className="absolute left-1/2 top-1/2 h-[28%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                
                {/* Animated Glowing Radar Dots */}
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 bg-[#b9ef62] shadow-[0_0_20px_rgba(185,239,98,0.8)] animate-ping" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 bg-[#b9ef62] shadow-[0_0_20px_rgba(185,239,98,0.6)]" />
                <div className="absolute left-[23%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#b9ef62] shadow-[0_0_15px_rgba(185,239,98,0.9)] transition-transform duration-700 hover:scale-150 cursor-pointer animate-pulse" />
                <div className="absolute right-[28%] top-[62%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-transform duration-700 hover:scale-150 cursor-pointer" />
                <div className="absolute bottom-[25%] left-[48%] h-2.5 w-2.5 rounded-full bg-[#b9ef62] transition-transform duration-700 hover:scale-150 cursor-pointer" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Trophy, title: "COMPETE", description: "Play to win" },
                  { icon: Users, title: "CONNECT", description: "Build community" },
                  { icon: TrendingUp, title: "GROW", description: "Develop talent" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.title} 
                      className="group/card rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1 hover:border-[#b9ef62]/40 hover:shadow-lg hover:shadow-[#b9ef62]/5 cursor-pointer"
                    >
                      <Icon size={18} className="mx-auto text-[#b9ef62] transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3" />
                      <p className="mt-2 text-[9px] font-black tracking-wider text-white transition-colors group-hover/card:text-[#b9ef62]">{item.title}</p>
                      <p className="mt-1 text-[8px] text-white/45">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="get-started" className="scroll-mt-24 relative overflow-hidden bg-[#102d20] py-24 text-center text-white sm:py-32">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#b9ef62]/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#b9ef62] text-[#153e2b] shadow-xl shadow-[#b9ef62]/10 transition-transform duration-300 hover:scale-110">
            <Trophy size={30} />
          </div>

          <SectionLabel light>THE GAME DESERVES BETTER</SectionLabel>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Let's build something great for{" "}
            <span className="text-[#b9ef62]">community football.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
            Better competitions. Stronger communities. More opportunities for
            local talent. The future of community football starts with
            organization.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#features"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#b9ef62] px-8 py-4 text-[12px] font-black text-[#153e2b] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#cdf58b]"
            >
              Discover the platform
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[12px] font-bold text-white transition hover:bg-white/10"
            >
              Learn about Adugbo
              <ChevronRight size={16} />
            </Link>
          </div>

          <p className="mt-8 text-[10px] font-semibold tracking-wider text-white/35">
            COMMUNITY FOOTBALL, ORGANIZED.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b2117] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Brand light />
              <p className="mt-5 max-w-xs text-[12px] leading-7 text-white/45">
                Bringing communities together through organized football.
                Every team has a story. Every match matters.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-[0.17em] text-[#b9ef62]">
                EXPLORE
              </h4>
              <div className="mt-5 flex flex-col gap-4">
                {[
                  { label: "About Adugbo", href: "#about" },
                  { label: "Features", href: "#features" },
                  { label: "Competitions", href: "#competitions" },
                  { label: "Get started", href: "#get-started" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="w-fit text-[11px] font-semibold text-white/50 transition hover:text-[#b9ef62]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-[0.17em] text-[#b9ef62]">
                OUR PURPOSE
              </h4>
              <p className="mt-5 max-w-xs text-[12px] leading-7 text-white/45">
                Making community football easier to organize, more exciting to
                follow and better connected.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold text-white/60">
                <MapPin size={13} className="text-[#b9ef62]" />
                BUILT FOR COMMUNITIES
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="text-[10px] text-white/40">
              © {currentYear ?? 2026} Adugbo Football League. All rights reserved.
            </p>
            <p className="text-[10px] font-bold tracking-wider text-white/35">
              COMMUNITY FOOTBALL, ORGANIZED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}