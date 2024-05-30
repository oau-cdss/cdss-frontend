import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, initialText, initialKind, sessionId }) => {
  const [inputValue, setInputValue] = useState("");
  const [questionText, setQuestionText] = useState(initialText);
  const [questionKind, setQuestionKind] = useState(initialKind);

  useEffect(() => {
    setQuestionText(initialText);
    setQuestionKind(initialKind);
  }, [initialText, initialKind]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        `https://cdss-api.fly.dev/v1/sessions/${sessionId}/save-and-next`,
        {
          previousQuestionId: -1, // Adjust this as needed
          previousPromptAnswerText: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setQuestionText(data.payload.text);
        setQuestionKind(data.payload.kind);
        setInputValue("");
      } else {
        console.error("Failed to fetch next question");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-[#03021BCC]">{questionText}</h3>
          {questionKind === "PROMPT" && (
            <div className='flex flex-col gap-3'>
              <p className="text-[#03021B4D] font-semi-bold">Please provide your age in the text box below</p>
              <input
                type="text"
                className="w-full border rounded p-2 mb-4 h-20 outline-none"
                placeholder="Enter text..."
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>
        <div className="flex justify-end gap-8">
          {questionKind === "PROMPT" && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-xl bg-[#1E59CF] text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-xl bg-[#1E59CF] text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
