function MetadataItem({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {value}
      </span>
    </div>
  );
}

export default MetadataItem;