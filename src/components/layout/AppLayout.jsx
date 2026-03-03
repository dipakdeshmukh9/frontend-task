import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white">
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-[#0F0F0F]">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;