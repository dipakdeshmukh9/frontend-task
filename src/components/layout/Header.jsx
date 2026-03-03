import ThemeToggle from "../ui/ThemeToggle";

function Header() {
  return (
    <div className="bg-white dark:bg-[#0F0F0F] border-b border-gray-200 dark:border-gray-800 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3 md:gap-4">
      {/* Left side - Logo on mobile, Scan Title on desktop */}
      <div className="flex items-center gap-2 md:gap-4 min-w-0">
        {/* Mobile Logo - Hidden on desktop */}
        <div className="md:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold">◆</span>
          </div>
          <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-500">ops</h2>
        </div>
        
        <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white hidden sm:block">Scan</h1>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🔒</span>
          <span className="mr-2">Private Assets</span>
          <span className="text-cyan-600 dark:text-cyan-500">+ New Scan</span>
        </div>
      </div>

      {/* Right side - Action Buttons (Mobile optimized) */}
      <div className="flex items-center gap-2 md:gap-4 ml-auto">
        <ThemeToggle />
        <button className="hidden sm:inline-block px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium whitespace-nowrap">
          Export Report
        </button>
        <button className="px-3 md:px-4 py-2 rounded-lg bg-red-600 dark:bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-700 transition text-xs md:text-sm font-medium whitespace-nowrap">
          Stop Scan
        </button>
      </div>
    </div>
  );
}

export default Header;