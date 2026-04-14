import { projectsData } from "../assets/projectsData";

function ProjectCard() {
  return projectsData.map((project) => {
    if (project.id < 3) {
      return (
        <div
          className="group relative bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500"
          key={project.id}
        >
          <div className="aspect-video overflow-hidden">
            <img
              alt={`Capture d'écran de ${project.name}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="sleek dark mode fintech dashboard interface with glowing neon charts and glassmorphism elements on a high-end laptop screen"
              src={project.screenshot_path}
            />
          </div>
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-headline font-bold">
                {project.name}
              </h3>
              <div className="flex gap-3">
                <a
                  className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                  href={project.github_link}
                  target="_blank"
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="terminal"
                  >
                    terminal
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors"
                  href={project.direct_link}
                  target="_blank"
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-sm bg-surface-variant text-xs font-label text-primary"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }
  });
}

export default ProjectCard;
