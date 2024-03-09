import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1, // Index of the correct answer option
  },
  // ... add more questions here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      if (currentQuestion === questions.length - 1) {
        setShowTerms(true); // Show terms on final question
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset selected answer for next question
      }
    }
  };

  const handleTermsAcceptance = (accepted) => {
    setShowTerms(false);
    if (accepted) {
      // Handle correct answer submission (replace with your logic)
      console.log('Correct answer submitted!');
    } else {
      // Handle returning to question page
      setCurrentQuestion(currentQuestion);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="flex mx-auto flex-col space-y-4 p-4 md:w-[600px] ">
      <div className="bg-gray-200 p-4 md:h-[100px] w-full rounded-md">
        <h2 className="text-3xl font-bold">{question.question}</h2>
      </div>
      <ul className="space-y-2 md:w-[350px]">
        {question.options.map((option, index) => (
          <li
            key={index}
            className={`p-2 rounded-md cursor-pointer hover:bg-gray-300 ${
              selectedAnswer === index ? 'bg-green-600 text-white' : ''
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button className="py-2 px-4 bg-yellow-600  md:w-20 text-white rounded-md disabled:bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2
       focus:ring-blue-400 disabled:cursor-not-allowed" disabled={selectedAnswer === null} onClick={handleNext}>
       submit
      </button>
      {showTerms && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p>Please accept our terms and conditions to submit your answer.</p>
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms">Accept terms and conditions</label>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" onClick={() => handleTermsAcceptance(true)}>
                Yes
              </button>
              <button className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" onClick={() => handleTermsAcceptance(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
