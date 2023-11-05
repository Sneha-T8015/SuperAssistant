import React from 'react'
import ComphreRender from './Questions/ComphreRender';

import DragDropQuestion from './Questions/DragDropQuestion';
import FillBlanks from './Questions/FillBlanks';


const question = "When you want to use TailwindCSS inside a React app, you must first set it up and configure it";
const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];


export default function FormBuilder() {
  return (
    <div className=' flex  justify-between gap-5 flex-col bg-blue-300 '>
        <div><DragDropQuestion/></div>
     <div className='p-3  '>
     <FillBlanks
        initialQuestion={question}
        initialOptions={initialOptions}
      />
     </div>
   <div className='p-3 '>
   <ComphreRender/>
   </div>
   
    </div>
  )
}
