import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StatusChip from "./StatusChip";
import SeverityBadge from "./SeverityBadge";
import ProgressBar from "./ProgressBar";

function TableRow({ scan, onDelete }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(scan.id);
    }
  };

  return (
    <tr
      onClick={() => navigate(`/scan/${scan.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition relative"
    >
      <td className="px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 font-medium text-gray-900 dark:text-gray-100 text-xs md:text-sm">
        {scan.name}
      </td>

      <td className="px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-700 dark:text-gray-300 text-xs md:text-sm">
        {scan.type}
      </td>

      <td className="px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5">
        <StatusChip status={scan.status} />
      </td>

      <td className="px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 w-16 md:w-28 lg:w-40">
        <ProgressBar value={scan.progress} />
      </td>

      <td className="hidden md:table-cell px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5">
        <div className="flex gap-1.5 flex-wrap">
          <SeverityBadge
            count={scan.vulnerabilities.critical}
            type="critical"
          />
          <SeverityBadge
            count={scan.vulnerabilities.high}
            type="high"
          />
          <SeverityBadge
            count={scan.vulnerabilities.medium}
            type="medium"
          />
          <SeverityBadge
            count={scan.vulnerabilities.low}
            type="low"
          />
        </div>
      </td>

      <td className="hidden sm:table-cell px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-gray-600 dark:text-gray-400 text-xs md:text-sm">
        {scan.lastScan}
      </td>

      {/* Action Column */}
      <td className="px-3 md:px-5 lg:px-6 py-2.5 md:py-3.5 text-right">
        {isHovered && (
          <button
            onClick={handleDelete}
            className="px-2 py-1 rounded text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition whitespace-nowrap cursor-pointer"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
}

export default TableRow;