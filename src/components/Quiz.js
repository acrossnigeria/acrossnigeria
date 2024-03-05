import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  return (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <form>
      {questions.map((question, index) => (
        <div className="bg-white p-8 rounded-lg shadow-md" key={index}>
          <p className="text-2xl font-medium mb-4">{question.question}</p>
          <ul className="text-gray-600">
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleAnswerSelect(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="border-2 rounded-md shadow-md bg-yellow-400 font-semibold" onClick={() => console.log(userAnswers)}>
        Submit Answer
      </button></form>
    </div>
  );
};

export default Quiz;
