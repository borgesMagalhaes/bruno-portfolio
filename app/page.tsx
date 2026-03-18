"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaDocker,
  FaFileAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { cvData, Locale } from "@/app/data/cv";

const uiText = {
  pt: {
    role: "Arquiteto de Software .NET • SQL Server • DevOps",
    aboutTitle: "Resumo Profissional",
    stackTitle: "Tech Stack",
    experienceTitle: "Experiência em Destaque",
    educationTitle: "Formação Acadêmica",
    coursesTitle: "Cursos em Destaque",
    resumeButton: "Gerar Currículo",
    ctaLabel: "Disponível para oportunidades em Arquitetura, Liderança Técnica e Banco de Dados.",
  },
  en: {
    role: ".NET Software Architect • SQL Server • DevOps",
    aboutTitle: "Professional Summary",
    stackTitle: "Tech Stack",
    experienceTitle: "Featured Experience",
    educationTitle: "Academic Background",
    coursesTitle: "Featured Courses",
    resumeButton: "Generate Resume",
    ctaLabel: "Open to opportunities in Architecture, Technical Leadership, and Database Engineering.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Locale>("pt");
  const t = cvData[language];
  const text = uiText[language];

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen tech-bg text-slate-100">
      <div className="scanline" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8">
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="rounded-full border border-cyan-300/30 bg-slate-900/70 px-4 py-2 text-sm tracking-wide transition hover:border-cyan-300/80 hover:text-cyan-200"
          >
            {t.cta.switchTo}
          </button>
        </div>

        <header className="reveal mb-10 rounded-2xl border border-cyan-200/20 bg-slate-900/65 p-6 shadow-2xl backdrop-blur">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            Portfolio
          </p>
          <h1 className="mb-2 text-3xl font-semibold text-cyan-100 md:text-5xl">
            {t.fullName}
          </h1>
          <p className="mb-5 text-sm text-cyan-200 md:text-lg">{text.role}</p>
          <p className="max-w-3xl text-slate-300">{text.ctaLabel}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/curriculo"
              className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
            >
              {text.resumeButton}
            </Link>
            <a
              href={t.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-300/40 px-5 py-3 font-medium text-cyan-100 transition hover:border-cyan-200 hover:text-cyan-50"
            >
              {t.contact.website.replace("https://", "")}
            </a>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-2">
          <section className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.aboutTitle}</h2>
            {t.summary.map((line) => (
              <p key={line} className="mb-3 text-slate-300">
                {line}
              </p>
            ))}
            <p className="text-slate-300">
              <span className="font-semibold text-cyan-200">Expertise:</span> {t.expertise}
            </p>
          </section>

          <section className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.stackTitle}</h2>
            <ul className="space-y-3 text-slate-300">
              <li>
                <strong className="text-cyan-100">Database:</strong> {t.skills.databases}
              </li>
              <li>
                <strong className="text-cyan-100">Languages:</strong> {t.skills.languages}
              </li>
              <li>
                <strong className="text-cyan-100">DevOps:</strong> {t.skills.devops}
              </li>
            </ul>
          </section>

          <section className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.experienceTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {t.experience.slice(0, 4).map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="rounded-xl border border-slate-700 bg-slate-950/45 p-4 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <h3 className="font-semibold text-cyan-100">{job.role}</h3>
                  <p className="mb-2 text-sm text-slate-400">
                    {job.company} • {job.period}
                  </p>
                  <p className="text-sm text-slate-300">{job.bullets[0]}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.educationTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {t.education.map((item) => (
                <article
                  key={`${item.title}-${item.period}`}
                  className="rounded-xl border border-slate-700 bg-slate-950/45 p-4 transition hover:border-cyan-400/40"
                >
                  <h3 className="font-semibold text-cyan-100">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.coursesTitle}</h2>
            <div className="max-h-[24rem] overflow-y-auto rounded-xl border border-slate-700/70 p-3 pr-2">
              <div className="grid gap-3 md:grid-cols-2">
              {t.courses.map((course) => (
                <div
                  key={course}
                  className="rounded-xl border border-slate-700 bg-slate-950/45 p-4 text-slate-300 transition hover:border-cyan-400/40"
                >
                  {course}
                </div>
              ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="reveal mt-10 rounded-2xl border border-slate-700/60 bg-slate-900/55 p-5">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-5 text-3xl">
            <FaDocker className="text-cyan-300" />
            <a href={t.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="transition hover:text-cyan-300" />
            </a>
            <a href="http://lattes.cnpq.br/0321021721183148" target="_blank" rel="noopener noreferrer" aria-label="Lattes">
              <FaFileAlt className="transition hover:text-cyan-300" />
            </a>
            <a href="https://www.instagram.com/borges_magalhaes" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="transition hover:text-cyan-300" />
            </a>
            <a href={t.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="transition hover:text-cyan-300" />
            </a>
          </div>
          <p className="text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Bruno Magalhães. {t.footerRights}
          </p>
        </footer>
      </div>
    </div>
  );
}
