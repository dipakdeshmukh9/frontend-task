import StatCard from "../components/dashboard/StatCard";
import ScanTable from "../components/dashboard/ScanTable";
import scans from "../data/scans";
import Button from "../components/ui/Button";

function Dashboard() {
  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Critical Severity"
          count="86"
          change="+2%"
          color="text-red-500"
        />

        <StatCard
          title="High Severity"
          count="16"
          change="+0.9%"
          color="text-orange-500"
        />

        <StatCard
          title="Medium Severity"
          count="26"
          change="-0.9%"
          color="text-yellow-500"
        />

        <StatCard
          title="Low Severity"
          count="16"
          change="+0.9%"
          color="text-green-500"
        />

      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-4 shadow border border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search scans..."
          className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#0F0F0F] focus:outline-none focus:ring-2 focus:ring-teal-500 w-1/3"
        />

        <Button variant="primary">
          New Scan
        </Button>
      </div>

      {/* Table */}
      <ScanTable scans={scans} />

    </div>
  );
}

export default Dashboard;