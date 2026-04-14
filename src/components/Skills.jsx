function Skills() {
  return (
    <section className="py-32 px-8 overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-6">
            <span className="text-secondary font-headline font-bold text-4xl opacity-20">
              02
            </span>
            <h2 className="text-4xl font-headline font-bold tracking-tight">
              Écosystème <br />
              Technique
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Ma stack est axée sur le développement moderne et sécurisé. Je
              crois en l'utilisation du bon outil pour chaque défi architectural
              spécifique.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-6 bg-surface-container-high rounded-2xl border border-outline-variant/15 flex flex-col gap-4 hover:bg-surface-container-highest transition-colors">
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  data-icon="code"
                >
                  code
                </span>
                <span className="font-headline font-bold text-lg">
                  Frontend
                </span>
                <ul className="text-sm text-on-surface-variant space-y-1">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="p-6 bg-surface-container-high rounded-2xl border border-outline-variant/15 flex flex-col gap-4 hover:bg-surface-container-highest transition-colors">
                <span
                  className="material-symbols-outlined text-3xl text-secondary"
                  data-icon="dns"
                >
                  dns
                </span>
                <span className="font-headline font-bold text-lg">Backend</span>
                <ul className="text-sm text-on-surface-variant space-y-1">
                  <li>PHP</li>
                  <li>Symfony</li>
                  <li>Node.js / Express</li>
                </ul>
              </div>
              <div className="p-6 bg-surface-container-high rounded-2xl border border-outline-variant/15 flex flex-col gap-4 hover:bg-surface-container-highest transition-colors">
                <span
                  className="material-symbols-outlined text-3xl text-tertiary"
                  data-icon="database"
                >
                  database
                </span>
                <span className="font-headline font-bold text-lg">Données</span>
                <ul className="text-sm text-on-surface-variant space-y-1">
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="p-6 bg-surface-container-high rounded-2xl border border-outline-variant/15 flex flex-col gap-4 hover:bg-surface-container-highest transition-colors">
                <span
                  className="material-symbols-outlined text-3xl text-tertiary"
                  data-icon="terminal"
                >
                  terminal
                </span>
                <span className="font-headline font-bold text-lg">
                  Outils de Dév
                </span>
                <ul className="text-sm text-on-surface-variant space-y-1">
                  <li>Git / GitHub</li>
                  <li>Laragon</li>
                  <li>Visual Studio Code</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
