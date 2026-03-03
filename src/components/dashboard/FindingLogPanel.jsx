import findings from "../../data/findings";
import FindingCard from "./FindingCard";

function FindingLogPanel() {
  return (
    <div className="flex flex-col h-80">

      <div className="mb-4">
        <h2 className="text-sm font-semibold">
          Finding Log
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {findings.map((finding) => (
          <FindingCard key={finding.id} finding={finding} />
        ))}
      </div>

    </div>
  );
}

export default FindingLogPanel;