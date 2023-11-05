import React, { useState } from 'react';

export default function FillRender() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [droppedOptions, setDroppedOptions] = useState([]);
  const [blanks, setBlanks] = useState(['___________', '___________']);

  const handleDragStart = (event, option) => {
    event.dataTransfer.setData('text/plain', option);
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const option = event.dataTransfer.getData('text/plain');
    if (!droppedOptions.includes(option)) {
      const newDroppedOptions = [...droppedOptions, option];
      const newBlanks = [...blanks];
      newBlanks[index] = option;
      setDroppedOptions(newDroppedOptions);
      setBlanks(newBlanks);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-4 flex flex-grow">
      <div className="p-4 bg-white rounded-lg">
        <div className="flex flex-wrap justify-start gap-4 mb-4">
          {options.map((option, index) => (
            <button
              key={option}
              className="bg-blue-500 text-white py-1 lg:py-2 px-2 lg:px-4 rounded mr-4"
              draggable
              onDragStart={(e) => handleDragStart(e, option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="text-md lg:text-lg font-medium lg:font-semibold flex flex-wrap">
          Fill in the blanks: This is a {blanks[0]} example with {blanks[1]} blanks.
        </div>

        <div className="mt-4">
          <div
            className="border border-dashed p-2  flex flex-grow bg-gray-100"
            onDrop={(e) => handleDrop(e, 0)}
            onDragOver={allowDrop}
          >
            {blanks[0]}
          </div>
          <div
            className="border border-dashed p-2  flex flex-grow bg-gray-100 mt-2"
            onDrop={(e) => handleDrop(e, 1)}
            onDragOver={allowDrop}
          >
            {blanks[1]}
          </div>
    <span className='font-thin text-sm text-red-400'>Drag the options to the blanks below to add the selected options to answer</span> </div>
      </div>
    </div>
  );
}
