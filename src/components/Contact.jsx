function Contact() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="text-tertiary font-headline font-bold text-4xl opacity-20">
            03
          </span>
          <h2 className="text-5xl font-headline font-bold">
            Prêt à construire ensemble ?
          </h2>
          <p className="text-xl text-on-surface-variant">
            Je suis actuellement ouvert aux opportunités de développeur
            fullstack, frontend ou backend.
          </p>
        </div>
        <div className="glass-panel p-10 rounded-3xl border border-outline-variant/10 shadow-2xl">
          <div className="flex flex-col gap-6">
            <a
              className="text-3xl md:text-4xl font-headline font-bold text-gradient hover:scale-105 transition-transform inline-block"
              href="mailto:ad.soubigou@gmail.com"
            >
              ad.soubigou@gmail.com
            </a>
            <div className="flex justify-center gap-8">
              <a
                className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
                href="/public/CV_soubigou_adrien.pdf"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                CV
              </a>
              <a
                className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
                href="https://www.linkedin.com/in/adrien-soubigou-1481252aa/"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                LinkedIn
              </a>
              <a
                className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
                href="https://github.com/adsoub"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
