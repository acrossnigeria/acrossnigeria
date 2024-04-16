import { useState } from 'react';

export default function WelcomeScreen3() {
  const [activeTab, setActiveTab] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-start">
        <div className="flex flex-col space-y-4">
          <button
            className={`p-2 rounded ${
              activeTab === 'about'
                ? 'bg-yellow-700 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleTabClick('about')}
          >
            About
          </button>
          <button
            className={`p-2 rounded ${
              activeTab === 'howToPlay'
                ? 'bg-yellow-700 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleTabClick('howToPlay')}
          >
            How to Play
          </button>
          <button
            className={`p-2 rounded ${
              activeTab === 'terms'
                ? 'bg-yellow-700 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleTabClick('terms')}
          >
            Our Terms
          </button>
        </div>
        <div className="w-64 h-48 bg-gray-200 ml-4 rounded-md p-4">
          {activeTab === 'about' && <p>About Information</p>}
          {activeTab === 'howToPlay' && <p>How to Play Information</p>}
          {activeTab === 'terms' && <p>Our Terms Information</p>}
        </div>
        <div className="mt-4">
          <input
            type="checkbox"
            id="termsCheckbox"
            className='accent-yellow-700'
            checked={termsAccepted}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="termsCheckbox" className="ml-2">
            Accept our terms and conditions
          </label>
        </div>
        <button
          className={`mt-4 p-2 rounded ${
            termsAccepted ? 'bg-yellow-700 text-white' : 'bg-gray-300 text-gray-600'
          }`}
          disabled={!termsAccepted}
        >
          {termsAccepted&&'Next'}
        </button>
      </div>
    </div>
  );
}
