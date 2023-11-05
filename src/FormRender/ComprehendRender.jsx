import React, { useState } from 'react';

const ComprehendRender = ({ initialReferenceText, initialQuestions, initialOptions, QuestionRender }) => {
  const [referenceText, setReferenceText] = useState(initialReferenceText);
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleReferenceTextChange = (event) => {
    setReferenceText(event.target.value);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      text: QuestionRender,
      type: 'MCA',
      options: [...initialOptions],
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="comprehension-container bg-orange-200 p-4 rounded-lg">
      <h1 className="font-bold text-2xl my-3 text-center text-purple-600 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
        Comprehension
      </h1>
      <div className="reference-text bg-white p-4 rounded shadow-md">
        <textarea
          value={referenceText}
          onChange={handleReferenceTextChange}
          className="w-full h-40 border border-gray-300 rounded p-2"
          disabled
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="p-4 mt-4"
          disabled
        />
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Uploaded" className="mt-4 p-4 max-h-60" />
          </div>
        )}
      </div>
      <div className="question-container mt-4">
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question bg-white p-4 rounded shadow-md mb-4">
            <textarea
              value={question.text}
              onChange={(event) => handleOptionChange(questionIndex, 'text', event)}
              className="w-full mb-2 border border-gray-300 rounded p-2"
              disabled
            />

            <div></div>
            {question.type === 'MCA' && (
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="mb-2">
                    <input
                      type="radio"
                      id={`question_${questionIndex}_option_${optionIndex}`}
                      name={`question_${questionIndex}`}
                      className="mr-2"
                    />
                    <label htmlFor={`question_${questionIndex}_option_${optionIndex}`}>
                      <input
                        type="text"
                        value={option}
                        onChange={(event) => handleOptionChange(questionIndex, optionIndex, event)}
                        className="w-full mb-2 border border-gray-300 rounded p-2"
                        disabled
                      />
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprehendRender;
