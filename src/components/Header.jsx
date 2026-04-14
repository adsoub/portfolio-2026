function Header() {
  return (
    <section className="min-h-[819px] flex flex-col justify-center px-8 max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/15">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              DISPONIBLE POUR DE NOUVEAUX PROJETS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1]">
            Créateur d'expériences <br />
            <span className="text-gradient">fullstack modernes</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Je suis développeur web junior et je crée des projets modernes avec
            les technologies actuelles. J’aime concevoir des interfaces
            agréables et construire des applications complètes, du frontend au
            backend.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-gradient-primary text-on-primary-fixed px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-transform"
            >
              Voir mes projets
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg border border-outline-variant/20 hover:bg-surface-container-highest transition-colors font-medium"
            >
              Parlons-en
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-4 border border-outline-variant/15 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              alt="Developer Portrait"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              data-alt="cinematic close-up portrait of a professional developer in a dark studio setting with soft purple and cyan rim lighting"
              src="/public/portrait.png"
            />
          </div>
          <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-primary-dim/20 blur-[100px] rounded-full"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-secondary-dim/20 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
