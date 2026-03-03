function MetadataItem({ label, value, timestamp = false }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <span>{label}:</span>
      <span className="text-white font-medium">{value}</span>
      {timestamp && <span className="text-cyan-500 ml-auto text-xs flex items-center gap-1">툿 {value}</span>}
    </div>
  );
}

export default MetadataItem;