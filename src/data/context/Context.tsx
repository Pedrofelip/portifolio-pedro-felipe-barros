"use client";

import { createContext, ReactNode, useState } from "react";

interface Certificate {
  id: number;
  image: string[];
  tags: string[];
  name: string;
  institution: string;
  description: string;
}

interface Skill {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  url_rep?: string;
  url_site?: string;
}

interface AppContextType {
  certificates: Certificate[];
  skills: Skill[];
  skills_sl: Skill[];
  projects: Project[];
}

interface ContextProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContextType>({} as AppContextType);
export default Context;

export function ContextProvider({ children }: ContextProviderProps) {
  const [certificates] = useState([
    {
      id: 10,
      image: ["./certificados/Diploma tecnico ads.jpeg"],
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
        "Csharp",
        "Entity framework",
        "SQL",
        "GIT",
        "GitHub",
      ],
      name: "Diploma Técnico em Desenvolvimento de Sistemas",
      institution: "SENAI",
      description: "",
    },
    {
      id: 11,
      image: ["./certificados/Certificado desenhistas paginas web.jpeg"],
      tags: ["HTML", "CSS", "JavaScript", "React", "Figma"],
      name: "Certificado de Qualificação Profissional em Desenhista de Páginas para Web",
      institution: "SENAI",
      description: "",
    },
    {
      id: 1,
      image: ["./certificados/Certificado Big Data.png"],
      tags: ["Python", "SQL"],
      name: "Big Data & Analytics",
      institution: "FIAP",
      description: "",
    },
    {
      id: 2,
      image: [
        "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/128046/745f3f06aa9f93e303c2230d996806a0/certificado.png",
      ],
      tags: ["SQL", "PL/SQL"],
      name: "Banco de Dados Oracle",
      institution: "FIAP",
      description: "",
    },
    {
      id: 3,
      image: ["./certificados/Certificado IA e IoT.png"],
      tags: ["Arduino", "Node-RED", "IBM Watson", "Python "],
      name: "Certificado de Qualificação Profissional em Estratégia e Inovação Tecnológica com aplicações em IA e IoT",
      institution: "FIAP",
      description: "",
    },
    {
      id: 4,
      image: ["./certificados/Designer Web 2.0.png"],
      tags: [
        "JavaScript",
        "React",
        "Next.js",
        "Vite",
        "Figma",
        "CSS",
        "Tailwind",
      ],
      name: "Certificado de Qualificação Profissional em Desenvolvimento e Designer Web 2.0",
      institution: "FIAP",
      description: "",
    },
    {
      id: 5,
      image: ["./certificados/Certificado aplicacoes moveis.png"],
      tags: ["React Native", "Kotlin"],
      name: "Certificado de Qualificação Profissional em Desenvolvimento de Aplicações Móveis",
      institution: "FIAP",
      description: "",
    },
    {
      id: 6,
      image: ["./certificados/Certificado analise de sistemas.png"],
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      name: "Certificado de Qualificação Profissional em Análise de Sistemas e Prototipação Web",
      institution: "FIAP",
      description: "",
    },
    // {
    //   id: 7,
    //   image: [
    //     "./certificados/",
    //   ],
    //   tags: ["Angular", "Java", "Python"],
    //   name: "JavaScript do básico ao avançado (c/ Node.js e projetos)",
    //   institution: "Udemy",
    //   description:
    //     "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
    // },
    // {
    //   id: 8,
    //   image: [
    //     "./certificados/",
    //   ],
    //   tags: ["Angular", "Java", "Python"],
    //   name: "TypeScript do básico ao avançado (c/ React, Express)",
    //   institution: "Udemy",
    //   description:
    //     "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
    // },
    {
      id: 9,
      image: ["./certificados/Introducao AWS.png"],
      tags: ["Cloud Service", "AWS"],
      name: "Curso 1 - Introdução à Computação em Nuvem e AWS",
      institution: "Darede Academy",
      description: "",
    },
  ]);

  const [skills] = useState([
    {
      id: 1,
      image:
        "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      title: "HTML5",
      description:
        "Linguagem de marcação usada para estruturar o conteúdo de páginas web, como textos, imagens e links.",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      title: "CSS",
      description:
        "Linguagem usada para estilizar páginas web, definindo cores, layouts, fontes e responsividade.",
    },
    {
      id: 3,
      image:
        "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      title: "Javascript",
      description:
        "Linguagem de programação que permite criar interatividade e dinamismo em páginas web.",
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      title: "Typescript",
      description:
        "Superset do JavaScript que adiciona tipagem estática, tornando o código mais seguro e fácil de manter.",
    },
    {
      id: 5,
      image:
        "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png",
      title: "React",
      description:
        "Biblioteca JavaScript para construir interfaces de usuário de forma rápida, modular e reativa.",
    },
    {
      id: 6,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226070.png",
      title: "Angular",
      description:
        "Framework JavaScript para criar aplicações web robustas e escaláveis.",
    },
    {
      id: 7,
      image:
        "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
      title: "Next.js",
      description:
        "Framework React que facilita a criação de aplicações web com renderização server-side, rotas automáticas e ótima performance.",
    },
    {
      id: 8,
      image:
        "https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png",
      title: "Bootstrap",
      description:
        "Framework front-end que facilita a criação de interfaces responsivas com componentes prontos e design consistente.",
    },
    {
      id: 9,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
      title: "Tailwind CSS",
      description:
        "Framework utilitário de CSS que permite criar interfaces personalizadas com classes direto no HTML, de forma rápida e responsiva.",
    },
    {
      id: 10,
      image:
        "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-agile-line-icon-vector-png-image_6626591.png",
      title: "SCRUM",
      description: "Metodologia ágil para gerenciamento de projetos.",
    },
  ]);

  const [skills_sl] = useState([
    {
      id: 1,
      image:
        "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icone-da-linguagem-de-programacao-java.png",
      title: "Java",
      description: "Linguagem de programação orientada a objetos.",
    },
    {
      id: 2,
      image: "https://img.icons8.com/color/600/spring-logo.png",
      title: "Spring Boot",
      description:
        "Framework Java que simplifica a criação de aplicações web e APIs.",
    },
    {
      id: 3,
      image: "https://cdnlogo.com/logos/c/27/c.svg",
      title: "C#",
      description: "Linguagem de programação moderna e orientada a objetos.",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
      title: ".NET Core",
      description:
        "Ideal para criar aplicações web, APIs e serviços de alta performance.",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
      title: "Entity Framework",
      description:
        "ORM da Microsoft que facilita o trabalho com bancos de dados.",
    },
    {
      id: 6,
      image:
        "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png",
      title: "SQL",
      description:
        "Linguagem padrão para consultar e gerenciar dados em bancos de dados relacionais.",
    },
    {
      id: 7,
      image:
        "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      title: "SQL Server",
      description:
        "Sistema de gerenciamento de banco de dados relacional da Microsoft.",
    },
    {
      id: 8,
      image: "https://img.icons8.com/color/512/git.png",
      title: "GIT",
      description: "Sistema de controle de versões.",
    },
    {
      id: 9,
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      title: "GitHub",
      description:
        "Plataforma online para hospedagem e colaboração em projetos que usam Git.",
    },
    {
      id: 10,
      image: "https://cdn-icons-png.flaticon.com/512/971/971005.png",
      title: "Cloud service",
      description:
        "Serviços oferecidos pela nuvem que permitem hospedar, armazenar e gerenciar aplicações e dados de forma escalável e acessível pela internet.",
    },
  ]);

  const [projects] = useState([
    {
      id: 1,
      image: "./img_projects/BG-BOB.png",
      title: "Best of Brazil",
      description: "",
      url_rep: "https://github.com/Pedrofelip/Best-of-brazil",
      url_site: "",
    },
    {
      id: 2,
      image: "./img_projects/BG-PORT.png",
      title: "Portfólio Pedro Felipe",
      description: "",
      url_rep: "https://github.com/Pedrofelip/portifolio-pedro-felipe-barros",
      url_site: "https://portfolio-pedro-felipe-barros.vercel.app/",
    },
    {
      id: 3,
      image: "./img_projects/BG-SOUL.png",
      title: "Soul Brokers",
      description: "",
      url_rep: "",
      url_site: "https://www.soulbrokers.com.br/",
    },
    {
      id: 4,
      image: "./img_projects/BG-MARK.png",
      title: "Email Marketing",
      description: "",
      url_rep: "https://github.com/Pedrofelip/email-marketing-V4",
      url_site: "",
    },
    {
      id: 5,
      image: "./img_projects/BG-RAMEMGO.png",
      title: "RamenGo",
      description: "",
      url_rep: "https://github.com/Pedrofelip/RamenGo",
      url_site: "https://pedrofelip.github.io/RamenGo/",
    },
    {
      id: 6,
      image: "./img_projects/BG-2G.png",
      title: "Controle de Usuario",
      description: "",
      url_rep: "https://github.com/Pedrofelip/teste-pratico-2rp",
      url_site: "",
    },
    {
      id: 7,
      image: "./img_projects/BG-ONEUP.png",
      title: "OneUp",
      description: "",
      url_rep:
        "https://github.com/Pedrofelip/Terceiro-termo-DEV-SENAI/tree/main/projeto%20final_OneUp",
      url_site: "",
    },
    {
      id: 8,
      image:
        "https://private-user-images.githubusercontent.com/73732845/285543958-855123b6-69cf-4cbe-8a90-d9a09620588b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg5ODUwNDMsIm5iZiI6MTc0ODk4NDc0MywicGF0aCI6Ii83MzczMjg0NS8yODU1NDM5NTgtODU1MTIzYjYtNjljZi00Y2JlLThhOTAtZDlhMDk2MjA1ODhiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAzVDIxMDU0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ5MWQ0MjI2MmJmM2VlMWRiY2MzNWY5Y2FkNWNhNzRjZTM0OGQ5YTk5Nzg4NjhiZTBiOGJjOGE3MDk4OTNlNmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.1yXbYDHfEftkKtqGGCjKlbOTLC4YERuXExluGOPujEU",
      title: "DermaScan",
      description: "",
      url_rep: "https://github.com/Pedrofelip/Global-Solution-DermaScan",
      url_site: "",
    },
  ]);

  return (
    <Context.Provider
      value={{
        certificates,
        skills,
        skills_sl,
        projects,
      }}
    >
      {children}
    </Context.Provider>
  );
}
