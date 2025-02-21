import React from "react";
import { FaLinkedin, FaFileAlt, FaInstagram } from "react-icons/fa";
import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

// "use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white flex flex-col items-center py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-300">Bruno Magalhães</h1>
        <p className="text-xl text-gray-200">Especialista em .NET, DevOps & Segurança</p>
      </header>
      
      <section className="w-full max-w-4xl">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Sobre Mim</h2>
            <p className="text-gray-200">
              Com mais de uma década de experiência em Tecnologia da Informação, sou especialista em desenvolvimento de software e arquitetura de sistemas, atuando na concepção e entrega de soluções escaláveis e de alto desempenho.
              Minha expertise abrange o ecossistema .NET, incluindo .NET Core e C#, além de administração e otimização de bancos de dados SQL Server. Trabalho com DevOps, Integração Contínua/Entrega Contínua (CI/CD) e adoção de práticas ágeis para garantir automação, segurança e eficiência operacional.
              Comprometido com inovação e excelência, estou sempre explorando novas tecnologias e metodologias para impulsionar a transformação digital e a entrega de soluções robustas e eficientes.
            </p>
          </div>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Experiência Profissional</h2>
            <ul className="list-disc list-inside text-gray-200 mt-2">
              <li>
                <strong>Linuxell Informática e Serviços LTDA</strong> - Analista de Sistema Sênior (2023 - Atual)
                <p>Responsável pela análise e desenvolvimento de soluções tecnológicas para projetos governamentais, aplicando boas práticas de engenharia de software e metodologias ágeis.</p>
              </li>
              <li>
                <strong>LAMPP-IT SOLUTIONS</strong> - Arquiteto de Software (2022 - 2023)
                <p>Planejamento e implementação de arquiteturas de software escaláveis, modelagem de dados e integração de sistemas complexos para o setor público.</p>
              </li>
              <li>
                <strong>Secretaria Municipal de Saúde</strong> - Supervisor de Banco de Dados SQL Server (2022 - 2024)
                <p>Gerenciamento e otimização de bancos de dados, garantindo segurança e alta disponibilidade, além de liderar a equipe de administração de dados.</p>
              </li>
              <li>
                <strong>Secretaria de Estado da Educação do Maranhão</strong> - Supervisor de Desenvolvimento de Sistemas (2019 - 2022)
                <p>Supervisão de times de desenvolvimento, coordenação de projetos estratégicos e implantação de sistemas críticos para a educação estadual.</p>
              </li>
              <li>
                <strong>Secretaria de Estado da Educação</strong> - Analista de Sistemas Sênior (2011 - 2019)
                <p>Desenvolvimento e manutenção de sistemas internos, implementação de integrações entre plataformas educacionais e suporte a infraestrutura tecnológica.</p>
              </li>
              <li>
                <strong>VECTRA Consultoria e Serviços</strong> - Técnico de Infraestrutura (2009 - 2011)
                <p>Administração e configuração de redes, suporte técnico e gerenciamento de SLA em ambientes críticos.</p>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Formação Acadêmica</h2>
            <ul className="list-disc list-inside text-gray-200 mt-2">
              <li><strong>Especialização em Ciência de Dados: Big Data e Analytics</strong> - UNYLEYA (2021 - 2022)</li>
              <li><strong>Especialização em Análise e Projeto de Sistemas</strong> - Universidade Federal do Maranhão - UFMA (2014 - 2016)</li>
              <li><strong>Especialização em Planejamento e Implementação de Redes LAN e WAN</strong> - Universidade Estadual do Maranhão - UEMA (2013 - 2014)</li>
              <li><strong>Bacharelado em Sistemas de Informação</strong> - UniCeuma (2005 - 2011)</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">Certificações Previstas</h2>
            <ul className="list-disc list-inside text-gray-200 mt-2">
              <li>Microsoft Certified: Azure Solutions Architect Expert</li>
              <li>Certified Kubernetes Administrator (CKA)</li>
              <li>Amazon AWS Certified Solutions Architect</li>
              <li>Microsoft Certified: DevOps Engineer Expert</li>
              <li>Google Cloud Professional Cloud Architect</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-8">
        <Card className="shadow-lg bg-gray-800 rounded-lg overflow-hidden"> 
          <div className="p-6 flex justify-center gap-6">
            <Link href="https://www.linkedin.com/in/bruno-magalhaes-2b878a2a/" target="_blank">
              <FaLinkedin className="text-4xl text-blue-300 hover:text-blue-600" />
            </Link>
            <Link href="http://lattes.cnpq.br/0321021721183148" target="_blank">
              <FaFileAlt className="text-4xl text-gray-200 hover:text-gray-600" />
            </Link>
            <Link href="https://www.instagram.com/bruno_magalhaes" target="_blank">
              <FaInstagram className="text-4xl text-pink-400 hover:text-pink-700" />
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
