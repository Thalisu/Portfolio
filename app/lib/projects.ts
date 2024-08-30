import { Project } from "@/app/lib/types";

const projects: Project[] = [
  {
    name: "Movie Streaming App",
    type: "FrontEnd",
    age: 2024,
    img: "/imgs/movieStreaming/home.png",
    href: "https://movie-streaming-discovery.vercel.app/",
    desc: "Um projeto Full Stack para assistir filmes com autenticação de usuários, onde cada um pode gerenciar seus filmes favoritos e acompanhar o progresso do que estava assistindo. Utiliza banco de dados SQL para armazenar informações do usuário e dos filmes, além de consumir uma API externa para obter o catálogo de filmes. O frontend é otimizado para beleza e desempenho, com carrosséis interativos que destacam os filmes mais populares e em alta. A interface é intuitiva, garantindo uma experiência de usuário fluida e envolvente.",
    techs: ["React", "Typescript", "express"],
    feats: [
      "/imgs/movieStreaming/feats/player.gif",
      "/imgs/movieStreaming/feats/cards.gif",
    ],
  },
  {
    name: "Portfólio",
    type: "FrontEnd",
    age: 2024,
    img: "/imgs/portfolio.png",
    href: "https://thalisondmc.vercel.app/",
    desc: "portfólio de desenvolvedor Full Stack, criado com Next.js e TypeScript, focado em performance e fluidez. O projeto utiliza animações em GSAP, Lenis Scroll para uma navegação suave, e Vivus para animar SVGs, resultando em uma experiência visual envolvente. O código é cuidadosamente otimizado para garantir que as animações e interações não comprometam o desempenho da página. O design é moderno, destacando habilidades técnicas e projetos de forma dinâmica e impactante.",
    techs: ["Next", "Typescript", "GSAP"],
  },
  {
    name: "Login API with SQL Database",
    type: "BackEnd",
    age: 2024,
    img: "/imgs/SQL.png",
    href: "https://github.com/Thalisu/loginApi",
    desc: "Uma API de login backend construída com Express, utilizando um banco de dados SQL e Prisma para comunicação eficiente com a database. O projeto adota o padrão de Dependency Injection, promovendo modularidade e fácil manutenção do código. A API oferece funcionalidades robustas de autenticação e gerenciamento de usuários, garantindo segurança e desempenho. Prisma facilita as operações de CRUD com o banco de dados, enquanto o design modular do código assegura escalabilidade e flexibilidade para futuras implementações.",
    techs: ["Typescript", "Prisma", "SQL", "Typescript", "Express"],
  },
  {
    name: "Patients API with MongoDB",
    type: "BackEnd",
    age: 2023,
    img: "/imgs/CRUD.png",
    href: "https://patientor-six.vercel.app/",
    desc: "Uma API de pacientes desenvolvida com Express, utilizando um banco de dados NoSQL MongoDB. A comunicação com o banco é realizada através do Mongoose, facilitando operações de CRUD. A API permite o gerenciamento completo dos dados dos pacientes, incluindo criação, leitura, atualização e exclusão de registros. Projetada para ser escalável e flexível, a API garante eficiência no manuseio de grandes volumes de dados, aproveitando as vantagens da estrutura de documentos do MongoDB.",
    techs: ["Typescript", "noSQL", "Typescript", "Express"],
  },
];

export default projects;
