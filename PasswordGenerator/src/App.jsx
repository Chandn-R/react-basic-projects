import { useState, useCallback, useRef } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [Numbers, setNumbers] = useState(false);
  const [SpecialChars, setSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  const generatePassword = useCallback(() => {
    let charSet = characters;
    if (Numbers) charSet += numbers;
    if (SpecialChars) charSet += specialChars;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    setGeneratedPassword(password);
  }, [passwordLength, Numbers, SpecialChars, generatedPassword]);

  // useEffect(() => generatePassword(), [passwordLength, Numbers, SpecialChars]);

  const passRef = useRef(null);

  const handleCopy = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-black bg-opacity-50 p-10 rounded-3xl shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-8">
          Password Generator
        </h1>

        {generatedPassword && (
          <div className="mt-8 space-y-4">
            <div className="text-white text-lg">Generated Password:</div>
            <div className="relative ">
              <input
                type="text"
                value={generatedPassword}
                readOnly
                ref={passRef}
                className="w-full py-3 px-8 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all overflow-ellipsis"
              />
              <button
                onClick={handleCopy}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:scale-110 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>

              </button>
            </div>
          </div>
        )}

        <div className="mb-6 py-3">
          <label className="block text-white text-lg font-semibold mb-2">Length: {passwordLength}</label>
          <input
            type="range"
            min="8"
            max="56"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className="w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full cursor-pointer transition-transform transform hover:scale-110"
          />
        </div>

        <div className='flex gap-8'>
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="numbers"
                checked={Numbers}
                onChange={() => setNumbers(!Numbers)}
                className="h-5 w-5 text-blue-400 hover:ring-2 hover:ring-blue-300 transition-all"
              />
              <label htmlFor="numbers" className="text-white text-lg"> Numbers</label>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="specialChars"
                checked={SpecialChars}
                onChange={() => setSpecialChars(!SpecialChars)}
                className="h-5 w-5 text-blue-400 hover:ring-2 hover:ring-blue-300 transition-all"
              />
              <label htmlFor="specialChars" className="text-white text-lg"> Special Characters</label>
            </div>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
        >
          Generate Password
        </button>


      </div>
    </div>
  )
}

export default App
