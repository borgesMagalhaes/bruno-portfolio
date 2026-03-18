"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cvData, Locale } from "@/app/data/cv";

type ResumeMode = "ats" | "full";

function createResumeHtml(language: Locale, mode: ResumeMode) {
  const t = cvData[language];
  const langLabel = language === "pt" ? "pt-BR" : "en";
  const isAts = mode === "ats";
  const featuredCourses = t.courses.slice(0, 6);
  const portfolioUrl = t.contact.website;

  const experienceHtml = t.experience
    .map(
      (job) => `
      <article class="item">
        <h3>${job.role} - ${job.company}</h3>
        <p class="meta-line">${job.location} | ${job.period} | ${job.duration}</p>
        <ul>
          ${(isAts ? job.bullets.slice(0, 3) : job.bullets).map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
        ${!isAts && job.details ? `<p class="small"><strong>Detalhes:</strong> ${job.details}</p>` : ""}
      </article>
    `,
    )
    .join("");

  const educationHtml = t.education
    .map((item) => `<li>${item.title} (${item.period})</li>`)
    .join("");

  const certificationsHtml = t.certifications.map((item) => `<li>${item}</li>`).join("");
  const languagesHtml = t.languages.map((item) => `<li>${item}</li>`).join("");

  const coursesHtml = (isAts ? featuredCourses : t.courses).map((item) => `<li>${item}</li>`).join("");
  const featuredCoursesHtml = featuredCourses
    .map((item) => `<li>${item}</li>`)
    .join("");
  const keywords = t.atsKeywords.join(", ");
  const targetRoles = t.targetPositions.join(" | ");
  const achievementsHtml = t.keyAchievements.map((item) => `<li>${item}</li>`).join("");

  return `<!DOCTYPE html>
<html lang="${langLabel}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.pageTitle}</title>
  <style>
    :root { --text:#111; --muted:#555; --line:#d9d9d9; --accent:#0b63c8; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: "Segoe UI", Arial, sans-serif; color: var(--text); background:#fff; line-height:1.45; }
    .page { max-width: 950px; margin: 0 auto; padding: 24px; }
    h1 { margin: 0; font-size: 2rem; }
    h2 { margin: 22px 0 8px; font-size: 1.05rem; text-transform: uppercase; border-bottom:2px solid var(--line); padding-bottom:4px; }
    h3 { margin:0; font-size:1rem; }
    .subtitle { margin-top:4px; color: var(--accent); font-weight:600; }
    .contact { margin-top:10px; font-size:0.95rem; color: var(--muted); }
    .contact a { color: var(--accent); text-decoration:none; }
    .meta-line { color: var(--muted); font-size:0.92rem; margin:2px 0 6px; }
    .item { margin-bottom:14px; }
    ul { margin:6px 0 0 18px; padding:0; }
    li { margin-bottom:4px; }
    .grid { display:grid; grid-template-columns: 1fr 1fr; gap:20px; }
    .small { font-size:0.92rem; }
    .back-link {
      display: inline-block;
      padding: 8px 12px;
      border: 1px solid #0b63c8;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.92rem;
      margin-bottom: 8px;
    }
    @media (max-width: 800px) { .grid { grid-template-columns: 1fr; } }
    @media print {
      @page { margin: 1.2cm; size: A4; }
      .page { max-width: 100%; margin:0; padding:0; }
      a { color: #000; text-decoration: none; }
      .item { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <main class="page">
    <p class="small" style="margin: 0 0 10px 0;">
      <a class="back-link" href="${portfolioUrl}" target="_blank" rel="noopener noreferrer">
        ${language === "pt" ? "Voltar ao Portfólio" : "Back to Portfolio"}
      </a>
    </p>
    <header>
      <h1>${t.fullName}</h1>
      <p class="subtitle">${t.headline}</p>
      <p class="contact">
        ${t.contact.location} | ${t.contact.phone} |
        <a href="mailto:${t.contact.email}">${t.contact.email}</a> |
        <a href="${t.contact.website}" target="_blank" rel="noopener noreferrer">${t.contact.website}</a> |
        <a href="${t.contact.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="${t.contact.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </header>
    <section>
      <h2>${language === "pt" ? "Resumo Profissional" : "Professional Summary"}</h2>
      ${t.summary.map((line) => `<p>${line}</p>`).join("")}
      <p><strong>${language === "pt" ? "Objetivo:" : "Objective:"}</strong> ${t.objective}</p>
      <p><strong>Expertise:</strong> ${t.expertise}</p>
      <p><strong>${language === "pt" ? "Cargos-alvo:" : "Target Roles:"}</strong> ${targetRoles}</p>
      <p><strong>Keywords ATS:</strong> ${keywords}</p>
    </section>
    <section>
      <h2>${language === "pt" ? "Resultados e Destaques" : "Key Achievements"}</h2>
      <ul>${achievementsHtml}</ul>
    </section>
    <section>
      <h2>${t.experienceTitle}</h2>
      ${experienceHtml}
    </section>
    <section class="grid">
      <div>
        <h2>${t.educationTitle}</h2>
        <ul>${educationHtml}</ul>
      </div>
      <div>
        <h2>${t.languagesTitle}</h2>
        <ul>${languagesHtml}</ul>
      </div>
    </section>
    ${
      t.certifications.length > 0
        ? `<section><h2>${t.certificationsTitle}</h2><ul>${certificationsHtml}</ul></section>`
        : ""
    }
    <section>
      <h2>${t.skillsTitle}</h2>
      <p><strong>Database:</strong> ${t.skills.databases}</p>
      <p><strong>Languages:</strong> ${t.skills.languages}</p>
      <p><strong>DevOps:</strong> ${t.skills.devops}</p>
      <p><strong>Methodologies:</strong> ${t.skills.methodologies}</p>
    </section>
    <section>
      <h2>${t.coursesTitle}</h2>
      <ul>${featuredCoursesHtml}</ul>
      ${
        isAts
          ? ""
          : `<p class="small"><strong>${language === "pt" ? "Lista completa:" : "Full list:"}</strong></p><ul>${coursesHtml}</ul>`
      }
    </section>
  </main>
</body>
</html>`;
}

function createAtsText(language: Locale, mode: ResumeMode) {
  const t = cvData[language];
  const isAts = mode === "ats";
  const featuredCourses = t.courses.slice(0, 6);
  const lines: string[] = [];

  lines.push(t.fullName);
  lines.push(t.headline);
  lines.push("");
  lines.push(`CONTACT: ${t.contact.location} | ${t.contact.phone} | ${t.contact.email}`);
  lines.push(`LINKS: ${t.contact.website} | ${t.contact.linkedin} | ${t.contact.github}`);
  lines.push("");
  lines.push(`TARGET ROLES: ${t.targetPositions.join(" | ")}`);
  lines.push(`ATS KEYWORDS: ${t.atsKeywords.join(", ")}`);
  lines.push("");
  lines.push(language === "pt" ? "RESUMO PROFISSIONAL" : "PROFESSIONAL SUMMARY");
  t.summary.forEach((item) => lines.push(`- ${item}`));
  lines.push(`- ${language === "pt" ? "Objetivo" : "Objective"}: ${t.objective}`);
  lines.push(`- Expertise: ${t.expertise}`);
  lines.push("");
  lines.push(language === "pt" ? "RESULTADOS E DESTAQUES" : "KEY ACHIEVEMENTS");
  t.keyAchievements.forEach((item) => lines.push(`- ${item}`));
  lines.push("");
  lines.push(t.experienceTitle.toUpperCase());
  t.experience.forEach((job) => {
    lines.push(`${job.role} - ${job.company}`);
    lines.push(`${job.location} | ${job.period} | ${job.duration}`);
    (isAts ? job.bullets.slice(0, 3) : job.bullets).forEach((bullet) => lines.push(`- ${bullet}`));
    if (!isAts && job.details) lines.push(`- ${job.details}`);
    lines.push("");
  });
  lines.push(t.educationTitle.toUpperCase());
  t.education.forEach((edu) => lines.push(`- ${edu.title} (${edu.period})`));
  lines.push("");
  lines.push(t.languagesTitle.toUpperCase());
  t.languages.forEach((item) => lines.push(`- ${item}`));
  lines.push("");
  if (t.certifications.length > 0) {
    lines.push(t.certificationsTitle.toUpperCase());
    t.certifications.forEach((item) => lines.push(`- ${item}`));
    lines.push("");
  }
  lines.push(t.skillsTitle.toUpperCase());
  lines.push(`- Database: ${t.skills.databases}`);
  lines.push(`- Languages: ${t.skills.languages}`);
  lines.push(`- DevOps: ${t.skills.devops}`);
  lines.push(`- Methodologies: ${t.skills.methodologies}`);
  lines.push("");
  lines.push(t.coursesTitle.toUpperCase());
  (isAts ? featuredCourses : t.courses).forEach((course) => lines.push(`- ${course}`));

  return lines.join("\n");
}

export default function CurriculoPage() {
  const [language, setLanguage] = useState<Locale>("pt");
  const [mode, setMode] = useState<ResumeMode>("ats");
  const t = cvData[language];
  const htmlContent = useMemo(() => createResumeHtml(language, mode), [language, mode]);
  const atsContent = useMemo(() => createAtsText(language, mode), [language, mode]);
  const printableMarkup = useMemo(() => {
    const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/i);
    const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/i);
    const styles = styleMatch ? `<style>${styleMatch[1]}</style>` : "";
    const body = bodyMatch ? bodyMatch[1] : htmlContent;
    return `${styles}${body}`;
  }, [htmlContent]);

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `curriculo-bruno-${mode}-${language}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAts = () => {
    const blob = new Blob([atsContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `curriculo-bruno-${mode}-${language}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrintPdf = () => {
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.open();
    win.document.write(htmlContent);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 250);
  };

  return (
    <main className="tech-bg min-h-screen px-4 py-8 text-slate-100 md:px-8">
      <div className="scanline" aria-hidden />
      <div
        className="hidden print:block print:bg-white print:text-black"
        dangerouslySetInnerHTML={{ __html: printableMarkup }}
      />

      <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-6 shadow-2xl print:hidden">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-lg border border-cyan-300/40 px-4 py-2 text-sm transition hover:border-cyan-200"
            >
              {language === "pt" ? "Voltar ao Portfólio" : "Back to Portfolio"}
            </Link>
            <h1 className="text-2xl font-semibold text-cyan-100 md:text-3xl">{t.pageTitle}</h1>
          </div>
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="rounded-full border border-cyan-300/30 px-4 py-2 text-sm transition hover:border-cyan-300/80"
          >
            {t.cta.switchTo}
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={() => setMode("ats")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === "ats"
                ? "bg-cyan-500 text-slate-950"
                : "border border-cyan-300/40 text-cyan-100 hover:border-cyan-200"
            }`}
          >
            {language === "pt" ? "Currículo ATS (enxuto)" : "ATS Resume (compact)"}
          </button>
          <button
            onClick={() => setMode("full")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === "full"
                ? "bg-cyan-500 text-slate-950"
                : "border border-cyan-300/40 text-cyan-100 hover:border-cyan-200"
            }`}
          >
            {language === "pt" ? "Currículo Completo (detalhado)" : "Full Resume (detailed)"}
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={handleDownloadHtml}
            className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            {t.cta.generateHtml}
          </button>
          <button
            onClick={handleDownloadAts}
            className="rounded-lg border border-emerald-300/40 px-5 py-3 font-medium text-emerald-100 transition hover:border-emerald-200"
          >
            {language === "pt" ? "Baixar TXT (ATS)" : "Download TXT (ATS)"}
          </button>
          <button
            onClick={handlePrintPdf}
            className="rounded-lg border border-cyan-300/40 px-5 py-3 font-medium text-cyan-100 transition hover:border-cyan-200"
          >
            {t.cta.printPdf}
          </button>
        </div>

        <iframe
          title="curriculo-preview"
          className="h-[70vh] w-full rounded-xl border border-slate-700 bg-white"
          srcDoc={htmlContent}
        />
      </div>
    </main>
  );
}
