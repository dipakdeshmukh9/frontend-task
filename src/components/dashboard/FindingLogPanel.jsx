import findings from "../../data/findings";
import FindingCard from "./FindingCard";

function FindingLogPanel() {
  return (
    <div className="flex flex-col h-full">

      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">
          Finding Log
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
        {findings.map((finding) => (
          <FindingCard key={finding.id} finding={finding} />
        ))}
      </div>

    </div>
  );
}

export default FindingLogPanel;