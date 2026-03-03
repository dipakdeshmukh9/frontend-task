import { useState, useEffect, useRef } from "react";
import logs from "../../data/logs";

function ConsolePanel() {
  const [activeTab, setActiveTab] = useState("activity");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeTab]);

  const getColor = (type) => {
    switch (type) {
      case "info":
        return "text-gray-400 dark:text-gray-300";
      case "url":
        return "text-cyan-400";
      case "warning":
        return "text-yellow-400";
      case "success":
        return "text-green-400";
      case "error":
        return "text-red-400";
      default:
        return "text-gray-300";
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setActiveTab("activity")}
          className={`px-4 py-2 text-sm font-medium transition-all ${
            activeTab === "activity"
              ? "text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          }`}
        >
          Activity Log
        </button>
        <button
          onClick={() => setActiveTab("verification")}
          className={`px-4 py-2 text-sm font-medium transition-all ${
            activeTab === "verification"
              ? "text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          }`}
        >
          Verification Logs
        </button>
      </div>

      {/* Tab Label with Running Indicator */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
          {activeTab === "activity" ? "Running" : "Verification Logs"}
        </span>
      </div>

      {/* Console Content */}
      <div className="flex-1 bg-black/50 dark:bg-black rounded-lg p-4 h-64 overflow-y-auto font-mono text-xs scrollbar-thin">
        {activeTab === "activity" &&
          logs.map((log) => (
            <div key={log.id} className={`mb-2 ${getColor(log.type)}`}>
              <span className="text-gray-600">[{log.id.toString().padStart(2, "0")}:00:00]</span>{" "}
              {log.message}
            </div>
          ))}

        {activeTab === "verification" && (
          <div className="text-gray-500">
            <div className="mb-2">Verification process pending...</div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ConsolePanel;