export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  imageSrc: string;
}

export const projects: Project[] = [
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
    title: "Product List App",
    description:
      "Add or remove products as interactive cards with alerts for each action.",
    tech: ["React"],
    url: "https://jawags.github.io/Product-List-App/",
    imageSrc: "/images/projects/product-list-app-16x9.svg",
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
