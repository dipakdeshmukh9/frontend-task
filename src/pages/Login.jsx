import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
function Login() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <h2 className="text-3xl font-semibold">Sign up</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <span className="text-teal-500 cursor-pointer ml-1">
                    Log in
                  </span>
                </p>
              </div>

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

              <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  className="mt-1 accent-teal-500"
                />
                <span>
                  I agree to the Terms & Conditions and Privacy Policy
                </span>
              </label>

              <Button variant="primary" className="w-full">
                Create account
              </Button>

              {/* Social Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-black text-white py-2 rounded-xl text-sm font-medium">
                  Apple
                </button>
                <button className="flex-1 bg-white border border-gray-300 py-2 rounded-xl text-sm font-medium">
                  Google
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-sm font-medium">
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