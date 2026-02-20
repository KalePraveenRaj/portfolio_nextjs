import Image from "next/image";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio_nextjs" : "";

export default function Skills() {
  const skills = [
    { name: "Java", icon: "/skills/java.svg" },
    { name: "Python", icon: "/skills/python.svg" },
    { name: "Spring Boot", icon: "/skills/springboot.svg" },
    { name: "Electron", icon: "/skills/electron.svg" },
    { name: "Node.js", icon: "/skills/nodedotjs.svg" },
    { name: "Express.js", icon: "/skills/express.svg" },
    { name: "Firebase", icon: "/skills/firebase.svg" },
    { name: "Flutter", icon: "/skills/flutter.svg" },
    { name: "Dart", icon: "/skills/dart.svg" },
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "React", icon: "/skills/react.svg" },
    { name: "Next.js", icon: "/skills/nextdotjs.svg" },
    { name: "CSS", icon: "/skills/css.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
    { name: "MySQL", icon: "/skills/mysql.svg" },
    { name: "Supabase", icon: "/skills/supabase.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "Git", icon: "/skills/git.svg" },
    { name: "GitHub", icon: "/skills/github.svg" },
    { name: "GraphQL", icon: "/skills/graphql.svg" },
    { name: "Docker", icon: "/skills/docker.svg" },
    { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
    { name: "AWS", icon: "/skills/aws.svg" },
  ];

  const gradientShadow = {
    boxShadow:
      "0 25px 50px rgba(34,211,238,0.22), 0 25px 50px rgba(168,85,247,0.18), 0 25px 50px rgba(236,72,153,0.15)",
  };

  return (
    <section
      id="skills"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">

              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={gradientShadow}
              />

              <div className="relative flex flex-col items-center justify-center gap-3 bg-[rgba(0,0,0,0.35)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">

                <Image
                  src={`${basePath}${skill.icon}`}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />

                <p className="text-sm text-gray-300 font-medium">
                  {skill.name}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
