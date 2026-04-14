import mdcm from "../../public/mdcm.png";
import cryptoTracker from "../../public/crypto_tracker.png";
import blog from "../../public/blog.png";
import assembly from "../../public/assembly.png";
import trendyMovie from "../../public/trendy_movie.png";

export const projectsData = [
  {
    id: 1,
    name: "MDCM",
    description:
      "Un jeu pour navigateur web présentant les missions du Département Charente-Maritime et reprenant les codes de jeux rétro.",
    year: 2024,
    techs: ["KaplayJS"],
    screenshot_path: mdcm,
    github_link: "https://github.com/adsoub/mdcm",
    direct_link: "https://adsoub.alwaysdata.net/kaplay",
  },
  {
    id: 2,
    name: "Crypto Tracker",
    description:
      "Une application affichant les prix en direct de centaines de crypto-monnaies via l'API CoinGecko.",
    year: 2026,
    techs: ["React", "React-Router", "Recharts"],
    screenshot_path: cryptoTracker,
    github_link: "https://github.com/adsoub/crypto-tracker",
    direct_link: "https://crypto-tracker-amber-psi.vercel.app/",
  },
  {
    id: 3,
    name: "Blog Pop Culture",
    description:
      "Un blog comprenant affichage et tri des articles, inscription/connexion utilisateurs, dashboard pour la gestion des articles.",
    year: 2024,
    techs: ["PHP", "MySQL"],
    screenshot_path: blog,
    github_link: "https://github.com/adsoub/series02",
    direct_link: "https://adsoub.alwaysdata.net/blog_stage",
  },
  {
    id: 4,
    name: "Assembly: Endgame",
    description:
      "Une version du jeu du pendu où chaque erreur fait disparaître une langage de programmation.",
    year: 2025,
    techs: ["React"],
    screenshot_path: assembly,
    github_link: "https://github.com/adsoub/assembly",
    direct_link: "https://adsoub.alwaysdata.net/assembly",
  },
  {
    id: 5,
    name: "Trendy Movie",
    description:
      "Une application permettant de trouver des films via l'API TMDB et affichage des tendances en fonction du nombre de recherches.",
    year: 2026,
    techs: ["React", "TailwindCSS v4", "Appwrite"],
    screenshot_path: trendyMovie,
    github_link: "https://github.com/adsoub/trendy-movie",
    direct_link: "https://trendy-movie-self.vercel.app/",
  },
];
