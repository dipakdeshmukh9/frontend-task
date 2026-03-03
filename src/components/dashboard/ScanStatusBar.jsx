function ScanStatusBar() {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">

      {/* Left: Sub-agents, Parallel Executions, Operations */}
      <div className="flex flex-wrap gap-6 text-xs font-medium">
        <div className="text-gray-600 dark:text-gray-400">
          Sub-Agents: <span className="text-gray-900 dark:text-gray-100 font-semibold">0</span>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Parallel Executions: <span className="text-gray-900 dark:text-gray-100 font-semibold">2</span>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Operations: <span className="text-gray-900 dark:text-gray-100 font-semibold">1</span>
        </div>
      </div>

      {/* Right: Severity Counts */}
      <div className="flex flex-wrap gap-4 text-xs font-semibold">
        <div className="text-red-600 dark:text-red-400">
          Critical: <span className="text-red-700 dark:text-red-300">0</span>
        </div>
        <div className="text-orange-600 dark:text-orange-400">
          High: <span className="text-orange-700 dark:text-orange-300">0</span>
        </div>
        <div className="text-yellow-600 dark:text-yellow-400">
          Medium: <span className="text-yellow-700 dark:text-yellow-300">0</span>
        </div>
        <div className="text-green-600 dark:text-green-400">
          Low: <span className="text-green-700 dark:text-green-300">0</span>
        </div>
      </div>

    </div>
  );
}

export default ScanStatusBar;