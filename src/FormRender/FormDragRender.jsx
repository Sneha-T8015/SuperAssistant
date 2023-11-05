import React from 'react'

import DragandDrop from './DragandDrop'
export default function FormDragRender() {

    const Category = [
        { id: "item1", label: "Cat" },
        { id: "item2", label: "Dog" },
        { id: "item3", label: "Television" },
        { id: "item4", label: "Money" },
        // Add more items as needed
      ];
      const Data =[
        { id: "item1", label: "Meow" },
        { id: "item2", label: "Bark" },
        { id: "item3", label: "Entertain" },
        { id: "item4", label: "Spend" },
      ];
      const heading="Categorize"
      const heading1="Drag and Match with Catgory"
      
return (

    <div className='flex flex-col items-center justify-center   gap-10 lg:flex-row'>
        <DragandDrop listItems={Category} heading={heading}/>
        <DragandDrop listItems={Data} heading={heading1}/>
        
    </div>
  )
}
