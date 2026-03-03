import TableRow from "./TableRow";

function ScanTable({ scans }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">

      <table className="w-full text-sm">

        <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0F0F0F]">
          <tr>
            <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-400 font-medium">Scan Name</th>
            <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-400 font-medium">Type</th>
            <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-400 font-medium">Status</th>
            <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-400 font-medium">Progress</th>
            <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-400 font-medium">Vulnerability</th>
            <th className="text-left px-6 py-4 text-gray-700 dark:text-gray-400 font-medium">Last Scan</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {scans.map((scan) => (
            <TableRow key={scan.id} scan={scan} />
          ))}
        </tbody>

      </table>

      {/* Pagination */}
      <div className="bg-gray-50 dark:bg-[#0F0F0F] border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">Showing 15 of 100 Scans</span>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition">←</button>
          <button className="w-8 h-8 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition">→</button>
        </div>
      </div>

    </div>
  );
}

export default ScanTable;