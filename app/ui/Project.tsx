import { ProjectType } from "../lib/types";

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-start">
      <div className="text-2xl font-semibold">{project.title}</div>
      <div className="text-lg">
        <a href={project.link} target="_blank" className="text-blue-500">
          {project.linkName}{" "}
        </a>
        • {project.date}
      </div>
      <div className="w-full flex flex-col gap-2 just items-start">
        {project.description.map((point, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 justify-center items-start text-lg"
          >
            <div>•</div>
            <div>{point}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
