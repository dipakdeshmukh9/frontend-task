import { useState } from "react";
import StatCard from "../components/dashboard/StatCard";
import ScanTable from "../components/dashboard/ScanTable";
import MetadataItem from "../components/dashboard/MetadataItem";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";
import scans from "../data/scans";

function Dashboard() {
  const [isNewScanModal, setIsNewScanModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [scanName, setScanName] = useState("");
  const [scanType, setScanType] = useState("Greybox");
  const [targetUrl, setTargetUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);

  const handleNewScan = () => {
    if (!scanName.trim() || !targetUrl.trim()) {
      setToast({ message: "Please fill in all fields", type: "error" });
      return;
    }
    console.log("Creating new scan:", { scanName, scanType, targetUrl });
    setToast({ message: `Scan "${scanName}" created successfully!`, type: "success" });
    setIsNewScanModal(false);
    setScanName("");
    setTargetUrl("");
  };

  const handleDeleteClick = (scanId) => {
    const scan = scans.find(s => s.id === scanId);
    setDeleteId(scanId);
    if (scan) {
      setScanName(scan.name);
    }
    setIsDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting scan with ID:", deleteId);
    setToast({ message: `Scan "${scanName}" deleted successfully!`, type: "success" });
    setIsDeleteModal(false);
    setDeleteId(null);
    setScanName("");
  };

  return (
    <div className="bg-white dark:bg-[#0F0F0F] h-full flex flex-col transition-colors duration-300">

      {/* Fixed Top Section */}
      <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-800">
        {/* Header Title and Metadata */}
        <div className="px-4 md:px-6 py-3 md:py-4">
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex flex-wrap items-center gap-1 md:gap-2">
            <span>Org: <span className="text-gray-900 dark:text-white font-semibold">Project X</span></span>
            <span>|</span>
            <span>Owner: <span className="text-gray-900 dark:text-white font-semibold">Nammogirl</span></span>
            <span>|</span>
            <span>Total Scans: <span className="text-gray-900 dark:text-white font-semibold">100</span></span>
            <span>|</span>
            <span className="hidden sm:inline">Scheduled: <span className="text-gray-900 dark:text-white font-semibold">1000</span></span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Rescans: <span className="text-gray-900 dark:text-white font-semibold">100</span></span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden md:inline">Failed Scans: <span className="text-gray-900 dark:text-white font-semibold">100</span></span>
            <span className="hidden md:inline">|</span>
            <span className="text-cyan-600 dark:text-cyan-500 ml-auto md:ml-0">⏱️ Last 10 mins ago</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-4 md:px-6 pb-6 pt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
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
        <div className="px-4 md:px-6 pb-4">
          <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 md:gap-4">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search scans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button className="hidden lg:flex px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm items-center gap-2 whitespace-nowrap">
                <span>⚙️</span>
                <span>Filter</span>
              </button>

              <button className="hidden lg:flex px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm items-center gap-2 whitespace-nowrap">
                <span>📋</span>
                <span>Column</span>
              </button>

              <button className="flex-1 md:flex-none px-3 md:px-4 py-2 rounded-lg bg-cyan-600 dark:bg-cyan-600 text-white hover:bg-cyan-700 dark:hover:bg-cyan-700 transition text-sm font-medium flex items-center justify-center gap-2 cursor-pointer" onClick={() => setIsNewScanModal(true)}>
                <span>+</span>
                <span>New scan</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Table Section */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6">
        <div className="pb-6">
          <ScanTable scans={scans} onDelete={handleDeleteClick} />
        </div>
      </div>

      {/* New Scan Modal */}
      <Modal
        isOpen={isNewScanModal}
        title="Create New Scan"
        onClose={() => setIsNewScanModal(false)}
        onConfirm={handleNewScan}
        confirmText="Create Scan"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Scan Name
            </label>
            <input
              type="text"
              placeholder="e.g., Web App Servers"
              value={scanName}
              onChange={(e) => setScanName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Target URL
            </label>
            <input
              type="url"
              placeholder="https://example.com"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Scan Type
            </label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
            >
              <option value="Greybox">Greybox</option>
              <option value="Blackbox">Blackbox</option>
              <option value="Whitebox">Whitebox</option>
            </select>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModal}
        title="Delete Scan"
        onClose={() => setIsDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        confirmText="Delete"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Are you sure you want to delete the scan <span className="font-semibold text-gray-900 dark:text-white">"{scanName}"</span>? This action cannot be undone.
          </p>
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-xs text-red-700 dark:text-red-400 flex items-center gap-2">
              <span>⚠️</span>
              All scan data and findings will be permanently deleted.
            </p>
          </div>
        </div>
      </Modal>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </div>
  );
}

export default Dashboard;