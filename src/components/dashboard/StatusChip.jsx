function StatusChip({ status }) {
  let styles = "";

  if (status === "Completed")
    styles = "bg-green-100 text-green-600";
  else if (status === "Scheduled")
    styles = "bg-gray-200 text-gray-600";
  else if (status === "Failed")
    styles = "bg-red-100 text-red-600";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default StatusChip;