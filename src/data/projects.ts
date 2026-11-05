export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  repoUrl: string;
  imageSrc: string;
}

export const projects: Project[] = [
  {
    title: "Cowork Reservation App",
    description:
      "Multi-step coworking booking flow with URL-driven state, a cookie-based A/B experiment on layout and checkout steps, geo-targeted pricing (CLP/USD/EUR) and full keyboard-accessible date picker. Covered by Vitest unit and component tests.",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Vitest", "Playwright"],
    url: "https://cowork-reservation-app.vercel.app/",
    repoUrl: "https://github.com/JawaGs/cowork-reservation-app",
    imageSrc: "/images/projects/cowork-reservation-app-16x9.svg",
  },
  {
    title: "Accessible Seat Map",
    description:
      "Airline seat selection fully operable by keyboard and screen reader: ARIA grid with roving tabindex, occupied seats kept focusable and announced, native <dialog> exit-row confirmation with focus return, and multi-passenger state in a shareable URL. 219 unit and component tests plus Playwright E2E with zero axe violations.",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Vitest", "Playwright", "axe-core"],
    url: "https://seat-map-chi.vercel.app/",
    repoUrl: "https://github.com/JawaGs/seat-map",
    imageSrc: "/images/projects/accessible-seat-map-16x9.svg",
  },
  {
    title: "Strangler Fig Migration",
    description:
      "Legacy jQuery storefront migrated to Next.js one route at a time: a proxy in front of both origins routes each request by per-route rollout, with sticky percentage buckets, a QA override and rollback in minutes. Live banner and status panel show which version served each page. Unit and Playwright E2E tests, also run against production.",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "jQuery", "Vitest", "Playwright"],
    url: "https://jawagsac.vercel.app/migration-status",
    repoUrl: "https://github.com/JawaGs/strangler-migration",
    imageSrc: "/images/projects/strangler-fig-migration-16x9.svg",
  },
];
