import React from "react";
import { FaDocker } from "react-icons/fa";
import { Card } from "@/components/ui/card";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white flex flex-col items-center py-10 px-4 animate-fade-in">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-300 flex items-center justify-center gap-3">
          <FaDocker className="text-5xl text-blue-400" /> Bruno Magalhães
        </h1>
        <p className="text-xl text-white">Especialista em .NET, DevOps & Segurança</p>
      </header>
      
      <section className="w-full max-w-4xl">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Sobre Mim</h2>
            <p className="text-white">
              Com mais de uma década de experiência em Tecnologia da Informação, sou especialista em desenvolvimento de software e arquitetura de sistemas, atuando na concepção e entrega de soluções escaláveis e de alto desempenho.
              Comprometido com inovação e excelência, estou sempre explorando novas tecnologias e metodologias para impulsionar a transformação digital e a entrega de soluções robustas e eficientes.
            </p>
          </div>
        </Card>
      </section>
      
      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Experiência Profissional</h2>
            <p className="text-white"><ul className='list-disc list-inside text-white mt-2'>
              <li><strong>Linuxell Informática e Serviços LTDA</strong> - Analista de Sistema Sênior (2023 - Atual)
                <p>Arquiteto de Software, responsável pela definição e implementação de soluções tecnológicas para projetos governamentais, utilizando .NET, SQL Server e metodologias ágeis.</p>
              </li>
              <li><strong>LAMPP-IT SOLUTIONS</strong> - Arquiteto de Software (2022 - 2023)
                <p>Coordenação de desenvolvimento em projetos para o governo do Estado do Maranhão, utilizando Power Designer, Trello e metodologias ágeis Scrum/Kanban.</p>
              </li>
              <li><strong>Secretaria Municipal de Saúde</strong> - Supervisor de Banco de Dados SQL Server (2022 - 2024)
                <p>Liderança e otimização das operações do banco de dados, garantindo integridade, segurança e alta disponibilidade dos dados.</p>
              </li>
              <li><strong>Secretaria de Estado da Educação do Maranhão</strong> - Supervisor de Desenvolvimento de Sistemas (2019 - 2022)
                <p>Supervisão de equipes de desenvolvimento e implantação de soluções tecnológicas para a educação estadual.</p>
              </li>
              <li><strong>Secretaria de Estado da Educação</strong> - Analista de Sistemas Sênior (2011 - 2019)
                <p>Desenvolvimento e manutenção de sistemas internos, implementação de integrações entre plataformas educacionais.</p>
              </li>
              <li><strong>VECTRA Consultoria e Serviços</strong> - Técnico de Infraestrutura (2009 - 2011)
                <p>Administração e configuração de redes LAN/WAN, gerenciamento de SLA e configuração de roteadores CISCO e Huawei.</p>
              </li>
            </ul></p>
          </div>
        </Card>
      </section>
      
      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Formação Acadêmica</h2>
            <p className="text-white"><ul className='list-disc list-inside text-white mt-2'>
              <li><strong>Especialização em Ciência de Dados: Big Data e Analytics</strong> - UNYLEYA (2021 - 2022)</li>
              <li><strong>Especialização em Análise e Projeto de Sistemas</strong> - Universidade Federal do Maranhão - UFMA (2014 - 2016)</li>
              <li><strong>Especialização em Planejamento e Implementação de Redes LAN e WAN</strong> - Universidade Estadual do Maranhão - UEMA (2013 - 2014)</li>
              <li><strong>Bacharelado em Sistemas de Informação</strong> - UniCeuma (2005 - 2011)</li>
            </ul></p>
          </div>
        </Card>
      </section>
      
      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Cursos Realizados</h2>
            <ul className="list-disc list-inside text-white mt-2">
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

      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Cursos Desejados</h2>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Certified Kubernetes Administrator (CKA)</li>
              <li>Microsoft Certified: Azure Solutions Architect Expert</li>
              <li>Google Cloud Professional DevOps Engineer</li>
              <li>Machine Learning Engineer - DeepLearning.AI</li>
            </ul>
          </div>
        </Card>
      </section>
      
      <footer className="w-full text-center py-6 mt-10 bg-gray-900 text-white">
        <p>&copy; {new Date().getFullYear()} Bruno Magalhães. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
