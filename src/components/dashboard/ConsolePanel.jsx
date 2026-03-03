import { useEffect, useRef } from "react";
import logs from "../../data/logs";

function ConsolePanel() {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const getColor = (type) => {
    switch (type) {
      case "info":
        return "text-gray-300";
      case "url":
        return "text-teal-400";
      case "warning":
        return "text-yellow-400";
      case "success":
        return "text-green-400";
      case "error":
        return "text-red-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="bg-black rounded-2xl p-4 h-80 overflow-y-auto font-mono text-xs">

      {logs.map((log) => (
        <div key={log.id} className={`mb-2 ${getColor(log.type)}`}>
          &gt; {log.message}
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
}

export default ConsolePanel;