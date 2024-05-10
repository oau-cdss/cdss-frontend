import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-8">
        <div className='flex flex-col justify-center items-center '>
        <h2 className="text-2xl font-bold text-[#03021BCC]">How old are you?</h2>
        <p className='text-[#03021B4D] font-semi-bold'>Please provide your age in the text box below</p>
        </div>
        <input type="text"  className="w-full border rounded p-2 mb-4 h-20 outline-none" placeholder="Enter text..." />
        
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 text-xl bg-[#1E59CF] text-white rounded hover:bg-blue-600">Start session</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
