function ProgressBar({ value }) {
  return (
    <div className="w-full flex items-center gap-3">
      <div className="flex-1">
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-2 rounded-full transition-all duration-500 bg-cyan-500 dark:bg-cyan-500"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
      <div className="text-xs font-medium text-gray-700 dark:text-gray-300 w-10 text-right">
        {value}%
      </div>
    </div>
  );
}

export default ProgressBar;