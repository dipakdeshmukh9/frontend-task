function FindingSeverityBadge({ severity }) {
  let styles = "";

  if (severity === "Critical")
    styles =
      "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
  else if (severity === "High")
    styles =
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400";
  else if (severity === "Medium")
    styles =
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles}`}
    >
      {severity}
    </span>
  );
}

export default FindingSeverityBadge;