function SeverityBadge({ count, type }) {
  let styles = "";
  let icon = "";

  if (type === "critical") {
    styles = "bg-red-900/40 dark:bg-red-900/50 text-red-400 dark:text-red-300 border border-red-700/50 dark:border-red-700";
    icon = "🔴";
  } else if (type === "high") {
    styles = "bg-orange-900/40 dark:bg-orange-900/50 text-orange-400 dark:text-orange-300 border border-orange-700/50 dark:border-orange-700";
    icon = "🟠";
  } else if (type === "medium") {
    styles = "bg-yellow-900/40 dark:bg-yellow-900/50 text-yellow-400 dark:text-yellow-300 border border-yellow-700/50 dark:border-yellow-700";
    icon = "🟡";
  } else if (type === "low") {
    styles = "bg-green-900/40 dark:bg-green-900/50 text-green-400 dark:text-green-300 border border-green-700/50 dark:border-green-700";
    icon = "🟢";
  }

  return (
    <div className={`px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 ${styles} border`}>
      <span className="text-sm leading-none">{icon}</span>
      <span>{count}</span>
    </div>
  );
}

export default SeverityBadge;