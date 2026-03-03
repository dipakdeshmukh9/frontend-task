function ProgressBar({ value }) {
  return (
    <div className="w-full">

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
        className={`h-2 rounded-full transition-all duration-500 ${
  value === 100
    ? "bg-green-500"
    : value > 0
    ? "bg-teal-500"
    : "bg-gray-400"
}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>

      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
        {value}%
      </div>

    </div>
  );
}

export default ProgressBar;