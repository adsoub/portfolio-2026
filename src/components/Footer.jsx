function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#131313] border-t border-[#484847]/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[#b6a0ff] font-bold text-xl tracking-tighter">
          ADRIEN SOUBIGOU
        </div>
        <div className="font-['Inter'] text-sm uppercase tracking-widest text-gray-500 text-center">
          © {new Date().getFullYear()} Tous droits réservés.
        </div>
        <div className="flex gap-8 font-['Inter'] text-sm uppercase tracking-widest">
          <a
            className="text-gray-500 hover:text-[#b6a0ff] hover:translate-y-[-2px] transition-transform"
            href="https://github.com/adsoub"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-gray-500 hover:text-[#b6a0ff] hover:translate-y-[-2px] transition-transform"
            href="https://www.linkedin.com/in/adrien-soubigou-1481252aa/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
