function ScanStatusBar() {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg md:rounded-xl px-4 md:px-6 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 shadow-sm">

      {/* Left: Agent & Execution Stats */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4 w-full md:w-auto">
        
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <span className="text-lg">🤖</span>
          <div className="text-xs md:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Agents:</span>
            <span className="text-gray-900 dark:text-white font-bold ml-1">0</span>
          </div>
        </div>

        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <span className="text-lg">⚡</span>
          <div className="text-xs md:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Parallel:</span>
            <span className="text-gray-900 dark:text-white font-bold ml-1">2</span>
          </div>
        </div>

        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
          <span className="text-lg">⚙️</span>
          <div className="text-xs md:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Ops:</span>
            <span className="text-gray-900 dark:text-white font-bold ml-1">1</span>
          </div>
        </div>

      </div>

      {/* Right: Severity Badges */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
        
        <div className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <span className="text-lg">🔴</span>
          <span className="text-xs md:text-sm text-red-700 dark:text-red-400 font-bold">0</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <span className="text-lg">🟠</span>
          <span className="text-xs md:text-sm text-orange-700 dark:text-orange-400 font-bold">0</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <span className="text-lg">🟡</span>
          <span className="text-xs md:text-sm text-yellow-700 dark:text-yellow-400 font-bold">0</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <span className="text-lg">🟢</span>
          <span className="text-xs md:text-sm text-green-700 dark:text-green-400 font-bold">0</span>
        </div>

      </div>

    </div>
  );
}

export default ScanStatusBar;