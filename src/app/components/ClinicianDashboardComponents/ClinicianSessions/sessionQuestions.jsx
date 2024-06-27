import React, { useEffect, useState } from 'react';
import { useSession } from "../../../../context/sessionContext";
import QuizSkeletonLoader from "../../LoadingPhase/quizSkeleton";

const SessionQuestion = () => {
  const { continueSession, currentSessionId } = useSession();
  const [loading, setLoading] = useState(true);
  const [questionKind, setQuestionKind] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [selectedMcqOption, setSelectedMcqOption] = useState("");
  const [previousPromptAnswerText, setPreviousPromptAnswerText] = useState("");
  const [checkSelected, setCheckSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchSessionData = async () => {
      const url = new URL(`${process.env.NEXT_PUBLIC_ROOT_URL}/sessions/${currentSessionId}/resume`);
      const token = localStorage.getItem('authToken');

      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentQuestion(data.payload.text);
          setOptions(data.payload.options);
          setQuestionKind(data.payload.kind);
          
          localStorage.setItem('currentSessionId', currentSessionId);
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
        }
      } catch (error) {
        console.error('Error', error);
      } finally {
        setLoading(false);
      }
    };

    if (currentSessionId) {
      fetchSessionData();
    }
  }, [currentSessionId]);

  const handleSelectedAnswer = (id, option) => {
    setSelectedId(id);
    setSelectedMcqOption(option);
    setCheckSelected(true);
    setErrorMessage('');
  };

  const SaveAndNext = async () => {
    if (!checkSelected) {
      setErrorMessage('Please select an answer before proceeding.');
      return;
    }

    const sessionId = localStorage.getItem('currentSessionId');
    if (!sessionId) {
      console.error('No session ID found in local storage');
      return;
    }

    const url = new URL(`${process.env.NEXT_PUBLIC_ROOT_URL}/sessions/${sessionId}/save-and-next`);
    const token = localStorage.getItem('authToken');

    const payload = {
      previousQuestionId: selectedId,
      previousPromptAnswerText,
      previousMCQAnswerOption: selectedMcqOption.text,
      previousMCQAnswerText: currentQuestion
    };

    setCheckSelected(false);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentQuestion(data.payload.text);
        setOptions(data.payload.options);
        setQuestionKind(data.payload.kind);
        setPreviousPromptAnswerText("");
        setSelectedId(null); 
        setSelectedMcqOption("");
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {continueSession && (
        <div className="px-6 py-6 w-3/4 mx-auto">
          {loading ? (
            <QuizSkeletonLoader />
          ) : (
            <>
              <p className="text-3xl font-semibold text-center">
                {currentQuestion}
              </p>
              <p className="text-lg font-semibold text-center">
                {questionKind === "MCQ" ? "Select only one option" : "Please provide your answer"}
              </p>

              {errorMessage && 
              <p className="text-red-600 text-center text-base font-semibold mt-2">{errorMessage}</p>}
              {questionKind === "MCQ" ? (
                <ul className="flex flex-col gap-3 mt-8">
                  {options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`bg-white w-auto py-3 px-3 rounded-md flex items-center cursor-pointer shadow-md ${selectedId === index ? 'border-2 border-blue-500' : ''}`}
                      onClick={() => handleSelectedAnswer(index, option)}>
                      <div 
                        className="w-5 h-5 rounded-full border-2 border-blue-500 flex justify-center items-center">
                        {selectedId === index && <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>}
                      </div>
                      <p className="ml-5">{option.text}</p>
                    </div>
                  ))}
                </ul>
              ) : (
                <textarea
                  rows={5}
                  cols={30}
                  value={previousPromptAnswerText}
                  onChange={(e) => setPreviousPromptAnswerText(e.target.value)}
                  className="mt-4 p-2 border border-gray-300 rounded-md w-full"
                />
              )}

              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col items-center gap-y-2 text-gray-400">
                  <button 
                    className="text-3xl font-bold bg-indigo-100 rounded-full w-[36px] h-[36px]"
                    type="button"
                  >
                    &larr;
                  </button>
                  <p>Previous</p>
                </div>

                <div className="flex flex-col items-center gap-y-2 text-blue-500">
                  <button 
                    className="text-3xl font-bold bg-indigo-100 rounded-full w-[36px] h-[36px]"
                    type="button"
                    onClick={SaveAndNext}>
                    &rarr;
                  </button>
                  <p className="text-base">Next</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SessionQuestion;
