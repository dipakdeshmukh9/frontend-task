function StatCard({ title, count, change, color }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-800 flex flex-col gap-3">

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {title}
        </span>

        <span className={`text-xs font-medium ${color}`}>
          {change}
        </span>
      </div>

      <div className="text-3xl font-semibold">
        {count}
      </div>

    </div>
  );
}

export default StatCard;