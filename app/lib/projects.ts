import { Project } from "@/app/lib/types";

const projects: Project[] = [
  {
    name: "Movie Streaming App",
    type: "FrontEnd",
    age: 2024,
    img: "/imgs/movieStreamingHome.png",
    href: "https://movie-streaming-discovery.vercel.app/",
  },
  {
    name: "Portfólio",
    type: "FrontEnd",
    age: 2024,
    img: "/imgs/portfolio.png",
    href: "",
  },
  {
    name: "Login API with SQL Database",
    type: "BackEnd",
    age: 2024,
    img: "/imgs/SQL.png",
    href: "https://github.com/Thalisu/loginApi",
  },
  {
    name: "Patients API with MongoDB",
    type: "BackEnd",
    age: 2023,
    img: "/imgs/CRUD.png",
    href: "https://patientor-six.vercel.app/",
  },
];

export default projects;
