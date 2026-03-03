import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login (No Layout) */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/scan/:id"
          element={
            <AppLayout>
              <ScanDetail />
            </AppLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;