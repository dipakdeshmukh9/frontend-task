function StatCard({ title, count, change, color, icon }) {
  const iconMap = {
    critical: "🔴",
    high: "🟠",
    medium: "🟡",
    low: "🟢",
  };

  const severityType = title.toLowerCase().split(" ")[0];
  const badgeIcon = iconMap[severityType] || icon;
  const isPositive = !change.startsWith("-");

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 border border-gray-200 dark:border-gray-800 flex flex-col gap-4 shadow-sm">

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {title}
        </span>

        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
          severityType === "critical" ? "bg-red-100 dark:bg-red-900/30" :
          severityType === "high" ? "bg-orange-100 dark:bg-orange-900/30" :
          severityType === "medium" ? "bg-yellow-100 dark:bg-yellow-900/30" :
          "bg-green-100 dark:bg-green-900/30"
        }`}>
          {badgeIcon}
        </div>
      </div>

      <div className="text-4xl font-bold text-gray-900 dark:text-white">
        {count}
      </div>

      <div className={`text-xs font-medium ${
        change.includes("decrease") || change.startsWith("-") 
          ? "text-green-600 dark:text-green-400" 
          : "text-red-600 dark:text-red-400"
      }`}>
        {change.includes("decrease") || change.startsWith("-") ? "↓" : "↑"} {change}
      </div>

    </div>
  );
}

export default StatCard;