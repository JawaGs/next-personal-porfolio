import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <div className="flex flex-col items-center gap-2">
        <a
          href="https://github.com/JawaGs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
        >
          <FiGithub />
          <span>Designed &amp; built by Jose Valor</span>
        </a>
        <p className="text-slate-600 text-xs font-mono">
          {new Date().getFullYear()} — Built with Next.js, TypeScript &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
