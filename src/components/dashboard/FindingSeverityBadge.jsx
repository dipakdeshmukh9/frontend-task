function FindingSeverityBadge({ severity }) {
  let styles = "";
  let icon = "";

  if (severity === "Critical") {
    styles = "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800";
    icon = "🔴";
  } else if (severity === "High") {
    styles = "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800";
    icon = "🟠";
  } else if (severity === "Medium") {
    styles = "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800";
    icon = "🟡";
  }

  return (
    <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 w-fit ${styles}`}>
      <span>{icon}</span>
      {severity}
    </span>
  );
}

export default FindingSeverityBadge;