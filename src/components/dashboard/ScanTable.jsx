import TableRow from "./TableRow";

function ScanTable({ scans }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow border border-gray-200 dark:border-gray-800 overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead className="border-b border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400">
          <tr>
            <th className="text-left px-6 py-4">Scan Name</th>
            <th className="text-left px-6 py-4">Type</th>
            <th className="text-left px-6 py-4">Status</th>
            <th className="text-left px-6 py-4">Progress</th>
            <th className="text-left px-6 py-4">Vulnerabilities</th>
            <th className="text-left px-6 py-4">Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {scans.map((scan) => (
            <TableRow key={scan.id} scan={scan} />
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ScanTable;