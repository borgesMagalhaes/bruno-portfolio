export type Locale = "pt" | "en";

export type CvJob = {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  bullets: string[];
  details?: string;
};

export type CvEducation = {
  title: string;
  period: string;
};

export type CvContent = {
  pageTitle: string;
  fullName: string;
  headline: string;
  targetPositions: string[];
  atsKeywords: string[];
  keyAchievements: string[];
  contact: {
    location: string;
    phone: string;
    email: string;
    website: string;
    linkedin: string;
    github: string;
  };
  summary: string[];
  objective: string;
  expertise: string;
  experienceTitle: string;
  experience: CvJob[];
  educationTitle: string;
  education: CvEducation[];
  certificationsTitle: string;
  certifications: string[];
  languagesTitle: string;
  languages: string[];
  skillsTitle: string;
  skills: {
    databases: string;
    languages: string;
    devops: string;
    methodologies: string;
  };
  coursesTitle: string;
  courses: string[];
  cta: {
    viewResume: string;
    generateHtml: string;
    printPdf: string;
    switchTo: string;
  };
  footerRights: string;
};

export const cvData: Record<Locale, CvContent> = {
  pt: {
    pageTitle: "Bruno Magalhães - Currículo",
    fullName: "Bruno Magalhães",
    headline: "Arquiteto de Software & Especialista em Banco de Dados",
    targetPositions: [
      "Arquiteto de Software .NET",
      "Líder Técnico",
      "Especialista SQL Server / DBA",
    ],
    atsKeywords: [
      ".NET",
      "C#",
      "ASP.NET",
      "SQL Server",
      "T-SQL",
      "DBA",
      "APIs REST",
      "Arquitetura de Software",
      "Performance Tuning",
      "Backup e Recovery",
      "Always On",
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Scrum",
      "Kanban",
      "React",
      "Python",
    ],
    keyAchievements: [
      "Liderança de arquitetura .NET em projetos governamentais de missão crítica.",
      "Otimização de consultas e índices SQL Server com foco em estabilidade e desempenho.",
      "Implementação de boas práticas de engenharia, revisão técnica e padronização.",
      "Coordenação de times ágeis com entregas contínuas e alinhamento técnico-negócio.",
    ],
    contact: {
      location: "São Luís, MA",
      phone: "+55 98 98814-8846",
      email: "borges.magalhaes@gmail.com",
      website: "https://brunomagalhaes.dev.br/",
      linkedin: "https://www.linkedin.com/in/bruno-b-magalhaes/",
      github: "https://github.com/borgesMagalhaes",
    },
    summary: [
      "Arquiteto de Software e Especialista em Banco de Dados com mais de 10 anos de experiência em arquitetura, sustentação e evolução de sistemas críticos no setor público e privado.",
    ],
    objective:
      "Arquiteto de Software .NET / Líder Técnico e Especialista em Banco de Dados SQL Server / DBA.",
    expertise:
      ".NET Full Stack, APIs RESTful, SQL Server, T-SQL, performance tuning, backup e recovery, segurança de dados, liderança ágil com Scrum e Kanban.",
    experienceTitle: "Experiência Profissional",
    experience: [
      {
        role: "Arquiteto de Software",
        company: "LAMPP-IT SOLUTIONS",
        location: "São Luís/MA",
        period: "Fev 2022 - Fev 2024",
        duration: "2 anos",
        bullets: [
          "Liderei a arquitetura de software para projetos governamentais em .NET com foco em escalabilidade e manutenção.",
          "Coordenei equipes com Scrum e Kanban, sustentando fluxo contínuo e alinhamento técnico.",
          "Modelei dados e estratégias de banco com Power Designer para apoiar decisões de arquitetura.",
          "Otimizei aplicações e consultas SQL para maior desempenho e estabilidade.",
          "Implantei boas práticas de engenharia, padronização de código e revisão técnica.",
        ],
      },
      {
        role: "Supervisor de Banco de Dados - SQL Server",
        company: "Secretaria Municipal de Saúde",
        location: "São Luís/MA",
        period: "Fev 2022 - Fev 2024",
        duration: "2 anos",
        bullets: [
          "Supervisionei a equipe de DBAs em operações de missão crítica.",
          "Conduzi otimizações de performance com ajustes de índices, planos e consultas.",
          "Implementei e acompanhei políticas de backup e recovery.",
          "Administrei segurança e integridade com permissões e criptografia.",
          "Atuei em incidentes críticos em ambiente operacional 24x7.",
        ],
        details:
          "Atividades DBA: instalação e atualização de instâncias SQL Server; monitoramento com DMVs e Extended Events; Always On Availability Groups; automação com T-SQL; migrações; jobs do SQL Server Agent.",
      },
      {
        role: "Supervisor de Desenvolvimento de Sistemas",
        company: "Secretaria de Estado da Educação do Maranhão",
        location: "São Luís/MA",
        period: "Nov 2019 - Fev 2022",
        duration: "2 anos e 4 meses",
        bullets: [
          "Gerenciei equipe de desenvolvimento e implementação de web services SOAP e REST.",
          "Atuei em análise, desenho de solução e desenvolvimento Full Stack com .NET.",
          "Coordenei projetos de integração entre sistemas e otimizações de banco de dados.",
          "Implantei e mantive ambientes de produção com foco em estabilidade.",
        ],
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Secretaria de Estado da Educação do Maranhão",
        location: "São Luís/MA",
        period: "Mar 2011 - Dez 2019",
        duration: "8 anos e 9 meses",
        bullets: [
          "Desenvolvi soluções Full Stack com VB.NET, Crystal Reports e SQL Server.",
          "Projetei e otimizei stored procedures, functions e views.",
          "Elaborei relatórios corporativos e atuei na evolução de sistemas legados.",
          "Prestei suporte técnico especializado para usuários e áreas de negócio.",
        ],
      },
    ],
    educationTitle: "Formação Acadêmica",
    education: [
      {
        title: "Especialização em Ciência de Dados: Big Data e Analytics - UNYLEYA",
        period: "2021 - 2022",
      },
      {
        title: "Especialização em Análise e Projeto de Sistemas - UFMA",
        period: "2014 - 2016",
      },
      {
        title: "Especialização em Planejamento e Implementação de Redes LAN e WAN - UEMA",
        period: "2013 - 2014",
      },
      {
        title: "Bacharel em Sistemas de Informação - UniCeuma",
        period: "2005 - 2011",
      },
    ],
    certificationsTitle: "Certificações",
    certifications: [],
    languagesTitle: "Idiomas",
    languages: [
      "Português: Nativo",
      "Inglês: Fluente (leitura, escrita e conversação)",
    ],
    skillsTitle: "Habilidades Técnicas",
    skills: {
      databases:
        "SQL Server, T-SQL, Performance Tuning, Backup & Recovery, Always On, Replication, SSIS, MySQL.",
      languages:
        "C#, VB.NET, ASP.NET, HTML, CSS, JavaScript, Python, Flask, React, Kotlin.",
      devops:
        "Docker, CI/CD, Azure DevOps, Visual Studio, SSMS, Power Designer, Git, GitHub.",
      methodologies: "Scrum, Kanban, Modelagem de Dados, Arquitetura de Software.",
    },
    coursesTitle: "Cursos Relevantes",
    courses: [
      "CLARIFY - Python para Análise de Dados (2025)",
      "ROCKETSEAT - Containers com Docker e Docker Compose (2025)",
      "ROCKETSEAT - Fundamentos da Cultura DevOps (2025)",
      "CLARIFY - Imersão Front-end 2ª Edição (2025)",
      "CLARIFY - SQL (2024)",
      "CLARIFY - Programação em Python (2024)",
      "CLARIFY - Microsoft Power BI (2024)",
      "TOTVS Backoffice - Desenvolvimento de Workflows (2024)",
      "TOTVS Backoffice - Fluig Plataforma (2024)",
      "TOTVS Backoffice (Linha RM) - Consultas SQL + TOTVS Inteligência de Negócios (2023)",
      "Alura - Modelagem de Banco de Dados Relacional (2022)",
      "Alura - Estratégias de Ramificação e Pull Requests com Git e GitHub (2020)",
      "Alura - Modelagem de Banco de Dados Relacional: Entidades, Relacionamentos e Atributos (2020)",
      "UFMA - Big Data e Aplicações em Python (2014)",
      "SENAI - CCNA 4: Desenvolvimento e Projetos de Rede (2014)",
      "UFMA - MC4: Mobile Image Processing com Android (2014)",
      "UFMA - MC5: Big Data: Conceitos e Aplicações em Python (2014)",
      "Ka Solution Tecnologia - Curso de ASP.NET (2011)",
      "Conecta - Formação Linux Administrador de Sistemas (2011)",
      "SENAC - Programador de Microcomputador (Módulos I e II) (2007)",
    ],
    cta: {
      viewResume: "Ver currículo",
      generateHtml: "Gerar currículo HTML",
      printPdf: "Imprimir / PDF",
      switchTo: "EN",
    },
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    pageTitle: "Bruno Magalhães - Resume",
    fullName: "Bruno Magalhães",
    headline: "Software Architect & Database Specialist",
    targetPositions: [
      ".NET Software Architect",
      "Technical Lead",
      "SQL Server Specialist / DBA",
    ],
    atsKeywords: [
      ".NET",
      "C#",
      "ASP.NET",
      "SQL Server",
      "T-SQL",
      "DBA",
      "REST APIs",
      "Software Architecture",
      "Performance Tuning",
      "Backup and Recovery",
      "Always On",
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Scrum",
      "Kanban",
      "React",
      "Python",
    ],
    keyAchievements: [
      "Led .NET architecture initiatives in mission-critical government projects.",
      "Improved SQL Server performance through query and indexing optimization.",
      "Implemented engineering standards, code quality practices, and technical reviews.",
      "Coordinated agile teams with continuous delivery and technical-business alignment.",
    ],
    contact: {
      location: "São Luís, MA, Brazil",
      phone: "+55 98 98814-8846",
      email: "borges.magalhaes@gmail.com",
      website: "https://brunomagalhaes.dev.br/",
      linkedin: "https://www.linkedin.com/in/bruno-b-magalhaes/",
      github: "https://github.com/borgesMagalhaes",
    },
    summary: [
      "Software Architect and Database Specialist with 10+ years of experience designing, supporting, and evolving critical systems in both public and private sectors.",
    ],
    objective:
      ".NET Software Architect / Technical Lead and SQL Server Database Specialist / DBA.",
    expertise:
      ".NET Full Stack, RESTful APIs, SQL Server, T-SQL, performance tuning, backup and recovery, data security, agile leadership with Scrum and Kanban.",
    experienceTitle: "Professional Experience",
    experience: [
      {
        role: "Software Architect",
        company: "LAMPP-IT SOLUTIONS",
        location: "São Luís/MA",
        period: "Feb 2022 - Feb 2024",
        duration: "2 years",
        bullets: [
          "Led software architecture for government projects in .NET with focus on scalability and maintainability.",
          "Coordinated teams with Scrum and Kanban, sustaining delivery flow and technical alignment.",
          "Modeled data structures and database strategies with Power Designer.",
          "Optimized applications and SQL queries for higher performance and stability.",
          "Implemented engineering standards, code quality practices, and technical reviews.",
        ],
      },
      {
        role: "Database Supervisor - SQL Server",
        company: "Municipal Health Department",
        location: "São Luís/MA",
        period: "Feb 2022 - Feb 2024",
        duration: "2 years",
        bullets: [
          "Supervised DBA team in mission-critical operations.",
          "Led performance optimizations with indexing, execution plans, and query tuning.",
          "Implemented and monitored backup and recovery policies.",
          "Managed data security and integrity with access control and encryption.",
          "Handled critical incidents in 24x7 operational environments.",
        ],
      },
      {
        role: "Systems Development Supervisor",
        company: "State Department of Education of Maranhão",
        location: "São Luís/MA",
        period: "Nov 2019 - Feb 2022",
        duration: "2 years and 4 months",
        bullets: [
          "Managed software teams and SOAP/REST web service implementations.",
          "Worked on analysis, solution design, and full-stack .NET development.",
          "Coordinated system integration projects and database optimizations.",
          "Maintained production environments with focus on reliability.",
        ],
      },
      {
        role: "Senior Systems Analyst",
        company: "State Department of Education of Maranhão",
        location: "São Luís/MA",
        period: "Mar 2011 - Dec 2019",
        duration: "8 years and 9 months",
        bullets: [
          "Built full-stack solutions with VB.NET, Crystal Reports, and SQL Server.",
          "Designed and optimized stored procedures, functions, and views.",
          "Created corporate reports and evolved legacy systems.",
          "Provided specialized support for users and business teams.",
        ],
      },
    ],
    educationTitle: "Academic Background",
    education: [
      {
        title: "Specialization in Data Science: Big Data and Analytics - UNYLEYA",
        period: "2021 - 2022",
      },
      {
        title: "Specialization in Systems Analysis and Design - UFMA",
        period: "2014 - 2016",
      },
      {
        title: "Specialization in Planning and Implementation of LAN/WAN Networks - UEMA",
        period: "2013 - 2014",
      },
      {
        title: "Bachelor in Information Systems - UniCeuma",
        period: "2005 - 2011",
      },
    ],
    certificationsTitle: "Certifications",
    certifications: [],
    languagesTitle: "Languages",
    languages: [
      "Portuguese: Native",
      "English: Fluent (reading, writing, and speaking)",
    ],
    skillsTitle: "Technical Skills",
    skills: {
      databases:
        "SQL Server, T-SQL, Performance Tuning, Backup & Recovery, Always On, Replication, SSIS, MySQL.",
      languages:
        "C#, VB.NET, ASP.NET, HTML, CSS, JavaScript, Python, Flask, React, Kotlin.",
      devops:
        "Docker, CI/CD, Azure DevOps, Visual Studio, SSMS, Power Designer, Git, GitHub.",
      methodologies: "Scrum, Kanban, Data Modeling, Software Architecture.",
    },
    coursesTitle: "Relevant Courses",
    courses: [
      "CLARIFY - Python for Data Analysis (2025)",
      "ROCKETSEAT - Containers with Docker and Docker Compose (2025)",
      "ROCKETSEAT - DevOps Culture Fundamentals (2025)",
      "CLARIFY - Front-end Immersion 2nd Edition (2025)",
      "CLARIFY - SQL (2024)",
      "CLARIFY - Python Programming (2024)",
      "CLARIFY - Microsoft Power BI (2024)",
      "TOTVS Backoffice - Workflow Development (2024)",
      "TOTVS Backoffice - Fluig Platform (2024)",
      "TOTVS Backoffice (RM Line) - SQL Queries + TOTVS Business Intelligence (2023)",
      "Alura - Relational Database Modeling (2022)",
      "Alura - Branching Strategies and Pull Requests with Git and GitHub (2020)",
      "Alura - Relational Database Modeling: Entities, Relationships, and Attributes (2020)",
      "UFMA - Big Data and Python Applications (2014)",
      "SENAI - CCNA 4: Network Development and Projects (2014)",
      "UFMA - MC4: Mobile Image Processing with Android (2014)",
      "UFMA - MC5: Big Data Concepts and Applications in Python (2014)",
      "Ka Solution Tecnologia - ASP.NET Course (2011)",
      "Conecta - Linux System Administrator Training (2011)",
      "SENAC - Microcomputer Programmer (Modules I and II) (2007)",
    ],
    cta: {
      viewResume: "View resume",
      generateHtml: "Generate HTML resume",
      printPdf: "Print / PDF",
      switchTo: "PT",
    },
    footerRights: "All rights reserved.",
  },
};
