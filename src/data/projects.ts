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
];
