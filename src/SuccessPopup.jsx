import React from 'react';
import animation from "./Questions/Animation.gif"

export default function SuccessPopup() {
  return (
    <div className="success-popup  p-12 flex-col flex items-center justify-center ">
          <h1
  class="font-bold text-transparent text-xl items-center justify-center flex my-3  bg-clip-text bg-gradient-to-r from-green-600 via-orange-400 to-red-500">
 Test Submitted Successfully!!
</h1>
        <div className='w-[400px] h-[260px] p-4  bg-white flex-col rounded-lg flex items-center justify-center'>
        <img src={animation} alt="" className='' />
     <div className='my-5 text-xl font-serif font-semibold text-orange-400'>
        Submission Successful
     </div>
        </div>
    </div>
  );
}
