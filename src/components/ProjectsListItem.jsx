import { useMemo } from "react";
import { projectsData } from "../assets/projectsData";

function ProjectsListItem() {
  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => b.year - a.year);
  }, []);

  return sortedProjects.map((project, index) => {
    return (
      <div
        key={index}
        className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-4 md:px-8 py-8 rounded-xl transition-all hover:bg-surface-container-low/50 relative overflow-hidden"
      >
        <div className="md:col-span-1 text-primary font-headline font-medium">
          {project.year}
        </div>
        <div className="md:col-span-5">
          <h3 className="text-xl font-bold font-headline group-hover:text-secondary transition-colors">
            {project.name}
          </h3>
          <p className="text-on-surface-variant text-sm mt-1">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-3 flex flex-wrap gap-2">
          {project.techs.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface-variant text-[10px] font-bold tracking-wider uppercase rounded text-on-surface-variant"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="md:col-span-3 flex justify-start md:justify-end gap-6 items-center">
          <a
            className="flex items-center gap-2 text-sm text-outline hover:text-secondary transition-colors group/link"
            href={project.direct_link}
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg">link</span>
            <span className="hidden lg:inline">Live Demo</span>
          </a>
          <a
            className="flex items-center gap-2 text-sm text-outline hover:text-primary transition-colors group/link"
            href={project.github_link}
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg">code</span>
            <span className="hidden lg:inline">GitHub</span>
          </a>
        </div>
      </div>
    );
  });
}

export default ProjectsListItem;
