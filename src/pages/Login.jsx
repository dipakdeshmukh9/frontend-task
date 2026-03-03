import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Login() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = () => {
    setError("");
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    // Store account in localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const accountExists = accounts.some((acc) => acc.email === trimmedEmail);

    if (accountExists) {
      setError("Account already exists with this email");
      return;
    }

    accounts.push({ firstName, lastName, email: trimmedEmail, password: trimmedPassword });
    localStorage.setItem("accounts", JSON.stringify(accounts));
    console.log("Account created:", { firstName, lastName, email: trimmedEmail });

    // Login and navigate
    login({ firstName, lastName, email: trimmedEmail });
    navigate("/dashboard");
  };

  const handleLogin = () => {
    setError("");
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    console.log("Stored accounts:", accounts);
    console.log("Trying to login with:", { email: trimmedEmail, password: trimmedPassword });

    const account = accounts.find((acc) => acc.email === trimmedEmail && acc.password === trimmedPassword);

    if (!account) {
      setError("Invalid email or password");
      return;
    }

    login({ firstName: account.firstName, lastName: account.lastName, email: account.email });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300 bg-white dark:bg-[#0F0F0F]">

      {/* ================= LEFT HERO (Desktop Only) ================= */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-[#0F0F0F] text-white px-16 py-20 flex-col justify-center">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(12,200,168,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,100,50,0.25),transparent_40%)]"></div>

        {/* Content */}
        <div className="relative z-10">

          <h2 className="text-3xl font-bold mb-12 tracking-tight text-cyan-400">
            ◆ ops
          </h2>

          <h1 className="text-5xl font-semibold leading-[1.1] mb-8">
            Expert level Cybersecurity
            <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>

          <p className="text-gray-300 mb-10 max-w-md">
            Effortlessly spider and map targets to uncover hidden security flaws.
          </p>

          <div className="mb-12">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">
              What’s included
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>✓ Effortlessly spider and map targets</li>
              <li>✓ Deliver validated findings in hours</li>
              <li>✓ Generate enterprise-grade security reports</li>
            </ul>
          </div>

          <div className="text-sm text-gray-400">
            <p className="mb-2">⭐ Trustpilot</p>
            <p className="text-white font-medium">
              Rated 4.5/5.0 <span className="text-gray-400">(100k+ reviews)</span>
            </p>
          </div>

        </div>
      </div>

      {/* ================= RIGHT SIDE (FORM SECTION) ================= */}
      <div className="w-full md:w-1/2 bg-white dark:bg-[#0F0F0F] px-4 md:px-16 py-8 md:py-20 flex flex-col transition-colors duration-300">

        {/* Mobile Header - Logo + Theme Toggle */}
        <div className="md:hidden flex justify-between items-center mb-10 md:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
              ◆
            </div>
            <span className="text-2xl font-bold text-cyan-500">ops</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition text-xl"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex justify-end mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Form Centering */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">

            <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-700 space-y-6">

              {/* Title */}
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isLoginMode ? "Log in" : "Sign up"}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                  <button
                    className="text-cyan-600 dark:text-cyan-400 cursor-pointer font-medium hover:underline"
                    onClick={() => {
                      setIsLoginMode(!isLoginMode);
                      setError("");
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setPassword("");
                    }}
                  >
                    {isLoginMode ? "Sign up" : "Log in"}
                  </button>
                </p>
              </div>

              {!isLoginMode && (
                <>
                  <Input
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <Input
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}

              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {!isLoginMode && (
                <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <input
                    type="checkbox"
                    className="mt-1 accent-teal-500"
                  />
                  <span>
                    I agree to the Terms & Conditions and Privacy Policy
                  </span>
                </label>
              )}

              <button 
                onClick={isLoginMode ? handleLogin : handleCreateAccount}
                className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white py-2.5 rounded-xl font-semibold transition"
              >
                {isLoginMode ? "Log in" : "Create account"}
              </button>

              {/* Social Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-black dark:bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-800 transition flex items-center justify-center gap-2">
                  <span>🍎</span>
                </button>
                <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2">
                  <span>🔍</span>
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-center gap-2">
                  <span>👥</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;