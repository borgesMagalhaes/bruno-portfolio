"use client";
import React, { useState } from "react";
import { translations } from "@/app/translations";// Ajuste o caminho
import "./globals.css";
import { FaDocker, FaLinkedin, FaFileAlt, FaInstagram, FaGithub } from "react-icons/fa";
import { Card } from "@/components/ui/card";

export default function Home() {
  // Estado para armazenar qual idioma está selecionado
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  // Função de tradução curta: "t" = translations[language]
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white flex flex-col items-center py-10 px-4">

      {/* Botoes para trocar de idioma */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setLanguage("pt")}
          className={`px-4 py-2 rounded ${language === "pt" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded ${language === "en" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          EN
        </button>
      </div>

      {/* HEADER */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-300 flex items-center justify-center gap-3 hover:text-blue-400 transition-colors duration-300">
          <FaDocker className="text-5xl text-blue-400" />
          {t.header.title}
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          {t.header.subtitle}
        </p>
      </header>

      {/* SOBRE MIM */}
      <section className="w-full max-w-4xl mb-8 space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              {t.about.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.about.content}
            </p>
          </div>
        </Card>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section className="w-full max-w-4xl mb-8 space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              {t.experience.title}
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4">
              {t.experience.items.map((job, idx) => (
                <li key={idx}>
                  <strong>{job.title}</strong> {job.period}
                  <p>{job.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>

      {/* FORMAÇÃO ACADÊMICA */}
      <section className="w-full max-w-4xl mb-8 space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              {t.academic.title}
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {t.academic.items.map((course, idx) => (
                <li key={idx}>
                  <strong>{course.title}</strong> {course.period}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>

      {/* CURSOS REALIZADOS */}
      <section className="w-full max-w-4xl mb-8 space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              {t.completedCourses.title}
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {t.completedCourses.items.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
          </div>
        </Card>
      </section>

      {/* CURSOS DESEJADOS */}
      <section className="w-full max-w-4xl mb-8 space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              {t.desiredCourses.title}
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {t.desiredCourses.items.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
          </div>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 mt-10 bg-gray-900 text-gray-300 border-t border-gray-700">
        <div className="flex justify-center gap-6 mb-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bruno-b-magalhaes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-blue-300 hover:text-blue-500" />
          </a>
          {/* Lattes */}
          <a
            href="http://lattes.cnpq.br/0321021721183148"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt className="text-4xl text-gray-200 hover:text-gray-500" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/borges_magalhaes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-4xl text-pink-400 hover:text-pink-600" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/borgesMagalhaes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl text-gray-200 hover:text-gray-500" />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Bruno Magalhães.{" "}
          {t.footer.rights}
        </p>
      </footer>
    </div>
  );
}