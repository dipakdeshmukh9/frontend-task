import StatCard from "../components/dashboard/StatCard";
import ScanTable from "../components/dashboard/ScanTable";
import MetadataItem from "../components/dashboard/MetadataItem";
import scans from "../data/scans";

function Dashboard() {
  return (
    <div className="bg-white dark:bg-[#0F0F0F] min-h-screen space-y-6 transition-colors duration-300 pb-6">

      {/* Header Title and Metadata */}
      <div className="px-6 pt-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>Org:</span>
          <span className="text-gray-900 dark:text-white font-semibold">Project X</span>
          <span className="mx-2">|</span>
          <span>Owner:</span>
          <span className="text-gray-900 dark:text-white font-semibold">Nammogirl</span>
          <span className="mx-2">|</span>
          <span>Total Scans:</span>
          <span className="text-gray-900 dark:text-white font-semibold">100</span>
          <span className="mx-2">|</span>
          <span>Scheduled:</span>
          <span className="text-gray-900 dark:text-white font-semibold">1000</span>
          <span className="mx-2">|</span>
          <span>Rescans:</span>
          <span className="text-gray-900 dark:text-white font-semibold">100</span>
          <span className="mx-2">|</span>
          <span>Failed Scans:</span>
          <span className="text-gray-900 dark:text-white font-semibold">100</span>
          <span className="mx-2">|</span>
          <span className="text-cyan-600 dark:text-cyan-500 flex items-center gap-1">Last 10 mins ago</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Critical Severity"
            count="86"
            change="23 increase than yesterday"
            icon="🔴"
          />

          <StatCard
            title="High Severity"
            count="16"
            change="6.0% decrease than yesterday"
            icon="🟠"
          />

          <StatCard
            title="Medium Severity"
            count="26"
            change="7% decrease than yesterday"
            icon="🟡"
          />

          <StatCard
            title="Low Severity"
            count="16"
            change="9% decrease than yesterday"
            icon="🟢"
          />
        </div>
      </div>

      {/* Search and Filter Toolbar */}
      <div className="px-6">
        <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex justify-between items-center gap-4 flex-wrap">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search scans by name or type..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm flex items-center gap-2">
              <span>⚙️</span>
              <span>Filter</span>
            </button>

            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm flex items-center gap-2">
              <span>📋</span>
              <span>Column</span>
            </button>

            <button className="px-4 py-2 rounded-lg bg-cyan-600 dark:bg-cyan-600 text-white hover:bg-cyan-700 dark:hover:bg-cyan-700 transition text-sm font-medium flex items-center gap-2">
              <span>+</span>
              <span>New scan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="px-6">
        <ScanTable scans={scans} />
      </div>

    </div>
  );
}

export default Dashboard;