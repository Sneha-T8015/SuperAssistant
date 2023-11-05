import React, { useState } from "react";

const DraggableList = ({ listItems }) => {
  const [list, setList] = useState(listItems);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("id", event.currentTarget.id);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const id = event.dataTransfer.getData("id");
    const item = list.find((x) => x.id === id);
    if (item) {
      setIsDragging(false);
      const reorderedList = [...list];
      const currentIndex = list.findIndex((x) => x.id === id);
      reorderedList.splice(currentIndex, 1);
      const newIndex = Array.from(event.currentTarget.children).findIndex(
        (element) => element.contains(event.target)
      );
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
    <div className="flex flex-col gap-1">
      <div className="p-4 mt-5 bg-red-300 rounded-lg shadow-lg">
        <ul
          className="list-none p-0 m-0   border-gray-300 min-h-40"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {list.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              className="bg-white border rounded-md p-4 mb-2 w-[250px] cursor-move"
              draggable={true}
              onDragStart={handleDragStart}
            >
              <input
              className="w-24 h-8"
                type="text"
                value={item.label}
                onChange={(event) => handleItemChange(index, event)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DraggableList;
