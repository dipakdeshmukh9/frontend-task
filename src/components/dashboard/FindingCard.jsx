import FindingSeverityBadge from "./FindingSeverityBadge";

function FindingCard({ finding }) {
  return (
    <div className="bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-3">

      {/* Top row */}
      <div className="flex items-center justify-between">
        <FindingSeverityBadge severity={finding.severity} />
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {finding.time}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold">
        {finding.title}
      </h3>

      {/* Endpoint */}
      <div className="text-xs text-teal-500 font-mono">
        {finding.endpoint}
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 dark:text-gray-400">
        {finding.description}
      </p>

    </div>
  );
}

export default FindingCard;