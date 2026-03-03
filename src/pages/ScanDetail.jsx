import { useParams } from "react-router-dom";
import CircularProgress from "../components/dashboard/CircularProgress";
import MetadataItem from "../components/dashboard/MetadataItem";
import ConsolePanel from "../components/dashboard/ConsolePanel";
import FindingLogPanel from "../components/dashboard/FindingLogPanel";
import ScanStatusBar from "../components/dashboard/ScanStatusBar";
function ScanDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          Scan Detail - {id}
        </h1>
      </div>

      {/* Top Section */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

  <CircularProgress value={40} />

  <div className="flex gap-6 text-sm">
    <span className="text-teal-500 font-medium">Spidering</span>
    <span className="text-gray-500">Mapping</span>
    <span className="text-gray-500">Testing</span>
    <span className="text-gray-500">Validating</span>
    <span className="text-gray-500">Reporting</span>
  </div>

</div>

      {/* Metadata */}
      {/* ================= METADATA ================= */}
<div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-800">

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

    <MetadataItem label="Scan Type" value="Greybox" />

    <MetadataItem label="Targets" value="google.com" />

    <MetadataItem label="Started At" value="Nov 22, 09:00AM" />

    <MetadataItem label="Credentials" value="2 Active" />

    <MetadataItem label="Files" value="Control.pdf" />

    <MetadataItem label="Checklists" value="40/350" />

  </div>

</div>

      {/* Bottom Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-800">
  <h2 className="text-sm font-semibold mb-4">
    Live Scan Console
  </h2>

  <ConsolePanel />
</div>

        
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-800">
  <FindingLogPanel />
</div>

      </div>
      
    {/* Bottom Status Bar */}
<ScanStatusBar />
    </div>
  );
}

export default ScanDetail;