import React, { useState } from 'react';

const Comprehension = ({ initialReferenceText, initialQuestions, initialOptions, QuestionRender }) => {
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
    <div className="comprehension-container rounded-lg bg-orange-200 p-4">
        <h1
  class="font-bold text-transparent text-xl items-center justify-center flex my-3  bg-clip-text bg-gradient-to-r from-purple-600 via-blue-400 to-indigo-500">
 Comphrehension
</h1>
      <div className="reference-text flex flex-wrap bg-white p-4 rounded shadow-md">
        <textarea
          value={referenceText}
          onChange={handleReferenceTextChange}
          className="w-full h-40 border border-gray-300 rounded p-2"
        />
         <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="p-4 mt-4"
               
              />
              {selectedImage && (
                <div>
                  <img src={selectedImage} alt="Uploaded" className="mt-4 p-7 max-h-60" />
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover-bg-red-600 mt-2"
                    onClick={handleRemoveImage}
                  >
                    Remove Image
                  </button>
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
             
            />
            
            <div>
             
            </div>
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
                        className="border border-gray-300 rounded p-1"
                      />
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>
      </div>
    </div>
  );
};

export default Comprehension;
