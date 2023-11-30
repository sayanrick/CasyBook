// App.js
import React, { useState } from 'react';
import WebFont from 'webfontloader';


const App = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const handleSubmit = () => {
    if (!userId) {
      setWarningMessage('Please enter User ID.');
      return;
    }

    if (!password) {
      setWarningMessage('Please provide a password.');
      return;
    }

    // Simulating login process with a delay
    setIsLoading(true);
    setTimeout(() => {
      // Assuming login is successful after the delay
      setIsLoading(false);
      setWarningMessage('');

      // Perform additional actions after successful login if needed
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-00ac97">
      {/* Left part with CASYBOOK text */}
      <div className="flex-50 bg-gray-800 text-white p-10 flex flex-col justify-center items-center" style={{ backgroundColor: '#00AC97' }}>
        <h1 className="text-4xl font-bold font-kalam text-center">CASYBOOK</h1>
        <p className="text-sm mt-4 text-center font-kalam">A Product of Adytuminfotech Softwares Pvt. Ltd</p>
      </div>

      {/* Right part with login form */}
      <div className="flex-50 bg-white p-10 flex items-center justify-center">
        <div className="w-full max-w-xs">
          {warningMessage && (
            <div className="mb-4 flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1.707 14.707a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707a1 1 0 011.414-1.414L10 8.586l1.293-1.293a1 1 0 011.414 1.414L11.414 10l1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-red-500">{warningMessage}</p>
            </div>
          )}

          <h2 className="text-2xl mb-4 text-center">Login</h2>

          <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-600">
              User ID / Email / Mobile No. 
            </label>
            <input
              type="text"
              id="userId"
              className="mt-1 p-3 w-full bg-white border rounded focus:outline-none focus:border-blue-500"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-3 w-full bg-white border rounded focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className={`flex items-center justify-center bg-green-500 text-white p-3 rounded w-full ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ backgroundColor: '#00ac97' }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4a7.946 7.946 0 01-5.657-2.343zM13 0v4.686a8.02 8.02 0 012 1.017V0h-2zm7.657 2.343L15.314 4.686l1.414 1.414 4.343-4.343-1.414-1.414zM20 13h-4v2h6v-6h-2v4a1 1 0 01-1 1z"
                ></path>
              </svg>
            ) : (
              'Submit'
            )}
          </button>

          <p className="mt-4 text-xs text-center">Designed and developed by Adytum</p>
        </div>
      </div>
    </div>
  );
};

export default App;
