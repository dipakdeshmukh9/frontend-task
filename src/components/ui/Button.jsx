function Button({ children, onClick, variant = "primary", className = "" }) {
  let baseStyles =
    "px-4 py-2 rounded-lg font-medium transition duration-200";

  let variants = {
    primary:
  "w-full bg-[#0CC8A8] hover:bg-[#0ab69a] text-white rounded-xl py-3 font-semibold transition active:scale-[0.98]",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;