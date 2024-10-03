import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

const SignUp: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="bg-green-100 min-h-screen pt-8 flex flex-col items-center">
      <div className="mb-4">
        <img src="/logo2.png" alt="Logo" className="h-20 w-auto" />
      </div>
      <form
        onSubmit={handleLogin}
        className="w-[90%] max-w-[500px] mx-auto bg-gray-50 p-6 shadow-sm rounded-md"
      >
        <div className="mb-4 text-center">
          <h3 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Get Started
          </h3>
          <p className="text-sm font-medium leading-6">
            Please enter your details
          </p>
        </div>

        <div className="grid gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              FullName
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g username@domain.com"
              className="w-full mt-1 px-4 py-2 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                placeholder="**************"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="block w-full mt-4 bg-green-600 text-white px-3 py-2 rounded-full transition-colors hover:bg-green-900 focus:outline-none flex items-center justify-center"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Signing Up ...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
          <div className="mt-2 text-center">
            <p className="text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
