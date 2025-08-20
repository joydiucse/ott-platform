import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 p-2">
      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => setTheme("system")}
      >
        System
      </button>
    </div>
  );
}
