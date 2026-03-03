function SeverityBadge({ count, type }) {
  let styles = "";

  if (type === "critical")
    styles = "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
  else if (type === "high")
    styles = "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400";
  else if (type === "medium")
    styles = "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
  else if (type === "low")
    styles = "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${styles}`}
    >
      {count}
    </span>
  );
}

export default SeverityBadge;