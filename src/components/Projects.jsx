import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-headline font-bold text-4xl opacity-20">
              01
            </span>
            <h2 className="text-4xl font-headline font-bold">
              Projets à la Une
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Une sélection de projets réalisés en autonomie, au cours de
              formations ou de stage.
            </p>
          </div>
          <a
            className="text-secondary font-medium flex items-center gap-2 group"
            href="/projets"
          >
            Tous les projets
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              trending_flat
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
