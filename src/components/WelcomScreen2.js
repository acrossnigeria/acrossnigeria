import { useState } from 'react';

export default function WelcomeScreen2(props) {
  const [selectedSection, setSelectedSection] = useState('about');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [hidden, setHidden]=useState(false);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleTermsCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  return (
    <div className={`${hidden?"hidden":"flex absolute w-screen h-screen z-50 top-20"} `}>
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <button
          className={`w-full p-2 mb-2 rounded ${
            selectedSection === 'about' ? 'bg-yellow-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('about')}
        >
          About
        </button>
        <button
          className={`w-full p-2 mb-2 rounded ${
            selectedSection === 'howToPlay' ? 'bg-yellow-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('howToPlay')}
        >
          How to Play
        </button>
        <button
          className={`w-full p-2 mb-2 rounded ${
            selectedSection === 'terms' ? 'bg-yellow-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('terms')}
        >
          Our Terms
        </button>
        <div className="mt-4">
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={termsAccepted}
            className='accent-yellow-700'
            onChange={handleTermsCheckboxChange}
          />
          <label htmlFor="termsCheckbox" className="ml-2">
            Accept our terms and conditions
          </label>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-3/4 bg-gray-100 p-4">
        {selectedSection === 'about' && (
          <div className="text-lg">Information about {props.section}.</div>
        )}
        {selectedSection === 'howToPlay' && (
          <div className="text-lg">Instructions on how to play go here.</div>
        )}
        {selectedSection === 'terms' && (
          <div className="min-h-96 max-h-[700px] md:max-h-[500px] overflow-scroll">{props.toc}</div>
        )}
        {termsAccepted && (
          <button className="mt-4 bg-yellow-700 text-white p-2 rounded" onClick={()=>(setHidden(true))}>Continue</button>
        )}
      </div>
    </div>
  );
}
