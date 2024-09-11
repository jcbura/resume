import { ProjectType } from "../lib/types";
import Project from "./Project";

const Projects = () => {
  const projects: ProjectType[] = [
    {
      title: "SEC Football iOS App",
      linkName: "apps.apple.com/us/app/secfb/id6670268133",
      link: "https://apps.apple.com/us/app/secfb/id6670268133",
      date: "August 2024 - Present",
      description: [
        "Expo and NativeWind, uses the same backend as the SEC football web app.",
      ],
    },
    {
      title: "SEC Football Web App",
      linkName: "sechedules.com",
      link: "https://www.sechedules.com/",
      date: "July 2024 - Present",
      description: [
        "Frontend - Next.js and Tailwind CSS, deployed to Vercel.",
        "Backend - NestJS, TypeORM, and MySQL, deployed to Railway.",
      ],
    },
    {
      title: "Film Portfolio Web App",
      linkName: "stefanburafilm.com",
      link: "https://www.stefanburafilm.com/",
      date: "June 2024 - July 2024",
      description: [
        "Next.js and Tailwind CSS with Cloudinary for hosting and fetching images.",
      ],
    },
  ];

  return (
    <div className="w-full pb-2 flex flex-col gap-2 justify-center items-start border-black/20 border-t-0 border-b-2 border-l-0 border-r-0">
      <div className="w-full pb-2 text-4xl font-semibold border-black border-t-0 border-b-2 border-l-0 border-r-0">
        Projects
      </div>
      <div className="w-full flex flex-col gap-4 justify-center items-start">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
