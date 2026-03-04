import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header />
      </div>
      
      {/* Main Content Area with fixed sidebar */}
      <div className="flex flex-1 mt-14">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 bottom-0 top-14 z-30">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 bg-gray-50 dark:bg-[#0F0F0F] md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;