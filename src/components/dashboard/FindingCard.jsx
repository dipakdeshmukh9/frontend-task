import FindingSeverityBadge from "./FindingSeverityBadge";

function FindingCard({ finding }) {
  return (
    <div className="bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg p-3 space-y-2 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition cursor-pointer">

      {/* Top row - Severity Badge and Time */}
      <div className="flex items-start justify-between gap-2">
        <FindingSeverityBadge severity={finding.severity} />
        <span className="text-xs text-gray-500 dark:text-gray-500 shrink-0">
          {finding.time}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
        {finding.title}
      </h3>

      {/* Endpoint */}
      <div className="text-xs text-cyan-600 dark:text-cyan-400 font-mono break-all">
        {finding.endpoint}
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
        {finding.description}
      </p>

    </div>
  );
}

export default FindingCard;