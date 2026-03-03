import React from "react";

function StageTracker({ currentStage = "Spidering" }) {
  const stages = [
    { name: "Spidering", icon: "🕷️" },
    { name: "Mapping", icon: "🗺️" },
    { name: "Testing", icon: "🧪" },
    { name: "Validating", icon: "✓" },
    { name: "Reporting", icon: "📊" },
  ];

  const stageIndex = stages.findIndex((s) => s.name === currentStage);

  return (
    <div className="flex items-center justify-between w-full">
      {stages.map((stage, index) => (
        <React.Fragment key={stage.name}>
          {/* Stage Circle */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                index <= stageIndex
                  ? "bg-cyan-500 text-white ring-4 ring-cyan-500/30"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              }`}
            >
              {stage.icon}
            </div>
            <span
              className={`mt-2 text-xs font-semibold transition-all ${
                index <= stageIndex
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {stage.name}
            </span>
          </div>

          {/* Connector Line */}
          {index < stages.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 mt-6 rounded-full transition-all ${
                index < stageIndex
                  ? "bg-cyan-500"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StageTracker;
