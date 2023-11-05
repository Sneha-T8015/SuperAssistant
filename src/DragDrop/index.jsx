import React, { useState } from "react";
import DraggableList from "../Questions/DraggedList";

const DragDrop = ({ initialList, draggedItems, onDrop }) => {
  const [list, setList] = useState(initialList);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedList, setDraggedList] = useState(draggedItems || []);

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
      setDraggedList([...draggedList, item]);
      setIsDragging(false);
      const filteredList = list.filter((x) => x.id !== id);
      setList(filteredList);

      onDrop && onDrop(item);
    } else {
      // If item is not in the source list, allow it to be rearranged in the target list
      const item = draggedList.find((x) => x.id === id);
      if (item) {
        const updatedDraggedList = [...draggedList];
        const currentIndex = updatedDraggedList.findIndex((x) => x.id === id);
        updatedDraggedList.splice(currentIndex, 1);
        updatedDraggedList.splice(event.currentTarget.dataset.index, 0, item);
        setDraggedList(updatedDraggedList);
      }
    }
  };

  const listItems = [
    { id: "item1", label: "Cat" },
    { id: "item2", label: "Dog" },
    { id: "item3", label: "Television" },
    { id: "item4", label: "Money" },
    // Add more items as needed
  ];
  const targetClassName = `mt-4 p-4 bg-white rounded-lg border-dashed border-2 min-h-60 ${
    isDragging ? "border-black" : "border-indigo-300"
  }`;

  const handleLabelChange = (index, event) => {
    const updatedList = [...list];
    updatedList[index].label = event.target.value;
    setList(updatedList);
  };

  const handleDragHereDragStart = (event) => {
    event.dataTransfer.setData("target", "drag_here");
  };

  const handleDragHereDrop = (event) => {
    event.preventDefault();

    if (event.dataTransfer.getData("target") === "drag_here") {
      // You can handle the "Drag here" drop action here.
      console.log("Item dropped into 'Drag here' box.");
    }
  };

  return (
    <div className="flex flex-col gap-1">
    <h1
  class="font-bold text-transparent text-xl items-center justify-center flex  bg-clip-text bg-gradient-to-r from-green-300 via-orange-400 to-red-300">
  Drag And Drop MatchMaking
</h1>




      <div className="p-4 mt-5 bg-red-300 rounded-lg shadow-lg">
        <ul className="list-none p-0 m-0   min-h-40">
          {list.map((item, index) => {
            return (
              <li
                key={item.id}
                id={item.id}
                className="bg-white border rounded-md p-4 mb-2 cursor-move"
                draggable={true}
                onDragStart={handleDragStart}
              >
                <input
                  type="text"
                  value={item.label}
                  onChange={(event) => handleLabelChange(index, event)}
                />
              </li>
            );
          })}
        </ul>
      </div>
     <div className="flex flex-wrap items-center justify-center lg:p-16 p-4 gap-4">
     <DraggableList listItems={listItems} />
      <div
        className={targetClassName}
        onDragOver={handleDragOver}
        onDrop={handleDrop}

      >
        <p
          draggable={true}
          onDragStart={handleDragHereDragStart}
          onDrop={handleDragHereDrop}
        >
          Drag here
        </p>
        <ul className="list-none p-2 m-0 bg-white border border-indigo-300 rounded-md min-h-40">
          {draggedList.map((item, index) => {
            return (
              <li
                key={item.id}
                id={item.id}
                data-index={index}
                className=" bg-indigo-200 border rounded-md p-4 mb-2 w-[250px] cursor-move"
                draggable={true}
                onDragStart={handleDragStart}
              >
                <input
                className="w-24 h-8 bg-indigo-200"
                  type="text"
                  value={item.label}
                  onChange={(event) => handleLabelChange(index, event)}
                />
              </li>
            );
          })}
        </ul>
      </div>
     </div>
    </div>
  );
};

export default DragDrop;
