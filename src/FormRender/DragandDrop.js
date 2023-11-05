import React, { useState } from 'react';

export default function DragAndDrop({ listItems ,heading}) {
  const [list, setList] = useState(listItems);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData('id', event.currentTarget.id);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const id = event.dataTransfer.getData('id');
    const item = list.find((x) => x.id === id);
    if (item) {
      setIsDragging(false);
      const reorderedList = [...list];
      const currentIndex = list.findIndex((x) => x.id === id);
      reorderedList.splice(currentIndex, 1);
      const newIndex = Array.from(event.currentTarget.children).findIndex(
        (element) => element.contains(event.target)
      )
      reorderedList.splice(newIndex, 0, item);

      setList(reorderedList);
    }
  };

  const handleItemChange = (index, event) => {
    const updatedList = [...list];
    updatedList[index].label = event.target.value;
    setList(updatedList);
  };

  return (
    <div className="flex w-full p-5 flex-col gap-1">
      <div className="p-4 items-center justify-center flex flex-col lg:p-10 mt-5 bg-gray-300 rounded-lg shadow-lg">
      <h1
  class="font-bold text-transparent my-3 text-xl items-center justify-center flex  bg-clip-text bg-gradient-to-r from-green-500 via-orange-400 to-red-300">
  {heading}
</h1>
        <ul
          className="list-none p-0 m-0 w-full border-gray-300 min-h-40"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {list.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              className="bg-white border rounded-md p-4 mb-2  cursor-move"
              draggable={true}
              onDragStart={handleDragStart}
            >
              <input
                className="w-24 h-8"
                type="text"
                value={item.label}
                readOnly
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
