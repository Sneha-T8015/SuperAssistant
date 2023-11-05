import React, { useState, useEffect } from 'react';

const FillBlanks = ({ initialQuestion }) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);

  const [selectedWord, setSelectedWord] = useState('');

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();

        // Get the selected word
        const text = window.getSelection().toString().trim();
        if (text) {
          // Replace either Option 1 or Option 2 with the selected word
          const updatedOptions = [...options];
          if (!updatedOptions.includes(text)) {
            if (updatedOptions[0] === 'Option 1') {
              updatedOptions[0] = text;
            } else if (updatedOptions[1] === 'Option 2') {
              updatedOptions[1] = text;
            } else if (updatedOptions[2] === 'Option 3') {
              updatedOptions[2] = text;
            } else if (updatedOptions[3] === 'Option 4') {
              updatedOptions[3] = text;
            } else {
              updatedOptions[0] = text;
            }
            setOptions(updatedOptions);
          }

          // Replace the selected word with a placeholder in the question
          const underlinedQuestion = question.replace(text, '[...]');
          setQuestion(underlinedQuestion);
          setSelectedWord(text);
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [question, options]);



  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };


  const handleOptionChange = (index, event) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  return (
    <div className='flex flex-wrap w-full'>
      <div className="p-4 text-black   bg-green-300 rounded-lg shadow-md">
        <h1
  class="font-bold text-transparent text-xl items-center justify-center flex p-2 bg-clip-text bg-gradient-to-r from-green-300 via-orange-400 to-red-300">
  Cloze Fill Blanks
</h1>
      <div className='bg-white p-3 rounded-lg'>
      <div className="text-lg lg:text-xl w-full mb-4 p-2 border border-gray-300 rounded">
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          className="w-full p-2  rounded"
        />
      </div>
      <span className='text-sm font-thin text-red-400'>Select word in question ans click ctrl+U to make an option</span>
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(event) => handleOptionChange(index, event)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      ))}
  
      </div>
    </div>
    </div>
  );
};

export default FillBlanks;
