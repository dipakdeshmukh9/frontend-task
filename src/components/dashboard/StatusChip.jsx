function StatusChip({ status }) {
  let styles = "";

  if (status === "Completed")
    styles = "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
  else if (status === "Scheduled")
    styles = "bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-400";
  else if (status === "Failed")
    styles = "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default StatusChip;