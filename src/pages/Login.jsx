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
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300">

      {/* ================= LEFT HERO (Desktop Only) ================= */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-[#0F0F0F] text-white px-16 py-20 flex-col justify-center">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(12,200,168,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,100,50,0.25),transparent_40%)]"></div>

        {/* Content */}
        <div className="relative z-10">

          <h2 className="text-2xl font-semibold mb-12 tracking-tight">
            aps
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
      <div className="md:w-1/2 bg-gray-50 dark:bg-[#0F0F0F] px-6 py-10 md:px-16 md:py-20 flex flex-col">

        {/* Toggle */}
        <div className="flex justify-end mb-8">
          <Button
            variant="secondary"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle
          </Button>
        </div>

        {/* Mobile Logo */}
        <div className="md:hidden mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            aps
          </h2>
        </div>

        {/* Form Centering */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">

            <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-800 space-y-6">

              {/* Title */}
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-3xl font-semibold">
                  {isLoginMode ? "Log in" : "Sign up"}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                  <span 
                    className="text-teal-500 cursor-pointer ml-1 hover:underline"
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
                  </span>
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

              <Button 
                variant="primary" 
                className="w-full"
                onClick={isLoginMode ? handleLogin : handleCreateAccount}
              >
                {isLoginMode ? "Log in" : "Create account"}
              </Button>

              {/* Social Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-black text-white py-2 rounded-xl text-sm font-medium hover:bg-gray-900">
                  Apple
                </button>
                <button className="flex-1 bg-white border border-gray-300 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">
                  Google
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700">
                  Meta
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