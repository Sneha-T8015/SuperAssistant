import React, { useState } from 'react';
import FormBuilder from './FormBuilder';
import FormRender from './FormRender';
import SuccessPopup from './SuccessPopup'; // Import the component you want to render

export default function PageRender() {
  const [showFormBuilder, setShowFormBuilder] = useState(true);
  const [showFormRender, setShowFormRender] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleNext = () => {
    if (showFormBuilder) {
      setShowFormBuilder(false);
      setShowFormRender(true);
      setShowSuccessPopup(false);
    } else if (showFormRender) {
      setShowFormBuilder(false);
      setShowFormRender(false);
      setShowSuccessPopup(true);
    }
  };

  const handleSubmit = () => {
    setShowFormBuilder(false);
    setShowFormRender(false);
    setShowSuccessPopup(true);
  };

  const handleBackToFormBuilder = () => {
    setShowFormBuilder(true);
    setShowFormRender(false);
    setShowSuccessPopup(false);
  };

  return (
    <div className='w-full min-h-screen '>
      {showFormBuilder && <FormBuilder />}
      {showFormRender && <FormRender />}
      {showSuccessPopup && <SuccessPopup />}

      <div className="items-center justify-center flex">
        {showFormBuilder ? (
          <button
            className="flex bg-emerald-400 rounded-lg px-5 py-3 my-4"
            onClick={handleNext}
          >
            Next
          </button>
        ) : showFormRender ? (
          <>
            <button
              className="flex bg-emerald-400 rounded-lg px-5 m-3 py-3 my-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="flex bg-emerald-400 rounded-lg px-5 py-3 my-4"
              onClick={handleBackToFormBuilder}
            >
              Back to FormBuilder
            </button>
          </>
        ) : showSuccessPopup && (
          <button
            className="flex bg-emerald-400 rounded-lg px-5 py-3 my-4"
            onClick={handleBackToFormBuilder}
          >
            Back to FormBuilder
          </button>
        )}
      </div>
    </div>
  );
}
