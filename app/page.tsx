"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { cvData, Locale } from "@/app/data/cv";

const uiText = {
  pt: {
    roles: [
      "Arquiteto de Software .NET",
      "Especialista em SQL Server",
      "DevOps e Plataformas",
    ],
    nav: {
      about: "Sobre",
      specializations: "Especialidades",
      experience: "Experiência",
      education: "Formação",
      initiatives: "Iniciativas",
      courses: "Cursos",
      contact: "Contato",
    },
    aboutTitle: "Sobre",
    specializationsTitle: "Especialidades",
    initiativesTitle: "Projetos e Iniciativas",
    initiativesSoonTitle: "Conteúdo em evolução",
    initiativesSoonDescription:
      "Esta seção ficará ativa com estudos de caso e projetos em produção. Em breve, vou publicar iniciativas com contexto técnico e resultados.",
    experienceTitle: "Experiência",
    educationTitle: "Formação Acadêmica",
    coursesTitle: "Cursos",
    contactTitle: "Contato",
    resumeButton: "Ver Currículo",
    resumeAtsButton: "Currículo ATS",
    resumeFullButton: "Currículo Completo",
    contactButton: "Fale Comigo",
    downloadCvButton: "Baixar CV",
    filterTitle: "Filtrar por stack",
    filterAll: "Todos",
    noMatchExperience: "Nenhuma experiência encontrada para o filtro selecionado.",
    noMatchCourses: "Nenhum curso encontrado para o filtro selecionado.",
    ctaLabel: "Disponível para oportunidades em Arquitetura de Software, Engenharia de Software e Banco de Dados.",
  },
  en: {
    roles: [
      ".NET Software Architect",
      "SQL Server Specialist",
      "DevOps and Platform Engineering",
    ],
    nav: {
      about: "About",
      specializations: "Specializations",
      experience: "Experience",
      education: "Education",
      initiatives: "Initiatives",
      courses: "Courses",
      contact: "Contact",
    },
    aboutTitle: "Professional Summary",
    specializationsTitle: "Specializations",
    initiativesTitle: "Projects and Initiatives",
    initiativesSoonTitle: "Content in progress",
    initiativesSoonDescription:
      "This section will be enabled with case studies and production projects. I will publish initiatives with technical context and outcomes soon.",
    experienceTitle: "Experience",
    educationTitle: "Academic Background",
    coursesTitle: "Courses",
    contactTitle: "Contact",
    resumeButton: "View Resume",
    resumeAtsButton: "ATS Resume",
    resumeFullButton: "Full Resume",
    contactButton: "Contact Me",
    downloadCvButton: "Download CV",
    filterTitle: "Filter by stack",
    filterAll: "All",
    noMatchExperience: "No experience found for the selected filter.",
    noMatchCourses: "No course found for the selected filter.",
    ctaLabel: "Open to opportunities in Software Architecture, Software Engineering, and Database Engineering.",
  },
} as const;

/* const initiatives = {
  pt: [
    {
      title: "Portfólio Profissional",
      description: "Site profissional com currículo ATS/completo, internacionalização PT/EN e export estático para GitHub Pages.",
      href: "https://brunomagalhaes.dev.br/",
      internal: false,
    },
    {
      title: "Currículo Técnico Estruturado",
      description: "Fluxo de currículo com versão enxuta e detalhada, pronto para triagem técnica e revisão humana.",
      href: "/curriculo",
      internal: true,
    },
    {
      title: "Repositórios no GitHub",
      description: "Projetos e estudos focados em .NET, banco de dados, integração e evolução contínua.",
      href: "https://github.com/borgesMagalhaes",
      internal: false,
    },
  ],
  en: [
    {
      title: "Professional Portfolio",
      description: "Professional website with ATS/full resume flow, PT/EN support, and static export for GitHub Pages.",
      href: "https://brunomagalhaes.dev.br/",
      internal: false,
    },
    {
      title: "Structured Technical Resume",
      description: "Resume workflow with compact and detailed versions for automated screening and human review.",
      href: "/curriculo",
      internal: true,
    },
    {
      title: "GitHub Repositories",
      description: "Projects and studies focused on .NET, databases, integration, and continuous improvement.",
      href: "https://github.com/borgesMagalhaes",
      internal: false,
    },
  ],
} as const; */

export default function Home() {
  const [language, setLanguage] = useState<Locale>("pt");
  const [activeTag, setActiveTag] = useState<string>("all");
  const t = cvData[language];
  const text = uiText[language];
  const tags = t.atsKeywords.slice(0, 10);

  const matchesTag = (value: string, tag: string) => {
    if (tag === "all") return true;
    return value.toLowerCase().includes(tag.toLowerCase());
  };

  const filteredExperience = t.experience.filter((job) => {
    if (activeTag === "all") return true;
    const blob = `${job.role} ${job.company} ${job.bullets.join(" ")} ${job.details || ""}`;
    return matchesTag(blob, activeTag);
  });

  const filteredCourses = t.courses.filter((course) => {
    if (activeTag === "all") return true;
    return matchesTag(course, activeTag);
  });

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
        <header className="reveal mb-8 rounded-2xl border border-cyan-200/20 bg-slate-900/65 p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/70 pb-4">
            <nav className="flex flex-wrap gap-2 text-sm">
              <a href="#about" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.about}</a>
              <a href="#specializations" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.specializations}</a>
              <a href="#experience" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.experience}</a>
              <a href="#education" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.education}</a>
              <a href="#initiatives" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.initiatives}</a>
              <a href="#courses" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.courses}</a>
              <a href="#contact" className="rounded-full border border-cyan-300/25 px-3 py-1 hover:border-cyan-300/70">{text.nav.contact}</a>
            </nav>
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="rounded-full border border-cyan-300/30 bg-slate-900/70 px-4 py-2 text-sm tracking-wide transition hover:border-cyan-300/80 hover:text-cyan-200"
            >
              {t.cta.switchTo}
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
                Portfolio
              </p>
              <h1 className="mb-3 text-3xl font-semibold text-cyan-100 md:text-6xl">
                {t.fullName}
              </h1>
              <div className="mb-5 flex flex-wrap gap-2">
                {text.roles.map((role) => (
                  <span key={role} className="rounded-full border border-cyan-300/30 bg-slate-950/45 px-3 py-1 text-xs text-cyan-100 md:text-sm">
                    {role}
                  </span>
                ))}
              </div>
              <p className="max-w-3xl text-slate-300 md:text-lg">{text.ctaLabel}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/curriculo?mode=ats"
                  className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400 md:px-6"
                >
                  {text.resumeAtsButton}
                </Link>
                <Link
                  href="/curriculo?mode=full"
                  className="rounded-lg border border-cyan-300/40 px-5 py-3 font-medium text-cyan-100 transition hover:border-cyan-200 hover:text-cyan-50 md:px-6"
                >
                  {text.resumeFullButton}
                </Link>
                <a
                  href={`mailto:${t.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-cyan-300/40 px-5 py-3 font-medium text-cyan-100 transition hover:border-cyan-200 hover:text-cyan-50 md:px-6"
                >
                  {text.contactButton}
                </a>
              </div>
            </div>

            <aside className="rounded-xl border border-cyan-300/25 bg-slate-950/55 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">Focus</p>
              <ul className="mb-5 space-y-2 text-sm text-slate-300">
                {t.targetPositions.map((position) => (
                  <li key={position} className="rounded-md border border-slate-700/80 bg-slate-900/40 px-3 py-2">
                    {position}
                  </li>
                ))}
              </ul>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">{text.filterTitle}</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTag("all")}
                  className={`rounded-full border px-3 py-1 text-xs transition ${
                    activeTag === "all"
                      ? "border-cyan-300 bg-cyan-400/20 text-cyan-100"
                      : "border-slate-700 text-slate-300 hover:border-cyan-300/60"
                  }`}
                >
                  {text.filterAll}
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      activeTag === tag
                        ? "border-cyan-300 bg-cyan-400/20 text-cyan-100"
                        : "border-slate-700 text-slate-300 hover:border-cyan-300/60"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-2">
          <section id="about" className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6">
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

          <section id="specializations" className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.specializationsTitle}</h2>
            <div className="grid gap-3">
              <article className="rounded-lg border border-slate-700 bg-slate-950/45 p-3">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-100">Database</h3>
                <p className="text-sm text-slate-300">{t.skills.databases}</p>
              </article>
              <article className="rounded-lg border border-slate-700 bg-slate-950/45 p-3">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-100">Languages</h3>
                <p className="text-sm text-slate-300">{t.skills.languages}</p>
              </article>
              <article className="rounded-lg border border-slate-700 bg-slate-950/45 p-3">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-100">DevOps</h3>
                <p className="text-sm text-slate-300">{t.skills.devops}</p>
              </article>
            </div>
          </section>

          <section id="experience" className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.experienceTitle}</h2>
            <div className="space-y-4">
              {filteredExperience.map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="relative rounded-xl border border-slate-700 bg-slate-950/45 p-4 pl-8 transition hover:border-cyan-400/40"
                >
                  <span className="absolute left-3 top-5 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                  <span className="absolute bottom-4 left-[17px] top-9 w-px bg-slate-700" />
                  <h3 className="font-semibold text-cyan-100">{job.role} - {job.company}</h3>
                  <p className="mb-2 text-sm text-slate-400">
                    {job.location} • {job.period} • {job.duration}
                  </p>
                  <ul className="list-disc pl-5 text-sm text-slate-300">
                    {job.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
              {filteredExperience.length === 0 && (
                <p className="rounded-lg border border-slate-700 bg-slate-950/45 p-4 text-sm text-slate-300">
                  {text.noMatchExperience}
                </p>
              )}
            </div>
          </section>

          <section id="education" className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
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

          <section id="initiatives" className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.initiativesTitle}</h2>
            <article className="rounded-xl border border-slate-700 bg-slate-950/45 p-5">
              <h3 className="mb-2 font-semibold text-cyan-100">{text.initiativesSoonTitle}</h3>
              <p className="text-slate-300">{text.initiativesSoonDescription}</p>
            </article>
          </section>

          <section id="courses" className="reveal rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-cyan-200">{text.coursesTitle}</h2>
            <div className="max-h-[24rem] overflow-y-auto rounded-xl border border-slate-700/70 p-3 pr-2">
              <div className="grid gap-3 md:grid-cols-2">
              {filteredCourses.map((course) => (
                <div
                  key={course}
                  className="rounded-xl border border-slate-700 bg-slate-950/45 p-4 text-slate-300 transition hover:border-cyan-400/40"
                >
                  {course}
                </div>
              ))}
              {filteredCourses.length === 0 && (
                <p className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-950/45 p-4 text-sm text-slate-300">
                  {text.noMatchCourses}
                </p>
              )}
              </div>
            </div>
          </section>
        </main>

        <footer id="contact" className="reveal mt-10 rounded-2xl border border-slate-700/60 bg-slate-900/55 p-5">
          <h2 className="mb-4 text-center text-xl font-semibold text-cyan-200">{text.contactTitle}</h2>
          <div className="mb-4 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            <a className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 hover:border-cyan-300/60" href={`mailto:${t.contact.email}`} target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> {t.contact.email}
            </a>
            <a className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 hover:border-cyan-300/60" href={t.contact.website} target="_blank" rel="noopener noreferrer">
              <FaGlobe /> {t.contact.website.replace("https://", "")}
            </a>
            <a className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 hover:border-cyan-300/60" href={t.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 hover:border-cyan-300/60" href={t.contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 hover:border-cyan-300/60" href="http://lattes.cnpq.br/0321021721183148" target="_blank" rel="noopener noreferrer">
              <FaFileAlt /> Lattes
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
