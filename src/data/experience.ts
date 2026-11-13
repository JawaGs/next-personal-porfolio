export interface ExperienceDate {
  /** Machine-readable month for `<time dateTime>`, formatted YYYY-MM. */
  dateTime: string;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  context?: string;
  start: ExperienceDate;
  /** `null` means the role is current. */
  end: ExperienceDate | null;
  highlights: string[];
}

/** Newest first. */
export const experience: Experience[] = [
  {
    title: "Web UI Developer",
    company: "Globant",
    context: "Digital sales platform for a major European airline",
    start: { dateTime: "2024-02", label: "Feb 2024" },
    end: null,
    highlights: [
      "Worked on migrating the airline's website to Next.js, moving 100% of booking-flow traffic from the legacy site to the new platform.",
      "Built flight selection, booking and cabin-upsell flows, plus A/B experiments across the booking funnel.",
      "AEM content fragments driving dynamic layouts · TypeScript + Vitest · CI/CD with GitHub Actions and ArgoCD.",
    ],
  },
  {
    title: "Front-end developer",
    company: "ACL Tecnología",
    context: "Financial services company",
    start: { dateTime: "2021-09", label: "Sep 2021" },
    end: { dateTime: "2024-01", label: "Jan 2024" },
    highlights: [
      "Led the migration of the flow generating 80% of the company's sales from web to a React Native microfrontend inside the main native app, including native bridge integration.",
      "Built a shared component system that cut style-related deployment bugs by over 90%; co-designed an orchestration layer that improved flow performance by 60%.",
      "Biometric authentication and digital signing with Chile's national digital ID (Clave Única); releases on the App Store, Google Play and Huawei AppGallery.",
    ],
  },
  {
    title: "Developer at 2WIN Consulting",
    company: "2WIN Consulting",
    start: { dateTime: "2020-06", label: "Jun 2020" },
    end: { dateTime: "2021-09", label: "Sep 2021" },
    highlights: [
      "NetSuite automation with SuiteScript and SuiteFlow, including purchase-order workflows that increased productivity by 70%.",
    ],
  },
];
