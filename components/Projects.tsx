import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio_nextjs" : "";

export default function Projects() {
  const projects = [
    {
      image: "/projects/deepSnap.jpg",
      title: "DeepSnap",
      description: "Electron desktop app to extract text from images.",
      github: "https://github.com/KalePraveenRaj/deepsnap",
      live: "https://github.com/KalePraveenRaj/deepsnap/releases",
    },
    {
      image: "/projects/floatingIcon.png",
      title: "FloatingIcon",
      description: "Developed using React and Spring to showcase CRUD operations.",
      github: "https://github.com/KalePraveenRaj/FloatingIcon",
      live: "https://kalepraveenraj.github.io/portfolio/",
    },
    {
      image: "/projects/portfolio.JPG",
      title: "Portfolio Website",
      description: "A responsive personal portfolio website.",
      github: "https://github.com/KalePraveenRaj/portfolio",
      live: "https://kalepraveenraj.github.io/portfolio/",
    },
    {
      image: "/projects/swaggerOpenAPI.JPG",
      title: "CRUD Using Spring Boot",
      description: "Developed using Swagger and Spring Boot.",
      github: "https://github.com/KalePraveenRaj/CrudOperationsSpringBoot",
      live: "https://kalepraveenraj.github.io/portfolio/",
    },
    {
      image: "/projects/portfolioreact.JPG",
      title: "Portfolio (React + Vite + Tailwind)",
      description: "Built using React, Vite, and Tailwind CSS.",
      github: "https://github.com/KalePraveenRaj/portfolioreactvite",
      live: "https://kalepraveenraj.github.io/portfolioreactvite/",
    },
    {
      image: "/projects/todo_app.JPG",
      title: "Todo App (Flutter)",
      description: "Flutter-based todo app inspired by Google Tasks.",
      github: "https://github.com/KalePraveenRaj/flutter_todoApp",
      live: "https://kalepraveenraj.github.io/flutter_todoApp/",
    },
    {
      image: "/projects/snakes_and_ladders.jpg",
      title: "Snakes & Ladders",
      description: "Flutter-based game with APK included.",
      github: "https://github.com/KalePraveenRaj/snakes_and_ladders",
      live: "https://kalepraveenraj.github.io/snakes_and_ladders/",
    },
    {
      image: "/projects/password_manager.png",
      title: "Password Manager",
      description: "Flutter password manager app with APK.",
      github: "https://github.com/KalePraveenRaj/Password_Manager",
      live: "https://kalepraveenraj.github.io/Password_Manager/",
    },
    {
      image: "/projects/expense_tracker.png",
      title: "Expense Tracker",
      description: "Flutter + MySQL based expense tracker.",
      github: "https://github.com/KalePraveenRaj/expense_tracker",
      live: "https://kalepraveenraj.github.io/portfolioreactvite/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
};

function ProjectCard({
  image,
  title,
  description,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-2">

      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 30px 60px rgba(34,211,238,0.25), 0 30px 60px rgba(168,85,247,0.2), 0 30px 60px rgba(236,72,153,0.18)",
        }}
      />

      <div className="relative bg-[rgba(0,0,0,0.35)] rounded-2xl p-6 shadow-lg group-hover:shadow-none">

        <Image
          src={`${basePath}${image}`}
          alt={title}
          width={800}
          height={500}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-6"
        />

        <h3 className="text-xl font-semibold mb-2 text-center">
          {title}
        </h3>

        <p className="text-gray-400 text-center mb-6">
          {description}
        </p>

        <div className="flex justify-center gap-96 text-2xl text-gray-400">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
