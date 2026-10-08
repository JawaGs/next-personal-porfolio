export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  imageSrc: string;
}

export const projects: Project[] = [
  {
    title: "Cowork Reservation App",
    description:
      "Multi-step coworking booking flow with URL-driven state, a cookie-based A/B experiment on layout and checkout steps, geo-targeted pricing (CLP/USD/EUR) and full keyboard-accessible date picker. Covered by Vitest unit and component tests.",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Vitest", "Playwright"],
    url: "https://cowork-reservation-app.vercel.app/",
    imageSrc: "/images/projects/cowork-reservation-app-16x9.svg",
  },
  {
    title: "React Lab Game",
    description:
      "Mini game developed in React. Decipher the exit code of a laboratory where a mad scientist has you trapped.",
    tech: ["React", "SweetAlert2", "CSS"],
    url: "https://colortest.jawags.now.sh/",
    imageSrc: "/images/projects/react-lab-game-16x9.svg",
  },
  {
    title: "React ToDo App",
    description:
      "Application that allows the user to create and delete tasks shown as interactive cards.",
    tech: ["React", "CSS"],
    url: "https://jawags.github.io/ToDoReactApp/",
    imageSrc: "/images/projects/react-todo-app-16x9.svg",
  },
  {
    title: "React Movie Searcher",
    description:
      "Get accurate and detailed information of your favorite movies through the MovieDB API.",
    tech: ["React", "MovieDB API"],
    url: "https://react-movie-searcher.jawags.now.sh/",
    imageSrc: "/images/projects/react-movie-searcher-16x9.svg",
  },
  {
    title: "Random Quote Machine",
    description:
      "Generate random quotes and publish them via Twitter. Simple and fun application.",
    tech: ["React"],
    url: "https://react-random-quote-machine.jawags.now.sh/",
    imageSrc: "/images/projects/random-quote-machine-16x9.svg",
  },
  {
    title: "Cryptocurrencies App",
    description:
      "Real-time cryptocurrency quotes via the CoinCap REST API.",
    tech: ["Vue.js", "Tailwind", "CoinCap API"],
    url: "https://dist.jawags.now.sh/",
    imageSrc: "/images/projects/cryptocurrencies-app-16x9.svg",
  },
];
