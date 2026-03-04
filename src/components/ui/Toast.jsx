import { useState, useEffect } from "react";

function Toast({ message, type = "success", duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
  };

  const textColor = {
    success: "text-green-700 dark:text-green-400",
    error: "text-red-700 dark:text-red-400",
    info: "text-blue-700 dark:text-blue-400",
    warning: "text-yellow-700 dark:text-yellow-400",
  };

  const icon = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠",
  };

  return (
    <div className={`fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg border ${bgColor[type]} animate-in slide-in-from-right duration-300 z-50`}>
      <span className={`text-lg font-bold ${textColor[type]}`}>{icon[type]}</span>
      <span className={`text-sm font-medium ${textColor[type]}`}>{message}</span>
      <button
        onClick={onClose}
        className={`ml-2 text-lg ${textColor[type]} hover:opacity-70`}
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
