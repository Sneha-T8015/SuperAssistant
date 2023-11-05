import React from 'react'
import DragDrop from '../DragDrop';
export default function DragDropQuestion() {
    const initialList = [
        { id: "item1", label: "Spend" },
        { id: "item5", label: "Meow" },
        { id: "item4", label: "Bark" }, 
      ];
      const draggedItems =[{id : "item7",label : "Entertain"}];
  return (
    <div className='p-2 bg-blue-300'>
         <DragDrop initialList={initialList} draggedItems={draggedItems} onDrop={(item) =>{
        alert(item.label)}}/>
      
    </div>
  )
}
