import ProjectsListItem from "./ProjectsListItem";

function ProjectsList() {
  return (
    <div className="space-y-1">
      <div className="hidden md:grid grid-cols-12 gap-6 px-8 py-4 text-xs font-bold uppercase tracking-widest text-outline-variant border-b border-outline-variant/15">
        <div className="col-span-1">Année</div>
        <div className="col-span-5">Projet</div>
        <div className="col-span-4">Stack</div>
        <div className="col-span-2 text-right">Liens</div>
      </div>
      <ProjectsListItem />
    </div>
  );
}

export default ProjectsList;
