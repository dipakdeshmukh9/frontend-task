import ThemeToggle from "../ui/ThemeToggle";

function Header() {
  return (
    <div className="bg-white dark:bg-[#0F0F0F] border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
      {/* Left side - Scan Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Scan</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🔒</span>
          <span className="mr-2">Private Assets</span>
          <span className="text-cyan-600 dark:text-cyan-500">+ New Scan</span>
        </div>
      </div>

      {/* Right side - Action Buttons */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium">
          Export Report
        </button>
        <button className="px-4 py-2 rounded-lg bg-red-600 dark:bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-700 transition text-sm font-medium">
          Stop Scan
        </button>
      </div>
    </div>
  );
}

export default Header;