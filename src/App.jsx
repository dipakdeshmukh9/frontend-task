import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import AppLayout from "./components/layout/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>

            {/* Login (No Layout) */}
            <Route path="/" element={<Login />} />

            {/* Dashboard Layout */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute
                  element={
                    <AppLayout>
                      <Dashboard />
                    </AppLayout>
                  }
                />
              }
            />

            <Route
              path="/scan/:id"
              element={
                <ProtectedRoute
                  element={
                    <AppLayout>
                      <ScanDetail />
                    </AppLayout>
                  }
                />
              }
            />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;