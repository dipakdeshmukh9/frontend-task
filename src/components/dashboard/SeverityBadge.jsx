function SeverityBadge({ count, type }) {
  let styles = "";

  if (type === "critical")
    styles = "bg-red-600 dark:bg-red-600 text-white";
  else if (type === "high")
    styles = "bg-orange-600 dark:bg-orange-600 text-white";
  else if (type === "medium")
    styles = "bg-yellow-500 dark:bg-yellow-500 text-white";
  else if (type === "low")
    styles = "bg-green-600 dark:bg-green-600 text-white";

  return (
    <span
      className={`px-2.5 py-1 rounded-md text-xs font-bold ${styles}`}
    >
      {count}
    </span>
  );
}

export default SeverityBadge;