function StatCard({ title, count, change, color, icon }) {
  const iconMap = {
    critical: "🔴",
    high: "🟠",
    medium: "🟡",
    low: "🟢",
  };

  const severityType = title.toLowerCase().split(" ")[0];
  const badgeIcon = iconMap[severityType] || icon;
  const isDecreasing = change.includes("decrease") || change.startsWith("-");

  const bgColor = severityType === "critical" ? "bg-red-900/20 dark:bg-red-900/30 border-red-800 dark:border-red-900" :
                  severityType === "high" ? "bg-orange-900/20 dark:bg-orange-900/30 border-orange-800 dark:border-orange-900" :
                  severityType === "medium" ? "bg-yellow-900/20 dark:bg-yellow-900/30 border-yellow-800 dark:border-yellow-900" :
                  "bg-green-900/20 dark:bg-green-900/30 border-green-800 dark:border-green-900";

  const badgeBg = severityType === "critical" ? "bg-red-900/40 dark:bg-red-900/50" :
                  severityType === "high" ? "bg-orange-900/40 dark:bg-orange-900/50" :
                  severityType === "medium" ? "bg-yellow-900/40 dark:bg-yellow-900/50" :
                  "bg-green-900/40 dark:bg-green-900/50";

  return (
    <div className={`bg-white dark:bg-[#1A1A1A] rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800 flex flex-col gap-3 md:gap-4 shadow-sm hover:shadow-md transition-shadow ${bgColor}`}>

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">
          {title}
        </span>

        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg ${badgeBg} flex items-center justify-center text-lg md:text-xl shrink-0`}>
          {badgeIcon}
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-none">
          {count}
        </div>

        <div className={`text-xs md:text-sm font-semibold flex items-center gap-1 ${
          isDecreasing 
            ? "text-green-500 dark:text-green-400" 
            : "text-red-500 dark:text-red-400"
        }`}>
          <span>{isDecreasing ? "↓" : "↑"}</span>
          <span>{change}</span>
        </div>
      </div>

    </div>
  );
}

export default StatCard;