import { useNavigate } from "react-router-dom";
import StatusChip from "./StatusChip";
import SeverityBadge from "./SeverityBadge";
import ProgressBar from "./ProgressBar";
function TableRow({ scan }) {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/scan/${scan.id}`)}
      className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition"
    >
      <td className="px-6 py-4 font-medium">
        {scan.name}
      </td>

      <td className="px-6 py-4">
        {scan.type}
      </td>

      <td className="px-6 py-4">
        <StatusChip status={scan.status} />
      </td>

      <td className="px-6 py-4 w-40">
  <ProgressBar value={scan.progress} />
</td>

      <td className="px-6 py-4">
  <div className="flex gap-2 flex-wrap">
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

      <td className="px-6 py-4">
        {scan.lastScan}
      </td>
    </tr>
  );
}

export default TableRow;