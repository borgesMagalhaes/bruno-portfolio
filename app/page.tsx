import React from "react";
import "./globals.css"; // Certifique-se de que o fadeIn está definido aqui
import { FaDocker, FaLinkedin, FaFileAlt, FaInstagram, FaGithub } from "react-icons/fa";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white flex flex-col items-center py-10 px-4">
      {/* HEADER */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-300 flex items-center justify-center gap-3 hover:text-blue-400 transition-colors duration-300">
          <FaDocker className="text-5xl text-blue-400" />
          Bruno Borges Magalhães
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          Especialista em
          <span className="text-blue-300 font-semibold"> .NET</span>,
          <span className="text-blue-300 font-semibold"> DevOps</span> &
          <span className="text-blue-300 font-semibold"> Segurança</span>
        </p>
      </header>

      {/* SOBRE MIM */}
      <section className="w-full max-w-4xl mb-8 fade-in-section space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              Sobre Mim
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Com mais de uma década de experiência em Tecnologia da Informação, 
              sou especialista em desenvolvimento de software e arquitetura de sistemas.
              Atuo na concepção e entrega de soluções escaláveis e de alto desempenho, 
              sempre comprometido com inovação e excelência. Estou constantemente 
              explorando novas tecnologias e metodologias para impulsionar a 
              transformação digital e entregar soluções robustas e eficientes.
            </p>
          </div>
        </Card>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section className="w-full max-w-4xl mb-8 fade-in-section space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              Experiência Profissional
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4">
              <li>
                <strong>Linuxell Informática e Serviços LTDA</strong> - Analista de Sistema Sênior (2023 - Atual)
                <p>
                  Arquiteto de Software, responsável pela definição e implementação de
                  soluções tecnológicas para projetos governamentais, utilizando .NET,
                  SQL Server e metodologias ágeis.
                </p>
              </li>
              <li>
                <strong>LAMPP-IT SOLUTIONS</strong> - Arquiteto de Software (2022 - 2023)
                <p>
                  Coordenação de desenvolvimento em projetos para o governo do Estado do Maranhão,
                  utilizando Power Designer, Trello e metodologias ágeis Scrum/Kanban.
                </p>
              </li>
              <li>
                <strong>Secretaria Municipal de Saúde</strong> - Supervisor de Banco de Dados SQL Server (2022 - 2024)
                <p>
                  Liderança e otimização das operações do banco de dados, garantindo integridade,
                  segurança e alta disponibilidade dos dados.
                </p>
              </li>
              <li>
                <strong>Secretaria de Estado da Educação do Maranhão</strong> - Supervisor de Desenvolvimento de Sistemas (2019 - 2022)
                <p>
                  Supervisão de equipes de desenvolvimento e implantação de soluções tecnológicas
                  para a educação estadual.
                </p>
              </li>
              <li>
                <strong>Secretaria de Estado da Educação</strong> - Analista de Sistemas Sênior (2011 - 2019)
                <p>
                  Desenvolvimento e manutenção de sistemas internos, implementação de integrações
                  entre plataformas educacionais.
                </p>
              </li>
              <li>
                <strong>VECTRA Consultoria e Serviços</strong> - Técnico de Infraestrutura (2009 - 2011)
                <p>
                  Administração e configuração de redes LAN/WAN, gerenciamento de SLA e configuração
                  de roteadores CISCO e Huawei.
                </p>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* FORMAÇÃO ACADÊMICA */}
      <section className="w-full max-w-4xl mb-8 fade-in-section space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              Formação Acadêmica
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Especialização em Ciência de Dados: Big Data e Analytics</strong> - UNYLEYA (2021 - 2022)
              </li>
              <li>
                <strong>Especialização em Análise e Projeto de Sistemas</strong> - UFMA (2014 - 2016)
              </li>
              <li>
                <strong>Especialização em Planejamento e Implementação de Redes LAN e WAN</strong> - UEMA (2013 - 2014)
              </li>
              <li>
                <strong>Bacharelado em Sistemas de Informação</strong> - UniCeuma (2005 - 2011)
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* CURSOS REALIZADOS */}
      <section className="w-full max-w-4xl mb-8 fade-in-section space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              Cursos Realizados
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>CLARIFY – PYTHON PARA ANÁLISE DE DADOS (2025)</li>
              <li>ROCKETSEAT – CONTAINERS COM DOCKER E DOCKER COMPOSE (2025)</li>
              <li>ROCKETSEAT – FUNDAMENTOS DA CULTURA DEVOPS (2025)</li>
              <li>CLARIFY – IMERSÃO FRONT - END 2º EDIÇÃO (2025)</li>
              <li>CLARIFY – SQL (2024)</li>
              <li>CLARIFY – Programação em Python (2024)</li>
              <li>CLARIFY – Microsoft Power BI (2024)</li>
              <li>TOTVS Backoffice – Desenvolvimento de Workflows (2024)</li>
              <li>TOTVS Backoffice – Fluig Plataforma (2024)</li>
              <li>TOTVS Backoffice (Linha RM) - Consultas SQL + TOTVS Inteligência de Negócios (2023)</li>
              <li>Modelagem de Banco de Dados Relacional - Alura (2022)</li>
              <li>GIT e GitHub - Estratégias de Ramificação e Pull Requests - Alura (2020)</li>
              <li>Modelagem de Banco de Dados Relacional: Entidades, Relacionamentos e Atributos - Alura (2020)</li>
              <li>Big Data e Aplicações em Python - UFMA (2014)</li>
              <li>CCNA 4 - Desenvolvimento e Projetos de Rede - SENAI (2014)</li>
              <li>MC4 - Mobile Image Processing (com Android) - UFMA (2014)</li>
              <li>MC5 - Big Data: Conceitos e Aplicações em Python - UFMA (2014)</li>
              <li>Curso de ASP.NET - Ka Solution Tecnologia (2011)</li>
              <li>Programador de Microcomputador (Módulo I e II) - SENAC (2007)</li>
              <li>Formação Linux - Administrador de Sistema - Conecta (2011)</li>
            </ul>
          </div>
        </Card>
      </section>

      {/* CURSOS DESEJADOS */}
      <section className="w-full max-w-4xl mb-8 fade-in-section space-y-6">
        <Card className="shadow-lg bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-400 border-b-2 border-blue-500 pb-2">
              Cursos Desejados
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Certified Kubernetes Administrator (CKA)</li>
              <li>Microsoft Certified: Azure Solutions Architect Expert</li>
              <li>Google Cloud Professional DevOps Engineer</li>
              <li>Machine Learning Engineer - DeepLearning.AI</li>
            </ul>
          </div>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 mt-10 bg-gray-900 text-gray-300 border-t border-gray-700">
  <div className="flex justify-center gap-6 mb-4">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/bruno-magalhaes-2b878a2a/"
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

  <p>&copy; {new Date().getFullYear()} Bruno Magalhães. Todos os direitos reservados.</p>
</footer>


    </div>
  );
}
