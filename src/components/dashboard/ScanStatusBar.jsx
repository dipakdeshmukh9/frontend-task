function ScanStatusBar() {
  return (
    <div className="bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-3 flex flex-wrap items-center justify-between text-xs">

      <div className="flex gap-6 text-gray-600 dark:text-gray-400">
        <span>Sub-agents: 0</span>
        <span>Parallel Executions: 2</span>
        <span>Operations: 1</span>
      </div>

      <div className="flex gap-6 font-medium">
        <span className="text-red-500">Critical: 0</span>
        <span className="text-orange-500">High: 0</span>
        <span className="text-yellow-500">Medium: 0</span>
        <span className="text-green-500">Low: 0</span>
      </div>

    </div>
  );
}

export default ScanStatusBar;