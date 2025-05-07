import React from 'react';

function GoogleLogin() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5001/auth/google';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-xl rounded-3xl p-10 flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome Back</h2>
        <p className="text-gray-500 text-center   ">Sign in with your Google account</p>
        <button
          onClick={handleLogin}
          className="flex items-center gap-3 px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg rounded-xl shadow-lg transition duration-300 ease-in-out cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google icon"
            className="w-6 h-6 cursor-pointer"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin;
