import TableRow from "./TableRow";

function ScanTable({ scans }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-lg md:rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">

      <table className="w-full text-xs md:text-sm">

        <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0F0F0F]/50">
          <tr>
            <th className="text-left px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm whitespace-nowrap">Scan Name</th>
            <th className="text-left px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm whitespace-nowrap">Type</th>
            <th className="text-left px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm whitespace-nowrap">Status</th>
            <th className="text-left px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm whitespace-nowrap">Progress</th>
            <th className="hidden md:table-cell text-left px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm whitespace-nowrap">Vulnerability</th>
            <th className="hidden sm:table-cell text-left px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm whitespace-nowrap">Last Scan</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {scans.map((scan) => (
            <TableRow key={scan.id} scan={scan} />
          ))}
        </tbody>

      </table>

      {/* Pagination */}
      <div className="bg-gray-50 dark:bg-[#0F0F0F]/50 border-t border-gray-200 dark:border-gray-800 px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 flex items-center justify-between gap-2 text-xs md:text-sm">
        <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm hidden sm:inline">Showing 12 of 100 Scans</span>
        <span className="text-gray-500 dark:text-gray-400 text-xs sm:hidden">12 / 100</span>
        <div className="flex gap-1.5 md:gap-2">
          <button className="px-2 md:px-3 py-1.5 md:py-2 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-xs">←</button>
          <button className="px-2 md:px-3 py-1.5 md:py-2 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-xs">→</button>
        </div>
      </div>

    </div>
  );
}

export default ScanTable;