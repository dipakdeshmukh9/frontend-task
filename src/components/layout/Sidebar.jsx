import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);

  const mainNavItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Projects", path: "/projects", icon: "📁" },
    { name: "Scans", path: "/scans", icon: "🔍" },
    { name: "Schedule", path: "/schedule", icon: "📅" },
  ];

  const secondaryNavItems = [
    { name: "Notifications", path: "/notifications", icon: "🔔" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
    { name: "Support", path: "/support", icon: "❓" },
  ];

  return (
    <div className="hidden md:flex w-64 bg-white dark:bg-[#0F0F0F] border-r border-gray-200 dark:border-gray-800 p-6 flex-col">
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 rounded-full bg-cyan-500 dark:bg-cyan-500 flex items-center justify-center">
          <span className="text-white dark:text-white font-bold">◆</span>
        </div>
        <h2 className="text-2xl font-bold text-cyan-600 dark:text-cyan-500">ops</h2>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-2 mb-8">
        {mainNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-3 rounded-lg transition flex items-center gap-3 text-sm ${
                isActive
                  ? "bg-cyan-500 text-white font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800 my-4"></div>

      {/* Secondary Navigation */}
      <nav className="flex flex-col gap-2 mb-auto">
        {secondaryNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-3 rounded-lg transition flex items-center gap-3 text-sm ${
                isActive
                  ? "bg-cyan-500 text-white font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-auto space-y-3">
        {/* User Info */}
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
          <div className="w-10 h-10 rounded-full bg-yellow-500 dark:bg-yellow-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">admin@edu.com</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 truncate">Security Lead</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white text-sm font-medium transition-all flex items-center justify-center gap-2"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>

    </div>
  );
}

export default Sidebar;