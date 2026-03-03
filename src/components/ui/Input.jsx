function Input({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-teal-500
                   dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white"
      />
    </div>
  );
}

export default Input;