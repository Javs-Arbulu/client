import { useDarkMode } from "../hooks/useDarkMode";

export const TestDarkMode = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Test Dark Mode
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Modo actual: {isDark ? "Oscuro" : "Claro"}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Clase en document:{" "}
        {document.documentElement.classList.contains("dark") ? "dark" : "light"}
      </p>
      <button
        onClick={toggleDarkMode}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Cambiar a {isDark ? "Claro" : "Oscuro"}
      </button>
    </div>
  );
};
