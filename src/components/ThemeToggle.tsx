"use client";

import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function readStoredTheme(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Keep following the system theme until the user makes a choice.
  const systemLight = matchMedia("(prefers-color-scheme: light)");
  const onSystemChange = () => {
    if (!readStoredTheme()) {
      document.documentElement.dataset.theme = systemLight.matches ? "light" : "dark";
    }
  };
  systemLight.addEventListener("change", onSystemChange);

  return () => {
    observer.disconnect();
    systemLight.removeEventListener("change", onSystemChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  // null on the server: the theme is only known once the page is in the browser.
  const theme = useSyncExternalStore<Theme | null>(subscribe, getSnapshot, () => null);
  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  function toggle() {
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Storage unavailable: the choice just lasts until the next page load.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={theme === null ? undefined : theme === "dark"}
      title={theme === null ? undefined : `Switch to ${nextTheme} theme`}
      className="flex h-11 w-11 items-center justify-center text-xl text-text-muted hover:text-accent transition-colors"
    >
      {theme === "light" ? <FiMoon aria-hidden="true" /> : theme === "dark" ? <FiSun aria-hidden="true" /> : null}
    </button>
  );
}
