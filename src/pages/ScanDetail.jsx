import { useParams } from "react-router-dom";
import CircularProgress from "../components/dashboard/CircularProgress";
import StageTracker from "../components/dashboard/StageTracker";
import MetadataItem from "../components/dashboard/MetadataItem";
import ConsolePanel from "../components/dashboard/ConsolePanel";
import FindingLogPanel from "../components/dashboard/FindingLogPanel";
import ScanStatusBar from "../components/dashboard/ScanStatusBar";

function ScanDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white dark:bg-[#0F0F0F] min-h-screen space-y-6 transition-colors duration-300 p-6">

      {/* Stage Progress Section */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Left: Circular Progress */}
          <div className="flex justify-center lg:justify-start">
            <CircularProgress value={0} />
          </div>

          {/* Right: Stage Tracker */}
          <div className="lg:col-span-4">
            <StageTracker currentStage="Spidering" />
          </div>
        </div>
      </div>

      {/* Metadata Cards Section */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Scan Type</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Gray Box</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Targets</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">google.com</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Started At</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Nov 22, 09:00AM</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Credentials</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">2 Active</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Files</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Control.pdf</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Checklists</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">40/350</span>
          </div>
        </div>
      </div>

      {/* Console and Findings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Scan Console - 2 columns */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1A1A1A] rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Live Scan Console
          </h2>
          <ConsolePanel />
        </div>

        {/* Finding Log - 1 column */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Finding Log</h2>
          <FindingLogPanel />
        </div>

      </div>

      {/* Bottom Status Bar */}
      <ScanStatusBar />

    </div>
  );
}

export default ScanDetail;