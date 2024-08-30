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
    href: "",
    desc: "",
    techs: [""],
    feats: [""],
  },
  {
    name: "Login API with SQL Database",
    type: "BackEnd",
    age: 2024,
    img: "/imgs/SQL.png",
    href: "https://github.com/Thalisu/loginApi",
    desc: "",
    techs: [""],
    feats: [""],
  },
  {
    name: "Patients API with MongoDB",
    type: "BackEnd",
    age: 2023,
    img: "/imgs/CRUD.png",
    href: "https://patientor-six.vercel.app/",
    desc: "",
    techs: [""],
    feats: [""],
  },
];

export default projects;
