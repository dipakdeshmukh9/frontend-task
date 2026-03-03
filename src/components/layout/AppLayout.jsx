import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-[#0F0F0F] text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;