import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsList from "../components/ProjectsList";

function Projects() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-headline font-bold tracking-widest text-sm uppercase mb-4 block">
                Archive
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6 leading-none">
                Archive des <span className="text-secondary">Projets</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl">
                Une rétrospective complète de mes différentes réalisations.
              </p>
            </div>
          </div>
        </header>
        <ProjectsList />
      </main>
      <Footer />
    </>
  );
}

export default Projects;
