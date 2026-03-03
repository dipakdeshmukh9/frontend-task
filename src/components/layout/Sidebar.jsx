import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Scans", path: "/dashboard" },
    { name: "Schedule", path: "/dashboard" },
    { name: "Settings", path: "/dashboard" },
  ];

  return (
    <div className="hidden md:flex w-64 bg-white dark:bg-[#1A1A1A] border-r border-gray-200 dark:border-gray-800 p-6 flex-col">
      
      <h2 className="text-xl font-semibold mb-8">aps</h2>

      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-3 py-2 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

    </div>
  );
}

export default Sidebar;